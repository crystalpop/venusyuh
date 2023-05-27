import { NavLink } from 'react-router-dom'
import './home.css'


function Home() {
    return(
        <div class="overlay">
          <nav>
            <img src="src/assets/Logo.png" class="logo"/>
          </nav>
          <h1>Welcome!</h1>
          <p>   We are Zot Major</p>
            <NavLink to ="/start">Start Here</NavLink>
        </div>
    )
}

export default Home