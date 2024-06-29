import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookRow({ newBook }) {
  return (
    <div className="book-card"onClick={() => 
        //TO DO - set selected book and go to page w/details
        console.log("You have selected Book:  ", newBook.id)}>
{/* }}
    > */}
      
      <div className="title">{newBook.title}</div>

      <div className="author">{newBook.author}</div>
     
      <div className="YN">Available: {newBook.available ? "Yes" : "No"}</div>
     
     <div id="details" className="details">
      <Link to={`/Book/${newBook.id}`}>See Details</Link>
      
      </div>
      
    </div>
    
  );
}




