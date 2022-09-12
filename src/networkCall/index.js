
export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = response.json()
    return data;
}


