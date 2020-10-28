import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Image = (props) => {
  const objectId = props.match.params.objectId
  const [image, updateImage] = useState({})

  useEffect(() => {
    axios.get(`https://api.harvardartmuseums.org/object/${objectId}&apikey=dc1c15cf-2c34-4296-a29a-58ebd0dffbf5`)
      .then(resp => {
        const data = resp.data
        updateImage(data.records.primaryimageurl)
      })
  }, [])

  if (!image.name) {
    return 
    <div>
      <h1>
          Loading ...
        </h1>
    </div>
  }
}

export default Image