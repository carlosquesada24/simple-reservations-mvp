import { Card } from "flowbite-react";
import React from "react";

interface TimeSelectionProps {
  availableHoursList: string[];
  selectedTime: string;
  handleSelectTime: Function;
}

const TimeSelection = ({
  availableHoursList,
  selectedTime,
  handleSelectTime,
}: TimeSelectionProps) => {
  const isAvailableHoursListValid =
    Array.isArray(availableHoursList) && availableHoursList.length > 0;

  return (
    <>
      {isAvailableHoursListValid &&
        availableHoursList.map((hour) => {
          const isSelected = selectedTime === hour;

          return (
            <Card
              key={hour}
              className={`max-w-sm ${isSelected && "bg-blue-700"}`}
              onClick={() => handleSelectTime("reservationTime", hour)}
            >
              <p
                className={`text-center font-normal text-gray-700 dark:text-gray-400 ${isSelected && "text-white"}`}
              >
                {hour}
              </p>
            </Card>
          );
        })}
    </>
  );
};

export default TimeSelection;
