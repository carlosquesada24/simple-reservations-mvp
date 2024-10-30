import React from "react";
import { Card } from "flowbite-react";

interface ReservationCardProps {
  reservationTime: string;
  reservationDate: string;
}

const ReservationCard = ({
  reservationTime,
  reservationDate,
}: ReservationCardProps) => {
  return (
    <Card className="max-w-sm">
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {reservationTime}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {reservationDate}
      </p>
    </Card>
  );
};

export default ReservationCard;
