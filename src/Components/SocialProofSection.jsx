import { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function AnimatedCounter({ targetValue }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const speed = targetValue / 50;

        const timer = setInterval(() => {
          start += speed;
          if (start >= targetValue) {
            setCount(targetValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 30);

        observer.disconnect(); 
      }
    });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [targetValue]);

  return <span ref={elementRef}>{count}</span>;
}

const stats = [
  { id: 1, target: 12000, suffix: "+", label: "Active Branches", desc: "Building apps globally." },
  { id: 2, target: 450, suffix: "M+", label: "Sales / Month", desc: "Distributed with 99.99% uptime guarantees." },
  { id: 3, target: 98, suffix: "%", label: "Customer Satisfaction", desc: "Backed by 24/7 dedicated support teams." },
  { id: 4, target: 15, suffix: "M+", label: "Popular Phones", desc: "Trusted by tier-one investors worldwide." }
];

Aos.init({
    duration: 1000,
    once: false
})

export default function SocialProof() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-20">
      <div  className="mx-auto max-w-7xl px-6 lg:px-8">

        <div  className="mx-auto max-w-3xl text-center mb-16">
          <h2 style={{color:"orange"}} data-aos="fade-up" className="text-base font-semibold uppercase">Our Impact</h2>
          <p data-aos="fade-up" className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Trusted by innovative teams</p>
          <p data-aos="fade-up" className="mt-4 text-lg text-white dark:text-white">We help engineering organizations scale effortlessly.</p>
        </div>

        <div  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div  key={stat.id} style={{backgroundColor:"orange"}} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm" data-aos="fade-up" >
              <dt style={{fontWeight:"900" , textShadow:"0px 0px 3px rgba(19, 18, 18, 0.45)"}} className="text-sm font-bold text-white dark:text-white">{stat.label}</dt>
              <dd style={{fontWeight:"900" , textShadow:"0px 0px 3px rgba(19, 18, 18, 0.45)"}} className="mt-2 text-4xl  text-white dark:text-white sm:text-5xl">
                <AnimatedCounter  targetValue={stat.target} />{stat.suffix}
              </dd>
              <p style={{fontWeight:"900" , textShadow:"0px 0px 3px rgba(19, 18, 18, 0.45)"}}  className="mt-4 text-sm text-white">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
