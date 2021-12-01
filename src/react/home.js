import {Link} from "react-router-dom";
import s from '../assets/img/box/S_box-removebg-preview.png'
import m from '../assets/img/box/M_box-removebg-preview.png'
import l from '../assets/img/box/L_box-removebg-preview.png'
import xl from '../assets/img/box/XL_box-removebg-preview.png'

function Home(){

return(
    <main className="homemain">
        <h2>Voici notre selection de box de stockage :</h2>
        <div class="card cardhome bg-light ">
                    <img class="card-img-top imagecard" src={s} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Box 2-3m² :</h5>
                        <p class="card-text">Box de stockage de 2 à 3m² proposé au prix de 50€ par mois</p>
                        
            <Link class="btn btn-primary" to="/simulate">Simulez votre box</Link>
                        
                    </div>
                </div>
        <div class="card cardhome bg-light ">
                    <img class="card-img-top imagecard" src={m} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Box 3-6m² :</h5>
                        <p class="card-text">Box de stockage de 3 à 6m² proposé au prix de 80€ par mois</p>
                        
            <Link class="btn btn-primary" to="/simulate">Simulez votre box</Link>
                        
                    </div>
                </div>
        <div class="card cardhome bg-light ">
                    <img class="card-img-top imagecard" src={l} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Box 6-10m² :</h5>
                        <p class="card-text">Box de stockage de 6 à 10m² proposé au prix de 140€ par mois</p>
                        
            <Link class="btn btn-primary" to="/simulate">Simulez votre box</Link>
                        
                    </div>
                </div>
        <div class="card cardhome bg-light ">
                    <img class="card-img-top imagecard" src={xl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Box 10-16m² :</h5>
                        <p class="card-text">Box de stockage de 10 à 16m² proposé au prix de 200€ par mois</p>
                        
            <Link class="btn btn-primary" to="/simulate">Simulez votre box</Link>
                        
                    </div>
                </div>
    </main>
)
}

export default Home;