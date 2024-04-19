import './app.css'
import Header from '../Header/header';
import Form from '../Form/form';

const App =()=>{
    return(
        <>
        <Header 
        titulo= "Lear how to code by watching others"
        texto= "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understaning how developers think is unvaluable"
        />
        <Form 
        Botao="CLAIM YOUR FREE TRIAL"
        />
        </>
    )
}

export default App;