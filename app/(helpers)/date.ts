export const getTodaysDate = () => new Date();
// export const getTodaysDate = () => new Date().toISOString().split("T")[0];

// YYYY-MM-DD
export const convertToDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};