import { useEffect, useState } from "react";
import Boxchoice from './boxchoice'


function Elements({localfurnitures, setLocalFurnitures}){
    const local = localfurnitures
    const [display, setDisplay] = useState(false)
    // console.log(display)
    // console.log(local)
    let sum=0
    let hereid=null ;
    
    for (let i = 0; i < local.length; i++) {
        sum += local[i].width;
    }

    function remove(id){
        for (let i = 0; i < local.length; i++) {
            const element = local[i];
            
            if(local[i].id==id){
                console.log(i)
                hereid = i
            }
        }
        let after = local.slice(hereid+1)
        let before = local.slice(0, (hereid))
        let full = [...before,...after]
        setLocalFurnitures(full)
    }
    
return( 


<div className="element">
    <div className="element__title">
        <h2>Total : {sum} m3</h2>
    </div>
<div className="scrollable">
<table className="table element__table">
    <thead>
        <tr>
            <th scope="col">Objets</th>
            <th scope="col">Taille</th>
            <th scope="col">Supprimer</th>
        </tr>
    </thead>
    <tbody >
        {local.map(persons =>(
            <tr key={persons.id}>
        <th> {persons.name}</th>
        <td>{persons.width } m3 </td>
        <td><i class="fas fa-trash-alt delete" onClick={() => {remove(persons.id)}}></i></td>
        
        </tr>
        )  

)}
    </tbody>
</table>
</div>
        <div className="element__button">
        <button className="btn btn-light" onClick = {()=> setDisplay(true)}>Trouver votre espace de stockage</button>
        </div>
        <div className="boxchoice">
        <Boxchoice status={display} sum={sum} setDisplay={setDisplay}/>
        </div>
        
</div>

    



)


}

export default Elements;