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