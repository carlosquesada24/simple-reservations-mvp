"use client";
import useFormSteps from "@/app/(hooks)/useFormSteps";
import DateSelection from "./(components)/DateSelection/DateSelection";
import TimeSelection from "./(components)/TimeSelection/TimeSelection";
import UserInformation from "./(components)/UserInformation/UserInformation";

import { Button } from "flowbite-react";

import { useForm } from "@/app/(hooks)/useForm";

import { availabilityByReservationDate } from "@/app/(data)/(reservations)";
import { convertToDateString, getTodaysDate } from "@/app/(helpers)/date";

interface ReservationFormValues {
  reservationDate: string;
  reservationTime: string;
  email: string;
  phoneNumber: string;
  name: string;
}

const reservationFormEmptyState: ReservationFormValues = {
  reservationDate: convertToDateString(getTodaysDate()),
  reservationTime: "",
  email: "",
  phoneNumber: "",
  name: "",
};

const RESERVATION_FORM_STEPS = {
  DATE_SELECTION: 1,
  HOUR_SELECTION: 2,
  USER_INFORMATION: 3,
};

export default function ReservationPage() {
  const {
    values: formValues,
    errors,
    handleInputChange,
    validateField,
  } = useForm(reservationFormEmptyState, {});
  console.log({ formValues });
  const { currentFormStep, advanceToNextFormStep, backToPreviousFormStep } =
    useFormSteps(
      RESERVATION_FORM_STEPS.DATE_SELECTION,
      RESERVATION_FORM_STEPS.USER_INFORMATION,
    );

  const firstFormStep = RESERVATION_FORM_STEPS.DATE_SELECTION;
  const lastFormStep = RESERVATION_FORM_STEPS.USER_INFORMATION;

  const availableHoursList: string[] =
    availabilityByReservationDate[formValues.reservationDate];

  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Página de reservación</h1>
      <hr />

      {/* FORM */}

      <form>
        {/* <Stepper /> */}

        {/* STEP 1 */}
        {currentFormStep === RESERVATION_FORM_STEPS.DATE_SELECTION && (
          <DateSelection
            reservationDate={formValues.reservationDate}
            handleDateChange={handleInputChange}
          />
        )}

        {/* STEP 2 */}
        {currentFormStep === RESERVATION_FORM_STEPS.HOUR_SELECTION && (
          <TimeSelection
            availableHoursList={availableHoursList}
            selectedTime={formValues.reservationTime}
            handleSelectTime={handleInputChange}
          />
        )}

        {/* STEP 3 */}
        {currentFormStep === RESERVATION_FORM_STEPS.USER_INFORMATION && (
          <UserInformation
            email={formValues.email}
            phoneNumber={formValues.phoneNumber}
            name={formValues.name}
            handleInputChange={handleInputChange}
          />
        )}

        {currentFormStep !== firstFormStep && (
          <Button onClick={backToPreviousFormStep}>Anterior</Button>
        )}

        {currentFormStep !== lastFormStep && (
          <Button onClick={advanceToNextFormStep}>Siguiente</Button>
        )}

        {currentFormStep === lastFormStep && <Button>Reservar</Button>}
      </form>

      {/* STEPPER */}
    </main>
  );
}
