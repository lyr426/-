import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetAnimalcrossingAPI } from "../../apis/AnimalcrossingAPICalls"; 
import FishMemo from "../items/FishMemo";
import "../../style.css";

function FishList(){

    const result = useSelector(state => state.animalReducer);
    console.log("Rducer Result : ", result);
    
    const fishs = result;
    
    console.log("fishs:" , fishs); 

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAnimalcrossingAPI("http://acnhapi.com/v1/fish", "GET_FISHS"))
        },
        []
    ); 
 // 액션 => 리듀서 => 포켓몬 => 리절트 
    return(
        fishs && (
            <div className="memoList">
                { fishs.map(fish => <FishMemo key= { fish.id } fish = { fish }/> )}
            </div>
        )
    );
}

export default FishList;