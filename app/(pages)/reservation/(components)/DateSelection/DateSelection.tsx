import React from "react";
import { Datepicker } from "flowbite-react";
import { convertToDateString, getTodaysDate } from "@/app/(helpers)/date";

interface DateSelectionProps {
  reservationDate: string;
  handleDateChange: Function;
}

const DateSelection = ({
  reservationDate,
  handleDateChange,
}: DateSelectionProps) => {
  return (
    <Datepicker
      minDate={getTodaysDate()}
      name="reservationDate"
      value={reservationDate}
      onSelectedDateChanged={(selectedDate: Date) => {
        handleDateChange("reservationDate", convertToDateString(selectedDate));
      }}
    />
  );
};

export default DateSelection;
