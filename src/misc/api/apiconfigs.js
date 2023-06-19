
/** API Request Config
 * @param {string} method - HTTP Method
 * @param {object} body - Request Body
 */
export function APIReqConfig(method, body) {
    return {
        method: method,
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}