import { Reservation, GetReservationSupabaseResponse, SaveReservationSupabaseRequestInput } from "../(data)/(reservations)";

export const supabaseToReservationMapper = (supabaseReservation: GetReservationSupabaseResponse): Reservation => {
    console.log({ supabaseReservation })

    return {
        id: supabaseReservation.id,
        reservationDateTime: supabaseReservation.reservationDateTime,
        serviceDurationInMinutes: supabaseReservation.serviceDurationInMinutes,
        totalSlotDurationInMinutes: supabaseReservation.totalSlotDurationInMinutes,
        salePrice: `CRC ${supabaseReservation.salePrice}`,
        client: {
            id: supabaseReservation.Users.id,
            name: supabaseReservation.Users.name,
            email: supabaseReservation.Users.email,
            phoneNumber: supabaseReservation.Users.phoneNumber,
        }
    }
}

export const reservationFormValuesToSupabaseMapper = (formValues: any, clientId: string): SaveReservationSupabaseRequestInput => {
    return {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        reservationDate: formValues.reservationDate,
        reservationDateTime: new Date(
            `${formValues.reservationDate} ${formValues.reservationTime}`,
        ).toISOString(),
        reservationTime: formValues.reservationTime,
        totalSlotDurationInMinutes: 60,
        serviceDurationInMinutes: 45,
        salePrice: 4000,
        clientId
    }
}