import { Card } from "flowbite-react";
import React from "react";

interface TimeSelectionProps {
  availableHoursList: string[];
  handleSelectTime: Function;
}

const TimeSelection = ({
  availableHoursList,
  handleSelectTime,
}: TimeSelectionProps) => {
  const isAvailableHoursListValid =
    Array.isArray(availableHoursList) && availableHoursList.length > 0;

  return (
    <>
      {isAvailableHoursListValid &&
        availableHoursList.map((hour) => (
          <Card
            key={hour}
            className="max-w-sm"
            onClick={() => handleSelectTime("reservationTime", hour)}
          >
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              {hour}
            </p>
          </Card>
        ))}
    </>
  );
};

export default TimeSelection;
