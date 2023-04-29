import Top from "@/sections/Top";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="w-full max-w-2xl">
      <div className="flex flex-col min-h-screen px-8 pt-8 font-lores font-thin">
        <Top />
        <Hero />
      </div>
    </main>
  );
}
