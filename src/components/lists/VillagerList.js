import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetAnimalcrossingAPI } from "../../apis/AnimalcrossingAPICalls"; 
import VillagerMemo from "../items/VillagerMemo";
import "../../style.css";

function VillagerList(){

    const result = useSelector(state => state.villagerReducer);
    console.log("Rducer Result : ", result);
    
    const villagers = result;
    
    console.log("villagers:" , villagers); 

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAnimalcrossingAPI())
        },
        []
    ); 
 // 액션 => 리듀서 => 포켓몬 => 리절트 
    return(
        villagers && (
            <div className="memoList">
                { villagers.map(villager => <VillagerMemo key= {villager.id} villager = { villager }/> )}
            </div>
        )
    );
}

export default VillagerList;