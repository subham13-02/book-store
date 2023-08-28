import React,{useState,useEffect} from "react";
import "./MoreBook.css"
const MoreBooks=({booksDetails1, booksDetails2})=>{
    
  const [bookImages,setBookImages]=useState([]);
    
  useEffect(() => {
        const images1 = booksDetails1.map(book => book.volumeInfo.imageLinks.thumbnail);
        const images2 = booksDetails2.map(book => book.volumeInfo.imageLinks.thumbnail);
        setBookImages([...images1, ...images2]);
    }, [booksDetails1, booksDetails2]);
    // console.log(bookImages)
    return(
        <div className="moreBooks">
            <h2>More Books</h2>
            <div className="bookList"> 
                    {
                        bookImages.map((imageLink, index) => (
                        <img key={index} src={imageLink} alt={`img${index}`} />
                    ))
                }
            </div>
        </div>
    )
}
export default MoreBooks;