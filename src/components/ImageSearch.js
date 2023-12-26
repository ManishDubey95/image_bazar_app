import React, { useEffect, useState } from "react";
import axios from "axios";

// useEfect( function fun(), arr[variable] )
// function() => what ever you want to execute after change in variable


const ImageSearch = ({ images, setImages }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);


  // useEffect(()=>{fetchImages(null, "random")}, [])
  
  useEffect(()=>{setPage(1)}, [searchTerm]) // whenever, I clicked search, the "page value will become "1" again

  
  async function fetchImages(e, flag) {
    //                       e => null,    flag => ""
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            "Accept-Version": "v1",
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          },

          params: {
            query: searchTerm,
            per_page: 5,
            page: page,
          },
        }
      );

      if (flag === "submit") {
        // (i.e.), after clicking the "search" button
        setImages(response.data.results);  // again load the page as per new search
        // setPage(page + 1);
      }

      else{  // next button will continueously adding the images
        setImages([...images, ...response.data.results]);
        // setPage(page + 1);
      }
      setPage(page + 1);
      
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="search">
      <form onSubmit={(e) => fetchImages(e, "submit")}>
        {/* here we need to pass args (e, "submit") manually, so that it will follow the order of args */}
        <input // e => text you type,    flag => "submit"
          type="text"
          placeholder="Enter search ..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={fetchImages}>Next..</button>
    </div>
  );
};

export default ImageSearch;
