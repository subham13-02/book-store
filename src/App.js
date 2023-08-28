import React,{useState,useEffect} from "react";
import NavBar from "./Components/NavBar/NavBar";
import MoreBooks from "./Components/MoreBooks/MoreBooks";
import "./App.css"
import axios from "axios"

const App =()=>{
  const [booksDetails1,setBooksDetails1]=useState([]);
  const [booksDetails2,setBooksDetails2]=useState([]);
  const url1="https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes";
  const url2="https://www.googleapis.com/books/v1/volumes?q=harry+potter";
 
 
useEffect(()=>{
      axios.get(url1)
      .then((response)=>{
          setBooksDetails1(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })

      axios.get(url2)
      .then((response)=>{
          setBooksDetails2(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  },[]);

  

  return (
    <div className="App">
      <NavBar />
      <MoreBooks booksDetails1={booksDetails1} booksDetails2={booksDetails2}/>
      
    </div>
  );
}

export default App;
