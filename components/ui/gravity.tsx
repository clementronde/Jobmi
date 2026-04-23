"use client";

import {
  createContext,
  forwardRef,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Matter, {
  Bodies,
  Body,
  Common,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Query,
  Render,
  Runner,
  World,
} from "matter-js";
import decomp from "poly-decomp";
import SVGPathCommander from "svg-path-commander";

import { cn } from "@/lib/utils";

function debounce<T extends (...args: never[]) => void>(fn: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };

  debounced.cancel = () => {
    if (timeout) clearTimeout(timeout);
  };

  return debounced;
}

function parsePathToVertices(path: string, sampleLength = 15) {
  const commander = new SVGPathCommander(path);
  const points: { x: number; y: number }[] = [];
  let lastPoint: { x: number; y: number } | null = null;
  const totalLength = commander.getTotalLength();
  let length = 0;

  while (length < totalLength) {
    const point = commander.getPointAtLength(length);

    if (!lastPoint || point.x !== lastPoint.x || point.y !== lastPoint.y) {
      points.push({ x: point.x, y: point.y });
      lastPoint = point;
    }

    length += sampleLength;
  }

  const finalPoint = commander.getPointAtLength(totalLength);
  if (
    lastPoint &&
    (finalPoint.x !== lastPoint.x || finalPoint.y !== lastPoint.y)
  ) {
    points.push({ x: finalPoint.x, y: finalPoint.y });
  }

  return points;
}

function calculatePosition(
  value: number | string | undefined,
  containerSize: number,
  elementSize: number
) {
  if (typeof value === "string" && value.endsWith("%")) {
    return (containerSize * parseFloat(value)) / 100;
  }

  return typeof value === "number"
    ? value
    : elementSize - containerSize + elementSize / 2;
}

type GravityProps = {
  children: ReactNode;
  debug?: boolean;
  gravity?: { x: number; y: number };
  resetOnResize?: boolean;
  grabCursor?: boolean;
  addTopWall?: boolean;
  autoStart?: boolean;
  className?: string;
};

type PhysicsBody = {
  element: HTMLElement;
  body: Matter.Body;
  props: MatterBodyProps;
};

type MatterBodyProps = {
  children: ReactNode;
  matterBodyOptions?: Matter.IBodyDefinition;
  isDraggable?: boolean;
  bodyType?: "rectangle" | "circle" | "svg";
  sampleLength?: number;
  x?: number | string;
  y?: number | string;
  angle?: number;
  className?: string;
};

export type GravityRef = {
  start: () => void;
  stop: () => void;
  reset: () => void;
};

const GravityContext = createContext<{
  registerElement: (
    id: string,
    element: HTMLElement,
    props: MatterBodyProps
  ) => void;
  unregisterElement: (id: string) => void;
} | null>(null);

const MatterBody = ({
  children,
  className,
  matterBodyOptions = {
    friction: 0.1,
    restitution: 0.1,
    density: 0.001,
    isStatic: false,
  },
  bodyType = "rectangle",
  isDraggable = true,
  sampleLength = 15,
  x = 0,
  y = 0,
  angle = 0,
}: MatterBodyProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(Math.random().toString(36).substring(7));
  const context = useContext(GravityContext);

  useEffect(() => {
    if (!elementRef.current || !context) return;

    context.registerElement(idRef.current, elementRef.current, {
      children,
      matterBodyOptions,
      bodyType,
      sampleLength,
      isDraggable,
      x,
      y,
      angle,
    });

    return () => context.unregisterElement(idRef.current);
  }, [
    angle,
    bodyType,
    children,
    context,
    isDraggable,
    matterBodyOptions,
    sampleLength,
    x,
    y,
  ]);

  return (
    <div
      ref={elementRef}
      className={cn("absolute", className, isDraggable && "pointer-events-none")}
    >
      {children}
    </div>
  );
};

const Gravity = forwardRef<GravityRef, GravityProps>(
  (
    {
      children,
      debug = false,
      gravity = { x: 0, y: 1 },
      grabCursor = true,
      resetOnResize = true,
      addTopWall = true,
      autoStart = true,
      className,
      ...props
    },
    ref
  ) => {
    const canvas = useRef<HTMLDivElement>(null);
    const engine = useRef(Engine.create());
    const render = useRef<Render>();
    const runner = useRef<Runner>();
    const bodiesMap = useRef(new Map<string, PhysicsBody>());
    const frameId = useRef<number>();
    const mouseConstraint = useRef<Matter.MouseConstraint>();
    const mouseDown = useRef(false);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const isRunning = useRef(false);

    const updateElements = useCallback(() => {
      bodiesMap.current.forEach(({ element, body }) => {
        const boundsWidth = canvas.current?.offsetWidth || 0;
        const boundsHeight = canvas.current?.offsetHeight || 0;
        const halfWidth = element.offsetWidth / 2;
        const halfHeight = element.offsetHeight / 2;
        const minX = halfWidth;
        const minY = halfHeight;
        const maxX = Math.max(minX, boundsWidth - halfWidth);
        const maxY = Math.max(minY, boundsHeight - halfHeight);
        const x = Math.min(Math.max(body.position.x, minX), maxX);
        const y = Math.min(Math.max(body.position.y, minY), maxY);

        if (x !== body.position.x || y !== body.position.y) {
          Body.setPosition(body, { x, y });
          Body.setVelocity(body, { x: 0, y: 0 });
        }

        const rotation = body.angle * (180 / Math.PI);

        element.style.transform = `translate(${
          x - halfWidth
        }px, ${y - halfHeight}px) rotate(${rotation}deg)`;
      });

      frameId.current = requestAnimationFrame(updateElements);
    }, []);

    const registerElement = useCallback(
      (id: string, element: HTMLElement, props: MatterBodyProps) => {
        if (!canvas.current) return;

        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const canvasRect = canvas.current.getBoundingClientRect();
        const angle = (props.angle || 0) * (Math.PI / 180);
        const x = calculatePosition(props.x, canvasRect.width, width);
        const y = calculatePosition(props.y, canvasRect.height, height);
        let body: Matter.Body | undefined;

        const renderOptions = {
          fillStyle: debug ? "#888888" : "#00000000",
          strokeStyle: debug ? "#333333" : "#00000000",
          lineWidth: debug ? 3 : 0,
        };
        const bodyOptions = {
          ...props.matterBodyOptions,
          angle,
          render: renderOptions,
        } as Matter.IChamferableBodyDefinition;

        if (props.bodyType === "circle") {
          body = Bodies.circle(x, y, Math.max(width, height) / 2, bodyOptions);
        } else if (props.bodyType === "svg") {
          const paths = element.querySelectorAll("path");
          const vertexSets: Matter.Vector[][] = [];

          paths.forEach((path) => {
            const d = path.getAttribute("d");
            if (d) vertexSets.push(parsePathToVertices(d, props.sampleLength));
          });

          body = Bodies.fromVertices(x, y, vertexSets, bodyOptions);
        } else {
          body = Bodies.rectangle(x, y, width, height, bodyOptions);
        }

        World.add(engine.current.world, [body]);
        bodiesMap.current.set(id, { element, body, props });
      },
      [debug]
    );

    const unregisterElement = useCallback((id: string) => {
      const body = bodiesMap.current.get(id);

      if (body) {
        World.remove(engine.current.world, body.body);
        bodiesMap.current.delete(id);
      }
    }, []);

    const startEngine = useCallback(() => {
      if (runner.current) {
        runner.current.enabled = true;
        Runner.run(runner.current, engine.current);
      }

      if (render.current) {
        Render.run(render.current);
      }

      frameId.current = requestAnimationFrame(updateElements);
      isRunning.current = true;
    }, [updateElements]);

    const initializeRenderer = useCallback(() => {
      if (!canvas.current) return;

      const height = canvas.current.offsetHeight;
      const width = canvas.current.offsetWidth;

      Common.setDecomp(decomp);
      engine.current.gravity.x = gravity.x;
      engine.current.gravity.y = gravity.y;

      render.current = Render.create({
        element: canvas.current,
        engine: engine.current,
        options: {
          width,
          height,
          wireframes: false,
          background: "#00000000",
        },
      });

      const mouse = Mouse.create(render.current.canvas) as Matter.Mouse & {
        mousewheel?: EventListener;
      };
      if (mouse.mousewheel) {
        mouse.element.removeEventListener("wheel", mouse.mousewheel);
      }

      mouseConstraint.current = MouseConstraint.create(engine.current, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: debug,
          },
        },
      });

      const walls = [
        Bodies.rectangle(width / 2, height + 10, width, 20, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
        Bodies.rectangle(width + 10, height / 2, 20, height, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
        Bodies.rectangle(-10, height / 2, 20, height, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
      ];

      if (addTopWall) {
        walls.push(
          Bodies.rectangle(width / 2, -10, width, 20, {
            isStatic: true,
            friction: 1,
            render: { visible: debug },
          })
        );
      }

      const touchingMouse = () =>
        Query.point(
          engine.current.world.bodies,
          mouseConstraint.current?.mouse.position || { x: 0, y: 0 }
        ).length > 0;

      if (grabCursor) {
        Events.on(engine.current, "beforeUpdate", () => {
          if (!canvas.current) return;

          if (!mouseDown.current && !touchingMouse()) {
            canvas.current.style.cursor = "default";
          } else if (touchingMouse()) {
            canvas.current.style.cursor = mouseDown.current ? "grabbing" : "grab";
          }
        });

        canvas.current.addEventListener("mousedown", () => {
          mouseDown.current = true;

          if (canvas.current) {
            canvas.current.style.cursor = touchingMouse() ? "grabbing" : "default";
          }
        });

        canvas.current.addEventListener("mouseup", () => {
          mouseDown.current = false;

          if (canvas.current) {
            canvas.current.style.cursor = touchingMouse() ? "grab" : "default";
          }
        });
      }

      World.add(engine.current.world, [mouseConstraint.current, ...walls]);
      render.current.mouse = mouse;
      runner.current = Runner.create();
      Render.run(render.current);
      updateElements();
      runner.current.enabled = false;

      if (autoStart) {
        startEngine();
      }
    }, [
      addTopWall,
      autoStart,
      debug,
      grabCursor,
      gravity.x,
      gravity.y,
      startEngine,
      updateElements,
    ]);

    const clearRenderer = useCallback(() => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }

      if (mouseConstraint.current) {
        World.remove(engine.current.world, mouseConstraint.current);
      }

      if (render.current) {
        Mouse.clearSourceEvents(render.current.mouse);
        Render.stop(render.current);
        render.current.canvas.remove();
      }

      if (runner.current) {
        Runner.stop(runner.current);
      }

      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      bodiesMap.current.clear();
      isRunning.current = false;
    }, []);

    const handleResize = useCallback(() => {
      if (!canvas.current || !resetOnResize) return;

      setCanvasSize({
        width: canvas.current.offsetWidth,
        height: canvas.current.offsetHeight,
      });

      clearRenderer();
      initializeRenderer();
    }, [clearRenderer, initializeRenderer, resetOnResize]);

    const stopEngine = useCallback(() => {
      if (!isRunning.current) return;

      if (runner.current) {
        Runner.stop(runner.current);
      }

      if (render.current) {
        Render.stop(render.current);
      }

      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }

      isRunning.current = false;
    }, []);

    const reset = useCallback(() => {
      stopEngine();
      bodiesMap.current.forEach(({ element, body, props }) => {
        const x = calculatePosition(props.x, canvasSize.width, element.offsetWidth);
        const y = calculatePosition(props.y, canvasSize.height, element.offsetHeight);

        Body.setAngle(body, ((props.angle || 0) * Math.PI) / 180);
        Body.setPosition(body, { x, y });
      });
      updateElements();
      handleResize();
    }, [canvasSize.height, canvasSize.width, handleResize, stopEngine, updateElements]);

    useImperativeHandle(
      ref,
      () => ({
        start: startEngine,
        stop: stopEngine,
        reset,
      }),
      [reset, startEngine, stopEngine]
    );

    useEffect(() => {
      if (!resetOnResize) return;

      const debouncedResize = debounce(handleResize, 500);
      window.addEventListener("resize", debouncedResize);

      return () => {
        window.removeEventListener("resize", debouncedResize);
        debouncedResize.cancel();
      };
    }, [handleResize, resetOnResize]);

    useEffect(() => {
      initializeRenderer();
      return clearRenderer;
    }, [clearRenderer, initializeRenderer]);

    return (
      <GravityContext.Provider value={{ registerElement, unregisterElement }}>
        <div
          ref={canvas}
          className={cn("absolute left-0 top-0 h-full w-full", className)}
          {...props}
        >
          {children}
        </div>
      </GravityContext.Provider>
    );
  }
);

Gravity.displayName = "Gravity";

export { Gravity, MatterBody };
