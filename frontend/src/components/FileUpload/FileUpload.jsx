import React, { useState } from "react";
import "./index.css";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  //Select file functionality
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

//   drag and rop funationality
  const handleFileDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  //Submit file functionality
  const handleFileSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    // An api call for post request to upload file to db.
    axios
      .post("http://localhost/eShop/", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(selectedFile.name + " has been uploaded.");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  return (
    <form onSubmit={handleFileSubmit} className="file-upload-form">
      <div className="file-input">
        <input type="file" id="file" onChange={handleFileInputChange} />
        <label htmlFor="file">Choose a file</label>
      </div>
      <div
        className="drop-zone"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop a file here</p>
      </div>
      <button type="submit" disabled={!selectedFile}>
        UploadFileUpload
      </button>
    </form>
  );
};

export default FileUpload;
