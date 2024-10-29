import React from "react";
import { Datepicker } from "flowbite-react";
import { convertToDateString, getTodaysDate } from "@/app/(helpers)/date";

interface DateSelectionProps {
  handleDateChange: Function;
}

const DateSelection = ({ handleDateChange }: DateSelectionProps) => {
  return (
    <Datepicker
      minDate={getTodaysDate()}
      onSelectedDateChanged={(selectedDate: Date) => {
        handleDateChange("reservationDate", convertToDateString(selectedDate));
      }}
    />
  );
};

export default DateSelection;
