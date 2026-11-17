/* Lightweight UI sound engine. No audio files or permissions are required. */
(() => {
  let enabled = localStorage.getItem('portfolio-sound') === 'on';
  let ctx;
  const getContext = () => ctx || (ctx = new (window.AudioContext || window.webkitAudioContext)());
  function tone(freq=440, duration=.055, type='sine', volume=.035) {
    if (!enabled) return;
    try {
      const ac=getContext(); if(ac.state==='suspended') ac.resume();
      const osc=ac.createOscillator(), gain=ac.createGain();
      osc.type=type; osc.frequency.setValueAtTime(freq,ac.currentTime);
      gain.gain.setValueAtTime(volume,ac.currentTime); gain.gain.exponentialRampToValueAtTime(.001,ac.currentTime+duration);
      osc.connect(gain); gain.connect(ac.destination); osc.start(); osc.stop(ac.currentTime+duration);
    } catch(e) {}
  }
  const update=()=>{document.querySelectorAll('[data-sound-toggle]').forEach(b=>{b.setAttribute('aria-pressed',String(enabled)); b.querySelector('.btn-stop-motion__p')?.replaceChildren(document.createTextNode(enabled?'Sound on':'Sound off'));});};
  window.PortfolioSound={set(value){enabled=!!value;localStorage.setItem('portfolio-sound',enabled?'on':'off');update();tone(520,.09);},play(type){if(type==='click'){tone(270,.11,'triangle',.05);tone(580,.08,'sine',.02);}else tone(720,.04,'sine',.018);},get enabled(){return enabled;}};
  document.addEventListener('click',e=>{if(e.target.closest('[data-sound-toggle]')){e.preventDefault();window.PortfolioSound.set(!enabled);return;} if(e.target.closest('a,button'))window.PortfolioSound.play('click');},true);
  document.addEventListener('pointerover',e=>{if(e.target.closest('a,button'))window.PortfolioSound.play('hover');});
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-loader-sound]').forEach(b=>b.addEventListener('click',()=>{window.PortfolioSound.set(b.dataset.loaderSound==='on');document.querySelector('.loader')?.classList.add('is-leaving');setTimeout(()=>document.querySelector('.loader')?.remove(),700);}));
    document.querySelector('[data-sound-toggle]')?.addEventListener('click',()=>{}); update();
  });
})();
