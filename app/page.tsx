import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flexw-full items-center justify-center mb-10">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
        The official bonk.io tournament is coming soon!
      </span>
        <h1
            className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            The official bonk.io tournament is coming soon!
        </h1>
    </div>
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex rounded-3xl overflow-hidden shadow-2xl">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Image
            src="/sshot.png"
            alt="Vercel Logo"
            className="dark"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>

      <h2 className="mb-0 text-xl font-semibold m-10 bg-gradient-to-r from-blue-500 to to-teal-500 bg-clip-text text-transparent">
        Be prepared to fight against the best players in the world!
      </h2>

      <h2 className="mb-0 text-xl font-semibold m-10 bg-gradient-to-r from-red-500 to to-orange-500 bg-clip-text text-transparent">
        500+ players from all around the world will be competing for the grand prize!
      </h2>

      <h2 className="mb-0 text-xl font-semibold m-10 bg-gradient-to-r from-pink-500 to to-violet-500 bg-clip-text text-transparent">
        The tournament will be held right before the release of the new bonk.io update!
      </h2>

      <h2 className="mb-1 text-3xl font-semibold m-10 bg-gradient-to-r from-green-500 to to-cyan-500 bg-clip-text text-transparent">
        Invitations are now open! Get noticed by the bonk.io community!
      </h2>

    </main>
  );
}
