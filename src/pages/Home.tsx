import React from "react";
import "./css/Home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
    return (
        <div>

            <div className="transition_container">
                <h1>翻轉卡片效果，兩張卡片，一正一反</h1>
                <div className="linkMiddle">
                    <NavLink to="/flip" className="a_flip">
                        連結
                    </NavLink>
                </div>
            </div>

            <div className="transition_container">
                <h1>效果二</h1>
                <div className="linkMiddle">
                    <NavLink to="/flip" className="a_flip">
                        連結
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
