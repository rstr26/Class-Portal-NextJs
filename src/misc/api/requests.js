import { APIReqConfig } from "./apiconfigs";

/** Login From Landing Page
 * @param {string} username - Username
 * @param {string} password - Password
 */
export async function Login(username, password) {
    const res = await fetch('/api/login', APIReqConfig('POST', { username, password }));
    
    return res;
}