import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [gallery, updateGallery] = useState([])
  const gridSize = 64
  const [search, updateSearch] = useState('red')
  const [input, updateInput] = useState('')


  useEffect(() => {
    axios.get(`https://api.harvardartmuseums.org/object?classification=Paintings&keyword=${search}&size=100&apikey=dc1c15cf-2c34-4296-a29a-58ebd0dffbf5`)
      .then(resp => {
        updateGallery(resp.data.records)
      })
  }, [search])


  function verifyImages() {
    const verifiedImages = []
    gallery.map((item) => {
      if (item.primaryimageurl !== null && item.primaryimageurl && verifiedImages.length < gridSize) {
        verifiedImages.push(item)
      }
    })
    return verifiedImages
  }


  return <main>
      <header className="home-header">
        <img src="../images/Logo.png" alt="logo"/>
      </header>
      <section>

    <section className="input-section">
      <input
        placeholder="Search a Keyword e.g. Flowers"
        onChange={(event) => updateInput(event.target.value)}
        value={input} />

      <button onClick={() => {
        updateSearch(input)
        updateInput('')
      }}>
            Search </button>
    </section>


    <section className="grid">
      {verifyImages().map((item, index) => {
        return <Link key={index} to={`/project-2/${item.id}`}>
          <div className={'item'} >
            <img src={item.primaryimageurl} alt={item.id} />
          </div>
        </Link>
      })}
    </section>


  </section>
  <footer className="home-footer">
    <small>Made with ♥️ by Enrico & Laura</small>
  </footer>
  </main>

}

export default Home



// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const Home = () => {

//   const [gallery, updateGallery] = useState([])
//   const gridSize = 64
//   const [input, updateInput] = useState('')
//   const [search, updateSearch] = useState('')


//   useEffect(() => {
//     axios.get('https://api.harvardartmuseums.org/object?classification=Paintings&size=100&apikey=dc1c15cf-2c34-4296-a29a-58ebd0dffbf5')
//       .then(resp => {
//         updateGallery(resp.data.records)
//       })
//   }, [])


//   function verifyImages() {
//     const verifiedImages = []
//     gallery.map((item) => {
//       if (item.primaryimageurl !== null && item.primaryimageurl && verifiedImages.length < gridSize) {
//         verifiedImages.push(item)
//       }
//     })
//     return verifiedImages
//   }


//   return <section>

//     <section>
//       <input
//         className="input"
//         placeholder="Search for something..."
//         onChange={(event) => updateInput(event.target.value)}
//         value={input} />

//       <button onClick={() => {
//         updateSearch(input)
//         updateInput('')
//         {console.log(search)}
//       }}>
//         Search </button>
//     </section>


//     <section className="grid">
//       {verifyImages().map((item, index) => {
//         return <Link key={index} to={`/project-2/${item.id}`}>
//           <div className={'item'} >
//             <img src={item.primaryimageurl} alt={item.id} />
//           </div>
//         </Link>
//       })}
//     </section>


//   </section>


// }

// export default Home



