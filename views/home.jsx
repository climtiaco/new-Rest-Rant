const React = require('react')
const Def = require('./default')



function Home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img className='rest-rant-photo'
                src="/images/rest-rant-photo.jpg"
                alt="rest-rant-photo" />
              <div>
                Photo by <a href="Author_Link">Idk the Author Anymore</a>on <a href="https://unsplash.com/">Unsplash</a>
              </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  
module.exports = Home
