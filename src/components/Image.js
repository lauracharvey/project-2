import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    return <div className="loading">
      <h1>Loading . . .</h1>
    </div>
  }

  function imageDescription() {
    if (!image.description) {
      return
    } else {
      return <div className="paragraph"><p>{image.description}</p></div>
    }
  }

  function imageDate() {
    if (!image.dated) {
      return
    } else {
      return <h3>{image.dated}</h3>
    }
  }


  return <section className="selected">
    <button> <Link to="/project-2">Home</Link> </button>
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
        {imageDate()}
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
//         console.log(objectId)
//       })
//   }, [])

//   if (!image.people) {
//     return <div>
//       <h1>Loading ...</h1>
//     </div>
//   }

//     function imageDescription() {
//       if (!image.description) {
//         return 
//       } else {
//          return <div className="paragraph"><p>{image.description}</p></div>
//       }
//     }


//   return <section className="selected">

//     <div className="bg-1">
//       <img className="single-image" src={image.primaryimageurl} alt={image.title}></img>
//     </div>
//     <div className="bg-2">
//       <div className="box">
//         <h1>{image.title}</h1>
//         <h2>Artist</h2>
//         <h3>{image.people[0].displayname}</h3>
//         <h2>Medium</h2>
//         <h3>{image.medium}</h3>
//         <h2>Culture</h2>
//         <h3>{image.culture}</h3>
//         <h2>Date</h2>
//         <h3>{image.dated}</h3>
//         {imageDescription()}
//       </div>

//     </div>


//   </section>

// }

// export default Image