import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";




function App(){
    const [notes, setNotes]=useState([]);
    function addNote(note){
        setNotes(n=>[...n,note]);
    }
    function deleteNote(index){
        const updatedNotes=notes.filter((_,i)=>i!==index);
        setNotes(updatedNotes);
    }
    return(
        <>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem,index)=>
            <Note key={index} title={noteItem.title} content={noteItem.content} onDelete={()=>deleteNote(index)}/>
            )}
            <Footer/>
        </>
    )
}
export default App