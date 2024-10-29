import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
    </main>
  );
}
