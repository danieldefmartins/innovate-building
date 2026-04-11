// Portuguese translations for data-driven content (services, FAQ, reviews, pages)

export const servicesPT: Record<string, { title: string; shortTitle: string; description: string; heroTitle: string; heroSubtitle: string; features: string[]; benefits: string[]; process: { step: string; description: string }[]; faqs: { q: string; a: string }[] }> = {
  "home-remodeling": {
    title: "Reforma Residencial",
    shortTitle: "Reforma",
    description: "Reformas completas por equipes próprias com experiência. Cozinhas, banheiros, porões e reformas de toda a casa na Grande Boston.",
    heroTitle: "ESPECIALISTAS EM REFORMA RESIDENCIAL",
    heroSubtitle: "Sua casa merece uma reforma feita por profissionais que se importam. Nossas equipes próprias cuidam de cada detalhe — da demolição aos acabamentos finais.",
    features: ["Reformas de conceito aberto", "Instalação de pisos", "Trabalho de molduras e acabamentos", "Atualizações elétricas e hidráulicas", "Atualizações estruturais", "Pintura interna e externa"],
    benefits: ["Reforma completa da casa sob um mesmo teto", "Equipes próprias para cada ofício", "25+ anos de experiência em reformas", "Preços transparentes — sem surpresas", "Gestão de licenças incluída", "Limpeza diária do canteiro"],
    process: [{ step: "Consulta", description: "Visitamos sua casa e discutimos seus objetivos" }, { step: "Projeto e Planejamento", description: "Criamos um plano detalhado com orçamento" }, { step: "Construção", description: "Nossas equipes executam o trabalho com supervisão diária" }, { step: "Inspeção Final", description: "Vistoria final juntos — não terminamos até você estar satisfeito" }],
    faqs: [{ q: "Quanto tempo leva uma reforma completa?", a: "Depende do escopo. Uma reforma de um cômodo leva 2-4 semanas. Uma reforma de toda a casa pode levar 3-6 meses." }, { q: "Preciso me mudar durante a reforma?", a: "Para a maioria dos projetos, não. Trabalhamos em fases para minimizar a interrupção. Para reformas completas, pode ser mais confortável se mudar temporariamente." }, { q: "Vocês cuidam das licenças?", a: "Sim. Cuidamos de todas as licenças de construção necessárias para seu projeto." }],
  },
  "kitchen-remodeling": {
    title: "Reforma de Cozinha",
    shortTitle: "Cozinhas",
    description: "Reformas de cozinha personalizadas que combinam funcionalidade e estilo. Armários, bancadas, azulejos e reformas completas por equipes próprias.",
    heroTitle: "ESPECIALISTAS EM REFORMA DE COZINHA",
    heroSubtitle: "Sua cozinha é o cômodo mais usado da sua casa — merece um empreiteiro que faça direito. Design personalizado, materiais premium e equipes próprias do início ao fim.",
    features: ["Armários personalizados e semi-personalizados", "Instalação de bancadas (granito, quartzo, mármore)", "Design e construção de ilhas", "Trabalho de azulejos e revestimentos", "Atualizações hidráulicas e elétricas", "Instalação de pisos"],
    benefits: ["Reforma completa de cozinha sob um mesmo teto", "Equipes próprias para cada ofício", "Visualização de design 3D", "Seleção de materiais premium", "25+ anos de experiência em cozinhas", "Preços transparentes — sem surpresas"],
    process: [{ step: "Consulta de Cozinha", description: "Medimos seu espaço e discutimos sua visão" }, { step: "Design e Seleção", description: "Escolha armários, bancadas, azulejos e eletrodomésticos" }, { step: "Construção e Instalação", description: "Demolição profissional, construção e instalação" }, { step: "Inspeção de Qualidade", description: "Vistoria final para garantir cada detalhe perfeito" }],
    faqs: [{ q: "Quanto tempo leva uma reforma de cozinha?", a: "Uma reforma típica leva 4-8 semanas. Uma atualização cosmética pode levar 2-3 semanas, enquanto uma renovação completa leva 8-12 semanas." }, { q: "Podem trabalhar com meu layout atual?", a: "Com certeza. Podemos atualizar sua cozinha mantendo o layout atual ou redesenhar completamente o espaço." }, { q: "Vocês fornecem os materiais?", a: "Cuidamos da seleção de materiais com nossos fornecedores de confiança, mas também trabalhamos com materiais que você escolher." }],
  },
  "bathroom-remodeling": {
    title: "Reforma de Banheiro",
    shortTitle: "Banheiros",
    description: "Transforme seu banheiro com reforma especializada. Chuveiros walk-in, azulejos personalizados, gabinetes modernos. Empreiteiro licenciado, 25+ anos de experiência.",
    heroTitle: "ESPECIALISTAS EM REFORMA DE BANHEIRO",
    heroSubtitle: "De lavabos a suítes de luxo — nossas equipes próprias transformam banheiros com azulejos de qualidade, chuveiros modernos e atenção aos detalhes.",
    features: ["Chuveiros walk-in e sem borda", "Instalação de azulejos personalizados", "Instalação de gabinetes", "Piso com aquecimento radiante", "Sistemas de impermeabilização", "Atualizações hidráulicas"],
    benefits: ["Reforma completa de banheiro sob um mesmo teto", "Equipe especializada em azulejos", "Experiência em design de banheiros spa", "Impermeabilização em cada projeto", "25+ anos de experiência", "Limpeza diária — respeitamos sua casa"],
    process: [{ step: "Consulta de Banheiro", description: "Avaliamos seu espaço e discutimos suas ideias" }, { step: "Design e Materiais", description: "Selecionamos azulejos, gabinete, acessórios e acabamentos" }, { step: "Demolição e Construção", description: "Impermeabilização, hidráulica, azulejos e instalação profissional" }, { step: "Vistoria Final", description: "Inspecionamos cada detalhe juntos" }],
    faqs: [{ q: "Quanto tempo leva uma reforma de banheiro?", a: "A maioria leva 2-4 semanas. Um lavabo pode ficar pronto em 7-10 dias, enquanto um banheiro principal completo leva 3-5 semanas." }, { q: "Podem instalar chuveiro walk-in?", a: "Sim. Projetamos e instalamos chuveiros walk-in com vidro sem moldura, bancos embutidos e azulejos personalizados." }, { q: "E se encontrarem dano por água?", a: "Reparamos corretamente antes de continuar. É melhor descobrir agora do que depois que o azulejo novo estiver instalado." }],
  },
  "roofing": {
    title: "Telhados",
    shortTitle: "Telhados",
    description: "Substituição completa de telhado e reparos por equipes próprias. Telhas asfálticas, arquitetônicas e de design. Especialistas em danos por tempestades.",
    heroTitle: "SERVIÇOS DE TELHADOS",
    heroSubtitle: "Seu telhado protege tudo que está abaixo. Nossa equipe própria de telhados cuida de substituições completas, reparos e danos por tempestades com qualidade e velocidade.",
    features: ["Substituição completa de telhado", "Reparo de tempestades e emergências", "Telhas arquitetônicas e de design", "Prevenção de represas de gelo", "Instalação de calhas", "Ventilação de sótão"],
    benefits: ["Equipe própria de telhados", "Todos os sistemas principais", "Experiência em danos por tempestades", "Garantias do fabricante", "Limpeza completa do local", "Assistência com seguros"],
    process: [{ step: "Inspeção do Telhado", description: "Avaliação completa e orçamento detalhado" }, { step: "Seleção de Materiais", description: "Escolha telhas, cor e sistema de garantia" }, { step: "Instalação", description: "Remoção profissional e instalação do novo telhado" }, { step: "Inspeção Final", description: "Verificação de qualidade e limpeza completa" }],
    faqs: [{ q: "Quanto tempo leva uma substituição de telhado?", a: "A maioria dos telhados residenciais é completada em 1-3 dias, dependendo do tamanho e complexidade." }, { q: "Ajudam com seguros?", a: "Sim. Documentamos o dano, fornecemos orçamentos detalhados e trabalhamos diretamente com sua seguradora." }, { q: "Qual garantia oferecem?", a: "Oferecemos garantia na mão de obra mais a garantia do fabricante nos materiais (20-50 anos dependendo do produto)." }],
  },
};

export const faqDataPT = [
  { category: "Geral", question: "Há quanto tempo estão no mercado?", answer: "A Innovate Building Inc atende proprietários da Grande Boston e New Hampshire desde 2001 — mais de 20 anos de experiência com mais de 1.000 projetos concluídos. Somos licenciados em Massachusetts (CS-119608) e New Hampshire." },
  { category: "Geral", question: "São licenciados e segurados?", answer: "Sim. Somos um empreiteiro geral totalmente licenciado em Massachusetts (Licença #CS-119608) e New Hampshire. Temos seguro de responsabilidade geral completo e compensação trabalhista." },
  { category: "Geral", question: "Usam subempreiteiros?", answer: "Não — e isso é o que nos diferencia. Usamos 100% equipe própria para cada projeto. Nossos carpinteiros, azulejistas, telhadores e trabalhadores são todos parte da equipe da Innovate Building." },
  { category: "Geral", question: "Quais áreas atendem?", answer: "Atendemos toda a área da Grande Boston incluindo Boston, Cambridge, Somerville, Newton, Brookline, Quincy e todas as cidades ao redor. Também atendemos o sul de New Hampshire incluindo Manchester, Nashua, Salem e cidades próximas." },
  { category: "Geral", question: "Oferecem orçamentos grátis?", answer: "Sim. Fornecemos consultas e orçamentos gratuitos no local para todos os projetos. Sem compromisso e sem pressão. Visitamos sua casa, discutimos sua visão, tiramos medidas e fornecemos um orçamento escrito detalhado." },
  { category: "Processo", question: "Como é o processo do início ao fim?", answer: "Nosso processo tem quatro fases: (1) Consulta Gratuita — visitamos sua casa e discutimos seus objetivos. (2) Projeto e Orçamento — fornecemos uma proposta escrita detalhada. (3) Construção — nossa equipe própria completa o trabalho com supervisão diária. (4) Vistoria Final — fazemos uma inspeção juntos." },
  { category: "Processo", question: "Cuidam das licenças?", answer: "Sim. Cuidamos de todas as licenças de construção necessárias para seu projeto. Conhecemos os requisitos de cada cidade e município em nossa área de atendimento." },
  { category: "Processo", question: "Estarão no local durante a construção?", answer: "Sim. Nosso proprietário, Daniel, está no local regularmente supervisionando cada projeto ativo. Você também terá um líder de projeto dedicado no seu canteiro todos os dias." },
  { category: "Custos", question: "Quanto custa uma reforma de cozinha?", answer: "Reformas de cozinha na Grande Boston tipicamente variam de $25.000 para uma atualização básica até $120.000+ para uma renovação completa de alto padrão. O custo exato depende do tamanho, materiais e mudanças de layout." },
  { category: "Custos", question: "Qual é o calendário de pagamentos?", answer: "Tipicamente estruturamos os pagamentos em marcos: um depósito para garantir seu projeto, depois pagamentos de progresso em marcos-chave de construção, com um pagamento final na conclusão e sua satisfação." },
  { category: "Garantia", question: "Oferecem garantia no trabalho?", answer: "Sim. Garantimos nossa mão de obra em todo o trabalho. Se algo que construímos não estiver certo, voltamos e consertamos — ponto final." },
  { category: "Garantia", question: "Limpam no final de cada dia?", answer: "Sim. Respeitamos sua casa. Nossas equipes limpam no final de cada dia de trabalho — ferramentas organizadas, entulho removido, área de trabalho varrida. Também usamos barreiras contra poeira e proteção de pisos." },
];

export const reviewsPT = [
  { name: "Maria Santos", location: "Somerville, MA", service: "Reforma de Cozinha", text: "Daniel e Mendes transformaram completamente nossa cozinha. Daniel nos manteve informados em cada etapa, e Mendes e sua equipe fizeram tudo internamente — hidráulica, elétrica, armários, azulejos. A qualidade foi excepcional. A melhor decisão que tomamos.", rating: 5, date: "Março 2026", source: "Google" },
  { name: "James O'Brien", location: "Cambridge, MA", service: "Ampliação de Casa", text: "Adicionamos um segundo andar e parece que sempre fez parte da casa. Daniel cuidou de todo o planejamento e licenças, e Mendes estava no local quase todos os dias supervisionando a equipe. Profissional, limpo e no prazo.", rating: 5, date: "Fevereiro 2026", source: "Google" },
  { name: "Patricia Chen", location: "Newton, MA", service: "Reforma de Banheiro", text: "Nosso banheiro principal foi dos anos 1990 para estilo spa em 3 semanas. O trabalho de azulejos é lindo e a atenção aos detalhes é incrível. Até consertaram dano por água que não sabíamos que existia.", rating: 5, date: "Janeiro 2026", source: "Google" },
  { name: "Robert Fitzgerald", location: "Quincy, MA", service: "Telhados", text: "Depois que a tempestade danificou nosso telhado, a Innovate estava aqui no dia seguinte para um orçamento. Substituição completa do telhado em 2 dias, limparam perfeitamente. Até ajudaram com a papelada do seguro.", rating: 5, date: "Dezembro 2025", source: "Google" },
  { name: "Ana Rodriguez", location: "Everett, MA", service: "Acabamento de Porão", text: "Transformaram nosso porão úmido e escuro em uma linda sala de estar com lavabo. A equipe resolveu os problemas de umidade primeiro — algo que outros empreiteiros queriam pular. Honestos e completos.", rating: 5, date: "Novembro 2025", source: "Google" },
];
