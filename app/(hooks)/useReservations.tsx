"use client";

import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import {
  Reservation,
  ReservationSupabaseRequest,
} from "../(data)/(reservations)";
import reservationsRepository from "../(repositories)/reservationsRepository";
import { supabaseToReservationMapper } from "../(mappers)/reservations";

const RESERVATIONS_APP_EMPTY_STATE = {
  userId: crypto.randomUUID(),
  isBarberUser: false,
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
        await reservationsRepository.getAllReservations<ReservationSupabaseRequest>();

      const formattedReservations = fetchedReservationsList.map(
        (supabaseReservation) =>
          supabaseToReservationMapper(supabaseReservation),
      );

      setReservationsList(formattedReservations);
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
