import { Reservation } from "@/app/(data)/(reservations)";
import { Avatar } from "flowbite-react";
import React from "react";

interface ReservationCardProps {
  reservation: Reservation;
}

const ReservationCardClientView = ({ reservation }: ReservationCardProps) => {
  return (
    <div className="flex items-center space-x-4">
      <h2>is client</h2>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          {reservation.reservationDate}
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {reservation.salePrice}
        </p>
      </div>
      <div className="flex-2 min-w-0">
        <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
          {reservation.reservationTime}
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {reservation.durationInMinutes} min
        </p>
      </div>
    </div>
  );
};

const ReservationCardBarberView = ({ reservation }: ReservationCardProps) => {
  const isAnonymous =
    reservation.client && reservation.client.name.length === 0;

  return isAnonymous ? (
    <div className="flex items-center space-x-4">
      <div className="shrink-0">
        <Avatar rounded />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          Anónimo
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          Sin registrar
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
  ) : (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <Avatar placeholderInitials="CQ" rounded />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {reservation.client.name}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {reservation.client.email}
          </p>
        </div>
        <div className="flex-2 min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
            {reservation.reservationTime}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {reservation.durationInMinutes} min
          </p>
        </div>
      </div>
    </div>
  );
};

const ReservationCard = ({ reservation }: ReservationCardProps) => {
  const isBarberUser = true;
  const isClientUser = !isBarberUser;

  return isBarberUser ? (
    <ReservationCardBarberView reservation={reservation} />
  ) : (
    <ReservationCardClientView reservation={reservation} />
  );
};

export default ReservationCard;
