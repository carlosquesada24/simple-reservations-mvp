import supabase from "@/app/(utils)/supabase";
import usersRepository from "./usersRepository";

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

const saveReservation = async <T>(reservation: T, clientId: string): Promise<SupabaseRecord<T>> => {
    const userExists = await usersRepository.getUserById(clientId);

    if (!userExists) {
        const userToSave = {
            id: clientId,
            userTypeId: "45b57400-c54d-4aec-8e76-720113cdc387", // client
            name: "",
            email: "",
            phoneNumber: "",
        }

        await usersRepository.saveUser(userToSave);
    }

    const resultReservationCreated = await supabase.from("Reservations").insert(reservation).select();

    if (resultReservationCreated.error) {
        console.log(resultReservationCreated.error);
    }

    const isResultValid = resultReservationCreated.data && Array.isArray(resultReservationCreated.data);
    const reservationInserted = isResultValid ? resultReservationCreated.data[0] : null;

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
