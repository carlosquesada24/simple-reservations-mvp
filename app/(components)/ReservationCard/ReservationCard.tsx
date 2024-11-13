import React from "react";

interface ReservationCardProps {
  reservationTime: string;
  reservationDate: string;
  salePrice: string;
  durationInMinutes: number;
}

const ReservationCard = ({
  reservationTime,
  reservationDate,
  salePrice,
  durationInMinutes,
}: ReservationCardProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          {reservationDate}
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {salePrice}
        </p>
      </div>
      <div className="flex-2 min-w-0">
        <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
          {reservationTime}
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {durationInMinutes} min
        </p>
      </div>
    </div>
  );
};

export default ReservationCard;
