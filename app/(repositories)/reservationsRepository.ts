import supabase from "@/app/(utils)/supabase";
import usersRepository from "./usersRepository";
import { USER_TYPES_IDS } from "../(data)/(reservations)";

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

const getAllReservationsByClientId = async <T>(clientId: string): Promise<SupabaseRecord<T>[]> => {
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
        `).eq("clientId", clientId);

    if (error) {
        console.log({ error });
    }

    return data ?? [];
}

const saveReservation = async <T>(reservation: T, client: any): Promise<SupabaseRecord<T>> => {
    const userExists = await usersRepository.getUserById(client.id);

    if (!userExists) {
        const userToSave = {
            id: client.id,
            userTypeId: USER_TYPES_IDS.CLIENT, // client
            name: client.name,
            email: client.email,
            phoneNumber: client.phoneNumber,
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
    getAllReservationsByClientId,
    saveReservation,
    deleteReservation,
};
