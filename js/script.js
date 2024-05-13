const api = "https://www.breakingbadapi.com/api/";

async function getData()
{
    const response = await fetch(api)
    const data = await response.json();

    console.log(data)
    
}
getData()
