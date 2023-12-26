import React, { useState} from "react";
import ImageSearch from "./components/ImageSearch";
import ImageList from "./components/ImageList";



const App=()=>{

  const [images, setImages] = useState([]);
  return (
    <div>
        <ImageSearch setImages={setImages} images={images} />
        <ImageList images={images} />
    </div>
  );
}

export default App;