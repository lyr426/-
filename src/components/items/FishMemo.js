import "../../style.css"
function FishMemo({ fish }){

    return (
        <div className="memo">
            <div><img src={ fish.icon_uri }></img>
            <div>{ fish.name["name-KRko"] }</div>
            <div>{ fish.price } 벨 </div>
            </div>
        </div>
    )
}

export default FishMemo;