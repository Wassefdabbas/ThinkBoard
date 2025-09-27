export function getUserId() {
    let userId = localStorage.getItem('think-board-userId');

    if (!userId) {
        userId = crypto.randomUUID();
        localStorage.setItem('think-board-userId', userId);
    }

    return userId;
}