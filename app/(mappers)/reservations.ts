import { Reservation, ReservationSupabaseRequest } from "../(data)/(reservations)";

export const supabaseToReservationMapper = (supabaseReservation: ReservationSupabaseRequest): Reservation => {
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