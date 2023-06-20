import './formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

function Formulario(props){

   /*  const setores =[
        'Mecânica',
        'Logística',
        'Elétrica',
        'Tecnologia da Informação',
        'Alimentos',
        'Gestão'
    ] */
    function aoSubmeter(event) {
        event.preventDefault()
        props.aoCadastrarProfessor({
            nome,
            especialidade,
            imagem,
            area,
        })
      
        console.log('Formulário Submetido')
    }
    const[nome, setNome] = useState("")
    const[especialidade, setEspecialidade] = useState("")
    const[imagem, setImagem] = useState("")
    const[area, setArea] = useState("")
    
    return(
        <section className='form'>
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para cadastrar</h2>
                <CampoTexto 
                label="Nome Professor" 
                placeholder="Insira seu nome" 
                obrigatorio={true} 
                valor={nome} 
                aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                label="Especialidade"
                placeholder="Insira uma especialidade"
                obrigatorio={true}
                valor={especialidade}
                aoAlterar={valor => setEspecialidade(valor)}
                />
                <CampoTexto 
                label="Imagem"
                placeholder="Carregue uma imagem"
                obrigatorio={true}
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                label="Área" 
                opcoes={props.times}
                obrigatorio={true}
                valor={area}
                aoAlterar={valor => setArea(valor)}
                />
                <Botao texto="Cadastrar"/>
            </form>
        </section>
    )
}
export default Formulario