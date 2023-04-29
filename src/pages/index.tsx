import TypeIt from "typeit-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center pl-10 font-lores font-thin">
      <TypeIt
        className="text-xl"
        options={{ speed: 50 }}
        getBeforeInit={(instance) => {
          instance
            .type("Hi, I'm Abhishke")
            .pause(750)
            .delete(2)
            .pause(500)
            .type("ek!")
            .break()
            .break()
            .pause(500)
            .type("A product designer and frontend developer  based in NYC")
            .pause(500)
            .break()
            .break()
            .type(
              "If you want me to stop taking and just look at my work, click the link below"
            );

          // Remember to return it!
          return instance;
        }}
      />
    </main>
  );
}
