import{u as m}from"./asyncData.47559676.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.52d1d0b4.js";import f from"./Ellipsis.ff432c34.js";import _ from"./ComponentPlaygroundData.62b88684.js";import"./TabsHeader.9b72d741.js";import"./ComponentPlaygroundProps.fd5b691e.js";import"./ProseH4.951b7b4f.js";import"./ProseCodeInline.817b7b79.js";import"./Badge.e6c0467f.js";import"./MDCSlot.5290dedd.js";import"./slot.999358ba.js";import"./ProseP.0057162b.js";import"./index.2cdbfdb3.js";import"./ComponentPlaygroundSlots.vue.2d0f9689.js";import"./ComponentPlaygroundTokens.vue.caf51720.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-6e1135b0"]]);export{V as default};
