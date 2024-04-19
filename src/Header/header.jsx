import './header.css'

const Header = ({titulo, texto})=>{
    return(
    <>
        <h1 className="titulo">{titulo}</h1>
        <p className="ForaDaCaixa">{texto}</p>
    </>
    )
}

export default Header;