const whatsapp = "https://wa.me/553138177365";
const wa = (message: string) => `${whatsapp}?text=${encodeURIComponent(message)}`;

const categories = [
  { number: "01", title: "Bicicletas", text: "Modelos para trilha, cidade, lazer e os primeiros pedais.", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=1000" },
  { number: "02", title: "Peças & componentes", text: "Tudo para elevar o desempenho e renovar sua bike.", image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&q=80&w=1000" },
  { number: "03", title: "Acessórios", text: "Segurança, conforto e estilo para cada quilômetro.", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&q=80&w=1000" },
];

const services = ["Revisão geral", "Regulagem de marchas", "Freios e transmissão", "Pneus e câmaras", "Instalação de acessórios", "Manutenção preventiva"];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#inicio" aria-label="Bering Bike Shop — início"><span className="brandMark">B</span><span>BERING<small>BIKE SHOP</small></span></a>
        <nav aria-label="Navegação principal"><a href="#bikes">Bicicletas</a><a href="#oficina">Oficina</a><a href="#sobre">A loja</a><a href="#contato">Contato</a></nav>
        <a className="headerCta" href={wa("Olá! Vim pelo site da Bering Bike Shop.")} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
      </header>

      <section className="hero" id="inicio">
        <div className="heroShade" />
        <div className="heroContent"><p className="eyebrow">Ponte Nova • Minas Gerais</p><h1>Seu próximo<br />pedal começa <em>aqui.</em></h1><p className="heroText">Bicicletas, peças, acessórios e oficina especializada para quem vive sobre duas rodas.</p><div className="heroActions"><a className="primaryButton" href="#bikes">Conheça a loja <span>↗</span></a><a className="textButton" href={wa("Olá! Quero falar com um especialista.")} target="_blank" rel="noreferrer">Falar com especialista →</a></div></div>
        <aside className="heroBadge" aria-label="Desde 2007"><strong>18+</strong><span>anos de estrada</span></aside>
      </section>

      <section className="proofBar" aria-label="Diferenciais"><span>01</span><p><strong>Escolha certa</strong>Orientação para o seu pedal</p><span>02</span><p><strong>Oficina completa</strong>Cuidado em cada detalhe</p><span>03</span><p><strong>Tradição local</strong>Desde 2007 em Ponte Nova</p></section>

      <section className="catalog section" id="bikes">
        <div className="sectionHead"><div><p className="eyebrow dark">Tudo para pedalar</p><h2>Encontre o que<br />move você.</h2></div><p>Da primeira bicicleta ao upgrade dos sonhos, nossa equipe ajuda você a escolher cada detalhe.</p></div>
        <div className="categoryGrid">{categories.map((item) => <article className="categoryCard" key={item.title} style={{backgroundImage:`url('${item.image}')`}}><div className="cardOverlay"/><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p><a href={wa(`Olá! Gostaria de consultar ${item.title.toLowerCase()} disponíveis.`)} target="_blank" rel="noreferrer" aria-label={`Consultar ${item.title}`}>Consultar agora ↗</a></div></article>)}</div>
      </section>

      <section className="workshop" id="oficina">
        <div className="workshopImage"><div className="imageTag"><strong>OFICINA</strong><span>Precisão em cada ajuste</span></div></div>
        <div className="workshopContent"><p className="eyebrow">Sua bike em boas mãos</p><h2>Pronta para o<br /><em>próximo pedal.</em></h2><p>Do diagnóstico à revisão completa, cuidamos da sua bicicleta com atenção, experiência e transparência.</p><ul>{services.map((service, index)=><li key={service}><span>{String(index+1).padStart(2,"0")}</span>{service}</li>)}</ul><a className="primaryButton" href={wa("Olá! Gostaria de agendar uma avaliação ou manutenção para minha bicicleta.")} target="_blank" rel="noreferrer">Agendar manutenção <span>↗</span></a></div>
      </section>

      <section className="about section" id="sobre"><div className="aboutLead"><p className="eyebrow dark">A Bering Bike Shop</p><h2>Mais que uma loja.<br /><em>Uma vida sobre bikes.</em></h2></div><div className="aboutCopy"><p>Desde 2007, ajudamos ciclistas de Ponte Nova e região a irem mais longe. Com atendimento próximo e orientação especializada, encontramos a solução certa para quem pedala por esporte, lazer ou no dia a dia.</p><div className="stats"><div><strong>2007</strong><span>ano de fundação</span></div><div><strong>100%</strong><span>paixão por ciclismo</span></div></div></div></section>

      <section className="instagram"><div className="instaIntro"><span>@beringbikeshop</span><h2>Acompanhe<br />nossos pedais.</h2><a href="https://www.instagram.com/beringbikeshop/" target="_blank" rel="noreferrer">Seguir no Instagram ↗</a></div><div className="instaPhoto one"/><div className="instaPhoto two"/></section>

      <section className="contact" id="contato"><div><p className="eyebrow">Vamos pedalar?</p><h2>Visite a<br />Bering.</h2><a className="primaryButton" href={wa("Olá! Gostaria de saber mais sobre a Bering Bike Shop.")} target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a></div><div className="contactDetails"><div><small>Endereço</small><p>Av. Custódio Silva, 1050<br />Centro • Ponte Nova, MG</p><a href="https://www.google.com/maps/search/?api=1&query=Avenida+Custodio+Silva+1050+Ponte+Nova+MG" target="_blank" rel="noreferrer">Como chegar ↗</a></div><div><small>Contato</small><p>(31) 3817-7365<br />@beringbikeshop</p></div></div></section>

      <footer><a className="brand" href="#inicio"><span className="brandMark">B</span><span>BERING<small>BIKE SHOP</small></span></a><p>© 2026 Bering Bike Shop. Todos os direitos reservados.</p><a href="https://www.instagram.com/beringbikeshop/" target="_blank" rel="noreferrer">Instagram ↗</a></footer>
      <a className="floatingWa" href={wa("Olá! Vim pelo site da Bering Bike Shop.")} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">WA</a>
    </main>
  );
}
