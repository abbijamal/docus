import{d as m,az as d,x,J as o,b as S,c as f,aA as z,K as c,l as I}from"./entry.2ea478f9.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;const s=l;d(n=>({"4f593b64":c(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const _=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${_.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),f("span",{style:z({width:c(a),height:c(a)})},null,4))}});const v=I(y,[["__scopeId","data-v-269167b7"]]);export{v as default};
