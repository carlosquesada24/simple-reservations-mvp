export const USER_TYPES_IDS = {
    CLIENT: "45b57400-c54d-4aec-8e76-720113cdc387",
    BARBER: "230fe623-4bde-48b5-9b1e-2c372b41ca8b",
}

interface AvailabilityByReservationDate {
    [key: string]: string[];
}

export const availabilityByReservationDate: AvailabilityByReservationDate = {
    '2024-11-12': ['13:30'],
    '2024-11-13': ['09:00', '10:00', '11:00', '12:00'],
    '2024-11-14': ['10:00', '11:00', '13:00'],
    '2024-11-15': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    '2024-11-16': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    '2024-11-17': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    '2024-11-18': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    '2024-11-19': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    '2024-11-20': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    '2024-11-21': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    '2024-11-22': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
};

export interface GetReservationSupabaseResponse {
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

export interface SaveReservationSupabaseRequestInput {
    id: string;
    created_at: string;
    reservationDate: string;
    reservationDateTime: string;
    reservationTime: string;
    totalSlotDurationInMinutes: number;
    serviceDurationInMinutes: number;
    salePrice: number;
    clientId: string;
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