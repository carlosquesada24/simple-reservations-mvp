import { Reservation, ReservationSupabaseRequest } from "../(data)/(reservations)";

export const supabaseToReservationMapper = (supabaseReservation: ReservationSupabaseRequest): Reservation => {
    return {
        id: "",
        salePrice: "",
        durationInMinutes: 0,
        reservationDateTime: "",
        estimatedServiceDurationTimeForClientInMinutes: 0,
        client: {
            id: "",
            name: "",
            email: "",
            phoneNumber: "",
        }
    }
}