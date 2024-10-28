"use client";
import useFormSteps from "@/app/(hooks)/useFormSteps";
import DateSelection from "./(components)/DateSelection/DateSelection";
import TimeSelection from "./(components)/TimeSelection/TimeSelection";
import UserInformation from "./(components)/UserInformation/UserInformation";

import { useForm } from "@/app/(hooks)/useForm";

interface ReservationFormValues {
  reservationDate: string;
  reservationTime: string;
  email: string;
  phoneNumber: string;
  name: string;
}

const reservationFormEmptyState: ReservationFormValues = {
  reservationDate: "",
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

  const { currentFormStep, advanceToNextFormStep, backToPreviousFormStep } =
    useFormSteps(
      RESERVATION_FORM_STEPS.DATE_SELECTION,
      RESERVATION_FORM_STEPS.USER_INFORMATION,
    );

  return (
    <main className="">
      <h1 className="text-2xl dark:text-white">Página de reservación</h1>
      <hr />

      {/* FORM */}

      <form>
        {/* STEPPER */}

        {/* <Stepper /> */}

        {/* STEP 1 */}
        <DateSelection />
        <hr />

        {/* STEP 2 */}
        <TimeSelection />
        <hr />
        {/* STEP 3 */}
        <UserInformation />
        <hr />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Reservar
        </button>
      </form>

      {/* STEPPER */}
    </main>
  );
}
