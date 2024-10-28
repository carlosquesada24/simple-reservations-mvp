import { Card } from "flowbite-react";
import React from "react";

const TimeSelection = () => {
  return (
    <>
      <Card className="max-w-sm">
        <p className="text-center font-normal text-gray-700 dark:text-gray-400">
          10:00
        </p>
      </Card>
      <Card className="max-w-sm">
        <p className="text-center font-normal text-gray-700 dark:text-gray-400">
          11:00
        </p>
      </Card>
      <Card className="max-w-sm">
        <p className="text-center font-normal text-gray-700 dark:text-gray-400">
          12:00
        </p>
      </Card>
    </>
  );
};

export default TimeSelection;
