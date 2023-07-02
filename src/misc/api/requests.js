import { APIReqConfig, APIReqConfigToken } from "./apiconfigs";

/** Login From Landing Page
 * @param {string} username - Username
 * @param {string} password - Password
 */
export async function Login(username, password) {
    const res = await fetch('/api/login', APIReqConfig('POST', { username, password }));
    
    return res;
}

/** Authenticate / Authorize Token
 * @param {string} token - Access Token
 */
export async function AuthToken(token) {
    const res = await fetch('/api/auth', APIReqConfigToken('POST', token, {}));

    return res;
}