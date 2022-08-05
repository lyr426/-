import "../../style.css"
function VillagerMemo({ villager }){

    return (
        <div className="memo">
            <div><img src={villager.icon_uri}></img>
            <div>{villager.name["name-KRko"]}</div>
            </div>
        </div>
    )
}

export default VillagerMemo;