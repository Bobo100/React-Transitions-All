import React, { useEffect, useState } from "react";
import "./css/Flip.css";
import { NavLink } from "react-router-dom";

export const Flip = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const [isFlipped2, setIsFlipped2] = useState(false);
    const handleFlip2 = () => {
        setIsFlipped2(!isFlipped2);
    };

    const [isFlipped3, setIsFlipped3] = useState(false);
    const handleFlip3 = () => {
        setIsFlipped3(!isFlipped3);
    };


    // const [rotateDeg1, setRotateDeg1] = useState(0);
    // const [rotateDeg2, setRotateDeg2] = useState(180);
    // const rotateElement = (element: HTMLImageElement, rotateDeg: number, setRotateDeg: React.Dispatch<React.SetStateAction<number>>) => {
    //     let newRotateDeg = (rotateDeg + 180) % 360;
    //     setRotateDeg(newRotateDeg);
    //     element.style.transform = `rotateY(${newRotateDeg}deg)`;
    // };
    // useEffect(() => {
    //     const elements = document.querySelectorAll('.magic_card') as NodeListOf<HTMLImageElement>;
    //     elements.forEach((element, index) => {
    //         let rotateDeg: number, setRotateDeg: React.Dispatch<React.SetStateAction<number>>;
    //         if (index === 0) {
    //             rotateDeg = rotateDeg1;
    //             setRotateDeg = setRotateDeg1;
    //         } else {
    //             rotateDeg = rotateDeg2;
    //             setRotateDeg = setRotateDeg2;
    //         }
    //         const intervalId = setInterval(() => rotateElement(element, rotateDeg, setRotateDeg), 800);
    //         return () => clearInterval(intervalId);
    //     });
    // }, [rotateDeg1, rotateDeg2]);


    return (
        <div>
            <div className="page_container">
                <div className={`page ${isFlipped ? "" : "flipped"}`}>page1</div>
                <div className={`page ${isFlipped ? "flipped" : ""}`}>page2</div>

                <button className="btn_flip" onClick={handleFlip}>
                    翻頁
                </button>
            </div>


            <div className="page_container">
                <div className={`page ${isFlipped2 ? "flipped" : ""}`}>
                    <img src={require("./../image/card_use.jpg")} alt="123" />
                </div>
                <div className={`page ${isFlipped2 ? "" : "flipped"}`}>俗話說的好，掌握思考過程，也就掌握了唐納將軍的一生。若發現問題比我們想像的還要深奧，那肯定不簡單。每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮唐納將軍的一生的各種可能。</div>

                <button className="btn_flip" onClick={handleFlip2}>
                    翻頁
                </button>
            </div>


            <div className="page_container">
                <div className={`page ${isFlipped3 ? "flipped" : ""}`} onClick={handleFlip3}>點擊卡片擊可翻轉</div>
                <div className={`page ${isFlipped3 ? "" : "flipped"}`} onClick={handleFlip3}>這是背面故事</div>
            </div>

            {/* 庫洛牌翻轉 */}
            <div className="magic_page_container">
                <img src={require("./../image/CWindy.jpeg")} alt="123" className={`magic_card`} />
                <img src={require("./../image/ClowCardSideB.jpg")} alt="123" className={`magic_card magic_page`} />
            </div>

            <NavLink to="/">
                <div className="linkMiddle">
                    回首頁
                </div>
            </NavLink>
        </div>
    );
};
