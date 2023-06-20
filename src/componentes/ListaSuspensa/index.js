import './ListaSuspensa.css'

function ListaSuspensa(props){
    function digitado (event){
        props.aoAlterar (event.target.value)
    }
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={digitado}>
            {props.opcoes.map(opcao => <option key={opcao}>{opcao}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa