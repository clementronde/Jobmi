import type { ReactNode } from 'react';

type InfoCalloutProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function InfoCallout({ title, children, className = '' }: InfoCalloutProps) {
  return (
    <div
      className={`jobmi-callout rounded-[1.4rem] border border-[#E9E1FF] bg-[linear-gradient(180deg,rgba(248,247,255,0.98),rgba(255,255,255,0.98))] p-5 shadow-[0_18px_45px_rgba(101,0,255,0.08)] ${className}`}
    >
      <p className="jobmi-callout-title mb-2 text-[1.8rem] leading-none text-[#6500FF] sm:text-[2rem]">
        {title}
      </p>
      <div className="jobmi-callout-copy text-sm leading-7 text-[#465160] sm:text-[0.98rem]">
        {children}
      </div>
    </div>
  );
}
