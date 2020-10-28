import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [gallery, updateGallery] = useState([])

  useEffect(() => {
    axios.get('https://api.harvardartmuseums.org/object?classification=Paintings&size=100&apikey=dc1c15cf-2c34-4296-a29a-58ebd0dffbf5')
      .then(resp => {
        updateGallery(resp.data.records)
      })
  }, [])

  function verifyImages() {
    const verifiedImages = []
    
    gallery.map((item) => {
      if (item.primaryimageurl !== null && item.primaryimageurl){
        verifiedImages.push(item)
        
      }
    })
    console.log(verifiedImages)
    return verifiedImages
  }

  verifyImages()

  return <section>

    {verifyImages().map((item, index) => {
      return <div className={"item"} key={index}>
        <img src={item.primaryimageurl} alt={item.id}/>
      </div>
    })}

  </section>


}

export default Home
