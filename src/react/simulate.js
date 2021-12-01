import {useEffect, useState} from 'react'
import Elements from './component/elements'
import {useParams} from 'react-router-dom'
import dataarray from '../data.json' 
import container from "../assets/img/contenu-box-15M3_4.png"

function Simulate(){
    let datas = dataarray.data
    const [state, setState] = useState({
        width:null,
        height:null,
        lenght:null,
        name:'',
        full:false
    })
    const[predef, setPredef] = useState(0)
    const[predefname, setPredefname] = useState('')
    const[storage, setStorage] = useState(0)
    const[local, setLocal] = useState(0)
    const[localfurnitures, setLocalFurnitures ] = useState([])
    const[localname,setLocalname]= useState('Valeur predefinie')
    const[id, setId] = useState(0)

    function handlechange(e){
        if(e.target.type == 'checkbox'){
            let newvalue = {...state, [e.target.name]:e.target.checked}
            setState(newvalue)
        }else{
            let newvalue = {...state, [e.target.name]:e.target.value}
            setState(newvalue)
        }
        
    }
    console.log(datas)

    
    function predefchange(e){
        let value = parseFloat(e.target.value)
        setPredef(value)
        let name = e.target.name
        setPredefname(name)
        console.log(e.target.id)
        console.log(predefname)
    }
    
    useEffect(()=> {
        if(state.height>250){
            alert('La hauteur doit etre inferieur a 250 cm')
        }
        else{
            if(state.full==true){
                let localvalue = (parseInt(state.width)/100) * 2.5 * (parseInt(state.lenght)/100)
                setLocal(localvalue)
                
            }
            else{
                let localvalue = (parseInt(state.width)/100) * (parseInt(state.height)/100) * (parseInt(state.lenght)/100)
                setLocal(localvalue)
            }
        }
        
        
        
    },[state])

    useEffect(()=>{
        setLocalname(state.name)
    },[state.name])
    
    
    function loadoptions(e){
        if(isNaN(local)){
            alert( 'Les valeurs reseignés ne sont pas corrects')
        }
        else{
            if(localname==''){
                setId(id+1)
                setLocalFurnitures(f => [...f,{width :local,name: 'Valeur personnalisée',id: id}])
            }else{
                setId(id+1)
                setLocalFurnitures(f => [...f,{width :local,name: localname,id: id}])

            }
        }

    }
    function loadpredef(e){
        setId(id+1)
        setLocalFurnitures(f => [...f,{width : dataarray.data[predef].width, name: dataarray.data[predef].name,id: id}])
    }
        return(
            <main>
                    <h1>Simulation de votre box de stockage</h1>
                <div className="maincontent">
                    <div className="formcol">
                            <form action="" type="GET">
                                <p>Ajoutez vos objet a mettre dans le box ! (Attention a mettre les valeurs en cm) <i class="fas fa-exclamation-triangle"></i></p>
                            <div class="form formdisplay">
                            <div className="Inputfield formdisplay__field">
                            <div className="input-group formdisplay__field__input">
                                <input
                                onChange={handlechange}
                                type="text"
                                className="form-control"
                                name="name"
                                value={state.name}
                                placeholder="Nom"
                                required
                                />
                                <input
                                onChange={handlechange}
                                type="number"
                                className="form-control"
                                name="width"
                                value={state.width}
                                placeholder="Largeur(cm)"
                                required
                                />
                                <input
                                onChange={handlechange}
                                type="number"
                                className="form-control"
                                name="lenght"
                                value={state.lenght}
                                placeholder="Longueur(cm)"
                                required
                                />
                                <input
                                max='2.5'
                                onChange={handlechange}
                                type="number"
                                className="form-control"
                                name="height"
                                value={state.height}
                                placeholder="Hauteur(cm)"
                                required
                                />
                            </div>
                                <div className='formdisplay__field__radio'>
                                <input class="form-check-input" type="checkbox" onChange={handlechange} checked={state.full} name="full"  id="defaultCheck1"/>
                                <label  class="form-check-label" for="defaultCheck1">Non empilable ?</label>
                                </div>
                        </div>
                
                            <button type="button" className="btn btn-light form__submit" onClick={(e) => loadoptions(e)}>Ajouter</button>
                            </div>
                                <p className="advise"><i class="fas fa-exclamation-triangle"></i> Les valeurs des objets non empilables sont changées afin de simuler leurs non-empilabilitée mais reste celle que vous avez choisit</p>
                            </form>
                
                        <div className="prefaits">
                            <select onChange={(e)=> predefchange(e)} className="form-select prefaits__select" name="select">
                                <option value='null' disabled defaultValue>Ajouter des objets prédefinis</option>
                                {datas.map(data => 
                                    
                                <option value={data.id-1} name={data.name}>{data.name}</option>
                                    )}
                            </select>
                            <button type="button" className="btn btn-light form__submit" onClick={(e)=> loadpredef(e)}>Ajouter un element</button>
                        </div>
                    </div>
            <img id="containerimg" src={container} alt="" />
                </div>
            
                <Elements localfurnitures = {localfurnitures} setLocalFurnitures = {setLocalFurnitures}/>
            
                
            </main>
        )

    }

export default Simulate;