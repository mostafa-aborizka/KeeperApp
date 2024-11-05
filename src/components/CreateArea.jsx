import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote]=useState({
        title:"",
        content:""
    });
    const [expanded, setExpanded]=useState(false);

    function handleChange(event){
        const{name,value}=event.target;
        setNote(n=>({...n,[name]:value}));
    }

    function handleAdd(){
        if (note.title.trim()!==""||note.content.trim()!==""){
            props.onAdd(note);
        }
        setNote({title:"",content:""});
    }
    function handleExpand(){
        setExpanded(true);
    }
    return (
      <div className="form">
          {expanded && (
            <input type="text" 
                name="title"  
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title" 
            />
            )}
          <textarea name="content" 
                    onChange={handleChange}
                    onClick={handleExpand} 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows={expanded ? 3 : 1} 
            />
            <Zoom in={expanded}>
                <Fab onClick={handleAdd}>
                    <AddIcon />
                </Fab>
            </Zoom>
      </div>
    );
  }
  
  export default CreateArea;
  