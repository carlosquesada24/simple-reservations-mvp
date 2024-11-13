import { DarkThemeToggle } from "flowbite-react";
import ReservationsList from "./(modules)/(show-all-reservations)/(components)/ReservationsList/ReservationsList";
import { reservationsList } from "./(data)/(reservations)";
import Image from "next/image";

export default function Home() {
  const isBarberUser = true;

  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <hr />

      <ReservationsList reservationsList={reservationsList} />

      <br />
      <br />
      <br />

      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <Image
            alt="Neil image"
            height="32"
            src="/images/people/profile-picture-1.jpg"
            width="32"
            className="rounded-full"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            Carlos Quesada
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            carlos.test@gmail.com
          </p>
        </div>
        <div className="flex-2 min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
            11:00 a.m.
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            1 hora
          </p>
        </div>
      </div>
    </main>
  );
}
