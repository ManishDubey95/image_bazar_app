import React from "react";



const ImageList = ({images})=>{ // remember "images" are array

    // images => response.data.results

    return(
        <div className="list">
            {   // writing JS
                images.map(item => (
                    <img               // img => response.data.results.item.urls. 
                       src={item.urls.thumb} alt={item.alt_description}
                    />
                ))
            }
        </div>
    )
}


export default ImageList;