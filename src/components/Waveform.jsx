import { useEffect, useRef } from 'react';

const Waveform = ({ isAnimating = true, className = '' }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const bars = 120;
    let animationId;
    let phase = 0;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    // Particle system for floating sparks
    const particles = [];
    const maxParticles = 30;
    
    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Fade trail instead of clear
      ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
      ctx.fillRect(0, 0, width, height);
      
      const barWidth = width / bars;
      const centerY = height / 2;
      
      // Reset shadow for performance
      ctx.shadowBlur = 0;
      
      for (let i = 0; i < bars; i++) {
        const x = i * barWidth;
        const normalizedX = i / bars;
        
        // Richer wave composition
        const wave1 = Math.sin(normalizedX * Math.PI * 3 + phase * 0.8) * 0.4;
        const wave2 = Math.sin(normalizedX * Math.PI * 7 - phase * 1.2) * 0.25;
        const wave3 = Math.sin(normalizedX * Math.PI * 13 + phase * 1.8) * 0.15;
        const wave4 = Math.sin(normalizedX * Math.PI * 21 - phase * 0.5) * 0.1;
        const envelope = Math.sin(normalizedX * Math.PI) * 0.8 + 0.2;
        const combined = (wave1 + wave2 + wave3 + wave4) * envelope;
        
        const barHeight = Math.abs(combined) * (height * 0.45) + 4;
        
        // Gold-to-amber gradient
        const gradient = ctx.createLinearGradient(0, centerY - barHeight / 2, 0, centerY + barHeight / 2);
        gradient.addColorStop(0, `rgba(251, 191, 36, ${0.9 + combined * 0.1})`);
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${0.8 + combined * 0.2})`);
        gradient.addColorStop(1, `rgba(217, 119, 6, ${0.6 + combined * 0.3})`);
        
        ctx.fillStyle = gradient;
        
        // Rounded bars
        const bw = barWidth - 1.5;
        const bx = x + 0.75;
        const by = centerY - barHeight / 2;
        const radius = Math.min(bw / 2, 2);
        
        ctx.beginPath();
        ctx.moveTo(bx + radius, by);
        ctx.lineTo(bx + bw - radius, by);
        ctx.arcTo(bx + bw, by, bx + bw, by + radius, radius);
        ctx.lineTo(bx + bw, by + barHeight - radius);
        ctx.arcTo(bx + bw, by + barHeight, bx + bw - radius, by + barHeight, radius);
        ctx.lineTo(bx + radius, by + barHeight);
        ctx.arcTo(bx, by + barHeight, bx, by + barHeight - radius, radius);
        ctx.lineTo(bx, by + radius);
        ctx.arcTo(bx, by, bx + radius, by, radius);
        ctx.fill();
        
        // Emit particles from peaks
        if (Math.abs(combined) > 0.6 && Math.random() > 0.92 && particles.length < maxParticles) {
          particles.push({
            x: x + barWidth / 2,
            y: centerY - barHeight / 2,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.random() * 2 - 0.5,
            life: 1,
            size: 1 + Math.random() * 2,
          });
        }
      }
      
      // Draw center glow line
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(251, 191, 36, 0.3)';
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        
        ctx.fillStyle = `rgba(251, 191, 36, ${p.life * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      }
      
      if (isAnimating) {
        phase += 0.04;
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
      style={{ height: '160px' }}
    />
  );
};

export default Waveform;
