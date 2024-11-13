"use client";

import { useEffect } from "react";
import { DarkThemeToggle } from "flowbite-react";

import supabase from "./(utils)/supabase";
import { barberReservationsList } from "./(data)/(reservations)";
import ReservationsList from "./(modules)/(reservations)/(reservation-display)/(show-all-reservations)/(components)/ReservationsList/ReservationsList";

export default function Home() {
  useEffect(() => {
    const getAllReservations = async (): Promise<any[]> => {
      const { data, error } = await supabase.from("Users").select(`
        id,
        created_at,
        UsersTypes (name),
        name
        `);

      if (error) {
        console.log({ error });
      }

      return data as any[];
    };

    const handleFetchAllReservations = async () => {
      const fetchedReservationsList = await getAllReservations();
      console.log({ fetchedReservationsList });
    };

    handleFetchAllReservations();
  }, []);

  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <hr />

      <ReservationsList reservationsList={barberReservationsList} />
    </main>
  );
}
