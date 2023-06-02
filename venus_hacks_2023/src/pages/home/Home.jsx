import { NavLink } from 'react-router-dom'
import './home.css'


function Home() {
    return(
        <div class="overlay">
          <nav>
            <img src="src/assets/Logo.png" className="logo"/>
          </nav>
          <div className="my-h1">Welcome!</div>
          <p className="homep">This is Zot Major. A web application created by a group of students dedicated to educating others interested in STEM on UCI's available college majors and career pathways. Click below to start your journey.</p>
            <a className="get-started-wrapper"><NavLink to ="/start" className="get-started" ><a href="#" class="link-light">Get Started!</a></NavLink></a>
      </div>
    )
}


export default Home