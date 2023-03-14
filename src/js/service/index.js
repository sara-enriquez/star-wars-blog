const URL_BASE = "https://www.swapi.tech/api"

export const getData = async (nameData, uid) => {
    try{
        const response = await fetch (`${URL_BASE}/${nameData}/${uid}`.trim());
        const data = await response.json();
        return data;
    }
    catch (err){
        console.log(err)
    }
}