(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{3872:function(e,i,s){Promise.resolve().then(s.t.bind(s,2666,23)),Promise.resolve().then(s.bind(s,2442)),Promise.resolve().then(s.bind(s,2932)),Promise.resolve().then(s.t.bind(s,414,23)),Promise.resolve().then(s.bind(s,6596)),Promise.resolve().then(s.bind(s,9406)),Promise.resolve().then(s.bind(s,6668)),Promise.resolve().then(s.bind(s,7473)),Promise.resolve().then(s.bind(s,2409))},2580:function(e,i,s){"use strict";s.d(i,{M:function(){return r}});var l=s(226),a=s(9128);let r=()=>{l.p8.registerPlugin(a.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{l.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-scale");i.forEach(e=>{var i=e.getAttribute("data-value-1"),s=e.getAttribute("data-value-2");l.p8.fromTo(e,{ease:"sine",scale:i},{scale:s,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-parallax");s.forEach(e=>{var i=e.getAttribute("data-value-1"),s=e.getAttribute("data-value-2");l.p8.fromTo(e,{ease:"sine",y:i},{y:s,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-skill-prog");r.forEach(e=>{var i=e.getAttribute("data-value-1"),s=e.getAttribute("data-value-2");l.p8.fromTo(e,{width:i,ease:"sine"},{width:s,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let t=document.querySelectorAll(".mil-counter");t.forEach(e=>{var i=e,s={val:0},a=e.dataset.number,r=(a+"").split("."),t=r.length>1?r[1].length:0;l.p8.to(s,{val:a,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){i.innerHTML=s.val.toFixed(t)}})}),l.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let n=document.querySelector(".mil-top-panel");void 0!=n&&window.addEventListener("scroll",e=>{window.scrollY>10?n.classList.add("mil-active"):n.classList.remove("mil-active")})}},2409:function(e,i,s){"use strict";s.r(i);var l=s(9268),a=s(5846),r=s.n(a),t=s(6008),n=s(6006),m=s(2580);let c=e=>{let i,{pageTitle:s,breadTitle:a,bgImage:c}=e,o=(0,t.usePathname)();if(i=void 0!=a?a:s.replace(/(<([^>]+)>)/gi,""),"Search: %s"==s){let e=(0,t.useSearchParams)(),i=e.get("key");s="Search: "+i}return(0,n.useEffect)(()=>{(0,m.M)()},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,l.jsx)("img",{src:c,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,l.jsx)("div",{className:"mil-overlay"}),(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,l.jsx)("div",{className:"mil-banner-content mil-center",children:(0,l.jsxs)("div",{className:"mil-mb-90",children:[(0,l.jsx)("h1",{className:"mil-light mil-upper mil-mb-30",dangerouslySetInnerHTML:{__html:s}}),(0,l.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[(0,l.jsx)("li",{children:(0,l.jsx)(r(),{href:"/",children:"Home"})}),-1!=o.indexOf("/blog/")&&-1==o.indexOf("/blog/page/")&&(0,l.jsx)("li",{children:(0,l.jsx)(r(),{href:"/blog",children:"Blog"})}),-1!=o.indexOf("/projects/")&&(0,l.jsx)("li",{children:(0,l.jsx)(r(),{href:"/projects",children:"Projects"})}),-1!=o.indexOf("/services/")&&(0,l.jsx)("li",{children:(0,l.jsx)(r(),{href:"/services",children:"Services"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{dangerouslySetInnerHTML:{__html:i}})})]})]})})]})]})})};i.default=c},6668:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return m}});var l=s(9268),a=s(2953),r=s(9321),t=JSON.parse('{"TN":"We provide services <span class=\\"mil-marker\\">and</span> solutions","Oc":"Our Company","WL":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","uF":{"name":"Jane Meldrum","subname":"CEO of Ruizarch","text":"J.meldrum"},"ev":[{"image":"/img/photo/2.jpg","alt":"image"},{"image":"/img/photo/8.jpg","alt":"image"},{"image":"/img/photo/7.jpg","alt":"image"}]}');let n=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{children:(0,l.jsxs)("div",{className:"container mil-p-0-30",children:[(0,l.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,l.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,l.jsx)("div",{className:"col-lg-5",children:(0,l.jsxs)("div",{className:"mil-mb-60",children:[(0,l.jsx)("span",{className:"mil-suptitle mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.Oc}}),(0,l.jsx)("h2",{className:"mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.TN}}),(0,l.jsx)("p",{className:"mil-up mil-mb-40",dangerouslySetInnerHTML:{__html:t.WL}}),void 0!=t.uF&&(0,l.jsxs)("div",{className:"row align-items-center mil-up",children:[(0,l.jsxs)("div",{className:"col-lg-5 mil-mb-30",children:[(0,l.jsx)("h5",{className:"mil-upper mil-mb-10",children:t.uF.name}),(0,l.jsx)("p",{children:t.uF.subname})]}),(0,l.jsx)("div",{className:"col-lg-6 mil-mb-30",children:(0,l.jsx)("h2",{className:"mil-font-2 mil-thin",children:t.uF.text})})]})]})}),(0,l.jsx)("div",{className:"col-lg-6",children:(0,l.jsxs)("div",{className:"mil-illustration-slider-frame mil-up mil-mb-90",children:[(0,l.jsx)(r.tq,{...a.M.milIllustrationSlider,className:"swiper-container mil-illustration-slider",children:t.ev.map((e,i)=>(0,l.jsx)(r.o5,{className:"swiper-slide",children:(0,l.jsx)("div",{className:"mil-illustration","data-swiper-parallax-x":"50","data-swiper-parallax-scale":"1.3",children:(0,l.jsx)("div",{className:"mil-image-frame",children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})})},"illustration-slider-item-".concat(i)))}),(0,l.jsx)("div",{className:"mil-illustration-slider-nav mil-up",children:(0,l.jsxs)("div",{className:"mil-nav-buttons",children:[(0,l.jsx)("div",{className:"mil-slider-button mil-illustration-prev",children:"Prev"}),(0,l.jsx)("div",{className:"mil-slider-button mil-illustration-next",children:"Next"})]})})]})})]})]})})});var m=n},6596:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return o}});var l=s(9268),a=s(2953),r=s(9321),t=JSON.parse('{"TN":"What We Have Done","Oc":"Work","WL":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","LI":{"P":"See Projects","p":"/portfolio"},"ev":[{"image":"/img/photo/8.jpg","alt":"image"},{"image":"/img/photo/7.jpg","alt":"image"},{"image":"/img/photo/1.jpg","alt":"image"}]}'),n=s(5846),m=s.n(n);let c=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{children:(0,l.jsxs)("div",{className:"container mil-p-0-30",children:[(0,l.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,l.jsxs)("div",{className:"row justify-content-between align-items-center flex-sm-row-reverse",children:[(0,l.jsx)("div",{className:"col-lg-5",children:(0,l.jsxs)("div",{className:"mil-mb-90",children:[(0,l.jsx)("span",{className:"mil-suptitle mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.Oc}}),(0,l.jsx)("h2",{className:"mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.TN}}),(0,l.jsx)("p",{className:"mil-up mil-mb-40",dangerouslySetInnerHTML:{__html:t.WL}}),(0,l.jsx)("div",{className:"mil-up",children:(0,l.jsxs)(m(),{href:t.LI.p,className:"mil-link mil-upper",children:[t.LI.P,(0,l.jsx)("span",{className:"mil-arrow",children:(0,l.jsx)("img",{src:"/img/icons/1.svg",alt:"arrow"})})]})})]})}),(0,l.jsx)("div",{className:"col-lg-6",children:(0,l.jsxs)("div",{className:"mil-illustration-slider-frame mil-up mil-mb-90",children:[(0,l.jsx)(r.tq,{...a.M.milIllustrationSlider,className:"swiper-container mil-illustration-slider",children:t.ev.map((e,i)=>(0,l.jsx)(r.o5,{className:"swiper-slide",children:(0,l.jsx)("div",{className:"mil-illustration","data-swiper-parallax-x":"50","data-swiper-parallax-scale":"1.3",children:(0,l.jsx)("div",{className:"mil-image-frame",children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})})},"illustration-slider-item-".concat(i)))}),(0,l.jsx)("div",{className:"mil-illustration-slider-nav mil-up",children:(0,l.jsxs)("div",{className:"mil-nav-buttons",children:[(0,l.jsx)("div",{className:"mil-slider-button mil-illustration-prev",children:"Prev"}),(0,l.jsx)("div",{className:"mil-slider-button mil-illustration-next",children:"Next"})]})})]})})]})]})})});var o=c},7473:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return d}});var l=s(9268),a=s(2953),r=s(9321),t=JSON.parse('{"TN":"What they think of us","Oc":"Testimonials","ev":[{"name":"Trevor Virtue","image":"/img/faces/2.jpg","role":"Designer","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."},{"name":"Emma Miller","image":"/img/faces/1.jpg","role":"SMM Manager","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."},{"name":"Paul Trueman","image":"/img/faces/3.jpg","role":"Designer","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."}]}'),n=s(3821),m=s(6006),c=s(2580);let o=e=>{let{showPartners:i=1}=e;return(0,m.useEffect)(()=>{(0,c.M)()},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:"mil-soft-bg mil-relative",children:[(0,l.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,l.jsx)("div",{className:"container mil-p-120-120",children:(0,l.jsxs)("div",{className:"row justify-content-between",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"mil-mb-60",children:[(0,l.jsx)("span",{className:"mil-suptitle mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.Oc}}),(0,l.jsx)("h2",{className:"mil-upper mil-up",dangerouslySetInnerHTML:{__html:t.TN}})]})}),(0,l.jsxs)("div",{className:"col-lg-7 mil-mt-suptitle-offset",children:[(0,l.jsx)(r.tq,{...a.M.milReviewsSlider,className:"swiper-container mil-reviews-slider",children:t.ev.map((e,i)=>(0,l.jsx)(r.o5,{className:"swiper-slide",children:(0,l.jsxs)("div",{className:"mil-review-frame mil-mb-30","data-swiper-parallax-x":"-200","data-swiper-parallax-opacity":"0",children:[(0,l.jsxs)("div",{className:"mil-reviev-head mil-up",children:[(0,l.jsxs)("div",{className:"mil-left",children:[(0,l.jsx)("div",{className:"mil-quote",children:(0,l.jsx)("img",{src:"/img/icons/12.svg",alt:"icon"})}),(0,l.jsx)("div",{className:"mil-review-avatar",children:(0,l.jsx)("img",{src:e.image,alt:e.name})})]}),(0,l.jsxs)("div",{className:"mil-name",children:[(0,l.jsx)("h6",{className:"mil-upper",children:e.name}),(0,l.jsx)("p",{className:"mil-text-sm mil-dark-soft",children:e.role})]})]}),(0,l.jsx)("div",{className:"mil-up",children:(0,l.jsx)("p",{className:"mil-review-text","data-swiper-parallax":"-60",children:e.text})})]})},"testimonial-slider-item-".concat(i)))}),(0,l.jsxs)("div",{className:"mil-nav-buttons mil-reviews-nav mil-up",children:[(0,l.jsx)("div",{className:"mil-slider-button mil-process-prev",children:"Prev"}),(0,l.jsx)("div",{className:"mil-slider-button mil-process-next",children:"Next"})]})]}),1==i&&(0,l.jsx)("div",{className:"col-12 mil-p-120-0",children:(0,l.jsxs)("div",{className:"mil-partners",children:[(0,l.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,l.jsx)(r.tq,{...a.M.milInfiniteSlider,className:"swiper-container mil-infinite-show mil-up",children:n.e.map((e,i)=>(0,l.jsx)(r.o5,{className:"swiper-slide",children:(0,l.jsx)("a",{href:e.link,target:"_blank",className:"mil-partner-frame",children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})},"partners-slider-item-".concat(i)))})]})})]})})]})})};var d=o},5846:function(e,i,s){e.exports=s(414)},6008:function(e,i,s){e.exports=s(167)}},function(e){e.O(0,[968,710,77,671,708,667,139,744],function(){return e(e.s=3872)}),_N_E=e.O()}]);