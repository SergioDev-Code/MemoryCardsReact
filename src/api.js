
//Consulta a la API
async function dataCountriesApi(){
    let apiUrl = 'https://restcountries.com/v3.1/region/asia?fields=name,flags,idd'; 
    const response = await fetch(apiUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('La solicitud no tuvo éxito');
        }
        return response.json();
    })
    .then(function(data) {
        
        return data
    })
  
    return response
}

function randomDataSelectionApi(dataApi, num){
    const copyData = []
    let random = 0

    for (let index = 0; index < num; index++) {
        random = Math.floor(Math.random() * dataApi.length);
        copyData.push(dataApi[random])
        copyData.push(dataApi[random])
        dataApi.splice(random,1);
    }

    return copyData
}

async function mainApi(numCard){
    const dataApi = await dataCountriesApi();
    const data = randomDataSelectionApi(dataApi, numCard);
    return data;
}

export default mainApi;