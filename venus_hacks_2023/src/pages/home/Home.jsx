import { NavLink } from 'react-router-dom'
import './home.css'


function Home() {
    return(
        <div class="overlay">
          <nav>
            <img src="src/assets/Logo.png" class="logo"/>
          </nav>
          <h1>Welcome!</h1>
          <p>We are Zot Major. A group of students dedicated to educating others on college majors and career pathways. Click below to start your journey.</p>
            <a className="get-started-wrapper"><NavLink to ="/start" className="get-started">Get Started!</NavLink></a>
      </div>
    )
}


export default Home