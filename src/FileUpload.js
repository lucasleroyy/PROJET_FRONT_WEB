// src/FileUpload.js

import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState("");
  
  const handleUpload = event => {
    setFile(event.target.files[0]);
    // Ici, vous pouvez ajouter la logique pour envoyer ce fichier au serveur
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default FileUpload;
