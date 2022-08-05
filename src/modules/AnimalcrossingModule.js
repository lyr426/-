import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        id:0,
        name:''
    }
];

export const GET_VILLAGERS = 'villagers/GET_VILLAGERS';
export const GET_FOSSILS = 'fossils/GET_FOSSILS';
export const GET_BUGS = 'bugs/GET_BUGS'; 
export const GET_FISHS = 'fishs/GET_FISHS'; 

const actions = createActions({
    [GET_VILLAGERS]: () => {},
    [GET_FOSSILS] : () => {},
    [GET_BUGS] : () => {},
    [GET_FISHS] : () => {}
});

console.log('animalActions: ', actions);

const animalReducer = handleActions(
    {
        [GET_VILLAGERS]: (state, { payload }) => {
            console.log('payload : ', payload);
            return payload;
        },
        [GET_FOSSILS]: (state,  { payload }) => {
            console.log('payload : ', payload);
            return payload;
        },
        [GET_BUGS]: (state,  { payload }) => {
            console.log('payload : ', payload);
            return payload;
        },
        [GET_FISHS]: (state,  { payload }) => {
            console.log('payload : ', payload);
            return payload;
        }
    },
    initialState
);

export default animalReducer; 