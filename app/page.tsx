import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

const whatsapp = "https://wa.me/553138177365";
const wa = (message: string) => `${whatsapp}?text=${encodeURIComponent(message)}`;

const categories = [
  { number: "01", title: "Bicicletas", text: "Modelos para trilha, cidade, lazer e os primeiros pedais.", image: "/images/bering-fachada.jpg", alt: "Cliente com bicicleta em frente à Bering Bike Shop" },
  { number: "02", title: "Peças & componentes", text: "Tudo para elevar o desempenho e renovar sua bike.", image: "/images/bering-detalhe-bike.jpg", alt: "Detalhe de uma bicicleta fotografada pela equipe da Bering Bike Shop" },
  { number: "03", title: "Elétricas & mobilidade", text: "Novas formas de se mover pela cidade com conforto e praticidade.", image: "/images/bering-entrega-eletrica.jpg", alt: "Cliente recebendo bicicleta elétrica em frente à loja" },
];

const services = ["Revisão geral", "Regulagem de marchas", "Freios e transmissão", "Pneus e câmaras", "Instalação de acessórios", "Manutenção preventiva"];

const faqs = [
  ["Vocês fazem orçamento pelo WhatsApp?", "Sim. Envie uma mensagem contando o que procura ou o que está acontecendo com sua bike. A equipe orienta você sobre os próximos passos."],
  ["Posso levar uma bicicleta comprada em outra loja?", "Fale com a equipe pelo WhatsApp para confirmar o serviço necessário e a disponibilidade da oficina."],
  ["Como consulto bicicletas, peças e acessórios disponíveis?", "A disponibilidade pode variar. Use os botões de consulta do site para receber informações atualizadas diretamente da loja."],
  ["Preciso agendar a manutenção?", "Recomendamos consultar a oficina pelo WhatsApp antes de levar a bicicleta, principalmente para revisões e serviços mais completos."],
  ["Onde fica a Bering Bike Shop?", "A loja fica na Avenida Custódio Silva, 1050, no Centro de Ponte Nova, Minas Gerais."],
];

export default function Home() {
  return (
    <main>
      <a className="skipLink" href="#conteudo">Pular para o conteúdo</a>
      <header className="siteHeader">
        <a className="brand" href="#inicio" aria-label="Bering Bike Shop — início"><span className="brandMark" aria-hidden="true">B</span><span>BERING<small>BIKE SHOP</small></span></a>
        <nav className="desktopNav" aria-label="Navegação principal"><a href="#bikes">Bicicletas</a><a href="#oficina">Oficina</a><a href="#sobre">A loja</a><a href="#faq">Dúvidas</a><a href="#contato">Contato</a></nav>
        <a className="headerCta" href={wa("Olá! Vim pelo site da Bering Bike Shop.")} target="_blank" rel="noreferrer"><span className="waLabel">Falar no WhatsApp</span><span className="waShort" aria-hidden="true">WA</span></a>
        <MobileMenu />
      </header>

      <div id="conteudo">
        <section className="hero" id="inicio">
          <Image className="coverImage" src="/images/bering-pedal.jpg" alt="Pedal real em estrada de terra na região de Ponte Nova" fill priority sizes="100vw" />
          <div className="heroShade" />
          <div className="heroContent"><p className="eyebrow">Ponte Nova • Minas Gerais</p><h1>Seu próximo <span>pedal começa <em>aqui.</em></span></h1><p className="heroText">Bicicletas, peças, acessórios e oficina especializada para quem vive sobre duas rodas.</p><div className="heroActions"><a className="primaryButton" href="#bikes">Conheça a loja</a><a className="textButton" href={wa("Olá! Quero falar com um especialista.")} target="_blank" rel="noreferrer">Falar com especialista →</a></div></div>
          <aside className="heroBadge" aria-label="Bering Bike Shop, desde 2007"><strong>2007</strong><span>o início da nossa história</span></aside>
        </section>

        <section className="proofBar" aria-label="Diferenciais"><span>01</span><p><strong>Escolha certa</strong>Orientação para o seu pedal</p><span>02</span><p><strong>Loja + oficina</strong>Soluções em um só lugar</p><span>03</span><p><strong>Tradição local</strong>Desde 2007 em Ponte Nova</p></section>

        <section className="catalog section" id="bikes">
          <div className="sectionHead"><div><p className="eyebrow dark">Tudo para pedalar</p><h2>Encontre o que <span>move você.</span></h2></div><div className="sectionIntro"><p>Da primeira bicicleta ao upgrade dos sonhos, nossa equipe ajuda você a escolher cada detalhe.</p><span>Disponibilidade atualizada pelo WhatsApp</span></div></div>
          <div className="categoryGrid">{categories.map((item) => <article className="categoryCard" key={item.title}><div className="categoryPhoto"><Image className="coverImage" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" /></div><div className="categoryCopy"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><a href={wa(`Olá! Gostaria de consultar ${item.title.toLowerCase()} disponíveis.`)} target="_blank" rel="noreferrer" aria-label={`Consultar ${item.title} disponíveis`}>Consultar disponibilidade</a></div></article>)}</div>
          <div className="catalogNote"><div><strong>Não encontrou o que procura?</strong><p>Conte para a equipe qual bike, peça ou acessório você precisa.</p></div><a className="darkButton" href={wa("Olá! Não encontrei o que procuro no site. Podem me ajudar?")} target="_blank" rel="noreferrer">Pedir ajuda no WhatsApp</a></div>
        </section>

        <section className="workshop" id="oficina">
          <div className="workshopImage"><Image className="coverImage" src="/images/bering-loja.jpg" alt="Entrada da loja e área de atendimento fotografadas pela Bering Bike Shop" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
          <div className="workshopContent"><p className="eyebrow">Sua bike em boas mãos</p><h2>Pronta para o <em>próximo pedal.</em></h2><p>Do diagnóstico à revisão completa, cuidamos da sua bicicleta com atenção, experiência e transparência.</p><ul>{services.map((service, index)=><li key={service}><span>{String(index+1).padStart(2,"0")}</span>{service}</li>)}</ul><p className="serviceHint">Não sabe qual serviço precisa? Envie uma foto ou conte o problema para a equipe.</p><a className="primaryButton" href={wa("Olá! Gostaria de agendar uma avaliação ou manutenção para minha bicicleta.")} target="_blank" rel="noreferrer">Agendar avaliação</a></div>
        </section>

        <section className="about section" id="sobre"><div className="aboutLead"><p className="eyebrow dark">A Bering Bike Shop</p><h2>Mais que uma loja. <em>Uma vida sobre bikes.</em></h2></div><div className="aboutCopy"><p>Desde 2007, ajudamos ciclistas de Ponte Nova e região a irem mais longe. Com atendimento próximo e orientação especializada, encontramos a solução certa para quem pedala por esporte, lazer ou no dia a dia.</p><div className="stats"><div><strong>Desde 2007</strong><span>experiência local</span></div><div><strong>Loja + oficina</strong><span>solução completa</span></div></div></div></section>

        <section className="instagram"><div className="instaIntro"><span>@beringbikeshop</span><h2>Acompanhe <span>nossos pedais.</span></h2><a href="https://www.instagram.com/beringbikeshop/" target="_blank" rel="noreferrer">Seguir no Instagram</a></div><div className="instaPhoto"><Image className="coverImage" src="/images/bering-ciclista.jpg" alt="Ciclista e integrante da equipe em frente à loja" fill sizes="(max-width: 900px) 50vw, 33vw" /></div><div className="instaPhoto"><Image className="coverImage" src="/images/bering-cliente.jpg" alt="Cliente com a família recebendo uma bicicleta na loja" fill sizes="(max-width: 520px) 100vw, 33vw" /></div></section>

        <section className="faq section" id="faq"><div className="faqIntro"><p className="eyebrow dark">Dúvidas frequentes</p><h2>Antes do próximo <em>pedal.</em></h2><p>Respostas rápidas para facilitar seu contato com a loja e a oficina.</p></div><div className="faqList">{faqs.map(([question, answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

        <section className="contact" id="contato"><div className="contactLead"><p className="eyebrow">Vamos pedalar?</p><h2>Visite a <span>Bering.</span></h2><p>Confirme disponibilidade, serviços e horário de atendimento diretamente com a equipe.</p><a className="primaryButton" href={wa("Olá! Gostaria de saber mais sobre a Bering Bike Shop e confirmar o horário de atendimento.")} target="_blank" rel="noreferrer">Chamar no WhatsApp</a></div><div className="mapWrap"><iframe title="Localização da Bering Bike Shop em Ponte Nova" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Avenida+Custodio+Silva+1050+Ponte+Nova+MG&output=embed" /></div><div className="contactDetails"><div><small>Endereço</small><p>Av. Custódio Silva, 1050<br />Centro • Ponte Nova, MG</p><a href="https://www.google.com/maps/search/?api=1&query=Avenida+Custodio+Silva+1050+Ponte+Nova+MG" target="_blank" rel="noreferrer">Abrir no mapa</a></div><div><small>Contato</small><p><a href="tel:+553138177365">(31) 3817-7365</a><br /><a href="https://www.instagram.com/beringbikeshop/" target="_blank" rel="noreferrer">@beringbikeshop</a></p></div><div><small>Atendimento</small><p>Consulte o horário atualizado pelo WhatsApp.</p></div></div></section>
      </div>

      <footer><a className="brand" href="#inicio" aria-label="Voltar ao início"><span className="brandMark" aria-hidden="true">B</span><span>BERING<small>BIKE SHOP</small></span></a><p>© 2026 Bering Bike Shop. Todos os direitos reservados.</p><div><a href="#faq">Dúvidas</a><a href="https://www.instagram.com/beringbikeshop/" target="_blank" rel="noreferrer">Instagram</a></div></footer>
      <a className="floatingWa" href={wa("Olá! Vim pelo site da Bering Bike Shop.")} target="_blank" rel="noreferrer" aria-label="Falar com a Bering Bike Shop no WhatsApp"><span aria-hidden="true">WA</span><small>WhatsApp</small></a>
    </main>
  );
}
