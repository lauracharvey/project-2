import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Image = (props) => {
  const objectId = props.match.params.id
  const [image, updateImage] = useState({})

  useEffect(() => {
    axios.get(`https://api.harvardartmuseums.org/object/${objectId}/?apikey=140369e5-ef9b-4aff-bb64-56ce9c9dc9ed`)
      .then(resp => {
        const data = resp.data
        updateImage(data)
        console.log(objectId)
      })
  }, [])

  if (!image.people) {
    return <div>
      <h1>Loading ...</h1>
    </div>
  }

    function imageDescription() {
      if (!image.description) {
        return 
      } else {
         return <div className="paragraph"><p>{image.description}</p></div>
      }
    }


  return <section className="selected">

    <div className="bg-1">
      <img className="single-image" src={image.primaryimageurl} alt={image.title}></img>
    </div>
    <div className="bg-2">
      <div className="box">
        <h1>{image.title}</h1>
        <h2>Artist</h2>
        <h3>{image.people[0].displayname}</h3>
        <h2>Medium</h2>
        <h3>{image.medium}</h3>
        <h2>Culture</h2>
        <h3>{image.culture}</h3>
        <h2>Date</h2>
        <h3>{image.dated}</h3>
        {imageDescription()}
      </div>

    </div>


  </section>

}

export default Image




// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Image = (props) => {
//   const objectId = props.match.params.id
//   const [image, updateImage] = useState({})

//   useEffect(() => {
//     axios.get(`https://api.harvardartmuseums.org/object/${objectId}/?apikey=140369e5-ef9b-4aff-bb64-56ce9c9dc9ed`)
//       .then(resp => {
//         const data = resp.data
//         updateImage(data)
//       })
//   }, [])

//   if (!image.people) {
//     return <div>
//       <h1>Loading ...</h1>
//     </div>
//   }


//   return <section className="selected">


//     <div className="bg-1">
//       <img className="single-image" src={image.primaryimageurl} alt={image.title}></img>
//     </div>
//     <div className="bg-2">
//       <h2>Title: {image.title}</h2>
//       <h2>Artist: {image.people[0].displayname} </h2>
//       <h2>Medium: {image.medium}</h2>
//       <h2>Date: {image.dated}</h2>
//       <h2>Culture: {image.culture}</h2>
//     </div>


//   </section>

// }

// export default Image