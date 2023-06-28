
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

/** API Request Config for Token Authorization
 * @param {string} method - HTTP Method
 * @param {string} token - Access Token
 * @param {object} body - Request Body
 */
export function APIReqConfigToken(method, token, body) {
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }
}