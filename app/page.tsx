import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import ReservationsList from "./(modules)/(reservations)/(reservation-display)/(show-all-reservations)/(components)/ReservationsList/ReservationsList";
import { reservationsList } from "./(data)/(reservations)";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <hr />

      <ReservationsList reservationsList={reservationsList} />

      <br />
      <br />
      <br />
    </main>
  );
}
