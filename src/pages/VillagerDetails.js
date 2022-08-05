import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetAnimalcrossingAPI } from "../apis/AnimalcrossingAPICalls"; 
import "../style.css";
import { useParams } from "react-router-dom"; 


function VillagerDetails(){
    
    const { villagerId } = useParams();
    const result = useSelector(state => state.animalReducer);
    const villagers = result;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAnimalcrossingAPI( `http://acnhapi.com/v1/villagers`, "GET_VILLAGERS"))
        },
        []
    ); 

    console.log(villagers);
    const id = Number(villagerId)-1;
    console.log(id); 
    const villager = villagers[id];


    return (
       <div className="villagerDetails">

            <img src={ villager.image_uri }></img>
            <div className="villagerDetailText">
                <div> 이름 : { villager.name["name-KRko"] } </div>
                <div> 생일 : { villager["birthday-string"] }</div>
                <div> 말버릇 : { villager["catch-translations"]["catch-KRko"]}</div>
                <div> 성별 : { villager.gender }</div>
            </div>

       </div>
    );
}

export default VillagerDetails;