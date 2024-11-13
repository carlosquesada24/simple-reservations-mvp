import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

interface ReservationCardProps {
  reservationTime: string;
  reservationDate: string;
}

const ReservationItem = () => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        {/* <div className="shrink-0">
          <Image
            alt="Neil image"
            height="32"
            src="/images/people/profile-picture-1.jpg"
            width="32"
            className="rounded-full"
          />
        </div> */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            Vie 20 noviembre
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            CRC 3,500.00
          </p>
        </div>
        <div className="flex-2 min-w-0">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            10:00 a.m.
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            45 min
          </p>
        </div>
        {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          10:00 a.m.
        </div> */}
      </div>
    </li>
  );
};

const ReservationCard = ({
  reservationTime,
  reservationDate,
}: ReservationCardProps) => {
  return (
    // <Card className="max-w-sm">
    //   <p className="font-normal dark:text-gray-400">{reservationTime}</p>
    //   <p className="font-bold text-gray-700 dark:text-gray-400">
    //     {reservationDate}
    //   </p>
    //   {/* <p>Carlos Humberto Quesada Umaña</p> */}
    // </Card>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <ReservationItem />
        <ReservationItem />
      </ul>
    </div>
  );
};

export default ReservationCard;
