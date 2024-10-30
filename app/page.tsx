import { Card, DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <hr />
      <h2>Tus reservas</h2>

      <Card className="max-w-sm">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          10:00 AM - 11:00 AM
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          30-10-2024
        </p>
      </Card>
      <Card className="max-w-sm">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          11:00 AM - 12:00 MD
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          30-10-2024
        </p>
      </Card>
      <Card className="max-w-sm">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          10:00 AM - 11:00 AM
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          31-10-2024
        </p>
      </Card>
    </main>
  );
}
