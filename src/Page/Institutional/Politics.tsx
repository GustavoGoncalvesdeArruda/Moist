import { useEffect } from 'react';
const PoliticaPrivacidadeMoist = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <div className="bg-black mb-10 ">
      <div className="font-serif p-10 max-w-3xl mx-auto text-sm bg-neutral-950 text-neutral-200 min-h-screen">
        
        <h1 className="font-semibold text-3xl mb-6">Política de Privacidade MOIST</h1>
        
        <p className="mb-6">
          A MOIST se preocupa com a sua privacidade e com a segurança dos seus dados pessoais. Esta política de privacidade explica como coletamos, usamos, armazenamos e protegemos as suas informações ao navegar e interagir com o nosso site e serviços.
        </p>
        
        <h2 className="font-bold text-xl mt-8 mb-4">1. Coleta de Dados Pessoais</h2>
        <p className="mb-2">Coletamos informações que você nos fornece diretamente, como:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <strong>Dados de Cadastro:</strong> Nome completo, e-mail, CPF, endereço de entrega e telefone, quando você cria uma conta, realiza uma compra ou se cadastra em nossa newsletter.
          </li>
          <li>
            <strong>Dados de Pagamento:</strong> Informações de cartão de crédito/débito ou outros dados financeiros necessários para processar suas compras. Essas informações são criptografadas e processadas por parceiros seguros de pagamento.
          </li>
          <li>
            <strong>Dados de Navegação:</strong> Coletamos automaticamente informações sobre sua interação com o site, como endereço IP, tipo de navegador, páginas visitadas, tempo de permanência, produtos visualizados e cliques. Isso nos ajuda a entender suas preferências e melhorar sua experiência.
          </li>
          <li>
            <strong>Cookies e Tecnologias Semelhantes:</strong> Utilizamos cookies e outras tecnologias para coletar informações sobre sua navegação, personalizar conteúdo, exibir anúncios relevantes e analisar o tráfego do site. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
          </li>
        </ul>
        
        <h2 className="font-bold text-xl mt-8 mb-4">2. Uso dos Dados Pessoais</h2>
        <p className="mb-2">Utilizamos seus dados para:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Processar e entregar seus pedidos.</li>
          <li>Gerenciar sua conta e fornecer suporte ao cliente.</li>
          <li>Comunicar-nos sobre o status dos seus pedidos, promoções, novidades e ofertas especiais.</li>
          <li>Personalizar sua experiência no site, exibindo produtos e conteúdo de seu interesse.</li>
          <li>Melhorar nossos produtos, serviços e o funcionamento do site.</li>
          <li>Realizar análises de mercado e tendências.</li>
          <li>Garantir a segurança do site e prevenir fraudes.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
        
        <h2 className="font-bold text-xl mt-8 mb-4">3. Compartilhamento de Dados Pessoais</h2>
        <p className="mb-2">
          A MOIST se compromete a não vender, alugar ou divulgar seus dados pessoais para terceiros não autorizados. No entanto, podemos compartilhar suas informações com:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Parceiros de Logística:</strong> Para a entrega dos seus produtos.</li>
          <li><strong>Empresas de Pagamento:</strong> Para processar suas transações de forma segura.</li>
          <li><strong>Prestadores de Serviços:</strong> Para nos auxiliar em operações como marketing, análise de dados e suporte técnico.</li>
          <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger nossos direitos e segurança.</li>
          <li><strong>Parceiros de Publicidade:</strong> Para exibir anúncios relevantes em outros sites e plataformas.</li>
        </ul>
        
        <h2 className="font-bold text-xl mt-8 mb-4">4. Armazenamento e Segurança dos Dados</h2>
        <p className="mb-6">
          Armazenamos seus dados em servidores seguros e utilizamos medidas técnicas e administrativas para protegê-los contra acesso não autorizado, uso indevido, alteração ou destruição. Apesar de todos os nossos esforços, nenhum sistema de segurança é 100% infalível.
        </p>
        
        <h2 className="font-bold text-xl mt-8 mb-4">5. Seus Direitos</h2>
        <p className="mb-2">Você tem o direito de:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Acessar</strong> seus dados pessoais a qualquer momento.</li>
          <li><strong>Corrigir</strong> informações imprecisas ou desatualizadas.</li>
          <li><strong>Solicitar a exclusão</strong> dos seus dados (sujeito a obrigações legais de retenção).</li>
          <li><strong>Revogar</strong> seu consentimento para o uso de dados, quando aplicável.</li>
          <li><strong>Opor-se</strong> ao processamento de seus dados em determinadas circunstâncias.</li>
        </ul>
        <p className="mb-6">
          Para exercer esses direitos, entre em contato conosco através dos canais disponíveis em nosso site.
        </p>
        
        <h2 className="font-bold text-xl mt-8 mb-4">6. Links para Sites de Terceiros</h2>
        <p className="mb-6">
          Nosso site pode conter links para outros sites que não são operados por nós. Não somos responsáveis pelas políticas de privacidade ou conteúdo desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site de terceiro que visitar.
        </p>
        
        <h2 className="font-bold text-xl mt-8 mb-4">7. Alterações na Política de Privacidade</h2>
        <p className="mb-2">
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou na legislação. A versão mais recente estará sempre disponível em nosso site. Recomendamos que você a revise regularmente.
        </p>
        <p>
          Ao utilizar o site da MOIST, você concorda com os termos desta Política de Privacidade.
        </p>
        <p>
          Se tiver alguma dúvida, entre em contato conosco!
        </p>
      </div>
    </div>
  );
};

export default PoliticaPrivacidadeMoist;
