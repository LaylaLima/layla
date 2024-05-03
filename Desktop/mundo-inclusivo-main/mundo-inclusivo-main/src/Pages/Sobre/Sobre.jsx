import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './Sobre.css'

function Sobre () {
    return (
        <>
            <Header></Header>
            <h1 className="Titulo-Sobre">Quem somos</h1>
            <p>Bem-vindo ao nosso site! Somos uma equipe dedicada à inclusão e apoio às pessoas no espectro autista. <br />
            Nossa missão é oferecer serviços clínicos gratuitos e compartilhar informações úteis através de nosso blog.<br />
            Estamos comprometidos em criar um ambiente mais inclusivo e solidário para todos. Junte-se a nós nessa jornada!</p>
            <br />
            <h1 className="missao">Missão:</h1>
            <p>Promover a inclusão e o apoio às pessoas no espectro autista,<br />
            oferecendo serviços clínicos gratuitos e compartilhando <br />
            informações úteis por meio de nosso blog.</p>
            <br />

            <h1 className="visao">Visão:</h1>
            <p>Tornar-se um recurso confiável e acessível para a comunidade <br />
            autista e suas famílias, oferecendo serviços de alta qualidade e <br />
            aumentando a conscientização sobre o autismo.</p>
            <br />

            <h1 className="valores">Valores:</h1>
            <ul><li>
            <strong>Inclusão:</strong> Valorizamos a diversidade e criamos 
            um ambiente acolhedor para todos. <br />
            <strong>Apoio:</strong> Nosso objetivo é ajudar as pessoas no 
            espectro autista a alcançarem seu potencial máximo. <br />
            <strong>Acessibilidade:</strong> Oferecemos serviços clínicos 
            gratuitos e informações acessíveis para todos. <br />
            <strong>Respeito:</strong> Respeitamos as experiências únicas de 
            cada indivíduo no espectro autista. <br />
            <strong>Colaboração:</strong> Trabalhamos em conjunto para 
            promover a inclusão e solidariedade.</li></ul>
            <br />
            <br />
            <br />
            

            <Footer></Footer>
        
        
        
        </>
    )
}

export default Sobre;
