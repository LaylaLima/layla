import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Estatisticas.css"

function Estatisticas() {
  return (
    <>
      <Header />
      <div className="conteudo-estatisticas">
        <img
          className="imagem-inicio-estatisticas"
          src="src\assets\img-estatistica.jpg"
          alt="Criança Autista"
        />
        <h1>
          O Crescente Desafio do Diagnóstico de Autismo: Explorando Fatores e
          Tendências Globais
        </h1>
        <p>
          Em março, o CDC lançou um documento que mostra uma mudança na
          prevalência do Transtorno do Espectro Autista (TEA): 1 em cada 36
          crianças de 8 anos foram identificadas com TEA nos EUA no ano de 2020.
          Essa tendência de aumento na prevalência é evidente ao longo dos anos.
          Em 2004, o número divulgado pelo CDC era de 1 a cada 166. Em 2012,
          esse número estava em 1 para 88. Já em 2018, passou a 1 em 59. Em
          2020, a prevalência divulgada estava em 1 em 54. No entanto, o número
          atual de 1 em cada 36 crianças é maior do que as estimativas do último
          estudo.
        </p>
        <p>
          Em 2000, nos Estados Unidos, a taxa de autismo era de um caso a cada
          150 crianças, mas em 2020 esse número saltou para um caso a cada 36
          crianças, de acordo com o Centers for Disease Control and Prevention
          (CDC). Esse aumento pode ser atribuído a várias razões. Primeiro,
          houve um maior acesso da população aos serviços de diagnóstico,
          permitindo que mais casos fossem identificados. Além disso, houve uma
          melhoria na formação de profissionais capazes de detectar o
          transtorno, e pais, professores e pediatras estão mais conscientes e
          informados para identificar os primeiros sinais de alerta.
        </p>
        <button>
          <img
            className="imagem-botao-estatisticas"
            src="src\assets\img-brinquedo.png"
            alt="Criança Brincando"
          />
        </button>
        <p>
          Outro fator importante é a ampliação da compreensão do que é o
          autismo, o que pode levar a uma identificação mais precisa e precoce.
          Além disso, há suspeitas sobre possíveis fatores ambientais que
          contribuem para a maior frequência de TEA, embora esses fatores ainda
          não estejam totalmente compreendidos.
        </p>
        <p>
          No Brasil, embora não haja estatísticas específicas, os números do CDC
          podem ser usados como referência. No entanto, o diagnóstico no Brasil
          é mais precário devido à falta de profissionais especializados e à
          avaliação multidisciplinar necessária para diagnosticar o autismo.
          Isso dificulta a obtenção de estimativas precisas. A avaliação do
          autismo geralmente envolve uma sequência de consultas e observações
          clínicas com diferentes profissionais de saúde.
        </p>
        <p>
          Um estudo recente mostrou que a amostra representativa de pessoas
          cuidadoras no Brasil é predominantemente composta por pessoas casadas,
          com pós-graduação completa, na faixa etária entre 35 e 44 anos e
          residentes no estado de São Paulo, com uma renda mensal familiar entre
          R$3 mil e R$5 mil. Além disso, uma descoberta interessante desse
          estudo foi que 1 em cada 4 pessoas cuidadoras também está no espectro
          do autismo, o que pode adicionar uma camada adicional de desafio à
          rotina dessas famílias.
        </p>
        <p>
          Embora a amostra desse estudo não represente totalmente a população
          brasileira em termos de estado civil e educação, a renda média das
          famílias está mais próxima da média nacional, que é de R$2.808, de
          acordo com dados do IBGE de 2022.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Estatisticas;
