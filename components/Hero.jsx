import React from 'react';

export default function Hero() {
  return (
    <div
      className="hero min-h-screen mb-8"
      style={{
        backgroundImage: 'url("https://i.ibb.co/yBK1q0h/pexels-stanley-morales-1454360.jpg")',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To Prodat Blog</h1>
          <h3 className="mb-5 text-white">
            Where you will find reliable IGCSE Physics, Accounting and Computer
            Science notes as well as practical tips & tricks curated by students
            for students.
          </h3>
        </div>
      </div>
    </div>
  );
}
