import React from 'react';

// Happy Teddy Holding Beating Heart
export const TeddyHappy = ({ size = 190 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className="mx-auto filter drop-shadow-md animate-bounce-subtle">
    <ellipse cx="100" cy="188" rx="60" ry="10" fill="rgba(0,0,0,0.06)" />
    {/* Ears */}
    <circle cx="58" cy="55" r="24" fill="#D4A373" stroke="#8A5A36" strokeWidth="3" />
    <circle cx="58" cy="55" r="14" fill="#FFCAD4" />
    <circle cx="142" cy="55" r="24" fill="#D4A373" stroke="#8A5A36" strokeWidth="3" />
    <circle cx="142" cy="55" r="14" fill="#FFCAD4" />
    {/* Body */}
    <ellipse cx="100" cy="135" rx="55" ry="50" fill="#E9C49A" stroke="#8A5A36" strokeWidth="3" />
    <ellipse cx="100" cy="140" rx="36" ry="32" fill="#FFF1E6" />
    {/* Feet */}
    <ellipse cx="65" cy="175" rx="18" ry="12" fill="#D4A373" stroke="#8A5A36" strokeWidth="3" />
    <circle cx="65" cy="175" r="7" fill="#FFCAD4" />
    <ellipse cx="135" cy="175" rx="18" ry="12" fill="#D4A373" stroke="#8A5A36" strokeWidth="3" />
    <circle cx="135" cy="175" r="7" fill="#FFCAD4" />
    {/* Head */}
    <circle cx="100" cy="85" r="48" fill="#E9C49A" stroke="#8A5A36" strokeWidth="3" />
    {/* Rosy Cheeks */}
    <circle cx="72" cy="98" r="8" fill="#FF9EAA" opacity="0.65" className="animate-pulse" />
    <circle cx="128" cy="98" r="8" fill="#FF9EAA" opacity="0.65" className="animate-pulse" />
    {/* Sparkling Eyes */}
    <circle cx="78" cy="78" r="6" fill="#3D2B1F" />
    <circle cx="76" cy="76" r="2.2" fill="#FFFFFF" />
    <circle cx="122" cy="78" r="6" fill="#3D2B1F" />
    <circle cx="120" cy="76" r="2.2" fill="#FFFFFF" />
    {/* Snout */}
    <ellipse cx="100" cy="95" rx="18" ry="13" fill="#FFF1E6" stroke="#8A5A36" strokeWidth="2" />
    <path d="M94 90 Q100 86 106 90 Q100 97 94 90 Z" fill="#8A5A36" />
    {/* Smile */}
    <path d="M96 95 Q100 102 104 95" fill="none" stroke="#8A5A36" strokeWidth="2" strokeLinecap="round" />
    {/* Beating Heart in Paws */}
    <g className="animate-pulse-soft origin-center">
      <path d="M100 152 C100 152 70 120 70 102 C70 90 82 82 92 88 C96 91 100 96 100 96 C100 96 104 91 108 88 C118 82 130 90 130 102 C130 120 100 152 100 152 Z" fill="#FF4D6D" stroke="#C9184A" strokeWidth="2" />
      <path d="M82 98 C82 94 88 90 94 92" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
    </g>
    {/* Paws */}
    <ellipse cx="74" cy="118" rx="10" ry="8" fill="#D4A373" stroke="#8A5A36" strokeWidth="2" transform="rotate(25 74 118)" />
    <ellipse cx="126" cy="118" rx="10" ry="8" fill="#D4A373" stroke="#8A5A36" strokeWidth="2" transform="rotate(-25 126 118)" />
  </svg>
);

// Crying Teddy with Streaming Tears & Broken Heart with Bandage
export const TeddyCrying = ({ size = 190 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className="mx-auto filter drop-shadow-md animate-bounce-subtle">
    <ellipse cx="100" cy="188" rx="60" ry="10" fill="rgba(0,0,0,0.06)" />
    {/* Droopy Ears */}
    <circle cx="56" cy="62" r="23" fill="#D4A373" stroke="#8A5A36" strokeWidth="3" />
    <circle cx="56" cy="62" r="13" fill="#FFCAD4" />
    <circle cx="144" cy="62" r="23" fill="#D4A373" stroke="#8A5A36" strokeWidth="3" />
    <circle cx="144" cy="62" r="13" fill="#FFCAD4" />
    {/* Body */}
    <ellipse cx="100" cy="138" rx="55" ry="48" fill="#E9C49A" stroke="#8A5A36" strokeWidth="3" />
    <ellipse cx="100" cy="142" rx="36" ry="30" fill="#FFF1E6" />
    {/* Broken Heart with Band-Aid */}
    <g>
      <path d="M98 152 C98 152 72 124 72 108 C72 96 82 90 91 95 C95 97 98 102 98 102 L99 152 Z" fill="#FF758F" stroke="#C9184A" strokeWidth="1.5" />
      <path d="M102 152 C102 152 128 124 128 108 C128 96 118 90 109 95 C105 97 102 102 102 102 L101 152 Z" fill="#FF758F" stroke="#C9184A" strokeWidth="1.5" />
      {/* Band-Aid */}
      <rect x="85" y="115" width="30" height="12" rx="3" fill="#FFE5D9" stroke="#D4A373" strokeWidth="1.5" transform="rotate(-15 100 120)" />
      <circle cx="97" cy="120" r="1.5" fill="#D4A373" />
      <circle cx="103" cy="122" r="1.5" fill="#D4A373" />
    </g>
    {/* Head */}
    <circle cx="100" cy="88" r="48" fill="#E9C49A" stroke="#8A5A36" strokeWidth="3" />
    {/* Sad Brows */}
    <path d="M68 68 Q76 72 84 66" fill="none" stroke="#8A5A36" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M132 68 Q124 72 116 66" fill="none" stroke="#8A5A36" strokeWidth="2.5" strokeLinecap="round" />
    {/* Crying Eyes */}
    <path d="M72 78 Q78 84 84 78" fill="none" stroke="#3D2B1F" strokeWidth="3" strokeLinecap="round" />
    <path d="M116 78 Q122 84 128 78" fill="none" stroke="#3D2B1F" strokeWidth="3" strokeLinecap="round" />
    {/* Snout */}
    <ellipse cx="100" cy="98" rx="18" ry="13" fill="#FFF1E6" stroke="#8A5A36" strokeWidth="2" />
    <path d="M94 93 Q100 89 106 93 Q100 100 94 93 Z" fill="#8A5A36" />
    {/* Sad Pout */}
    <path d="M96 106 Q100 101 104 106" fill="none" stroke="#8A5A36" strokeWidth="2.5" strokeLinecap="round" />
    {/* Streaming Tears */}
    <g className="animate-tear-drop">
      <ellipse cx="74" cy="86" rx="4" ry="7" fill="#64B5F6" />
      <ellipse cx="126" cy="86" rx="4" ry="7" fill="#64B5F6" />
    </g>
    <g className="animate-tear-drop" style={{ animationDelay: '0.8s' }}>
      <ellipse cx="76" cy="98" rx="3.5" ry="6" fill="#64B5F6" />
      <ellipse cx="124" cy="98" rx="3.5" ry="6" fill="#64B5F6" />
    </g>
    {/* Sniffling Paws */}
    <ellipse cx="64" cy="104" rx="11" ry="9" fill="#D4A373" stroke="#8A5A36" strokeWidth="2" transform="rotate(30 64 104)" />
    <ellipse cx="136" cy="104" rx="11" ry="9" fill="#D4A373" stroke="#8A5A36" strokeWidth="2" transform="rotate(-30 136 104)" />
  </svg>
);

