import { GET_VILLAGERS } from '../modules/AnimalcrossingModule'

export function callGetAnimalcrossingAPI(url, params){

    const requestURL = url || 'http://acnhapi.com/v1/villagers'; 

    return async function getVillagers(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json())
                                              .then(res => Object.values(res));
        console.log('result: ', result);

        dispatch({ type: GET_VILLAGERS, payload: result});
    }
}