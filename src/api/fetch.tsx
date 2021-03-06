const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const get = async (url: String) => {
    let response = await fetch(BASE_URL + url);
    let responseJson = await response.json();
    return responseJson;
}
export const post = (url: string, params: Object) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
}
export const put = (url: string, params: Object) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
}
export const del = (url: string) => {
    return fetch(url, {
        method: 'DELETE'
    });
}