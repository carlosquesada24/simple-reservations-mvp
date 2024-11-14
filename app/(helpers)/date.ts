export const getTodaysDate = () => new Date();
// export const getTodaysDate = () => new Date().toISOString().split("T")[0];

// YYYY-MM-DD
export const convertToDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};


export const formatDateToSpanishReadable = (isoString: string) => {
    const date = new Date(isoString);

    const formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    }).format(date);

    // Capitalize the first letter to match "Jueves 14 de noviembre"
    const capitalizedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return capitalizedDate;
};

export const formatTimeToSpanish12HourCR = (isoString: string) => {
    const date = new Date(isoString);

    const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true, // Use 12-hour format with a.m./p.m.
        timeZone: "America/Costa_Rica", // Adjust to the desired timezone
    }).format(date);

    return formattedTime;
};
