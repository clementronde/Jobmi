(()=>{var e={};e.id=327,e.ids=[327],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},11825:()=>{},92731:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>d,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>l}),s(33871),s(19374),s(35866);var r=s(23191),i=s(88716),n=s(37922),o=s.n(n),a=s(95231),m={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(m[e]=()=>a[e]);s.d(t,m);let l=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,33871)),"C:\\Users\\Charment\\OneDrive\\Documents\\Jobmi\\Jobmi-MVP-main\\Jobmi-MVP-main\\jobmi\\app\\contact\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,19374)),"C:\\Users\\Charment\\OneDrive\\Documents\\Jobmi\\Jobmi-MVP-main\\Jobmi-MVP-main\\jobmi\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\Charment\\OneDrive\\Documents\\Jobmi\\Jobmi-MVP-main\\Jobmi-MVP-main\\jobmi\\app\\contact\\page.tsx"],u="/contact/page",d={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},71470:(e,t,s)=>{Promise.resolve().then(s.bind(s,4062))},4062:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(10326),i=s(17577),n=s(44099);function o(){let[e,t]=(0,i.useState)({name:"",email:"",message:""}),[s,o]=(0,i.useState)(""),a=s=>{let{name:r,value:i}=s.target;t({...e,[r]:i})},m=async t=>{t.preventDefault();try{let t=await n.Z.post("/api/sendEmail",e);o(t.data.message)}catch(e){o("Error sending message")}};return(0,r.jsxs)("div",{className:"mt-[120px] mb-[50px] font-sans",children:[(0,r.jsxs)("div",{className:"my-10 mx-auto max-w-[700px] text-center",children:[r.jsx("h1",{className:"font-sans text-5xl font-bold",children:"Contactez-nous !"}),r.jsx("img",{src:"/media/home-temoignage-soulignage-titre.svg",alt:"Trait soulignant le titre de l'article",className:"mx-auto mt-2"})]}),(0,r.jsxs)("div",{className:"max-w-lg mx-auto bg-[#F3F3F3] p-8 rounded-lg",children:[(0,r.jsxs)("form",{onSubmit:m,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nom"}),r.jsx("input",{type:"text",name:"name",id:"name",required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:a})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),r.jsx("input",{type:"email",name:"email",id:"email",required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:a})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Message"}),r.jsx("textarea",{name:"message",id:"message",required:!0,rows:4,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:a})]}),r.jsx("div",{children:r.jsx("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Envoyer"})})]}),s&&r.jsx("div",{className:"mt-6 text-center text-sm text-gray-500",children:s})]})]})}},33871:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>a});var r=s(68570);let i=(0,r.createProxy)(String.raw`C:\Users\Charment\OneDrive\Documents\Jobmi\Jobmi-MVP-main\Jobmi-MVP-main\jobmi\app\contact\page.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let a=(0,r.createProxy)(String.raw`C:\Users\Charment\OneDrive\Documents\Jobmi\Jobmi-MVP-main\Jobmi-MVP-main\jobmi\app\contact\page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[276,643,99,991],()=>s(92731));module.exports=r})();