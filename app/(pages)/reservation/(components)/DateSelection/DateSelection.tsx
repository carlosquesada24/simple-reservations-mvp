import React from "react";
import { Datepicker } from "flowbite-react";

interface DateSelectionProps {
  handleDateChange: Function;
}

const DateSelection = ({ handleDateChange }: DateSelectionProps) => {
  return (
    <Datepicker
      onSelectedDateChanged={(selectedDate: Date) => {
        console.log({ selectedDate });
        handleDateChange("reservationDate", selectedDate);
      }}
    />
  );
};

export default DateSelection;
