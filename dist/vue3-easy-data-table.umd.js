(function(_,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(_=typeof globalThis!="undefined"?globalThis:_||self,e(_["vue3-easy-data-table"]={},_.Vue))})(this,function(_,e){"use strict";var Jt=Object.defineProperty,Ut=Object.defineProperties;var Gt=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var Kt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var Re=(_,e,x)=>e in _?Jt(_,e,{enumerable:!0,configurable:!0,writable:!0,value:x}):_[e]=x,V=(_,e)=>{for(var x in e||(e={}))Kt.call(e,x)&&Re(_,x,e[x]);if(Fe)for(var x of Fe(e))Qt.call(e,x)&&Re(_,x,e[x]);return _},O=(_,e)=>Ut(_,Gt(e));const x=(a,o)=>O(V({},a),{install:t=>{var r;t.component((r=o!=null?o:a.name)!=null?r:"Unknown",a)}});var Xt="",v=(a,o)=>{const t=a.__vccOpts||a;for(const[r,c]of o)t[r]=c;return t};const Ae=a=>(e.pushScopeId("data-v-50e28b77"),a=a(),e.popScopeId(),a),ze=["onClick"],Oe=["checked"],He=Ae(()=>e.createElementVNode("label",{for:"checbox"},null,-1));var le=v(e.defineComponent({__name:"MultipleSelectCheckBox",props:{status:{type:String,required:!0}},emits:["change"],setup(a,{emit:o}){const t=a;e.useCssVars(l=>({"5a91fae2":e.unref(s)}));const r=e.computed(()=>t.status==="allSelected"),c=()=>{o("change",!r.value)},s=e.inject("themeColor");return(l,i)=>(e.openBlock(),e.createElementBlock("div",{class:"easy-checkbox",onClick:e.withModifiers(c,["stop","prevent"])},[e.createElementVNode("input",{type:"checkbox",checked:e.unref(r),class:e.normalizeClass(a.status)},null,10,Oe),He],8,ze))}}),[["__scopeId","data-v-50e28b77"]]),Zt="";const Me=a=>(e.pushScopeId("data-v-6fdf4c70"),a=a(),e.popScopeId(),a),je=["checked"],We=Me(()=>e.createElementVNode("label",{for:"checbox"},null,-1));var re=v(e.defineComponent({__name:"SingleSelectCheckBox",props:{checked:{type:Boolean,required:!0}},emits:["change"],setup(a,{emit:o}){e.useCssVars(r=>({"5279356c":e.unref(t)}));const t=e.inject("themeColor");return(r,c)=>(e.openBlock(),e.createElementBlock("div",{class:"easy-checkbox",onClick:c[0]||(c[0]=e.withModifiers(s=>o("change"),["stop","prevent"]))},[e.createElementVNode("input",{type:"checkbox",checked:a.checked},null,8,je),We]))}}),[["__scopeId","data-v-6fdf4c70"]]),ta="";const qe=a=>(e.pushScopeId("data-v-2556d013"),a=a(),e.popScopeId(),a),Je={class:"easy-data-table__rows-selector"},Ue={class:"rows-input"},Ge=qe(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),Ke=["onClick"];var se=v(e.defineComponent({__name:"RowsSelector",props:{modelValue:{type:Number,required:!0},rowsItems:{type:Array,required:!0}},emits:["update:modelValue"],setup(a,{emit:o}){const t=a;e.useCssVars(g=>({"770c70a2":e.unref(k)}));const r=e.ref(!1),c=e.ref(!1),s=e.inject("dataTable");e.watch(r,g=>{if(g&&s){const b=window.innerHeight,f=s.value.getBoundingClientRect().height,P=s.value.getBoundingClientRect().top;b-(f+P)<=100?c.value=!0:c.value=!1}});const l=e.computed({get:()=>t.modelValue,set:g=>{o("update:modelValue",g)}}),i=g=>{l.value=g,r.value=!1},n=(g,b)=>{let f=g.parentNode;for(;f!=null;){if(f.classList&&f.classList.contains(b))return!0;f=f.parentNode}return!1},d=g=>{n(g.target,"easy-data-table__rows-selector")||(r.value=!1)};e.onMounted(()=>{document.addEventListener("click",d)}),e.onBeforeUnmount(()=>{document.removeEventListener("click",d)});const k=e.inject("themeColor");return(g,b)=>(e.openBlock(),e.createElementBlock("div",Je,[e.createElementVNode("div",{class:"rows-input__wrapper",onClick:b[0]||(b[0]=f=>r.value=!r.value)},[e.createElementVNode("div",Ue,e.toDisplayString(e.unref(l)),1),Ge]),e.createElementVNode("ul",{class:e.normalizeClass(["select-items",{show:r.value,inside:c.value}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.rowsItems,f=>(e.openBlock(),e.createElementBlock("li",{key:f,class:e.normalizeClass({selected:f===e.unref(l)}),onClick:P=>i(f)},e.toDisplayString(f),11,Ke))),128))],2)]))}}),[["__scopeId","data-v-2556d013"]]),na="";const J=a=>(e.pushScopeId("data-v-2b783304"),a=a(),e.popScopeId(),a),Qe={class:"lds-ring"},Xe=[J(()=>e.createElementVNode("div",null,null,-1)),J(()=>e.createElementVNode("div",null,null,-1)),J(()=>e.createElementVNode("div",null,null,-1)),J(()=>e.createElementVNode("div",null,null,-1))];var ie=v(e.defineComponent({__name:"Loading",setup(a){e.useCssVars(t=>({"390b9085":e.unref(o)}));const o=e.inject("themeColor");return(t,r)=>(e.openBlock(),e.createElementBlock("div",Qe,Xe))}}),[["__scopeId","data-v-2b783304"]]),ca="";const Ye={class:"loader-line"};var ce=v(e.defineComponent({__name:"LoadingLine",setup(a){e.useCssVars(t=>({"7279d886":e.unref(o)}));const o=e.inject("themeColor");return(t,r)=>(e.openBlock(),e.createElementBlock("div",Ye))}}),[["__scopeId","data-v-236a1418"]]),ua="";const Ze={class:"buttons-pagination"},et=["onClick"];var de=v(e.defineComponent({__name:"ButtonsPagination",props:{maxPaginationNumber:{type:Number,required:!0},currentPaginationNumber:{type:Number,required:!0}},emits:["updatePage"],setup(a,{emit:o}){const t=a;e.useCssVars(i=>({"003cb2e0":e.unref(l)}));const r=7,c=i=>{i.type==="button"&&!i.active&&o("updatePage",i.page)},s=e.computed(()=>{const i=[];if(t.maxPaginationNumber<=r)for(let n=1;n<=t.maxPaginationNumber;n+=1)i.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if([1,2,t.maxPaginationNumber,t.maxPaginationNumber-1].includes(t.currentPaginationNumber))for(let n=1;n<=r;n+=1)if(n<=3)i.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if(n===4)i.push({type:"omission"});else{const d=t.maxPaginationNumber-(r-n);i.push({type:"button",page:d,active:d===t.currentPaginationNumber,activePrev:d+1===t.currentPaginationNumber})}else if([3,4].includes(t.currentPaginationNumber))for(let n=1;n<=r;n+=1)n<=5?i.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber}):n===6?i.push({type:"omission"}):i.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if([t.maxPaginationNumber-2,t.maxPaginationNumber-3].includes(t.currentPaginationNumber))for(let n=1;n<=r;n+=1)if(n===1)i.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:n+1===t.currentPaginationNumber});else if(n===2)i.push({type:"omission"});else{const d=t.maxPaginationNumber-(r-n);i.push({type:"button",page:d,active:d===t.currentPaginationNumber,activePrev:d+1===t.currentPaginationNumber})}else for(let n=1;n<=r;n+=1)if(n===1)i.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:n+1===t.currentPaginationNumber});else if(n===2||n===6)i.push({type:"omission"});else if(n===7)i.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else{const d=4-n,k=t.currentPaginationNumber-d;i.push({type:"button",page:k,active:k===t.currentPaginationNumber,activePrev:k+1===t.currentPaginationNumber})}return i}),l=e.inject("themeColor");return(i,n)=>(e.openBlock(),e.createElementBlock("div",Ze,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),(d,k)=>(e.openBlock(),e.createElementBlock("div",{key:k,class:e.normalizeClass(["item",{button:d.type==="button",active:d.type==="button"&&d.active,"active-prev":d.type==="button"&&d.activePrev,omission:d.type==="omission"}]),onClick:g=>c(d)},e.toDisplayString(d.type==="button"?d.page:"..."),11,et))),128))]))}}),[["__scopeId","data-v-e696c2be"]]),fa="";const ue=a=>(e.pushScopeId("data-v-579fdfd7"),a=a(),e.popScopeId(),a),tt=[ue(()=>e.createElementVNode("span",{class:"arrow arrow-right"},null,-1))],at=[ue(()=>e.createElementVNode("span",{class:"arrow arrow-left"},null,-1))];var pe=v(e.defineComponent({__name:"PaginationArrows",props:{isFirstPage:{type:Boolean,required:!1},isLastPage:{type:Boolean,required:!1}},emits:["clickPrevPage","clickNextPage"],setup(a,{emit:o}){const t=e.useSlots();return(r,c)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{class:e.normalizeClass(["previous-page__click-button",{"first-page":a.isFirstPage}]),onClick:c[0]||(c[0]=s=>o("clickPrevPage"))},tt,2),e.unref(t).buttonsPagination?e.renderSlot(r.$slots,"buttonsPagination",{key:0},void 0,!0):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["next-page__click-button",{"last-page":a.isLastPage}]),onClick:c[1]||(c[1]=s=>o("clickNextPage"))},at,2)],64))}}),[["__scopeId","data-v-579fdfd7"]]);function nt(a,o,t){return{clickRow:c=>{const s=V({},c);if(a.value){const{checkbox:l}=c;delete s.checkbox,s.isSelected=l}if(o.value){const{index:l}=c;delete s.index,s.indexInCurrentPage=l}t("clickRow",s)}}}function ot(a,o){const t=e.ref([]);return{expandingItemIndexList:t,updateExpandingItemIndexList:(s,l,i)=>{i.stopPropagation();const n=t.value.indexOf(s);n!==-1?t.value.splice(n,1):(o("expandRow",a.value.findIndex(d=>d===l)),t.value.push(s))},clearExpandingItemIndexList:()=>{t.value=[]}}}function lt(a){const o=e.computed(()=>a.value.filter(c=>c.fixed)),t=e.computed(()=>o.value.length?o.value[o.value.length-1].value:""),r=e.computed(()=>{if(!o.value.length)return[];const c=o.value.map(s=>{var l;return(l=s.width)!=null?l:100});return o.value.map((s,l)=>{var i,n;return{value:s.value,fixed:(i=s.fixed)!=null?i:!0,width:(n=s.width)!=null?n:100,distance:l===0?0:c.reduce((d,k,g)=>{let b=d;return g<l&&(b+=k),b})}})});return{fixedHeaders:o,lastFixedColumn:t,fixedColumnsInfos:r}}function rt(a,o,t,r,c,s,l,i,n,d,k,g,b,f,P,S){const p=e.computed(()=>s.value.findIndex(N=>N.fixed)!==-1),C=e.computed(()=>p.value?s.value.filter(N=>N.fixed):[]),h=e.computed(()=>s.value.filter(N=>!N.fixed)),y=e.ref((()=>f.value!==""?{sortBy:f.value,sortDesc:P.value==="desc"}:null)()),T=e.computed(()=>{var U;const F=[...C.value,...h.value].map(I=>{const A=I;return I.sortable&&(A.sortType="none"),g.value&&I.value===g.value.sortBy&&g.value.sortType&&(A.sortType=g.value.sortType),!d.value&&y.value&&I.value===y.value.sortBy&&(A.sortType=y.value.sortDesc?"desc":"asc"),A});let E=[];l.value?E=[r.value||p.value?{text:"",value:"expand",fixed:!0,width:o.value}:{text:"",value:"expand"},...F]:E=F;let D=[];b.value?D=[c.value||p.value?{text:"#",value:"index",fixed:!0,width:i.value}:{text:"#",value:"index"},...E]:D=E;let j=[];return n.value?j=[t.value||p.value?{text:"checkbox",value:"checkbox",fixed:!0,width:(U=a.value)!=null?U:36}:{text:"checkbox",value:"checkbox"},...D]:j=D,j}),B=e.computed(()=>T.value.map(N=>N.value));return{clientSortOptions:y,headerColumns:B,headersForRender:T,updateSortField:(N,F)=>{let E=null;F==="none"?E="asc":F==="asc"?E="desc":E=k.value?"asc":null,d.value?S(N,E):E===null?y.value=null:y.value={sortBy:N,sortDesc:E==="desc"}}}}function st(a,o,t,r,c,s,l,i,n){const d=e.computed(()=>(a.value-1)*c.value+1),k=e.computed(()=>t.value?Math.min(n.value,a.value*c.value):Math.min(i.value.length,a.value*c.value)),g=e.computed(()=>t.value?r.value:i.value.slice(d.value-1,k.value)),b=e.computed(()=>l.value?g.value.map((S,p)=>V({index:d.value+p},S)):g.value),f=e.computed(()=>s.value.length===0||s.value.every(p=>i.value.findIndex(C=>JSON.stringify(p)===JSON.stringify(C))===-1)?"noneSelected":s.value.length===i.value.length&&s.value.every(C=>i.value.findIndex(h=>JSON.stringify(C)===JSON.stringify(h))!==-1)?"allSelected":"partSelected"),P=e.computed(()=>o.value?f.value==="allSelected"?b.value.map(S=>V({checkbox:!0},S)):f.value==="noneSelected"?b.value.map(S=>V({checkbox:!1},S)):b.value.map(S=>{const p=s.value.findIndex(C=>{const h=V({},S);return delete h.index,JSON.stringify(C)===JSON.stringify(h)})!==-1;return V({checkbox:p},S)}):b.value);return{currentPageFirstIndex:d,currentPageLastIndex:k,multipleSelectStatus:f,pageItems:P}}function it(a,o,t,r,c,s){const l=e.ref(c.value?c.value.page:1),i=e.computed(()=>Math.ceil(t.value/r.value)),n=e.computed(()=>l.value===i.value),d=e.computed(()=>l.value===1);return{currentPaginationNumber:l,maxPaginationNumber:i,isLastPage:n,isFirstPage:d,nextPage:()=>{if(!n.value&&!o.value)if(a.value){const P=l.value+1;s(P)}else l.value+=1},prevPage:()=>{if(!d.value&&!o.value)if(a.value){const P=l.value-1;s(P)}else l.value-=1},updatePage:P=>{o.value||(a.value?s(P):l.value=P)},updateCurrentPaginationNumber:P=>{l.value=P}}}function ct(a,o,t,r){const c=e.computed(()=>!a.value&&o.value.findIndex(l=>l===r.value)===-1?[r.value,...o.value]:o.value),s=e.ref(t.value?t.value.rowsPerPage:r.value);return{rowsItemsComputed:c,rowsPerPageRef:s}}function dt(a,o){const t=e.computed({get:()=>{if(a.value){const{page:l,rowsPerPage:i,sortBy:n,sortType:d}=a.value;return{page:l,rowsPerPage:i,sortBy:n!=null?n:null,sortType:d!=null?d:null}}return null},set:l=>{o("update:serverOptions",l)}});return{serverOptionsComputed:t,updateServerOptionsPage:l=>{t.value&&(t.value=O(V({},t.value),{page:l}))},updateServerOptionsSort:(l,i)=>{t.value&&(t.value=O(V({},t.value),{sortBy:i!==null?l:null,sortType:i}))},updateServerOptionsRowsPerPage:l=>{t.value&&(t.value=O(V({},t.value),{page:1,rowsPerPage:l}))}}}function H(a,o){if(a.includes(".")){let t="";return a.split(".").forEach((c,s)=>{t=s===0?o[c]:t[c]}),t}return o[a]}function ut(a,o){const t=H(a,o);return Array.isArray(t)?t.join(","):t}function pt(a,o,t,r,c,s,l,i,n){const d=e.computed(()=>{if(!t.value&&l.value!==""){const p=new RegExp(l.value,"i");return r.value.filter(C=>p.test(s.value!==""?C[s.value]:Object.values(C).join(" ")))}return r.value}),k=e.computed(()=>{let p=[...d.value];return o.value?(o.value.forEach(C=>{p=p.filter(h=>{const{field:y,comparison:T,criteria:B}=C;if(typeof T=="function")return T(h[y],B);switch(T){case"=":return h[y]===B;case"!=":return h[y]!==B;case">":return h[y]>B;case"<":return h[y]<B;case"<=":return h[y]<=B;case">=":return h[y]>=B;case"between":return h[y]>=Math.min(...B)&&h[y]<=Math.max(...B);default:return h[y]===B}})}),p):d.value}),g=e.computed(()=>{if(t.value)return r.value;if(a.value===null)return k.value;const{sortBy:p,sortDesc:C}=a.value;return[...k.value].sort((y,T)=>H(p,y)<H(p,T)?C?1:-1:H(p,y)>H(p,T)?C?-1:1:0)}),b=e.computed(()=>t.value?i.value:g.value.length),f=e.computed({get:()=>{var p;return(p=c.value)!=null?p:[]},set:p=>{n("update:itemsSelected",p)}});return{totalItems:g,selectItemsComputed:f,totalItemsLength:b,toggleSelectAll:p=>{f.value=p?g.value:[]},toggleSelectItem:p=>{const C=p.checkbox;if(delete p.checkbox,delete p.index,C)f.value=f.value.filter(h=>JSON.stringify(h)!==JSON.stringify(p));else{const h=f.value;h.unshift(p),f.value=h}}}}var ft={alternating:{type:Boolean,default:!1},buttonsPagination:{type:Boolean,default:!1},checkboxColumnWidth:{type:Number,default:null},emptyMessage:{type:String,default:"No Available Data"},expandColumnWidth:{type:Number,default:36},filterOptions:{type:Array,default:null},fixedExpand:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},fixedCheckbox:{type:Boolean,default:!1},fixedIndex:{type:Boolean,default:!1},hideFooter:{type:Boolean,default:!1},hideRowsPerPage:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},indexColumnWidth:{type:Number,default:60},itemsSelected:{type:Array,default:null},loading:{type:Boolean,deault:!1},rowsPerPage:{type:Number,default:25},rowsItems:{type:Array,default:()=>[25,50,100]},rowsPerPageMessage:{type:String,default:"rows per page:"},searchField:{type:String,default:""},searchValue:{type:String,default:""},serverOptions:{type:Object,default:null},serverItemsLength:{type:Number,default:0},showIndex:{type:Boolean,default:!1},sortBy:{type:String,default:""},sortType:{type:String,default:"asc"},tableHeight:{type:Number,default:null},themeColor:{type:String,default:"#42b883"},tableClassName:{type:String,default:""},headerClassName:{type:String,default:""},headerItemClassName:{type:[Function,String],default:""},bodyRowClassName:{type:[Function,String],default:""},bodyItemClassName:{type:[Function,String],default:""},noHover:{type:Boolean,default:!1},borderCell:{type:Boolean,default:!1},mustSort:{type:Boolean,default:!1}},ha="",ya="";const mt=a=>(e.pushScopeId("data-v-08dc8404"),a=a(),e.popScopeId(),a),gt=["onClick"],_t={key:1,class:"header"},ht={key:1,class:"header-text"},yt=["onClick"],bt=["onClick"],kt=["colspan"],xt={key:0,class:"vue3-easy-data-table__loading"},Pt=mt(()=>e.createElementVNode("div",{class:"vue3-easy-data-table__loading-mask"},null,-1)),Ct={class:"loading-entity"},St={key:1,class:"vue3-easy-data-table__message"},Nt={key:0,class:"vue3-easy-data-table__footer"},Bt={key:0,class:"pagination__rows-per-page"},wt={class:"pagination__items-index"},Et=e.defineComponent({__name:"DataTable",props:O(V({},ft),{items:{type:Array,required:!0},headers:{type:Array,required:!0}}),emits:["clickRow","expandRow","update:itemsSelected","update:serverOptions"],setup(a,{expose:o,emit:t}){const r=a;e.useCssVars(m=>({"113cccc0":e.unref(U)}));const{checkboxColumnWidth:c,expandColumnWidth:s,filterOptions:l,fixedCheckbox:i,fixedExpand:n,fixedHeader:d,fixedIndex:k,headers:g,indexColumnWidth:b,items:f,itemsSelected:P,loading:S,mustSort:p,rowsItems:C,rowsPerPage:h,searchField:y,searchValue:T,serverItemsLength:B,serverOptions:M,showIndex:N,sortBy:F,sortType:E,tableHeight:D,themeColor:j}=e.toRefs(r),U=e.computed(()=>D.value?`${D.value}px`:null);e.provide("themeColor",j.value);const I=e.useSlots(),A=e.computed(()=>!!I.pagination),Tt=e.computed(()=>!!I.loading),xe=e.computed(()=>!!I.expand),Pe=e.ref(),Q=e.ref();e.provide("dataTable",Pe);const Ce=e.ref(!1);e.onMounted(()=>{Q.value.addEventListener("scroll",()=>{Ce.value=Q.value.scrollLeft>0})});const X=e.computed(()=>P.value!==null),R=e.computed(()=>M.value!==null),{serverOptionsComputed:Y,updateServerOptionsPage:Vt,updateServerOptionsSort:Lt,updateServerOptionsRowsPerPage:vt}=dt(M,t),{clientSortOptions:Se,headerColumns:Ne,headersForRender:W,updateSortField:Dt}=rt(c,s,i,n,k,g,xe,b,X,R,p,Y,N,F,E,Lt),{rowsItemsComputed:Ft,rowsPerPageRef:z}=ct(R,C,M,h),{totalItems:Rt,selectItemsComputed:At,totalItemsLength:G,toggleSelectAll:zt,toggleSelectItem:Ot}=pt(Se,l,R,f,P,y,T,B,t),{currentPaginationNumber:q,maxPaginationNumber:Z,isLastPage:ee,isFirstPage:te,nextPage:ae,prevPage:ne,updatePage:K,updateCurrentPaginationNumber:Ht}=it(R,S,G,z,M,Vt),{currentPageFirstIndex:Be,currentPageLastIndex:we,multipleSelectStatus:Ee,pageItems:Ie}=st(q,X,R,f,z,At,N,Rt,G),{expandingItemIndexList:$e,updateExpandingItemIndexList:Mt,clearExpandingItemIndexList:Te}=ot(f,t),{fixedHeaders:oe,lastFixedColumn:Ve,fixedColumnsInfos:jt}=lt(W),{clickRow:Wt}=nt(X,N,t),qt=m=>{var u;const L=(u=m.width)!=null?u:oe.value.length?100:null;if(L)return`width: ${L}px; min-width: ${L}px;`},Le=(m,L="th")=>{if(!oe.value.length)return;const u=jt.value.find(w=>w.value===m);if(u)return`left: ${u.distance}px;z-index: ${L==="th"?3:1};position: sticky;`};return e.watch(S,(m,L)=>{Y.value&&m===!1&&L===!0&&(Ht(Y.value.page),Te())}),e.watch(f,()=>{R.value||K(1)},{deep:!0}),e.watch(z,m=>{R.value?vt(m):K(1)}),e.watch([q,Se,y,T,l],()=>{Te()},{deep:!0}),o({currentPageFirstIndex:Be,currentPageLastIndex:we,clientItemsLength:G,maxPaginationNumber:Z,currentPaginationNumber:q,isLastPage:ee,isFirstPage:te,nextPage:ae,prevPage:ne,updatePage:K}),(m,L)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"dataTable",ref:Pe,class:e.normalizeClass(["vue3-easy-data-table",[m.tableClassName]])},[e.createElementVNode("div",{ref_key:"tableBody",ref:Q,class:e.normalizeClass(["vue3-easy-data-table__main",{"fixed-header":e.unref(d),"fixed-height":e.unref(D),"show-shadow":Ce.value,"table-fixed":e.unref(oe).length,hoverable:!m.noHover,"border-cell":m.borderCell}])},[e.createElementVNode("table",null,[e.createElementVNode("colgroup",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(W),(u,w)=>(e.openBlock(),e.createElementBlock("col",{key:w,style:e.normalizeStyle(qt(u))},null,4))),128))]),e.unref(W).length&&!m.hideHeader?(e.openBlock(),e.createElementBlock("thead",{key:0,class:e.normalizeClass(["vue3-easy-data-table__header",[m.headerClassName]])},[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(W),(u,w)=>(e.openBlock(),e.createElementBlock("th",{key:w,class:e.normalizeClass([{sortable:u.sortable,none:u.sortable&&u.sortType==="none",desc:u.sortable&&u.sortType==="desc",asc:u.sortable&&u.sortType==="asc",shadow:u.value===e.unref(Ve)},typeof m.headerItemClassName=="string"?m.headerItemClassName:m.headerItemClassName(u,w)]),style:e.normalizeStyle(Le(u.value)),onClick:e.withModifiers($=>u.sortable&&u.sortType?e.unref(Dt)(u.value,u.sortType):null,["stop"])},[u.text==="checkbox"?(e.openBlock(),e.createBlock(le,{key:e.unref(Ee),status:e.unref(Ee),onChange:e.unref(zt)},null,8,["status","onChange"])):(e.openBlock(),e.createElementBlock("span",_t,[e.unref(I)[`header-${u.value}`]?e.renderSlot(m.$slots,`header-${u.value}`,e.normalizeProps(e.mergeProps({key:0},u)),void 0,!0):(e.openBlock(),e.createElementBlock("span",ht,e.toDisplayString(u.text),1)),u.sortable?(e.openBlock(),e.createElementBlock("i",{key:u.sortType?u.sortType:"none",class:e.normalizeClass(["sortType-icon",{desc:u.sortType==="desc"}])},null,2)):e.createCommentVNode("",!0)]))],14,gt))),128))])],2)):e.createCommentVNode("",!0),e.unref(f).length&&e.unref(Ne).length?(e.openBlock(),e.createElementBlock("tbody",{key:1,class:e.normalizeClass(["vue3-easy-data-table__body",{"row-alternation":m.alternating}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(Ie),(u,w)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:w},[e.createElementVNode("tr",{class:e.normalizeClass([{"even-row":(w+1)%2===0},typeof m.bodyRowClassName=="string"?m.bodyRowClassName:m.bodyRowClassName(u,w)]),onClick:$=>e.unref(Wt)(u)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(Ne),($,ve)=>(e.openBlock(),e.createElementBlock("td",{key:ve,style:e.normalizeStyle(Le($,"td")),class:e.normalizeClass([{shadow:$===e.unref(Ve),"can-expand":$==="expand"},typeof m.bodyItemClassName=="string"?m.bodyItemClassName:m.bodyItemClassName($,ve)]),onClick:De=>$==="expand"?e.unref(Mt)(w,u,De):null},[e.unref(I)[`item-${$}`]?e.renderSlot(m.$slots,`item-${$}`,e.normalizeProps(e.mergeProps({key:0},u)),void 0,!0):$==="expand"?(e.openBlock(),e.createElementBlock("i",{key:1,class:e.normalizeClass(["expand-icon",{expanding:e.unref($e).includes(w)}])},null,2)):$==="checkbox"?(e.openBlock(),e.createBlock(re,{key:2,checked:u[$],onChange:De=>e.unref(Ot)(u)},null,8,["checked","onChange"])):(e.openBlock(),e.createElementBlock(e.Fragment,{key:3},[e.createTextVNode(e.toDisplayString(e.unref(ut)($,u)),1)],64))],14,bt))),128))],10,yt),e.unref(xe)&&e.unref($e).includes(w)?(e.openBlock(),e.createElementBlock("tr",{key:0,class:e.normalizeClass({"even-row":(w+1)%2===0})},[e.createElementVNode("td",{colspan:e.unref(W).length,class:"expand"},[u.expandLoading?(e.openBlock(),e.createBlock(ce,{key:0,class:"expand-loading"})):e.createCommentVNode("",!0),e.renderSlot(m.$slots,"expand",e.normalizeProps(e.guardReactiveProps(u)),void 0,!0)],8,kt)],2)):e.createCommentVNode("",!0)],64))),128))],2)):e.createCommentVNode("",!0)]),e.unref(S)?(e.openBlock(),e.createElementBlock("div",xt,[Pt,e.createElementVNode("div",Ct,[e.unref(Tt)?e.renderSlot(m.$slots,"loading",{key:0},void 0,!0):(e.openBlock(),e.createBlock(ie,{key:1}))])])):e.createCommentVNode("",!0),!e.unref(Ie).length&&!e.unref(S)?(e.openBlock(),e.createElementBlock("div",St,e.toDisplayString(m.emptyMessage),1)):e.createCommentVNode("",!0)],2),m.hideFooter?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",Nt,[m.hideRowsPerPage?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",Bt,[e.createTextVNode(e.toDisplayString(m.rowsPerPageMessage)+" ",1),e.createVNode(se,{modelValue:e.unref(z),"onUpdate:modelValue":L[0]||(L[0]=u=>e.isRef(z)?z.value=u:null),"rows-items":e.unref(Ft)},null,8,["modelValue","rows-items"])])),e.createElementVNode("div",wt,e.toDisplayString(`${e.unref(Be)}\u2013${e.unref(we)}`)+" of "+e.toDisplayString(e.unref(G)),1),e.unref(A)?e.renderSlot(m.$slots,"pagination",e.normalizeProps(e.mergeProps({key:1},{isFirstPage:e.unref(te),isLastPage:e.unref(ee),currentPaginationNumber:e.unref(q),maxPaginationNumber:e.unref(Z),nextPage:e.unref(ae),prevPage:e.unref(ne)})),void 0,!0):(e.openBlock(),e.createBlock(pe,{key:2,"is-first-page":e.unref(te),"is-last-page":e.unref(ee),onClickNextPage:e.unref(ae),onClickPrevPage:e.unref(ne)},e.createSlots({_:2},[m.buttonsPagination?{name:"buttonsPagination",fn:e.withCtx(()=>[e.createVNode(de,{"current-pagination-number":e.unref(q),"max-pagination-number":e.unref(Z),onUpdatePage:e.unref(K)},null,8,["current-pagination-number","max-pagination-number","onUpdatePage"])])}:void 0]),1032,["is-first-page","is-last-page","onClickNextPage","onClickPrevPage"]))]))],2))}});var It=v(Et,[["__scopeId","data-v-08dc8404"]]);const fe=x(It),me=x(pe,"EasyDataTablePaginationArrows"),ge=x(de,"EasyDataTableButtonsPagination"),_e=x(se,"EasyDataTableRowsSelector"),he=x(re,"EasyDataTableSingleSelectCheckBox"),ye=x(le,"EasyDataTableMultipleSelectCheckBox"),be=x(ie,"EasyDataTableLoading"),ke=x(ce,"EasyDataTableLoadingLine");var $t={install:a=>{a.use(fe),a.use(me),a.use(ge),a.use(_e),a.use(he),a.use(ye),a.use(be),a.use(ke)}};_.EasyDataTable=fe,_.EasyDataTableButtonsPagination=ge,_.EasyDataTableLoading=be,_.EasyDataTableLoadingLine=ke,_.EasyDataTableMultipleSelectCheckBox=ye,_.EasyDataTablePaginationArrows=me,_.EasyDataTableRowsSelector=_e,_.EasyDataTableSingleSelectCheckBox=he,_.default=$t,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
