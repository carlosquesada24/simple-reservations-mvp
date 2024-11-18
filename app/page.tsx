"use client";

import { DarkThemeToggle } from "flowbite-react";
import ReservationsList from "./(modules)/(reservations)/(reservation-display)/(show-all-reservations)/(components)/ReservationsList/ReservationsList";
import { useReservations } from "./(hooks)/useReservations";

export default function Home() {
  const { reservationsList } = useReservations();

  return (
    <main className="">
      {/* <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <hr /> */}

      <ReservationsList reservationsList={reservationsList} />
    </main>
  );
}
