import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetAnimalcrossingAPI } from "../../apis/AnimalcrossingAPICalls"; 
import BugMemo from "../items/BugMemo";
import "../../style.css";

function BugList(){

    const result = useSelector(state => state.animalReducer);
    console.log("Rducer Result : ", result);
    
    const bugs = result;
    
    console.log("bugs:" , bugs); 

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAnimalcrossingAPI("http://acnhapi.com/v1/bugs", "GET_BUGS"))
        },
        []
    ); 
 // 액션 => 리듀서 => 포켓몬 => 리절트 
    return(
        bugs && (
            <div className="memoList">
                { bugs.map(bug => <BugMemo key= { bug.id } bug = { bug }/> )}
            </div>
        )
    );
}

export default BugList;