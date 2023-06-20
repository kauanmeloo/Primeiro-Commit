
import './CampoTexto.css'

function CampoTexto (props) {
/* let valor= ""; */

    /* const[valor, setValor]= useState("") */

    /* const aoDigitado = (evento) =>{
        valor= evento.target.value
        console.log(valor)

    } */
   
    function digitado (event){
        props.aoAlterar (event.target.value)
        
    }


    return(
     <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={digitado} placeholder={props.placeholder} required={props.obrigatorio}/>
    </div>
    )
}

export default CampoTexto   