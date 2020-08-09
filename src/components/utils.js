import { TOKEN, USER_DATA } from "./constants";

export const getStoredUserData = () => window.localStorage.getItem(USER_DATA);
export const getStoredToken = () => window.localStorage.getItem(TOKEN);
export const isExpiredToken = () => getStoredToken() === null;
