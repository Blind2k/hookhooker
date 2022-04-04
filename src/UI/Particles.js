import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const getPixelRatio = context => {
   var backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;

   return (window.devicePixelRatio || 1) / backingStore;
};

const Particles = () => {
   
   const refParticles = useRef(null);

   const draw = (ctx, frameCount) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
      ctx.fill();
      ctx.closePath();
   }

   useEffect(() => {
      const canvas = refParticles.current;
      const context = canvas.getContext("2d");

      let animationFramId, frameCount = 0;
   
      // DROWING!!!
      const render = () => {
         frameCount++;
         draw(context, frameCount);
         animationFramId = window.requestAnimationFrame(render);
      }
      render();

      return () => window.cancelAnimationFrame(animationFramId);

   }, [draw])
   return <canvas ref={refParticles}/>
};

export default Particles;
