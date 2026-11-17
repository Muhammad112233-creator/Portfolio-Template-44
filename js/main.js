/* Portfolio interactions, page transitions, smooth scroll and galleries. */
(() => {
 const config=window.SITE_CONFIG;
 const $=(s,root=document)=>root.querySelector(s), $$=(s,root=document)=>[...root.querySelectorAll(s)];
 const pad=n=>String(n).padStart(2,'0');
 function clock(){const el=$('.time');if(el)el.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:config.timezone,hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());}
 clock();setInterval(clock,30000);
 let lenis;
 function initLenis(){if(window.Lenis){lenis=new Lenis({duration:2,orientation:'vertical',smoothWheel:true,smoothTouch:false,touchMultiplier:1.5,easing:t=>1-Math.pow(2,-10*t)});function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);}}
 function initGsap(){if(window.gsap){gsap.fromTo('[data-title="morph"]',{filter:'blur(14px)',opacity:.35,y:18},{filter:'blur(0px)',opacity:1,y:0,duration:1.2,ease:'power3.out',delay:.2});gsap.fromTo('[data-inner]',{filter:'blur(8px)',opacity:0,y:8},{filter:'blur(0px)',opacity:1,y:0,duration:.9,ease:'sine.inOut',delay:.45});}}
 function bindConfig(){
  if(!config)return;
  const logo=$('.yuu_logo-text');if(logo&&config.logoText)logo.innerHTML=`${config.logoText}<em>®</em>`;
  const homeTitle=$('[data-home-title]');if(homeTitle&&config.homeTitle)homeTitle.innerHTML=config.homeTitle;
  const grid=$('.cases-grid');if(grid&&Array.isArray(config.cases))$$('.cases-item',grid).forEach((card,i)=>{const item=config.cases[i];if(!item)return;const link=$('.cases-link',card),img=$('.cases-thumb',card),title=$('.cases-content_row .text-size-large',card),year=$('.cases-content_row .text-size-tiny',card);if(link)link.href=`cases/${item.slug}.html`;if(img){img.src=item.image;img.alt=`${item.title} project artwork`;}if(title)title.textContent=item.title;if(year)year.textContent=`(${item.year})`;const tags=$$('.cases-tags_item',card);(item.tags||[]).slice(0,tags.length).forEach((tag,j)=>tags[j].textContent=tag);});
  const detail=$('[data-case-detail]');if(detail&&Array.isArray(config.cases)){const item=config.cases.find(x=>x.slug===detail.dataset.caseDetail);if(item){const title=$('.case_heading-inner',detail),desc=$('.case_desc',detail),live=$('.text-draw.is-case',detail),images=$$('.case_slide-img',detail),values=$$('.case_def-value',detail);if(title)title.textContent=item.title;if(desc)desc.textContent=item.desc||'';if(live&&item.live)live.href=item.live;images.forEach((img,i)=>{img.src=`../${item.image}`;img.alt=`${item.title} — project view ${i+1}`;});if(values.length>=4){values[0].textContent=item.category||'';values[1].textContent=item.role||'';values[2].textContent=item.year||'';values[3].textContent=item.credits||config.name;}}}
 }
 function updateShell(){
  bindConfig();
  $$('[data-current-year]').forEach(el=>el.textContent=new Date().getFullYear());
  if(window.mountNavDraw)window.mountNavDraw();
  if(window.PortfolioSound)document.dispatchEvent(new Event('portfolio:ready'));
  initGalleries();initIndexSpy();initAwards();
  document.documentElement.classList.add('is-loaded');
 }
 function initGalleries(){
  $$('[data-case-slider]').forEach(slider=>{
   if(slider.dataset.ready)return;slider.dataset.ready='1';const track=$('[data-case-track]',slider);if(!track)return;
   const slides=$$('.case_slide',track); if(!slides.length)return;
   const originals=slides.map(slide=>slide.cloneNode(true));originals.forEach(clone=>{clone.setAttribute('aria-hidden','true');track.append(clone);});
   const nav=$('.case_nav'); if(nav && !nav.children.length){slides.forEach((slide,i)=>{const item=document.createElement('button');item.className='case_nav-item'+(!i?' is-current':'');item.setAttribute('aria-label',`Show image ${i+1}`);item.innerHTML=`<img class="case_nav-img" src="${slide.querySelector('img')?.src||''}" alt=""/>`;item.addEventListener('click',()=>go(i));nav.append(item);});}
   let x=0,start=0,drag=false,last=0,velocity=0,active=0;const gap=parseFloat(getComputedStyle(track).columnGap)||16;const width=()=>slides[0].getBoundingClientRect().width+gap;
   function go(i){active=(i+slides.length)%slides.length;x=-active*width();drift=x;track.style.transform=`translate3d(${x}px,0,0)`;[...(nav?.children||[])].forEach((n,k)=>n.classList.toggle('is-current',k===active));}
   const down=e=>{drag=true;start=e.clientX-x;last=e.clientX;slider.classList.add('is-dragging');slider.setPointerCapture?.(e.pointerId);};
   const move=e=>{if(!drag)return;x=e.clientX-start;velocity=e.clientX-last;last=e.clientX;track.style.transform=`translate3d(${x}px,0,0)`;};
   const up=()=>{if(!drag)return;drag=false;slider.classList.remove('is-dragging');let next=Math.round(-x/width());if(Math.abs(velocity)>8)next+=velocity<0?1:-1;go(next);};
   slider.addEventListener('pointerdown',down);slider.addEventListener('pointermove',move);slider.addEventListener('pointerup',up);slider.addEventListener('pointercancel',up);slider.addEventListener('wheel',e=>{if(Math.abs(e.deltaX)+Math.abs(e.deltaY)>5)go(active+(e.deltaX+e.deltaY>0?1:-1));},{passive:true});window.addEventListener('resize',()=>go(active));
   let drift=0,prev=performance.now();function animate(t){if(!slider.isConnected)return;const dt=Math.min((t-prev)/1000,.05);prev=t;if(!drag&&slides.length>1&&!slider.matches(':hover')){drift-=1.6*parseFloat(getComputedStyle(document.body).fontSize)*dt;const loopWidth=width()*slides.length;if(drift<=-loopWidth)drift+=loopWidth;track.style.transform=`translate3d(${drift}px,0,0)`;} requestAnimationFrame(animate);} if(slider.dataset.autoplay==='true')requestAnimationFrame(animate);
   slider.addEventListener('click',e=>{if(e.target.closest('a'))return;});
  });
 }
 function initIndexSpy(){const links=$$('.about_index-link'),sections=links.map(a=>$(a.getAttribute('href'))).filter(Boolean);if(!sections.length)return;const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting)links.forEach(a=>a.setAttribute('aria-current',a.hash==='#'+en.target.id?'true':'false'));}),{root:$('.component.is-about'),rootMargin:'-25% 0px -60% 0px',threshold:0});sections.forEach(s=>io.observe(s));}
 function initAwards(){let badge=$('.yuusuke-award-badge');if(!badge){badge=document.createElement('div');badge.className='yuusuke-award-badge';badge.innerHTML='<small>Recognition</small><strong>Award</strong>';document.body.append(badge);}$$('[data-award]').forEach(a=>{a.addEventListener('pointerenter',()=>{badge.classList.add('is-on');badge.querySelector('strong').textContent=a.dataset.award||'Award';});a.addEventListener('pointermove',e=>{badge.style.transform=`translate3d(${e.clientX+16}px,${e.clientY+16}px,0) rotate(-4deg)`;});a.addEventListener('pointerleave',()=>badge.classList.remove('is-on'));});}
 function setupBarba(){if(!window.barba)return;barba.init({prevent:({el})=>el.hasAttribute('data-no-transition'),transitions:[{name:'paper',once({next}){document.body.classList.add('is-ready');initGsap();updateShell();},leave({current}){return window.gsap?window.gsap.to(current.container,{opacity:0,duration:.35,ease:'power1.out'}):Promise.resolve();},enter({next}){window.scrollTo(0,0);if(lenis)lenis.scrollTo(0,{immediate:true});return window.gsap?window.gsap.fromTo(next.container,{opacity:0},{opacity:1,duration:.6,ease:'power1.out'}):Promise.resolve();}}],views:[{namespace:'home',afterEnter(){initGsap();}}]});barba.hooks.after(()=>{updateShell();initGsap();});}
 document.addEventListener('DOMContentLoaded',()=>{
  const loader=$('.loader');if(loader){const bar=$('.loader_progress-bar',loader);if(bar)bar.style.transition='transform 1s cubic-bezier(.2,.8,.2,1)';requestAnimationFrame(()=>{if(bar)bar.style.transform='scaleX(1)'});setTimeout(()=>{loader.classList.add('is-choosing');},820);const dismiss=()=>{if(!loader.isConnected)return;loader.classList.remove('is-choosing');loader.classList.add('is-leaving');loader.style.transition='clip-path .8s cubic-bezier(.76,0,.24,1)';loader.style.clipPath='inset(0 0 0 100%)';setTimeout(()=>loader.remove(),820);};loader.addEventListener('click',e=>{if(e.target.closest('[data-loader-sound]'))dismiss();});setTimeout(dismiss,5200);}
  initLenis();setupBarba();initGsap();updateShell();
  document.addEventListener('click',e=>{const btn=e.target.closest('[data-loader-sound]');if(btn){window.PortfolioSound?.set(btn.dataset.loaderSound==='on');$('.loader')?.remove();}});
 });
})();
