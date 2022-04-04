import React, { useEffect, useRef }  from "react";

const Particles = () => {
   let x = 50;
   let y = 100;
   let animationFramId;
   let frameCount = 0;

   const refParticles = useRef(null);

   const draw = (ctx, frameCount) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.arc(x, y, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
   };

   useEffect(() => {
      const canvas = refParticles.current;
      const context = canvas.getContext("2d");



      // DROWING!!!
      const render = () => {
         frameCount++;
         draw(context, frameCount);
         animationFramId = window.requestAnimationFrame(render);
      };
      render();

      return () => window.cancelAnimationFrame(animationFramId);
   }, [draw]);
   return <canvas ref={refParticles} />;
};

export default Particles;
