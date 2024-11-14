import { Reservation, ReservationSupabaseRequest } from "../(data)/(reservations)";

export const supabaseToReservationMapper = (supabaseReservation: ReservationSupabaseRequest): Reservation => {
    console.log({ supabaseReservation })

    return {
        id: supabaseReservation.id,
        salePrice: `CRC ${supabaseReservation.salePrice}`,
        estimatedServiceDurationTimeForBarberInMinutes: supabaseReservation.estimatedServiceDurationTimeForBarberInMinutes,
        reservationDateTime: supabaseReservation.reservationDateTime,
        estimatedServiceDurationTimeForClientInMinutes: supabaseReservation.estimatedServiceDurationTimeForClientInMinutes,
        client: {
            id: supabaseReservation.Users.id,
            name: supabaseReservation.Users.name,
            email: supabaseReservation.Users.email,
            phoneNumber: supabaseReservation.Users.phoneNumber,
        }
    }
}