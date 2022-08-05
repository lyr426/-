import { GET_FOSSILS, GET_VILLAGERS, GET_FISHS, GET_BUGS } from '../modules/AnimalcrossingModule'

export function callGetAnimalcrossingAPI(url, type){

    // 여기서 url을 분리한다. 
    const requestURL = url || 'http://acnhapi.com/v1/villagers'; 
    console.log(requestURL);

    switch(type){
        case 'GET_VILLAGERS' :
            return async function getVillagers(dispatch, getState){
            const result = await fetch(requestURL).then(res => res.json())
                                                .then(res => Object.values(res));
            console.log('result: ', result);

            dispatch({ type: GET_VILLAGERS, payload: result});
        }
        case 'GET_FOSSILS' :
            return async function getFossils(dispatch, getState){
                const result = await fetch(requestURL).then(res => res.json())
                                                    .then(res => Object.values(res));
                console.log('result: ', result);
    
                dispatch({ type: GET_FOSSILS, payload: result});
            }
        case 'GET_BUGS' :
            return async function getBugs(dispatch, getState){
                const result = await fetch(requestURL).then(res => res.json())
                                                    .then(res => Object.values(res));
                console.log('result: ', result);
    
                dispatch({ type: GET_BUGS, payload: result});
            }
        case 'GET_FISHS' :
            return async function getFishs(dispatch, getState){
                const result = await fetch(requestURL).then(res => res.json())
                                                    .then(res => Object.values(res));
                console.log('result: ', result);
    
                dispatch({ type: GET_FISHS, payload: result});
            }
        
        default :
            return ; 
    }

}