import React from "react";
import ReservationCard from "@/app/(components)/ReservationCard/ReservationCard";

const ReservationsList = () => {
  return (
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <ReservationCard
            salePrice="CRC 3,500.00"
            durationInMinutes={45}
            reservationDate="Viernes 15 de noviembre"
            reservationTime="10:00 a.m."
          />
        </li>
        <li className="py-3 sm:py-4">
          <ReservationCard
            salePrice="CRC 3,500.00"
            durationInMinutes={45}
            reservationDate="Lunes 14 de octubre"
            reservationTime="02:00 p.m."
          />
        </li>
      </ul>
    </div>
  );
};

export default ReservationsList;
