

const Form =({Botao})=>{
    return(
        <>
        <div>
            <form>
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name"/>
            <input type="text" placeholder="Email adress"/>
            <input type="password" placeholder="Password"/>
            <button>{Botao}</button>
            </form>
        </div>
        </>
    )
}

export default Form;