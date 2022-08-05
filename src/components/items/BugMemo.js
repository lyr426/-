import "../../style.css"
function BugMemo({ bug }){

    return (
        <div className="memo">
            <div><img src={ bug.icon_uri }></img>
            <div>{ bug.name["name-KRko"] }</div>
            <div>{ bug.price } 벨 </div>
            </div>
        </div>
    )
}

export default BugMemo;