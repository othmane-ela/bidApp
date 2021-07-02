
/**
 *   Represent an Error resend from API 
 */
export class ApiErrors{
    constructor(errors) {
        this.errors = errors;
    }
}

/**
 * 
 * @param {string} endpoints 
 * @param {object} options 
 */
export async function apiFetch(endpoint, options = {}) {
    const response = await fetch("http://localhost:8080" + endpoint, {
          credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
        },
        ...options
    })
    if (response.status === 204) {
        return null;
    }
    const responseData = await response.json();
    if (response.ok) {
        return responseData
    }
    else {
        if (responseData.error) {
            throw new ApiErrors(responseData.error)
        }
    }
        
}