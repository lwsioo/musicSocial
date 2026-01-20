export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 font-sans">
      <div className="text-center">
        <h1 className="text-7xl font-black tracking-tighter sm:text-9xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent italic">
          MCNETWORK
        </h1>
        <p className="mt-4 text-lg text-zinc-400 uppercase tracking-[0.3em] font-light">
          The Freestyle Revolution is Coming
        </p>
        <div className="mt-12 h-[2px] w-32 bg-zinc-800 mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-white animate-[ltr_2s_infinite]"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ltr {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </main>
  );
}
