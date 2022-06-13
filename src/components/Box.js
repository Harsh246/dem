import React, { useEffect, useState } from 'react';
import '../styles/box.css';

export default function Box({urls}) {


  const [imgurls, setImgUrls] = useState(["https://cdn.dribbble.com/users/199982/screenshots/4156781/loader1-dribbble-shot.gif","https://cdn.dribbble.com/users/199982/screenshots/4156781/loader1-dribbble-shot.gif","https://cdn.dribbble.com/users/199982/screenshots/4156781/loader1-dribbble-shot.gif","https://cdn.dribbble.com/users/199982/screenshots/4156781/loader1-dribbble-shot.gif"])

useEffect(()=>
{

  console.log(urls)
  setTimeout(()=>
  {

    setImgUrls([...urls]);

  },1500)

},[urls])

  return (
    <div id="pics">
                <div id="pcontainer">

  {
    imgurls.map((i,ke)=><img src={i} alt="img" key={ke} />)
  }
                    
                         </div>
            </div>
  )
}

