import { Card } from "flowbite-react";
import React from "react";

interface TimeSelectionProps {
  availableHoursList: string[];
}

const TimeSelection = ({ availableHoursList }: TimeSelectionProps) => {
  return (
    <>
      {availableHoursList.length > 0 &&
        availableHoursList.map((hour) => (
          <Card key={hour} className="max-w-sm">
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              {hour}
            </p>
          </Card>
        ))}
    </>
  );
};

export default TimeSelection;
