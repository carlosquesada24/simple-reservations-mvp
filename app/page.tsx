import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import ReservationsList from "./(modules)/(reservations)/(reservation-display)/(show-all-reservations)/(components)/ReservationsList/ReservationsList";
import {
  barberReservationsList,
  clientReservationsList,
} from "./(data)/(reservations)";

export default function Home() {
  const isBarberUser = true;

  const reservationsList = isBarberUser
    ? barberReservationsList
    : clientReservationsList;

  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <hr />

      <ReservationsList reservationsList={reservationsList} />
    </main>
  );
}
