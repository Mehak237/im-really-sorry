import React from 'react';

export const FloatingParticles = () => {
  const items = [
    { icon: "💖", left: "8%", top: "12%", dur: "6s", delay: "0s", size: "text-2xl" },
    { icon: "✨", left: "88%", top: "18%", dur: "5s", delay: "1s", size: "text-xl" },
    { icon: "🦋", left: "82%", top: "68%", dur: "7s", delay: "2s", size: "text-2xl" },
    { icon: "🌸", left: "12%", top: "78%", dur: "6.5s", delay: "2.5s", size: "text-xl" },
    { icon: "⭐", left: "48%", top: "6%", dur: "5.5s", delay: "0.5s", size: "text-lg" },
    { icon: "🤍", left: "92%", top: "42%", dur: "6s", delay: "3s", size: "text-xl" },
    { icon: "🌷", left: "6%", top: "45%", dur: "7.5s", delay: "1.5s", size: "text-2xl" },
    { icon: "💕", left: "64%", top: "85%", dur: "6s", delay: "3.2s", size: "text-xl" },
    { icon: "✨", left: "30%", top: "90%", dur: "5s", delay: "1.8s", size: "text-base" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`absolute select-none opacity-40 hover:opacity-80 transition-opacity animate-float-slow ${item.size}`}
          style={{
            left: item.left,
            top: item.top,
            animationDuration: item.dur,
            animationDelay: item.delay
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

