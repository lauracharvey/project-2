import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from '../images/Logo.png'

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

  console.log(Logo)

  return <main>
      <header className="home-header">
        <img src={Logo} alt="logo"/>
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