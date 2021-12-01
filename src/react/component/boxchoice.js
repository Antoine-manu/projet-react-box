import empty from '../../assets/img/undraw_heavy_box_agqi.svg'
import s from '../../assets/img/box/S_box-removebg-preview.png'
import m from '../../assets/img/box/M_box-removebg-preview.png'
import l from '../../assets/img/box/L_box-removebg-preview.png'
import xl from '../../assets/img/box/XL_box-removebg-preview.png'
import full from '../../assets/img/undraw_logistics_x-4-dc.svg'


function Boxchoice({status,sum,setDisplay}){
    


    function commande(){
        alert('Votre commande a bien été passée')
        window.location.reload();
    }
    // console.log(status)
if(status==true){
    if((sum== 0)){
        return(
                <div class="animate__animated animate__backInDown card bg-light cardcustom">
                    <img class="card-img-top" src={empty} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Oups....</h5>
                        <p class="card-text">Aucun objet n'est selectionné veuillez en mettre pour pouvoir simuler votre box</p>
                        
                    </div>
                         <p className="cardshowoff" onClick = {()=> setDisplay(false)}><i class="fas fa-minus-circle"></i></p>
                </div>
        )
    }
    else if((sum<= (3*2.5))){
        return(
                <div class="animate__animated animate__backInDown card bg-light cardcustom">
                    <img class="card-img-top" src={s} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Voici le box que nous vous proposont :</h5>
                        <p class="card-text">Votre total de biens etant de {sum} m3, nous vous conseillons de prendre le box de 2-3m²</p>
                        <p class="card-text">Prix : 50€ HT/mois</p>
                        <a href="#" onClick={commande} class="btn btn-primary">Passer commande</a>
                        
                    </div>
                         <p className="cardshowoff" onClick = {()=> setDisplay(false)}><i class="fas fa-minus-circle"></i></p>
                </div>
        )
    }
    else if((sum> (3*2.5))&(sum<= (6*2.5))){
        return(
            <div class="animate__animated animate__backInDown card bg-light cardcustom">
                    <img class="card-img-top" src={m} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Voici le box que nous vous proposont :</h5>
                        <p class="card-text">Votre total de biens etant de {sum} m3, nous vous conseillons de prendre le box de 3-6m²</p>
                        <p class="card-text">Prix : 80€ HT/mois</p>
                        <a href="#" onClick={commande} class="btn btn-primary">Passer commande</a>
                        
                    </div>
                         <p className="cardshowoff" onClick = {()=> setDisplay(false)}><i class="fas fa-minus-circle"></i></p>
                </div>
        )
    }
    else if((sum> (6*2.5))&(sum<= (10*2.5))){
        return(

            <div class="animate__animated animate__backInDown card bg-light cardcustom">
                    <img class="card-img-top" src={l} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Voici le box que nous vous proposont :</h5>
                        <p class="card-text">Votre total de biens etant de {sum} m3, nous vous conseillons de prendre le box de 6-10m²</p>
                        <p class="card-text">Prix : 140€ HT/mois</p>
                        <a href="#" onClick={commande} class="btn btn-primary">Passer commande</a>
                        
                    </div>
                         <p className="cardshowoff" onClick = {()=> setDisplay(false)}><i class="fas fa-minus-circle"></i></p>
                </div>
        )
    }
    else if((sum> (10*2.5))&(sum<= (16*2.5))){
        return(
            <div class="animate__animated animate__backInDown card bg-light cardcustom">
                    <img class="card-img-top" src={xl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Voici le box que nous vous proposont :</h5>
                        <p class="card-text">Votre total de biens etant de {sum} m3, nous vous conseillons de prendre le box de 10-16m²</p>
                        <p class="card-text">Prix : 200€ HT/mois</p>
                        <a href="#" onClick={commande} class="btn btn-primary">Passer commande</a>
                        
                    </div>
                         <p className="cardshowoff" onClick = {()=> setDisplay(false)}><i class="fas fa-minus-circle"></i></p>
                </div>
        )
    }
    else if(sum> (16*2.5)){
        return(
            <div class="animate__animated animate__backInDown card bg-light cardcustom">
                    <img class="card-img-top" src={full} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Oups...</h5>
                        <p class="card-text">Trop d'objets pour nos box veuillez reduire votre nombre d'objet</p>
                        
                    </div>
                         <p className="cardshowoff" onClick = {()=> setDisplay(false)}><i class="fas fa-minus-circle"></i></p>
                </div>
        )
    }
    
}
else{
    return(
        <div></div>
    )
}
}

export default Boxchoice