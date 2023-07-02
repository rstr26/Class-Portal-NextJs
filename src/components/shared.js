import { AuthToken } from "@/misc/api/requests";
import Swal from "sweetalert2";

/** Sweet Alert Component
 * @param {string} icon - Icon to be displayed
 * @param {string} title - Title of the alert
 * @param {string} text - Text of the alert
 * @param {number} duration - Duration of the alert
 */
export const Alert = (icon, title, text, duration) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: duration
    })
}

/** Sweet Alert Confirm Component
 * @param {string} icon - Icon to be displayed
 * @param {string} title - Title of the alert
 * @param {string} text - Text of the alert
 */
export const Confirm = (icon, title, text) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    })
}

/** Authorize Access to Page
 * @param {string} token - Access Token
 */
export const Authorize = async (token) => {
    if(!token){
        return 'unauthorized'
    }

    let auth = await AuthToken(token)
    let { message, role } = await auth.json()
    
    if(message === 'Forbidden'){
        return 'forbidden'
    }
    else if(message === 'Authorized'){
        return { role: role }
    }
}