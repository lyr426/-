import "../../style.css"
import { Link } from 'react-router-dom'; 
function VillagerMemo({ villager }){

    return (
        <Link to={ `/villagers/${ villager.id }`}> 
            <div className="memo">
                <div><img src={villager.icon_uri}></img>
                <div>{villager.name["name-KRko"]}</div>
                </div>
            </div>
        </Link>
    )
}

export default VillagerMemo;