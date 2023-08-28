import React,{useState,useEffect} from "react";
import "./Details.css"

const Details=({selectedBook})=>{

    const [currentBook,setCurrentBook]=useState(null);
    // console.log(props.selectedBook)
    useEffect(()=>{
        setCurrentBook(selectedBook);
    },[selectedBook]);
    if (!currentBook) {
        return <div style={{color:"red"}}>Select one Book</div>;
      }
    return(
        <div className="details">
            <div className="imageContainer">
                <img src={currentBook.volumeInfo.imageLinks.thumbnail} alt="img"/>  
            </div>
            <div className="detailsContainer">
                <h2>{currentBook.volumeInfo.title}</h2>
                <div className="about-publish">
                    <span>{currentBook.volumeInfo.authors.join(",").toUpperCase()}</span>
                    <span>Published On:{currentBook.volumeInfo.publishedDate}</span>
                </div>
                <p>{currentBook.volumeInfo.description}</p>
                <div className="span">
                    <span>Avg Rating:{currentBook.volumeInfo.averageRating}  </span> | 
                    <span>  Rating Count:{currentBook.volumeInfo.ratingsCount}  </span> | 
                    <span>  Publiser:{currentBook.volumeInfo.publisher}  </span> | 
                    <span>  Language:{currentBook.volumeInfo.language}</span>
                </div>
                <div className="btn">
                    <button>Now Read!</button>
                    <button>More Info!</button>
                </div>
            </div>
        </div>
    )
}

export default Details;