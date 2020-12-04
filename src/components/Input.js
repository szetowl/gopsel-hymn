import React, { useState } from "react";
import "./Input.css";

import {songsDB, storage} from "../firebase";

import { AppBar } from "@material-ui/core/";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function Input() {
  const addNewItem = () => {
    //e.preventDefualt();
    let docRef=songsDB.collection("songs").doc()
    
      docRef.set({
        name: details.name,
        verse: details.verse,
        no : details.no,
        src: "songs/" + selectedFile.name,
        id: docRef.id
      })
      .then(() => {
        uploadSongFile();
        setDetails({ name: "", verse: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadSongFile =()=>{
    let storageRef=storage.ref("songs/"+selectedFile.name);
    storageRef.put(selectedFile).then(()=>{
      console.log('Upload audio file OK!');
    })
  };

  const [details, setDetails] = useState({ name: "", verse: "" });
  const [selectedFile, setSelectedFile] = useState("");

  const handleChange = (input) => (e) => {
    setDetails({ ...details, [input]: e.target.value });
  };
  const handleSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">INPUT THE SONG DETAILS</Typography>
        </Toolbar>
      </AppBar>
      <form className="input-container">
        <TextField
          required
          id="outlined-name"
          label="No"
          defaultValue={details.no}
          onChange={handleChange("no")}
          margin="normal"
          variant="outlined"
        />
        <br/>
         <TextField
          required
          id="outlined-name"
          label="Name"
          defaultValue={details.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="verse"
          multiline
          rows="4"
          defaultValue={details.verse}
          onChange={handleChange("verse")}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          required
          type="file"
          onChange={handleSelect}
          margin="normal"
          variant="outlined"
        />

        <br />
        <Button color="secondary" variant="contained" onClick={addNewItem}>
          Submit
        </Button>
      </form>
      
    </div>
  );
}

export default Input;
