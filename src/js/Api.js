/***
 * 
 * Файл содержит функции для обращения к API серверов Green API.
 * 
 */

const apiUrl = 'https://7103.api.greenapi.com'


/**
 * Совершает запрос по адресу с указанными параметрами.
 * @param url -- строка запроса 
 * @param body -- параметры запроса
 * @returns 
 */
export const fetchData = async (url, body) => {
    try {

        const response = await fetch(url, body);
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

/**
 * Запрашивает настройки аккаунта.
 * @param {*} idInstance 
 * @param {*} apiTokenInstance 
 * @returns 
 */
export const getSettingsRequest = async (idInstance, apiTokenInstance) => {
    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    const body = { method: 'GET' };
    const data = await fetchData(url, body);
    return data;
}

/**
 * Запрашивает текщее состояние аккаунта.
 * @param {*} idInstance 
 * @param {*} apiTokenInstance 
 * @returns 
 */
export async function getStateInstanceRequest(idInstance, apiTokenInstance) {
    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
    const body = { method: 'GET' };
    const data = await fetchData(url, body);
    return data;
}

/**
 * Отправляет сообщение в указанный чат.
 * @param {*} idInstance 
 * @param {*} apiTokenInstance 
 * @param {*} phoneNumber 
 * @param {*} messageText 
 * @returns 
 */
export async function sendMessage(idInstance, apiTokenInstance, phoneNumber, messageText) {
    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const body = {
        method: 'POST',
        body: JSON.stringify({
            chatId: `${phoneNumber}@c.us`,
            message: messageText
        })
    };

    const data = await fetchData(url, body);
    return data;
}

/**
 * Отправляет файл по его URL-адресу в указанный чат.
 * @param {*} idInstance 
 * @param {*} apiTokenInstance 
 * @param {*} phoneNumber 
 * @param {*} fileURL 
 * @param {*} fileName 
 * @returns 
 */
export async function sendFileByURL(idInstance, apiTokenInstance, phoneNumber, fileURL, fileName) {
    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    const body = {
        method: 'POST',
        body: JSON.stringify({
            chatId: `${phoneNumber}@c.us`,
            urlFile: fileURL,
            fileName: fileName
        })
    };

    console.log(body)

    const data = await fetchData(url, body);
    return data;
}
