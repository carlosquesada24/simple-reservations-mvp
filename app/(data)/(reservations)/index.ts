interface AvailabilityByReservationDate {
    [key: string]: string[];
}

export const availabilityByReservationDate: AvailabilityByReservationDate = {
    '2024-10-29': ['09:00'],
    '2024-10-30': ['09:00', '10:00', '11:00', '12:00'],
    '2024-10-31': ['10:00', '11:00', '13:00'],
};