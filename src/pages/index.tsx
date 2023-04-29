import MotionWrapper from "@/components/Transition";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center pl-10 font-lores font-thin">
      <MotionWrapper delay={1}>
        <div className="hello text-2xl">
          <h3>Hi!</h3>
        </div>
      </MotionWrapper>
      <MotionWrapper delay={2}>
        <div className="hello mb-10 text-2xl">
          <h3>I&apos;m Abhishek</h3>
        </div>
      </MotionWrapper>

      <div className="description">
        <MotionWrapper delay={3.5}>
          <p className="mb-1">📱 Designer of usable interfaces.</p>
        </MotionWrapper>

        <MotionWrapper delay={4}>
          <p className="mb-1">💻 Developer of full-stack applications.</p>
        </MotionWrapper>

        <MotionWrapper delay={4.5}>
          <p className="mb-1">🧱 Maintainer of scalable design systems.</p>
        </MotionWrapper>
      </div>
    </main>
  );
}
