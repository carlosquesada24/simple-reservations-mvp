import React from "react";
import { Datepicker } from "flowbite-react";
import { convertToDateString } from "@/app/(helpers)/date";

interface DateSelectionProps {
  handleDateChange: Function;
}

const DateSelection = ({ handleDateChange }: DateSelectionProps) => {
  return (
    <Datepicker
      onSelectedDateChanged={(selectedDate: Date) => {
        handleDateChange("reservationDate", convertToDateString(selectedDate));
      }}
    />
  );
};

export default DateSelection;
