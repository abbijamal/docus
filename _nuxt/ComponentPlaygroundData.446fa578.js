import b from"./TabsHeader.58d4758c.js";import g from"./ComponentPlaygroundProps.2a113cd8.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.74330a75.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.9a0136ed.js";import{d as D,as as V,r as k,b as a,c as C,g as P,K as o,Y as m,at as T,f as s,l as B}from"./entry.2ea478f9.js";import"./ProseH4.26beb41e.js";import"./ProseCodeInline.160e491d.js";import"./Badge.abd52a67.js";import"./ContentSlot.ba287cd3.js";import"./ProseP.b24fa961.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=V(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=l=>e.value=l;return(l,c)=>{const u=b,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":c[0]||(c[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const Y=B(j,[["__scopeId","data-v-945c9d3a"]]);export{Y as default};