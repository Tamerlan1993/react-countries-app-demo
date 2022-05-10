export async function axios({
    url = '',
    options = {}
}) {
    let response = await fetch(
        `https://restcountries.com/v3.1/${url}`.toString(),
        options
    )
    let data = response.json()
    return data;
};
