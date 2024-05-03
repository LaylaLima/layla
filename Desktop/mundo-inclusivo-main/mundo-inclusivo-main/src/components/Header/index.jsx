import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {

    return (
        <header className={styles.header}>
           <Link to="/"><span>Mundo Inclusivo</span></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Apoio">Encontre Apoio</Link>
                <Link to="/Contato">Fale Conosco</Link>
                <Link to="/Sobre">Quem Somos</Link>
                <Link to="/Estatisticas">Estatisticas</Link>
            </nav>
            <button>Entrar/Criar Conta</button>
        </header>

    )
}

export default Header;
