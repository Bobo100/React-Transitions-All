import React, { useState } from "react";
import "./css/Book.css";

// interface Props {
//   pages: JSX.Element[];
// }

// const Book: React.FC<Props> = ({ pages }) => {
//   const [currentPage, setCurrentPage] = useState(0);

//   return (
//     <div className="book">
//       <div className="page-container">
//         <div className="page left">{pages[currentPage]}</div>
//         <div className="page right">{pages[currentPage + 1]}</div>
//       </div>
//       <button onClick={() => setCurrentPage(currentPage + 2)}>Turn Page</button>
//     </div>
//   );
// };

// export default Book;


export const Book = () => {
    return (
        <div>
            <div className="book_page_container">
                <div className="book_page">page1</div>
                <div className="book_page">page2</div>
                <div className="book_page">page3</div>
                <div className="book_page">page4</div>

                <button className="flip">翻頁</button>
            </div>
        </div>
    )
}