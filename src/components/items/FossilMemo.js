import "../../style.css"
function FossilMemo({ fossil }){

    return (
        <div className="memo">
            <div><img src={ fossil.image_uri }></img>
            <div>{ fossil.name["name-KRko"] }</div>
            <div>{ fossil.price } 벨 </div>
            </div>
        </div>
    )
}

export default FossilMemo;