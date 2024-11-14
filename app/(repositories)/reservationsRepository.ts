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
    alert('From repository');

    // Creo el cliente
    const result = await supabase.from("Users").insert({
        id: crypto.randomUUID(), // localStorage.clientId
        userTypeId: "45b57400-c54d-4aec-8e76-720113cdc387", // client
        name: "",
        email: "",
        phoneNumber: "",
    }).select();

    // creo la reservation

    const result2 = await supabase.from("Reservations").insert({
        id: crypto.randomUUID(),
        reservationDate: new Date().toISOString().split('T')[0],
        reservationDateTime: new Date().toISOString(),
        reservationTime: "14:00:00",
        totalSlotDurationInMinutes: 60,
        serviceDurationInMinutes: 45,
        salePrice: 4000,
        clientId: result?.data !== null ? result?.data[0]?.id : "",
    }).select();
    // // upsert

    "generar uuid de reserva"

    console.log({ result2 })

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
