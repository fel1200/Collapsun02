import React, { useState } from "react";

//importing styles
import "./SingleFileUploader.css";

export default function SingleFileUploader() {
  const [file, setFile] = useState(null);

  //Para ir gestionando los cambios en los archivos
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  //Administramos ahora la carga
  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("file", file);

      try {
        // You can write the URL of your server or any other endpoint used for file upload
        //   const result = await fetch("https://httpbin.org/post", {
        //     method: "POST",
        //     body: formData,
        //   });

        //   const data = await result.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size}</li>
          </ul>
        </section>
      )}
      {file && <button onClick={handleUpload}>Upload a file</button>}
    </div>
  );
}
