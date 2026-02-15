const DATA_BLOB ="eyJwcm9qZWN0SWQiOiAiZ2l0Y2hhdC0yYjY3NSIsICJhcHBJZCI6ICIxOjEwMjEwNTk2NTg5NjE6d2ViOmU0NTU5NDA4OTRjYTQ5NjczNDgxZjAiLCAiYXBpS2V5IjogIkFJemFTeUFpMWROQlBnVzlEbGdyY19neGpHNDBKVHVjd0pVMU8wMCIsICJhdXRoRG9tYWluIjogImdpdGNoYXQtMmI2NzUuZmlyZWJhc2VhcHAuY29tIn0=";
// Функция для получения заголовков "на лету"
function getHeaders() {
    // 1. atob декодирует Base64 -> получаем строку с процентами
    // 2. decodeURIComponent убирает проценты -> получаем чистый JSON
    return JSON.parse(decodeURIComponent(atob(DATA_BLOB)));
    //return JSON.parse(atob(DATA_BLOB));
}
