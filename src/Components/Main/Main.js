import React,{useState,useEffect} from "react";
import Details from "../../Components/Details/Details"
import "./Main.css"

const Main=({booksDetails1, booksDetails2})=>{
  const [allBooks,setAllBooks]=useState([]);
  const [selectedBook,setSelectedBook]=useState(null);

  useEffect(() => {
        const books1 = booksDetails1.map(book => book);
        const books2 = booksDetails2.map(book => book);
        setAllBooks([...books1, ...books2]);
    }, [booksDetails1, booksDetails2]);

    function bookDetails(e){
        //console.log(e.target.id)
        allBooks.forEach((current)=>{
            if(current.id===e.target.id){
                setSelectedBook(current);
            }
        });
    }

    return(
        <div className="moreBooks">
            <Details selectedBook={selectedBook}/>
            <h2>Books</h2>
            <div className="bookList"> 
                    {
                        allBooks.map((book, index) => (
                        <img id={book.id} src={book.volumeInfo.imageLinks.thumbnail} alt={`img${index}`} onClick={bookDetails} />
                    ))
                }
            </div>
        </div>
    )
}
export default Main;