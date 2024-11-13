"use client";

import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import supabase from "../(utils)/supabase";
import { Reservation } from "../(data)/(reservations)";

const RESERVATIONS_APP_EMPTY_STATE = {
  userId: crypto.randomUUID(),
  isBarberUser: false,
};

const reservationsSupabaseRepository = {
  getAllReservations: async () => {
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
  },
};

export const useReservations = () => {
  const [reservationsList, setReservationsList] = useState<Reservation[]>([]);

  const { storedValue, setValue } = useLocalStorage(
    "reservationsApp",
    RESERVATIONS_APP_EMPTY_STATE,
  );
  const reservationsApp = storedValue;

  useEffect(() => {
    const handleFetchAllReservations = async () => {
      const fetchedReservationsList =
        await reservationsSupabaseRepository.getAllReservations();
      setReservationsList(fetchedReservationsList);
    };

    handleFetchAllReservations();
  }, []);

  const saveReservation = async (formValues: any) => {
    alert("Reservation created");

    const reservationToSaveOnSupabase = {
      ...formValues,
      id: crypto.randomUUID(),
    };

    const savedReservation = await saveReservationOnSupabase(
      reservationToSaveOnSupabase,
    );
    saveReservationOnLocalStorage(
      savedReservation ?? reservationToSaveOnSupabase,
    );
    setReservationsList([
      ...reservationsList,
      savedReservation ?? reservationToSaveOnSupabase,
    ]);
  };

  const saveReservationOnSupabase = async (reservation: Reservation) => {
    // return await reservationsSupabaseRepository.saveReservation(reservation);
  };

  const saveReservationOnLocalStorage = (reservationToSave: Reservation) => {
    setValue({
      ...storedValue,
      //   userReservation: reservationToSave,
    });
  };

  const deleteReservation = (reservationId: string) => {
    // Remove reservation from reservationsList
    const updatedReservationsList = reservationsList.filter(
      (reservation) => reservation.id !== reservationId,
    );
    setReservationsList(updatedReservationsList);

    alert("Reservation deleted successfully");
  };

  return {
    reservationsList,
    saveReservation,
    deleteReservation,
  };
};
