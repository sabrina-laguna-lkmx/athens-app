export function formatDate(date) {
    const timeZoneOffset = date.getTimezoneOffset();
    const currentDateInTimeZone = new Date(date.getTime() - timeZoneOffset * 60000);
    return currentDateInTimeZone;
}