"use client";

import dynamic from 'next/dynamic'

const Model3DContent = dynamic(() => import('./Model3DContent'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#8BA5FF]" />
});

export default function Model3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Model3DContent />
    </div>
  );
} 