import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Causas.css";

function Causas() {
  return (
    <>
      <Header />
      <div className="conteudo-causas">
        <img
          src="src\assets\imagem-causas.jpg"
          alt="Criança interagindo com jogo de Letras"
        />
        <h1>
          Desvendando o Aumento dos Casos de Autismo: Causas e Sinais de Alerta
        </h1>
        <p>
          O aumento alarmante nos casos de autismo nas últimas décadas é um
          fenômeno complexo e multifacetado. Diversas hipóteses têm sido
          levantadas por cientistas para tentar compreender esse cenário em
          constante evolução
        </p>
        <p>
          1. Ampliação do Acesso ao Diagnóstico: Um fator significativo parece
          ser o maior acesso da população aos serviços de diagnóstico.
          Especialmente em comunidades historicamente desassistidas, como
          crianças negras, latinas e hispânicas nos EUA, o acesso a avaliações
          diagnósticas tem aumentado. Isso permite um retrato mais preciso da
          prevalência do autismo.
        </p>
        <p>
          2. Conscientização e Preparo Profissional: A conscientização crescente
          entre pediatras e professores tem desempenhado um papel crucial.
          Profissionais de saúde e educadores estão mais aptos a reconhecer os
          primeiros sinais de autismo e encaminhar crianças para avaliações
          especializadas. A disseminação do conhecimento sobre autismo em
          publicações científicas e eventos acadêmicos também contribui para
          essa conscientização.
        </p>
        {/* imagem com botão */}
        <p>
          3. Reconhecimento de Casos 'Leves': Houve uma mudança na compreensão
          do autismo, que anteriormente estava associado principalmente a casos
          mais severos. Hoje, reconhecemos que indivíduos com autismo de alto
          funcionamento também podem enfrentar desafios significativos e se
          beneficiar de apoio e intervenções adequadas
        </p>
        <p>
          4. Fatores Ambientais e de Risco: Estudos indicam que fatores
          ambientais, como a idade dos pais e condições durante a gravidez,
          podem desempenhar um papel na incidência do autismo. Exposição a
          agentes químicos, deficiências nutricionais e outras variáveis durante
          a gestação têm sido associadas a um maior risco.
        </p>
        <p>
          Além disso, é crucial estar ciente dos sinais de alerta precoce do
          autismo, como a falta de contato visual, atrasos na fala e
          comportamentos repetitivos. O diagnóstico precoce e a intervenção
          especializada são fundamentais para garantir que as crianças recebam o
          apoio necessário para seu desenvolvimento.
        </p>
        <p>
          Por fim, é importante destacar que não há evidências científicas que
          comprovem uma relação entre vacinas e autismo. Uma compreensão mais
          profunda das causas e sinais de alerta do autismo pode ajudar a
          promover uma abordagem mais empática e eficaz para apoiar indivíduos
          no espectro autista.
        </p>
      </div>
      <Footer/>
    </>
  );
}
export default Causas;