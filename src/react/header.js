import {Link} from "react-router-dom";
import Manu from '../assets/img/lamanu.png'

function Header(){


    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">
                <img className="imgleft" src={Manu}  height="50" alt=""/>
            </a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/">Accueil</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/simulate">Simulez votre box</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">A propos</Link>
      </li>
    </ul>
  </div>
</nav>
    )

}

export default Header;