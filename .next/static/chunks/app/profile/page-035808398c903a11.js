(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{9497:function(e,s,r){Promise.resolve().then(r.bind(r,7083))},7083:function(e,s,r){"use strict";r.r(s);var l=r(7437),a=r(998),n=r(2265),o=r(5115);s.default=()=>{let e,s,r,t,c,i,d,u,m,h;let{data:p,status:x}=(0,a.useSession)(),[f,b]=(0,n.useState)({firstName:"",lastName:"",email:"",city:"",phone:""});return((0,n.useEffect)(()=>{(async()=>{if(p&&p.user&&p.user.email)try{let e=await (0,o.is)(p.user.email);b(e)}catch(e){console.error("Erreur lors de la r\xe9cup\xe9ration des informations de l'utilisateur:",e)}})()},[p]),"loading"===x)?(0,l.jsx)("div",{children:"Loading..."}):"unauthenticated"===x?(0,l.jsx)("div",{children:"Vous devez \xeatre connect\xe9 pour acc\xe9der \xe0 cette page."}):(0,l.jsxs)("div",{className:"mt-[90px] max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Profil"}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{className:"font-semibold",children:"Pr\xe9nom"}),(0,l.jsx)("p",{className:"p-2 border rounded-lg",children:(e=f.firstName,s="Vous n'avez pas encore renseign\xe9 votre pr\xe9nom",e||s)})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{className:"font-semibold",children:"Nom"}),(0,l.jsx)("p",{className:"p-2 border rounded-lg",children:(r=f.lastName,t="Vous n'avez pas encore renseign\xe9 votre nom",r||t)})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{className:"font-semibold",children:"Email"}),(0,l.jsx)("p",{className:"p-2 border rounded-lg",children:(c=f.email,i="Vous n'avez pas encore renseign\xe9 votre email",c||i)})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{className:"font-semibold",children:"Ville"}),(0,l.jsx)("p",{className:"p-2 border rounded-lg",children:(d=f.city,u="Vous n'avez pas encore renseign\xe9 votre ville",d||u)})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{className:"font-semibold",children:"T\xe9l\xe9phone"}),(0,l.jsx)("p",{className:"p-2 border rounded-lg",children:(m=f.phone,h="Vous n'avez pas encore renseign\xe9 votre num\xe9ro de t\xe9l\xe9phone",m||h)})]})]})]})}},5115:function(e,s,r){"use strict";r.d(s,{a$:function(){return n},is:function(){return t},xw:function(){return o}});var l=r(8472);let a="https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api",n=async e=>{try{let s={...e};return""===s.googleId&&delete s.googleId,(await l.Z.post("".concat(a,"/users/register"),s)).data}catch(e){throw console.error("Erreur lors de l'inscription de l'utilisateur:",e),e}},o=async e=>{try{await l.Z.post("".concat(a,"/newsletter/subscribe"),{email:e})}catch(e){throw console.error("Erreur lors de la souscription \xe0 la newsletter:",e),e}},t=async e=>{try{return(await l.Z.get("".concat(a,"/users/").concat(e))).data}catch(e){throw console.error("Erreur lors de la r\xe9cup\xe9ration des informations de l'utilisateur:",e),e}}}},function(e){e.O(0,[998,472,971,23,744],function(){return e(e.s=9497)}),_N_E=e.O()}]);