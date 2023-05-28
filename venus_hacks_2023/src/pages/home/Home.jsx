import { Link } from 'react-router-dom'
import './home.css'


function Home() {
    return(
        <div class="overlay">
          <nav>
            <img src="src/assets/Logo.png" className="logo"/>
          </nav>
          <div className="my-h1">Welcome!</div>
          <p className="homep">This is Zot Major. A web application created by a group of students dedicated to educating others interested in STEM on college majors and career pathways. Click below to start your journey.</p>
            <a className="get-started-wrapper"><Link to ="/start" className="get-started">Get Started!</Link></a>
      </div>
    )
}


export default Home