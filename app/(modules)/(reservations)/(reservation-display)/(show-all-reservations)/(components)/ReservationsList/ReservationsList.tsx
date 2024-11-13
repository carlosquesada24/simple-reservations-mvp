import React from "react";
import ReservationCard from "@/app/(modules)/(reservations)/(reservation-display)/(show-all-reservations)/(components)/ReservationCard/ReservationCard";
import { Reservation } from "@/app/(data)/(reservations)";
import { Button } from "flowbite-react";

interface ReservationsListProps {
  reservationsList: Reservation[];
}

const ReservationsList = ({ reservationsList = [] }: ReservationsListProps) => {
  const isValidArray = reservationsList && Array.isArray(reservationsList);
  const isEmptyArray = isValidArray && reservationsList.length === 0;

  const isBarberUser = true;
  const isClientUser = !isBarberUser;

  return (
    <div className="flow-root">
      <h2>Tus reservas</h2>
      {isEmptyArray ? (
        <div className="justify-content-center flex flex-col items-center">
          <p className="text-center">¡No hay reservas!</p>
          <Button>Reservar</Button>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {reservationsList.map((reservation) => (
            <li key={reservation.id} className="py-3 sm:py-4">
              <ReservationCard reservation={reservation} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationsList;
