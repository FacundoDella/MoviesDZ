import{a as x}from"./chunk-AUVHG466.js";import{Aa as c,Ba as o,Ca as i,Da as d,Ea as v,Fa as _,Ja as g,La as p,Ra as h,U as u,db as y,eb as C,jb as f,ra as r,xa as a}from"./chunk-AORHHHYO.js";function M(e,t){if(e&1&&(o(0,"div",6),d(1,"app-cards",7),i()),e&2){let n=t.$implicit,m=g();r(1),a("name",n.title)("description",n.overview)("lenguaje",n.original_language)("imagen",m.imgUrl+n.poster_path)("fecha",n.release_date)}}function E(e,t){if(e&1&&(o(0,"div",6),d(1,"app-cards",7),i()),e&2){let n=t.$implicit,m=g();r(1),a("name",n.name)("description",n.overview)("lenguaje",n.original_language)("imagen",m.imgUrl+n.poster_path)("fecha",n.first_air_date)}}function A(e,t){e&1&&(v(0),o(1,"h1",8),p(2,"Busca una pel\xEDcula o serie..."),i(),_())}var P=(()=>{let t=class t{constructor(){this.store=f,this.imgUrl="https://image.tmdb.org/t/p/w342"}mostrarArray(){console.log(f.seriesArray)}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=u({type:t,selectors:[["app-main"]],standalone:!0,features:[h],decls:10,vars:3,consts:[[1,"contenedor"],[1,"peliculas"],[1,"mainTitle"],["class","cards",4,"ngFor","ngForOf"],[1,"series"],[4,"ngIf"],[1,"cards"],[3,"name","description","lenguaje","imagen","fecha"],[1,"buscaAlgo"]],template:function(s,l){s&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),p(3,"Peliculas"),i(),c(4,M,2,5,"div",3),i(),o(5,"div",4)(6,"h1",2),p(7,"Series"),i(),c(8,E,2,5,"div",3),i()(),c(9,A,3,0,"ng-container",5)),s&2&&(r(4),a("ngForOf",l.store.moviesArray),r(4),a("ngForOf",l.store.seriesArray),r(1),a("ngIf",l.store.seriesArray.length==0&&l.store.moviesArray.length==0))},dependencies:[y,C,x],styles:[".contenedor[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);max-width:160rem;margin:0 auto;width:90%}.peliculas[_ngcontent-%COMP%]{margin:0 auto}.cards[_ngcontent-%COMP%]{max-width:120rem;margin:0 auto}.mainTitle[_ngcontent-%COMP%]{text-align:center;font-size:3rem}.buscaAlgo[_ngcontent-%COMP%]{text-align:center;margin-top:4rem}"]});let e=t;return e})();export{P as a};
