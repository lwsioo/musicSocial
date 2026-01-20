export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
          MCNETWORK
        </h1>
        <p className="mt-4 text-xl text-gray-400 uppercase tracking-widest">
          The Freestyle Revolution is Coming
        </p>
        <div className="mt-10 h-1 w-24 bg-red-600 mx-auto animate-pulse"></div>
      </div>
    </main>
  );
}