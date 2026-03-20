import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Waveform = ({ isAnimating = true, className = '' }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const bars = 80;
    let animationId;
    let phase = 0;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      const barWidth = width / bars;
      const centerY = height / 2;
      
      for (let i = 0; i < bars; i++) {
        const x = i * barWidth;
        const normalizedX = i / bars;
        
        // Multiple sine waves for organic feel
        const wave1 = Math.sin(normalizedX * Math.PI * 4 + phase) * 0.5;
        const wave2 = Math.sin(normalizedX * Math.PI * 8 - phase * 1.5) * 0.3;
        const wave3 = Math.sin(normalizedX * Math.PI * 16 + phase * 2) * 0.2;
        const combined = wave1 + wave2 + wave3;
        
        const barHeight = Math.abs(combined) * (height * 0.4) + 10;
        
        // Gradient from gold to amber
        const gradient = ctx.createLinearGradient(0, centerY - barHeight / 2, 0, centerY + barHeight / 2);
        gradient.addColorStop(0, '#fbbf24');
        gradient.addColorStop(0.5, '#f59e0b');
        gradient.addColorStop(1, '#d97706');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, centerY - barHeight / 2, barWidth - 2, barHeight);
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(251, 191, 36, 0.5)';
      }
      
      if (isAnimating) {
        phase += 0.05;
        animationId = requestAnimationFrame(draw);
      }
    };
    
    if (isAnimating) {
      draw();
    }
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isAnimating]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full ${className}`}
      style={{ height: '200px' }}
    />
  );
};

export default Waveform;
