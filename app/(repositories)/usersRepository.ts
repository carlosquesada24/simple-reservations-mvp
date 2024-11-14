import supabase from "@/app/(utils)/supabase";

type SupabaseRecord<T> = T & { id: string };

const getUserById = async <T>(clientId: string): Promise<boolean> => {
    const resultUserExists = await supabase.from("Users").select("id").eq("id", clientId);
    const userExists = (resultUserExists !== null && resultUserExists?.data) && resultUserExists?.data[0]?.id.length > 0;

    if (resultUserExists.error) {
        console.log(resultUserExists.error)
    }

    return userExists ?? false
};

const saveUser = async <T>(user: T): Promise<SupabaseRecord<T>> => {
    const resultUserCreated = await supabase.from("Users").insert(user).select();

    if (resultUserCreated.error) {
        console.log(resultUserCreated.error)
    }

    const userCreated = (resultUserCreated !== null && resultUserCreated.data !== null) ? resultUserCreated.data[0] : {};

    return userCreated as SupabaseRecord<T>;
};


export default {
    getUserById,
    saveUser,
};
