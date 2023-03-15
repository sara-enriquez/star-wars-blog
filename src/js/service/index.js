
export const getData = async (nameData, uid) => {
    const URL = "https://www.swapi.tech/api"
    try{
        const response = await fetch(`${URL}/${nameData}/${uid}`.trim());
        const data = await response.json();
        return data
    }
    catch (err){
        console.log(err)
    }
}