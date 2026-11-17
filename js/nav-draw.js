/* SVG underline draw animation, inspired by the reference navigation. */
(() => {
 const variants=[
  'M2 6 C30 0, 60 11, 98 4','M1 4 C28 11, 60 0, 99 7','M2 7 C28 1, 68 9, 98 3',
  'M2 5 C35 9, 60 0, 98 6','M2 3 C30 8, 72 0, 98 5','M2 6 C35 0, 65 12, 98 4'
 ];
 function mount(){document.querySelectorAll('[data-draw-line]').forEach((link,i)=>{
   const box=link.querySelector('[data-draw-line-box]'); if(!box||box.dataset.ready)return; box.dataset.ready='1';
   const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 100 12');svg.setAttribute('preserveAspectRatio','none');
   const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',variants[i%variants.length]);path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');path.setAttribute('stroke-linecap','round');svg.append(path);box.append(svg);
   const len=path.getTotalLength();path.style.strokeDasharray=len;path.style.strokeDashoffset=len;path.style.transition='stroke-dashoffset .5s cubic-bezier(.2,.8,.2,1)';
   link.addEventListener('pointerenter',()=>{path.style.strokeDashoffset='0';});link.addEventListener('pointerleave',()=>{path.style.strokeDashoffset=String(len);});
  });}
 document.addEventListener('DOMContentLoaded',mount); window.mountNavDraw=mount;
})();
