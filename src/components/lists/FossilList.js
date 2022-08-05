import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetAnimalcrossingAPI } from "../../apis/AnimalcrossingAPICalls"; 
import FossilMemo from "../items/FossilMemo";
import "../../style.css";

function FossilList(){

    const result = useSelector(state => state.animalReducer);
    console.log("Rducer Result : ", result);
    
    const fossils = result;
    
    console.log("fossils:" , fossils); 

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAnimalcrossingAPI("http://acnhapi.com/v1/fossils", "GET_FOSSILS"))
        },
        []
    ); 
 // 액션 => 리듀서 => 포켓몬 => 리절트 
    return(
        fossils && (
            <div className="memoList">
                { fossils.map(fossil => <FossilMemo key= { fossil["file-name"] } fossil = { fossil }/> )}
            </div>
        )
    );
}

export default FossilList;