import { NavLink } from "react-router-dom";
import "../../style.css";

function Navbar(){

    return(
        <div id="navbarPage">
            <div className="navContent">
                <NavLink to="/villagers">
                    주민 목록 조회하기
                </NavLink>
            </div>
            <div className="navContent">
                    화석 종류 조회하기
            </div>
            <div className="navContent">
                    곤충 종류 조회하기
            </div>
            <div className="navContent">
                    물고기 종류 조회하기
            </div>
             


        </div>
    )
}

export default Navbar