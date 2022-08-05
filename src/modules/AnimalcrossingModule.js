import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        id:0,
        name:''
    }
];

export const GET_VILLAGERS = 'villagers/GET_VILLAGERS';

const actions = createActions({
    [GET_VILLAGERS]: () => {}
});

console.log('animalActions: ', actions);

const villagerReducer = handleActions(
    {
        [GET_VILLAGERS]: (state, { payload }) => {
            console.log('payload : ', payload);
            return payload;
        }
    },
    initialState
);

export default villagerReducer; 