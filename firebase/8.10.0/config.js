const DATA_BLOB ="JTdCJTIycHJvamVjdElkJTIyJTNBJTIyZ2l0Y2hhdC0yYjY3NSUyMiUyQyUyMmFwcElkJTIyJTNBJTIyMSUzQTEwMjEwNTk2NTg5NjElM0F3ZWIlM0FlNDU1OTQwODk0Y2E0OTY3MzQ4MWYwJTIyJTJDJTIyYXBpS2V5JTIyJTNBJTIyQUl6YVN5QWkxZE5CUGdXOURsZ3JjX2d4akc0MEpUdWN3SlUxTzAwJTIyJTJDJTIyYXV0aERvbWFpbiUyMiUzQSUyMmdpdGNoYXQtMmI2NzUuZmlyZWJhc2VhcHAuY29tJTIyJTJDJTIyZGF0YWJhc2VVUkwlMjIlM0ElMjJodHRwcyUzQSUyRiUyRmdpdGNoYXQtMmI2NzUtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tJTIyJTdE";
// Функция для получения заголовков "на лету"
function getHeaders() {
    // 1. atob декодирует Base64 -> получаем строку с процентами
    // 2. decodeURIComponent убирает проценты -> получаем чистый JSON
    return JSON.parse(decodeURIComponent(atob(DATA_BLOB)));
    //return JSON.parse(atob(DATA_BLOB));
}
