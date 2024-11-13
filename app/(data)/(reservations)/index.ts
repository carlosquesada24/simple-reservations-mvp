interface AvailabilityByReservationDate {
    [key: string]: string[];
}

export const availabilityByReservationDate: AvailabilityByReservationDate = {
    '2024-11-12': ['13:30'],
    '2024-11-13': ['09:00', '10:00', '11:00', '12:00'],
    '2024-11-14': ['10:00', '11:00', '13:00'],
};

export interface Reservation {
    id: string;
    salePrice: string;
    durationInMinutes: number;
    reservationDate: string;
    reservationTime: string;
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
        durationInMinutes: 45,
        reservationDate: "Viernes 15 de noviembre",
        reservationTime: "10:00 a.m.",
        client: {
            id: "e9248f50-f6bd-4325-94e9-798edee4a267",
            name: "Carlos",
            email: "carlos.test@gmail.com",
            phoneNumber: "84878116",
        }
    },
    {
        id: "24066a9d-610a-4dce-91ed-0fab5ad88bfc",
        salePrice: "CRC 3,500.00",
        durationInMinutes: 45,
        reservationDate: "Lunes 14 de octubre",
        reservationTime: "04:00 p.m.",
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
        durationInMinutes: 45,
        reservationDate: "Viernes 15 de noviembre",
        reservationTime: "10:00 a.m.",
        client: {
            id: "e9248f50-f6bd-4325-94e9-798edee4a267",
            name: "Carlos",
            email: "carlos.test@gmail.com",
            phoneNumber: "84878116",
        }
    },
    {
        id: "24066a9d-610a-4dce-91ed-0fab5ad88bfc",
        salePrice: "CRC 3,500.00",
        durationInMinutes: 45,
        reservationDate: "Viernes 15 de noviembre",
        reservationTime: "05:00 p.m.",
        client: {
            id: "e9248f50-f6bd-4325-94e9-798edee4a267",
            name: "",
            email: "",
            phoneNumber: "",
        }
    },
];