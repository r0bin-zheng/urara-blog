import{S as Y,i as Z,s as ee,v as T,a as B,k as c,q as P,w as G,c as N,l as u,m as p,r as j,h as n,n as a,x as J,b as K,C as t,u as O,f as U,t as W,y as X,Q as te}from"../../chunks/index-1d9b3b72.js";import{p as ae}from"../../chunks/stores-60e52006.js";import{H as se,F as re}from"../../chunks/footer-0c0f73e6.js";import"../../chunks/singletons-7261d367.js";import"../../chunks/icon-e3605eab.js";function oe(h){var z,L,M;let r,x,s,l,f,o,$,E=((z=h[0].status)!=null?z:"404")+"",k,C,g,y=((L=h[0].error.message)!=null?L:"Not found")+"",A,D,b,d,H,V,q,_,w;return r=new se({props:{page:{title:(M=h[0].status.toString())!=null?M:"404",path:h[0].url.pathname}}}),_=new re({props:{sticky:!0,class:"flex-1 md:flex-initial"}}),{c(){T(r.$$.fragment),x=B(),s=c("div"),l=c("div"),f=c("article"),o=c("main"),$=c("h1"),k=P(E),C=B(),g=c("h2"),A=P(y),D=B(),b=c("div"),d=c("a"),H=c("span"),V=P(`
            Back to Home`),q=B(),T(_.$$.fragment),this.h()},l(e){G(r.$$.fragment,e),x=N(e),s=u(e,"DIV",{class:!0});var i=p(s);l=u(i,"DIV",{class:!0});var v=p(l);f=u(v,"ARTICLE",{itemscope:!0,itemtype:!0,class:!0});var I=p(f);o=u(I,"MAIN",{itemprop:!0,class:!0});var m=p(o);$=u(m,"H1",{class:!0});var S=p($);k=j(S,E),S.forEach(n),C=N(m),g=u(m,"H2",{class:!0});var Q=p(g);A=j(Q,y),Q.forEach(n),D=N(m),b=u(m,"DIV",{class:!0});var R=p(b);d=u(R,"A",{href:!0,class:!0});var F=p(d);H=u(F,"SPAN",{class:!0}),p(H).forEach(n),V=j(F,`
            Back to Home`),F.forEach(n),R.forEach(n),m.forEach(n),I.forEach(n),q=N(v),G(_.$$.fragment,v),v.forEach(n),i.forEach(n),this.h()},h(){a($,"class","opacity-20 text-6xl md:text-[12rem] -mt-2 mb-0"),a(g,"class","-mt-12 md:-mt-24"),a(H,"class","i-heroicons-outline-home -ml-1 mr-2"),a(d,"href","/"),a(d,"class","btn btn-neutral no-underline shadow-xl hover:shadow-2xl mt-8"),a(b,"class","card-actions"),a(o,"itemprop","articleBody"),a(o,"class","card-body prose urara-prose"),a(f,"itemscope",""),a(f,"itemtype","https://schema.org/BlogPosting"),a(f,"class","card bg-base-100 rounded-none md:rounded-box shadow-xl md:mb-8 z-10"),a(l,"class","flex-none w-full max-w-screen-md mx-auto xl:mx-0"),a(s,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap")},m(e,i){J(r,e,i),K(e,x,i),K(e,s,i),t(s,l),t(l,f),t(f,o),t(o,$),t($,k),t(o,C),t(o,g),t(g,A),t(o,D),t(o,b),t(b,d),t(d,H),t(d,V),t(l,q),J(_,l,null),w=!0},p(e,[i]){var I,m,S;const v={};i&1&&(v.page={title:(I=e[0].status.toString())!=null?I:"404",path:e[0].url.pathname}),r.$set(v),(!w||i&1)&&E!==(E=((m=e[0].status)!=null?m:"404")+"")&&O(k,E),(!w||i&1)&&y!==(y=((S=e[0].error.message)!=null?S:"Not found")+"")&&O(A,y)},i(e){w||(U(r.$$.fragment,e),U(_.$$.fragment,e),w=!0)},o(e){W(r.$$.fragment,e),W(_.$$.fragment,e),w=!1},d(e){X(r,e),e&&n(x),e&&n(s),X(_)}}}function ne(h,r,x){let s;return te(h,ae,l=>x(0,s=l)),console.error(s.status,s.error.message),[s]}class pe extends Y{constructor(r){super(),Z(this,r,ne,oe,ee,{})}}export{pe as default};
