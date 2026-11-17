/* Three.js r174 scene layer: an original, lightweight interactive sculpture. */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.174.0/build/three.module.js';
const canvas=document.querySelector('#scene');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0x000000,1);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x000000,.035);
const camera=new THREE.PerspectiveCamera(34,innerWidth/innerHeight,.1,100);camera.position.set(0,0,10);
scene.add(new THREE.AmbientLight(0xffffff,1.15));
const key=new THREE.PointLight(0xf7e9d2,90,35);key.position.set(-5,6,8);scene.add(key);
const red=new THREE.PointLight(0xeb1716,50,25);red.position.set(5,-2,4);scene.add(red);
const blue=new THREE.PointLight(0x7b9ac2,32,20);blue.position.set(1,5,-4);scene.add(blue);
const group=new THREE.Group();scene.add(group);
const glass=new THREE.MeshPhysicalMaterial({color:0xc9c8c3,metalness:.48,roughness:.19,clearcoat:1,clearcoatRoughness:.1,transmission:.08,thickness:.8,transparent:true,opacity:.91});
const black=new THREE.MeshStandardMaterial({color:0x111113,metalness:.75,roughness:.26});
for(let i=0;i<8;i++){
 const g=new THREE.TorusGeometry(1.5+i*.18,.025,6,160);const m=new THREE.Mesh(g,i%3===0?black:glass);m.rotation.set(i*.23,.2+i*.31, i*.14);m.userData.phase=i*.6;group.add(m);
}
const orb=new THREE.Mesh(new THREE.IcosahedronGeometry(.75,2),glass);orb.position.set(.18,.05,0);group.add(orb);
const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(.82,1),new THREE.MeshBasicMaterial({color:0xeb1716,wireframe:true,transparent:true,opacity:.5}));wire.position.copy(orb.position);group.add(wire);
const dustGeo=new THREE.BufferGeometry(),N=500,positions=new Float32Array(N*3);for(let i=0;i<N;i++){positions[i*3]=(Math.random()-.5)*24;positions[i*3+1]=(Math.random()-.5)*14;positions[i*3+2]=(Math.random()-.5)*18;}dustGeo.setAttribute('position',new THREE.BufferAttribute(positions,3));const dust=new THREE.Points(dustGeo,new THREE.PointsMaterial({color:0xb5b1a7,size:.018,transparent:true,opacity:.55}));scene.add(dust);
let mx=0,my=0,tx=0,ty=0;window.addEventListener('pointermove',e=>{tx=(e.clientX/innerWidth-.5)*.55;ty=(e.clientY/innerHeight-.5)*.35;});
function resize(){renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}window.addEventListener('resize',resize);
let clock=new THREE.Clock();function frame(){requestAnimationFrame(frame);const t=clock.getElapsedTime();mx+=(tx-mx)*.025;my+=(ty-my)*.025;group.rotation.y=t*.09+mx;group.rotation.x=Math.sin(t*.18)*.12+my;group.position.y=Math.sin(t*.42)*.14;group.children.forEach(m=>{m.rotation.z+=.0004*(m.userData.phase+1)});dust.rotation.y=t*.008;camera.position.x=mx*.7;camera.position.y=-my*.7;camera.lookAt(0,0,0);renderer.render(scene,camera);}frame();
window.addEventListener('message',e=>{if(e.data?.type==='YUUSUKE_NAVIGATE')document.documentElement.dataset.scene=e.data.namespace;});parent.postMessage({type:'YUUSUKE_READY'},'*');
