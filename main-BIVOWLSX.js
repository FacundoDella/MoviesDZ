import"./chunk-WBGOCVB3.js";import{a as V,b as F,c as H,d as D}from"./chunk-OE7VE73Q.js";import"./chunk-AUVHG466.js";import{a as A,b as j,c as B,f as I,h as R,i as b}from"./chunk-EBSDOCPU.js";import{$ as y,Aa as k,Ba as o,Ca as a,Da as p,Ea as C,Fa as v,Ga as M,Ia as l,Ja as m,La as S,Oa as E,Ra as w,U as f,Y as d,Z as u,_,eb as P,fb as T,jb as c,ra as g,sa as x,xa as h}from"./chunk-AORHHHYO.js";var z=[{path:"",redirectTo:"welcome",pathMatch:"full"},{path:"search",loadChildren:()=>import("./chunk-5GP7IWJY.js").then(e=>e.routes)},{path:"welcome",loadChildren:()=>import("./chunk-R4DHFL6W.js").then(e=>e.routes)},{path:"peliculas",loadChildren:()=>import("./chunk-CJUZOUGX.js").then(e=>e.routes)},{path:"series",loadChildren:()=>import("./chunk-XUWNQBB4.js").then(e=>e.routes)},{path:"**",redirectTo:"welcome",pathMatch:"full"}];var G={providers:[D(z),A()]};function Z(e,n){if(e&1){let s=M();C(0),o(1,"a"),_(),o(2,"svg",8),l("click",function(){d(s);let t=m();return u(t.buscadorOn())}),p(3,"path",9)(4,"path",10)(5,"path",11),a()(),v()}}function q(e,n){if(e&1){let s=M();C(0),o(1,"a"),_(),o(2,"svg",12),l("click",function(){d(s);let t=m();return u(t.buscadorOf())}),p(3,"path",9)(4,"path",13)(5,"path",14),a()(),v()}}function J(e,n){if(e&1){let s=M();C(0),o(1,"div",15)(2,"span"),_(),o(3,"svg",16),p(4,"path",9)(5,"path",10)(6,"path",11),a()(),y(),o(7,"input",17),l("ngModelChange",function(t){d(s);let i=m();return u(i.store.inputSearch=t)})("keyup.enter",function(){d(s);let t=m();return u(t.getApi())}),a()(),v()}if(e&2){let s=m();g(7),h("ngModel",s.store.inputSearch)}}var N=(()=>{let n=class n{constructor(r,t){this.apiService=r,this.router=t,this.store=c,this.buscador=!1,this.letraAleatoria=String.fromCharCode(65+Math.floor(Math.random()*26))}buscadorOn(){this.buscador=!0}buscadorOf(){this.buscador=!1}getApi(){this.apiService.get(),this.goToSearch()}getMovies(){c.inputSearch=this.letraAleatoria,this.apiService.getMovies(),c.inputSearch="",this.buscador=!1}getSeries(){c.inputSearch=this.letraAleatoria,this.apiService.getSeries(),c.inputSearch="",this.buscador=!1}goToSearch(){this.router.navigate(["/search"])}goToMovies(){this.router.navigate(["/peliculas"]),this.getMovies(),c.inputSearch=""}goToSeries(){this.router.navigate(["/series"]),this.getSeries(),c.inputSearch=""}goToWelcome(){this.router.navigate(["/"]),this.buscadorOf(),c.inputSearch=""}};n.\u0275fac=function(t){return new(t||n)(x(b),x(H))},n.\u0275cmp=f({type:n,selectors:[["app-header"]],standalone:!0,features:[E([b]),w],decls:16,vars:3,consts:[[1,"contenedor-principal"],[1,"contenedor-navegacion"],[1,"pointer",3,"click"],[1,"navegacion"],[3,"click"],[1,"contenedor-buscador"],[1,"search"],[4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","3","stroke","#ffffff","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-search",3,"click"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"],["d","M21 21l-6 -6"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","#000000","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-x",3,"click"],["d","M18 6l-12 12"],["d","M6 6l12 12"],[1,"buscador"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 24 24","stroke-width","2.2","stroke","#000000","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-search"],["placeholder","Buscar una pelicula, programa de televis\xEDon",3,"ngModel","ngModelChange","keyup.enter"]],template:function(t,i){t&1&&(o(0,"header",0)(1,"div",1)(2,"a",2),l("click",function(){return i.goToWelcome()}),S(3,"Logo Imagen"),a(),o(4,"ul",3)(5,"li")(6,"a",4),l("click",function(){return i.goToMovies()}),S(7,"Pel\xEDculas"),a()(),o(8,"li")(9,"a",4),l("click",function(){return i.goToSeries()}),S(10,"Series"),a()()()(),o(11,"div",5)(12,"span",6),k(13,Z,6,0,"ng-container",7)(14,q,6,0,"ng-container",7),a()()(),k(15,J,8,1,"ng-container",7)),t&2&&(g(13),h("ngIf",i.buscador==!1),g(1),h("ngIf",i.buscador==!0),g(1),h("ngIf",i.buscador))},dependencies:[P,R,j,B,I],styles:['[_nghost-%COMP%]{--blanco: #fff;--negro: #000;--headerColor: #0e004b;--botonesColor: #023E8A;--color1: #0077B6;--color2: #0096C7;--color3: #00B4D8;--color4: #48CAE4;--color5: #90E0EF;--color6: #ADE8F4;--color7: #CAF0F8;--fuente: "Roboto", sans-serif}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-family:var(--fuente);margin:0}a[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}.contenedor-principal[_ngcontent-%COMP%]{display:flex;background:rgba(0,0,0,.7);width:100%;color:var(--blanco);padding:1.5rem;justify-content:space-around;align-items:center;position:relative;left:0;top:0;z-index:1}.contenedor-navegacion[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8rem;-webkit-user-select:none;user-select:none}.navegacion[_ngcontent-%COMP%]{display:flex;gap:2.5rem;list-style-type:none;cursor:pointer}.search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{stroke:var(--color4);cursor:pointer}.buscador[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;position:relative;left:0;top:0;z-index:1;background-color:var(--blanco)}.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:1.5rem;text-decoration:none;border:none;outline:none}.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:after{border:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}']});let e=n;return e})();var W=(()=>{let n=class n{constructor(){this.title="MoviesDZ"}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["app-root"]],standalone:!0,features:[w],decls:2,vars:0,template:function(t,i){t&1&&p(0,"app-header")(1,"router-outlet")},dependencies:[T,F,N],styles:['[_nghost-%COMP%]{--blanco: #fff;--negro: #000;--headerColor: #0e004b;--botonesColor: #023E8A;--color1: #0077B6;--color2: #0096C7;--color3: #00B4D8;--color4: #48CAE4;--color5: #90E0EF;--color6: #ADE8F4;--color7: #CAF0F8;--fuente: "Roboto", sans-serif}']});let e=n;return e})();V(W,G).catch(e=>console.error(e));
