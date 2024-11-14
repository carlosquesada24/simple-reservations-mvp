interface AvailabilityByReservationDate {
    [key: string]: string[];
}

export const availabilityByReservationDate: AvailabilityByReservationDate = {
    '2024-11-12': ['13:30'],
    '2024-11-13': ['09:00', '10:00', '11:00', '12:00'],
    '2024-11-14': ['10:00', '11:00', '13:00'],
};

export interface ReservationSupabaseRequest {
    id: string;
    created_at: string;
    reservationDate: string;
    reservationDateTime: string;
    reservationTime: string;
    totalSlotDurationInMinutes: number;
    serviceDurationInMinutes: number;
    salePrice: number;
    Users: {
        id: string
        name: string;
        email: string;
        phoneNumber: string;
    }
}

export interface Reservation {
    id: string;
    salePrice: string;
    totalSlotDurationInMinutes: number;
    reservationDateTime: string; // day date month
    serviceDurationInMinutes: number;
    client: {
        id: string;
        name: string;
        email: string;
        phoneNumber: string;
    }
}

export const clientReservationsList: Reservation[] = [
    {

        id: "51f03f51-0af6-49bf-af0c-bdf356d56664",
        salePrice: "CRC 3,500.00",
        serviceDurationInMinutes: 45,
        reservationDateTime: "Viernes 15 de noviembre",
        totalSlotDurationInMinutes: 60,
        client: {
            id: "e9248f50-f6bd-4325-94e9-798edee4a267",
            name: "Carlos",
            email: "carlos.test@gmail.com",
            phoneNumber: "84878116",
        }
    },
    {
        id: "51f03f51-0af6-49bf-af0c-bdf356d56664",
        salePrice: "CRC 3,500.00",
        serviceDurationInMinutes: 45,
        reservationDateTime: "Lunes 14 de noviembre",
        totalSlotDurationInMinutes: 60,
        client: {
            id: "e9248f50-f6bd-4325-94e9-798edee4a267",
            name: "Carlos",
            email: "carlos.test@gmail.com",
            phoneNumber: "84878116",
        }
    },
];


export const barberReservationsList: Reservation[] = [
    {
        id: "51f03f51-0af6-49bf-af0c-bdf356d56664",
        salePrice: "CRC 3,500.00",
        serviceDurationInMinutes: 45,
        reservationDateTime: "Lunes 14 de noviembre",
        totalSlotDurationInMinutes: 60,
        client: {
            id: "e9248f50-f6bd-4325-94e9-798edee4a267",
            name: "Carlos",
            email: "carlos.test@gmail.com",
            phoneNumber: "84878116",
        }
    },
    {
        id: "51f03f51-0af6-49bf-af0c-bdf356d56664",
        salePrice: "CRC 3,500.00",
        serviceDurationInMinutes: 45,
        reservationDateTime: "Lunes 14 de noviembre",
        totalSlotDurationInMinutes: 60,
        client: {
            id: "e9348f50-f6bd-4325-94e9-798edee4a267",
            name: "",
            email: "",
            phoneNumber: "",
        }
    },
];