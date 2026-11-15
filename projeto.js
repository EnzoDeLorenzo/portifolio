const projects = {
  pulso: {
    category: "WEB • TECNOLOGIA • IA",
    title: "PULSO<span>.</span>",
    lead: "Um portal independente para acompanhar tecnologia, inteligência artificial, internet e cultura digital com contexto.",
    status: "Em desenvolvimento",
    tags: ["Next.js", "Supabase", "Gemini", "RSS", "JavaScript"],
    overview: "O PULSO nasceu da ideia de criar um espaço editorial próprio para explicar o que acontece no universo digital. A proposta combina uma identidade visual minimalista com conteúdo acessível e responsável.",
    objective: "Construir um portal de notícias independente, com estrutura editorial própria e ferramentas que ajudem a organizar a produção de conteúdo.",
    features: [
      "Página inicial com editorias e notícias",
      "Painel administrativo para gerenciar artigos",
      "Banco de dados e autenticação com Supabase",
      "Coleta de notícias por feeds RSS",
      "Geração assistida de rascunhos com IA para revisão editorial"
    ],
    learning: "Arquitetura web com Next.js, modelagem de dados, autenticação, políticas de acesso, integração com serviços externos e uso responsável de IA em um fluxo editorial."
  },
  geografia: {
    category: "IA • EDUCAÇÃO",
    title: "IA de Geografia",
    lead: "Conceito de um assistente de estudos de Geografia com uma experiência de conversa familiar e recursos multimodais.",
    status: "Conceito / protótipo",
    tags: ["IA", "Ollama", "Web", "Documentos", "Áudio"],
    overview: "A ideia é criar um professor digital focado em Geografia, com histórico de conversas e espaço para o estudante trabalhar com diferentes materiais.",
    objective: "Facilitar o estudo de Geografia por meio de explicações contextualizadas e interação com conteúdos enviados pelo estudante.",
    features: [
      "Interface inspirada em assistentes conversacionais",
      "Histórico de conversas",
      "Planejamento de suporte a imagens e documentos",
      "Ideia de entrada por áudio"
    ],
    learning: "Planejamento de produto com IA, experiência de usuário, organização de conversas e avaliação de opções para executar modelos localmente."
  },
  clima: {
    category: "FLUTTER • APLICATIVO",
    title: "Aplicativo de Clima",
    lead: "Aplicativo mobile desenvolvido para praticar integração com dados meteorológicos e recursos de localização.",
    status: "Projeto em evolução",
    tags: ["Flutter", "Dart", "API", "Android"],
    overview: "Projeto prático de desenvolvimento mobile, com foco em apresentar informações meteorológicas em uma interface própria.",
    objective: "Construir um aplicativo de clima e aprender o fluxo de desenvolvimento, execução e depuração de um app Flutter.",
    features: [
      "Consulta de informações meteorológicas",
      "Integração com localização",
      "Interface adaptada para dispositivos móveis",
      "Configuração de permissões e recursos do Android"
    ],
    learning: "Flutter e Dart, consumo de APIs, permissões mobile, organização de telas e depuração de problemas de interface."
  },
  plataforma: {
    category: "WEB • EDUCAÇÃO",
    title: "Plataforma Educacional",
    lead: "Uma plataforma para aproximar alunos e professores por meio de turmas, atividades e comunicação.",
    status: "Em desenvolvimento",
    tags: ["Web", "JavaScript", "Firebase", "Autenticação", "UI/UX"],
    overview: "Projeto de uma aplicação educacional com áreas específicas para estudantes e professores, buscando reunir recursos escolares em um único ambiente.",
    objective: "Organizar atividades e interações da comunidade escolar em uma experiência digital responsiva.",
    features: [
      "Áreas e painéis para alunos e professores",
      "Organização de turmas e tarefas",
      "Planejamento de mensagens e grupos",
      "Recursos de presença e notificações"
    ],
    learning: "Estruturação de aplicações web, experiência de usuário, autenticação, dados em tempo real e organização de funcionalidades por perfil."
  },
  fazenda: {
    category: "GAMES • GODOT",
    title: "Jogo de Fazenda",
    lead: "Um projeto original de jogo de fazenda e vida cotidiana, com direção visual em pixel art.",
    status: "Em desenvolvimento",
    tags: ["Godot", "GDScript", "Pixelorama", "Pixel Art"],
    overview: "Projeto inspirado no gênero de simulação de fazenda, mas com identidade visual e ideias próprias.",
    objective: "Criar uma experiência de jogo acolhedora, explorando sistemas de gameplay e arte em pixel.",
    features: [
      "Conceito de menu inicial em formato 16:9",
      "Identidade visual em pixel art",
      "Planejamento de sistemas de jogo e interação"
    ],
    learning: "Desenvolvimento de jogos com Godot, organização de cenas, lógica de gameplay e criação de arte com Pixelorama."
  },
  obby: {
    category: "ROBLOX • GAME",
    title: "Roblox Obby",
    lead: "Jogo de obstáculos com fases, checkpoints e elementos interativos.",
    status: "Projeto em evolução",
    tags: ["Roblox Studio", "Lua", "Gameplay", "UI"],
    overview: "Um obby desenvolvido no Roblox Studio, com foco em progressão por fases e elementos que tornam o percurso mais dinâmico.",
    objective: "Construir uma experiência de obstáculos com progresso claro e sistemas de jogo integrados.",
    features: [
      "Planejamento de até 50 fases",
      "Checkpoints e salvamento de progresso da partida",
      "Teleporte entre etapas",
      "Ponte interativa",
      "Interface de progresso e quadro de melhores tempos"
    ],
    learning: "Scripting em Lua, eventos, lógica de checkpoints, interface no Roblox Studio e organização de sistemas de gameplay."
  }
};

const id = new URLSearchParams(window.location.search).get("id");
const project = projects[id];
document.getElementById("year").textContent = new Date().getFullYear();

if (!project) {
  document.title = "Projeto não encontrado — Enzo";
  document.getElementById("projectCategory").textContent = "PORTFÓLIO";
  document.getElementById("projectTitle").textContent = "Projeto não encontrado.";
  document.getElementById("projectLead").textContent = "Este projeto não está disponível. Volte à página inicial para ver os projetos.";
  document.getElementById("projectStatus").textContent = "Indisponível";
} else {
  document.title = `${project.title.replace(/<[^>]*>/g, "")} — Enzo`;
  document.getElementById("projectCategory").textContent = project.category;
  document.getElementById("projectTitle").innerHTML = project.title;
  document.getElementById("projectLead").textContent = project.lead;
  document.getElementById("projectStatus").textContent = project.status;
  document.getElementById("projectOverview").textContent = project.overview;
  document.getElementById("projectObjective").textContent = project.objective;
  document.getElementById("projectLearning").textContent = project.learning;
  const tags = document.getElementById("projectTags");
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tags.appendChild(span);
  });
  const features = document.getElementById("projectFeatures");
  project.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    features.appendChild(li);
  });
}
