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
                <NavLink to="/fossils">
                    화석 종류 조회하기
                </NavLink>
            </div>
            <div className="navContent">
                <NavLink to="/bugs">
                    곤충 종류 조회하기
                </NavLink>
            </div>
            <div className="navContent">
                <NavLink to="/fishs">
                    물고기 종류 조회하기
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar