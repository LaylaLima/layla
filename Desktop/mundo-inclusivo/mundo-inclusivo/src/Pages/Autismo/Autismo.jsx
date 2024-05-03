import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Autismo.css";

function Autismo() {
  return (
    <>
      <Header />

      <div className="conteudo-autismo">
        <img
          src="src\assets\imagem-autismo.jpeg"
          alt="Criança interagindo com jogo de Quebra-Cabeça"
        />
        <h1>
          Explorando o Transtorno do Espectro Autista (TEA): Características,
          Diagnóstico e Intervenção
        </h1>
        <p>
          O autismo, também conhecido como Transtorno do Espectro Autista (TEA),
          é uma condição neurológica complexa que afeta o desenvolvimento
          social, comportamental e comunicativo de uma pessoa. O termo
          "espectro" é usado porque o autismo pode se manifestar de maneiras
          muito diferentes em cada indivíduo, variando desde casos mais leves
          até formas mais severas. Embora as causas exatas do autismo não sejam
          completamente compreendidas, sabe-se que uma combinação de fatores
          genéticos e ambientais desempenha um papel no seu desenvolvimento.
        </p>
        <h2>Características do Autismo</h2>
        <p>
          O autismo é caracterizado por dificuldades na interação social e
          comunicação, além de padrões de comportamento repetitivos e interesses
          restritos. As pessoas no espectro autista podem exibir uma ampla
          variedade de características, incluindo dificuldades na compreensão e
          expressão das emoções, expressão facial e linguagem corporal, bem como
          dificuldades em manter conversas e entender sutilezas da linguagem,
          como sarcasmo e metáforas. Comportamentos repetitivos, sensibilidades
          sensoriais aumentadas ou diminuídas e dificuldades na adaptação a
          mudanças na rotina ou no ambiente também são comuns.
        </p>
        <h2>Diagnóstico</h2>
        <p>
          O transtorno do espectro autista (TEA) é um distúrbio do
          neurodesenvolvimento caracterizado por desenvolvimento atípico,
          manifestações comportamentais e déficits na comunicação e na interação
          social. Sinais de alerta no neurodesenvolvimento da criança podem ser
          percebidos nos primeiros meses de vida, sendo o diagnóstico
          estabelecido por volta dos 2 a 3 anos de idade. A prevalência é maior
          no sexo masculino. A identificação de atrasos no desenvolvimento, o
          diagnóstico oportuno de TEA e encaminhamento para intervenções
          comportamentais e apoio educacional na idade mais precoce possível
          pode levar a melhores resultados a longo prazo, considerando a
          neuroplasticidade cerebral.
        </p>
        <h2>Etiologia e Fatores de Risco</h2>
        <p>
          A etiologia do transtorno do espectro autista ainda permanece
          desconhecida, mas evidências científicas apontam para a interação de
          fatores genéticos e ambientais. Embora não haja uma causa única,
          diversos fatores como a exposição a gentes químicos, deficiência de
          vitamina D e ácido fólico, prematuridade, infecção materna durante a
          gravidez e idade parental avançada são considerados fatores
          contribuintes para o desenvolvimento do TEA.
        </p>
        <p>
          Em conclusão, embora o autismo seja uma condição vitalícia, o
          desenvolvimento e o progresso das pessoas no espectro autista podem
          variar ao longo do tempo. Com o apoio adequado, intervenções
          terapêuticas e compreensão da comunidade, as pessoas no espectro
          autista podem alcançar seu pleno potencial e viver vidas
          significativas e gratificantes. Ressalta-se a importância do
          diagnóstico precoce e da intervenção oportuna, bem como da pesquisa
          contínua para entender melhor a etiologia e os fatores de risco
          associados ao TEA.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Autismo;
