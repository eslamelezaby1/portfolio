'use client';
import {useEffect,useRef} from 'react';

export default function CursorHighlight(){
 const halo=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const element=halo.current;if(!element)return;
  const fine=window.matchMedia('(any-pointer: fine)');
  let frame=0;
  const move=(event:PointerEvent)=>{
   if(event.pointerType!=='mouse'||!fine.matches){element.hidden=true;return}
   const target=event.target instanceof Element?event.target:null;
   const interactive=!!target?.closest('a,button,summary,[role="button"]');
   const selecting=!!window.getSelection()?.toString();
   cancelAnimationFrame(frame);
   frame=requestAnimationFrame(()=>{
    element.style.transform=`translate3d(${event.clientX}px,${event.clientY}px,0)`;
    element.dataset.interactive=String(interactive);
    element.dataset.selecting=String(selecting);
    element.hidden=false;
   });
  };
  const hide=()=>{cancelAnimationFrame(frame);element.hidden=true};
  window.addEventListener('pointermove',move,{passive:true});
  document.documentElement.addEventListener('pointerleave',hide);
  window.addEventListener('blur',hide);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('pointermove',move);document.documentElement.removeEventListener('pointerleave',hide);window.removeEventListener('blur',hide)};
 },[]);
 return <div ref={halo} className="cursor-highlight" aria-hidden="true" hidden><span/></div>;
}
