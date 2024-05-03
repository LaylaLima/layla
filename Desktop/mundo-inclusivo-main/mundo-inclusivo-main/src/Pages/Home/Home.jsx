import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import "./Home.css"


function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                    <h1>
                        Juntos pela inclusão, <br />
                        cada criança é uma <br />
                        estrela única.
                    </h1>
                    <p>
                        Acolhemos e apoiamos crianças autistas. <br />
                        Juntos, podemos criar um mundo mais inclusivo.
                    </p>
                    <Link to="/" className='btn'>
                        Agendar Teleconsulta
                    </Link>
                </div>
                <figure>
                    <img className='img-home' src="/laço-autismo.png" alt="Laço com as cores do autismo" />
                </figure>
            </section>
            <Footer />

        </>
    )
}

export default Home;