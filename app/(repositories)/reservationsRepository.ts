import supabase from "@/app/(utils)/supabase";

type SupabaseRecord<T> = T & { id: string };

const getAllReservations = async <T>(): Promise<SupabaseRecord<T>[]> => {
    const { data, error } = await supabase.from("Reservations").select(`
        id,
        created_at,
        totalSlotDurationInMinutes,
        serviceDurationInMinutes,
        reservationDate,
        reservationDateTime,
        reservationTime,
        salePrice,
        Users (id, name, email, phoneNumber)
        `);

    if (error) {
        console.log({ error });
    }

    return data ?? [];
};

const saveReservation = async <T>(reservation: T): Promise<SupabaseRecord<T>> => {
    const result = await supabase.from("Reservations").upsert(reservation).select();

    if (result.error) {
        console.log(result.error);
    }

    const isResultValid = result.data && Array.isArray(result.data);
    const reservationInserted = isResultValid ? result.data[0] : null;

    return reservationInserted as SupabaseRecord<T>;
};

const deleteReservation = async (reservationId: string) => {
    const { error } = await supabase.from("Reservations").delete().eq("id", reservationId);

    if (error) {
        console.error(error);
    }
};

export default {
    getAllReservations,
    saveReservation,
    deleteReservation,
};
