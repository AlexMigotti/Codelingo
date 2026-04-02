// curriculum_css.js — Trilha CSS3 Moderno (30 módulos)
// The Luminous Scholar — Versão Corrigida

const curriculumCSS = [

// ==================== MÓDULOS 1–10: FUNDAMENTOS DO CSS ====================

{
    id: "css_seletores",
    title: "Módulo 1: Seletores Básicos",
    description: "Aprenda a selecionar elementos HTML para aplicar estilos.",
    aula: {
        titulo: "Seletores CSS",
        conteudo: `
            <h2>Os três seletores fundamentais</h2>
            <ul>
                <li><strong>Elemento</strong>: <code>p { color: blue; }</code></li>
                <li><strong>Classe</strong>: <code>.destaque { background: yellow; }</code></li>
                <li><strong>ID</strong>: <code>#cabecalho { font-size: 2rem; }</code></li>
            </ul>
            <p>Prioridade: ID > Classe > Elemento</p>
        `
    },
    exercicios: [
        {
            instrucao: "Crie um estilo que deixe todos os parágrafos com cor azul, elementos com classe 'destaque' com fundo amarelo, e um elemento com id 'titulo' com fonte 24px.",
            codigoInicial: "<style>\n/* seus estilos */\n</style>\n<p>Parágrafo</p>\n<div class='destaque'>Destaque</div>\n<h1 id='titulo'>Título</h1>",
            xp: 30,
            dica: "p { color: blue; }\n.destaque { background: yellow; }\n#titulo { font-size: 24px; }",
            validar: (codigo, iframeDoc) => {
                const p = iframeDoc.querySelector('p');
                const destaque = iframeDoc.querySelector('.destaque');
                const titulo = iframeDoc.querySelector('#titulo');
                const style = iframeDoc.defaultView.getComputedStyle(p);
                return style.color === 'rgb(0, 0, 255)' && destaque && titulo;
            }
        }
    ]
},

{
    id: "css_box_model",
    title: "Módulo 2: Box Model",
    description: "Entenda como o CSS enxerga cada elemento como uma caixa.",
    aula: {
        titulo: "As quatro camadas do Box Model",
        conteudo: "<p>Todo elemento tem: content (conteúdo), padding (espaçamento interno), border (borda) e margin (espaçamento externo).</p><p>Use <code>box-sizing: border-box;</code> para que largura inclua padding e border.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma div com largura 200px, padding 20px, borda preta 2px solid e margin 10px. Use box-sizing: border-box.",
            codigoInicial: "<style>\n.caixa { /* estilos */ }\n</style>\n<div class='caixa'>Conteúdo</div>",
            xp: 35,
            dica: ".caixa {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n  box-sizing: border-box;\n}",
            validar: (codigo, iframeDoc) => {
                const caixa = iframeDoc.querySelector('.caixa');
                const style = iframeDoc.defaultView.getComputedStyle(caixa);
                return style.width === '200px' && style.padding === '20px';
            }
        }
    ]
},

{
    id: "css_cores_fundo",
    title: "Módulo 3: Cores e Backgrounds",
    description: "Aplique cores sólidas, gradientes e imagens de fundo.",
    aula: {
        titulo: "Propriedades de cor e background",
        conteudo: "<p>Cores podem ser definidas por nome, hexadecimal, RGB, RGBA, HSL, HSLA. Gradientes: <code>background: linear-gradient(90deg, red, blue);</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma seção com fundo gradiente de azul para verde, texto branco e borda arredondada de 12px.",
            codigoInicial: "<style>\nsection { /* estilos */ }\n</style>\n<section>Conteúdo</section>",
            xp: 30,
            dica: "section {\n  background: linear-gradient(90deg, blue, green);\n  color: white;\n  border-radius: 12px;\n  padding: 20px;\n}",
            validar: (codigo, iframeDoc) => {
                const section = iframeDoc.querySelector('section');
                const style = iframeDoc.defaultView.getComputedStyle(section);
                return style.background.includes('gradient') && style.color === 'rgb(255, 255, 255)';
            }
        }
    ]
},

{
    id: "css_fontes",
    title: "Módulo 4: Fontes e Texto",
    description: "Personalize tipografia com fontes da web.",
    aula: {
        titulo: "Estilizando texto",
        conteudo: "<p>Use <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>, <code>text-align</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Aplique ao body a fonte 'Arial', tamanho 16px, altura da linha 1.5 e centralize um título.",
            codigoInicial: "<style>\n/* estilos */\n</style>\n<h1>Título Centralizado</h1>",
            xp: 30,
            dica: "body { font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; }\nh1 { text-align: center; }",
            validar: (codigo, iframeDoc) => {
                const body = iframeDoc.body;
                const style = iframeDoc.defaultView.getComputedStyle(body);
                return style.fontFamily.includes('Arial') && style.fontSize === '16px';
            }
        }
    ]
},

{
    id: "css_display",
    title: "Módulo 5: Display",
    description: "Controle o comportamento dos elementos no fluxo da página.",
    aula: {
        titulo: "Propriedade display",
        conteudo: "<p><code>block</code>: ocupa toda largura. <code>inline</code>: só ocupa espaço do conteúdo. <code>inline-block</code>: mistura. <code>none</code>: remove o elemento.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie três botões que fiquem na mesma linha, com largura 100px e altura 40px. Use inline-block.",
            codigoInicial: "<style>\n.btn { /* estilos */ }\n</style>\n<button class='btn'>1</button>\n<button class='btn'>2</button>\n<button class='btn'>3</button>",
            xp: 30,
            dica: ".btn {\n  display: inline-block;\n  width: 100px;\n  height: 40px;\n}",
            validar: (codigo, iframeDoc) => {
                const btns = iframeDoc.querySelectorAll('.btn');
                const style = iframeDoc.defaultView.getComputedStyle(btns[0]);
                return btns.length === 3 && style.display === 'inline-block';
            }
        }
    ]
},

{
    id: "css_posicionamento",
    title: "Módulo 6: Posicionamento",
    description: "Controle a localização exata dos elementos.",
    aula: {
        titulo: "Propriedade position",
        conteudo: "<p><code>static</code> (padrão), <code>relative</code> (relativo à posição original), <code>absolute</code> (relativo ao ancestral posicionado), <code>fixed</code> (relativo à viewport), <code>sticky</code> (híbrido).</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um cabeçalho fixo no topo da página (background preto, texto branco).",
            codigoInicial: "<style>\nheader { /* estilos */ }\n</style>\n<header>Cabeçalho Fixo</header>\n<main>Conteúdo</main>",
            xp: 40,
            dica: "header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: black;\n  color: white;\n  padding: 1rem;\n}\nmain { margin-top: 80px; }",
            validar: (codigo, iframeDoc) => {
                const header = iframeDoc.querySelector('header');
                const style = iframeDoc.defaultView.getComputedStyle(header);
                return style.position === 'fixed';
            }
        }
    ]
},

{
    id: "css_pseudo_classes",
    title: "Módulo 7: Pseudo-classes",
    description: "Selecione elementos com base em estado ou posição.",
    aula: {
        titulo: "Pseudo-classes",
        conteudo: "<p><code>:hover</code>, <code>:first-child</code>, <code>:nth-child()</code>, <code>:focus</code>, <code>:active</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma lista com 5 itens. Ao passar o mouse, o item deve ficar com fundo cinza. O primeiro item deve ter texto em negrito.",
            codigoInicial: "<style>\nli { /* estilos */ }\n</style>\n<ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>",
            xp: 35,
            dica: "li:hover { background: gray; }\nli:first-child { font-weight: bold; }",
            validar: (codigo) => {
                return codigo.includes(':hover') && codigo.includes(':first-child');
            }
        }
    ]
},

{
    id: "css_pseudo_elementos",
    title: "Módulo 8: Pseudo-elementos",
    description: "Estilize partes específicas de um elemento.",
    aula: {
        titulo: "Pseudo-elementos",
        conteudo: "<p><code>::before</code>, <code>::after</code>, <code>::first-letter</code>, <code>::first-line</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Adicione '→ ' antes de cada link usando ::before.",
            codigoInicial: "<style>\na::before { /* estilos */ }\n</style>\n<a href='#'>Link 1</a>\n<a href='#'>Link 2</a>",
            xp: 35,
            dica: "a::before {\n  content: '→ ';\n}",
            validar: (codigo) => {
                return codigo.includes('::before') && codigo.includes('content:');
            }
        }
    ]
},

{
    id: "css_especificidade",
    title: "Módulo 9: Especificidade e Herança",
    description: "Entenda como o CSS resolve conflitos entre regras.",
    aula: {
        titulo: "Cálculo de especificidade",
        conteudo: "<p>ID (100) > Classe (10) > Elemento (1). <code>!important</code> quebra as regras (evitar).</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um parágrafo com classe 'texto' e ID 'unico'. Faça o ID sobrescrever a classe (cor vermelha vs azul).",
            codigoInicial: "<style>\n.texto { color: blue; }\n#unico { color: red; }\n</style>\n<p id='unico' class='texto'>Teste</p>",
            xp: 30,
            dica: "O ID tem prioridade sobre a classe, então a cor será vermelha.",
            validar: (codigo, iframeDoc) => {
                const p = iframeDoc.querySelector('p');
                const style = iframeDoc.defaultView.getComputedStyle(p);
                return style.color === 'rgb(255, 0, 0)';
            }
        }
    ]
},

{
    id: "css_unidades",
    title: "Módulo 10: Unidades de Medida",
    description: "Escolha a unidade certa para layouts responsivos.",
    aula: {
        titulo: "Unidades relativas vs absolutas",
        conteudo: "<p><code>px</code> (absoluto), <code>rem</code> (relativo ao root), <code>em</code> (relativo ao pai), <code>vw/vh</code> (relativo à viewport), <code>%</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um título com font-size 2rem e um container que ocupe 80% da largura da viewport.",
            codigoInicial: "<style>\nh1 { /* estilos */ }\n.container { /* estilos */ }\n</style>\n<h1>Título</h1>\n<div class='container'></div>",
            xp: 30,
            dica: "h1 { font-size: 2rem; }\n.container { width: 80vw; height: 100px; background: #ccc; }",
            validar: (codigo, iframeDoc) => {
                const container = iframeDoc.querySelector('.container');
                const style = iframeDoc.defaultView.getComputedStyle(container);
                return style.width.includes('vw');
            }
        }
    ]
},

// ==================== MÓDULOS 11–20: CSS INTERMEDIÁRIO ====================

{
    id: "css_flexbox_intro",
    title: "Módulo 11: Flexbox - justify-content e align-items",
    description: "Alinhe elementos em uma dimensão de forma poderosa.",
    aula: {
        titulo: "Propriedades do contêiner flex",
        conteudo: "<p><code>display: flex</code>. <code>justify-content</code> alinha no eixo principal, <code>align-items</code> no eixo cruzado.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma barra de navegação com três links distribuídos com espaço igual entre eles (space-between).",
            codigoInicial: "<style>\nnav { /* estilos */ }\n</style>\n<nav><a>Home</a><a>Sobre</a><a>Contato</a></nav>",
            xp: 40,
            dica: "nav {\n  display: flex;\n  justify-content: space-between;\n}",
            validar: (codigo, iframeDoc) => {
                const nav = iframeDoc.querySelector('nav');
                const style = iframeDoc.defaultView.getComputedStyle(nav);
                return style.display === 'flex' && style.justifyContent === 'space-between';
            }
        }
    ]
},

{
    id: "css_flex_wrap",
    title: "Módulo 12: Flex-direction, flex-wrap e gap",
    description: "Controle a direção e a quebra de linhas.",
    aula: {
        titulo: "Layout flexível",
        conteudo: "<p><code>flex-direction: column</code>, <code>flex-wrap: wrap</code>, <code>gap</code> para espaçamento.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um grid de cards (4 cards) que quebre para 2 por linha em telas pequenas. Use flex-wrap e gap.",
            codigoInicial: "<style>\n.cards { /* estilos */ }\n.card { width: 200px; }\n</style>\n<div class='cards'><div class='card'>1</div><div class='card'>2</div><div class='card'>3</div><div class='card'>4</div></div>",
            xp: 45,
            dica: ".cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card { flex: 1 1 200px; }",
            validar: (codigo) => {
                return codigo.includes('flex-wrap: wrap') && codigo.includes('gap:');
            }
        }
    ]
},

{
    id: "css_flex_grow",
    title: "Módulo 13: Propriedades dos itens flex",
    description: "Controle o comportamento individual dos itens.",
    aula: {
        titulo: "flex-grow, flex-shrink e order",
        conteudo: "<p><code>flex-grow</code> faz o item ocupar espaço disponível. <code>order</code> muda a ordem visual.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um contêiner flex com três itens. Faça o segundo item ocupar o dobro de espaço dos outros (flex-grow: 2).",
            codigoInicial: "<style>\n.flex { display: flex; }\n.item { /* estilos */ }\n</style>\n<div class='flex'><div class='item'>1</div><div class='item'>2</div><div class='item'>3</div></div>",
            xp: 45,
            dica: ".item:first-child { flex-grow: 1; }\n.item:nth-child(2) { flex-grow: 2; }\n.item:last-child { flex-grow: 1; }",
            validar: (codigo) => {
                return codigo.includes('flex-grow: 2') || codigo.includes('flex-grow:2');
            }
        }
    ]
},

{
    id: "css_grid_intro",
    title: "Módulo 14: CSS Grid - grid-template-columns",
    description: "Crie layouts bidimensionais com grade.",
    aula: {
        titulo: "Criando grades",
        conteudo: "<p><code>display: grid</code>, <code>grid-template-columns: repeat(3, 1fr)</code>, <code>gap</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma grade 3x2 (3 colunas iguais, 2 linhas automáticas) com gap 10px.",
            codigoInicial: "<style>\n.grid { /* estilos */ }\n</style>\n<div class='grid'><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>",
            xp: 40,
            dica: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}",
            validar: (codigo, iframeDoc) => {
                const grid = iframeDoc.querySelector('.grid');
                const style = iframeDoc.defaultView.getComputedStyle(grid);
                return style.display === 'grid';
            }
        }
    ]
},

{
    id: "css_grid_areas",
    title: "Módulo 15: Grid Areas",
    description: "Nomeie áreas e posicione elementos facilmente.",
    aula: {
        titulo: "grid-template-areas",
        conteudo: "<p>Defina um template ASCII: <code>grid-template-areas: 'header header' 'sidebar main' 'footer footer';</code></p>"
    },
    exercicios: [
        {
            instrucao: "Construa um layout de página com header, sidebar, main e footer usando grid areas.",
            codigoInicial: "<style>\n.page { display: grid; }\n</style>\n<div class='page'><header>H</header><aside>S</aside><main>M</main><footer>F</footer></div>",
            xp: 55,
            dica: ".page {\n  display: grid;\n  grid-template-areas: 'header header' 'sidebar main' 'footer footer';\n  gap: 10px;\n}\nheader { grid-area: header; }\naside { grid-area: sidebar; }\nmain { grid-area: main; }\nfooter { grid-area: footer; }",
            validar: (codigo) => {
                return codigo.includes('grid-template-areas') && codigo.includes('grid-area:');
            }
        }
    ]
},

{
    id: "css_transicoes",
    title: "Módulo 16: Transições CSS",
    description: "Suavize mudanças de propriedades.",
    aula: {
        titulo: "transition",
        conteudo: "<p><code>transition: propriedade duração timing;</code> Ex: <code>transition: all 0.3s ease;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um botão que mude de cor e aumente de tamanho ao hover, com transição de 0.2 segundos.",
            codigoInicial: "<style>\nbutton { /* estilos */ }\n</style>\n<button>Hover</button>",
            xp: 40,
            dica: "button {\n  transition: all 0.2s;\n}\nbutton:hover {\n  background: gold;\n  transform: scale(1.05);\n}",
            validar: (codigo) => {
                return codigo.includes('transition') && codigo.includes(':hover');
            }
        }
    ]
},

{
    id: "css_animacoes",
    title: "Módulo 17: Animações com Keyframes",
    description: "Crie animações contínuas ou com múltiplos estágios.",
    aula: {
        titulo: "keyframes",
        conteudo: "<p><code>@keyframes exemplo { 0% { opacity:0; } 100% { opacity:1; } }</code><br>Aplicar com <code>animation: exemplo 1s infinite;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um elemento que pulse (escala de 1 para 1.1 e volta) infinitamente a cada 1 segundo.",
            codigoInicial: "<style>\n.pulse { /* estilos */ }\n</style>\n<div class='pulse'>Pulsando</div>",
            xp: 45,
            dica: "@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n}\n.pulse {\n  animation: pulse 1s infinite;\n}",
            validar: (codigo) => {
                return codigo.includes('@keyframes') && codigo.includes('animation:');
            }
        }
    ]
},

{
    id: "css_media_queries",
    title: "Módulo 18: Media Queries",
    description: "Adapte o layout para diferentes tamanhos de tela.",
    aula: {
        titulo: "@media",
        conteudo: "<p><code>@media (max-width: 768px) { /* estilos para mobile */ }</code> Abordagem mobile-first: use <code>min-width</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Faça com que um grid de 4 colunas (desktop) vire 2 colunas em tablets (max-width: 768px) e 1 coluna em celulares (max-width: 480px).",
            codigoInicial: "<style>\n.grid { display: grid; grid-template-columns: repeat(4,1fr); }\n</style>\n<div class='grid'>...8 cards</div>",
            xp: 50,
            dica: "@media (max-width: 768px) { .grid { grid-template-columns: repeat(2,1fr); } }\n@media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }",
            validar: (codigo) => {
                return codigo.includes('@media') && codigo.includes('768px') && codigo.includes('480px');
            }
        }
    ]
},

{
    id: "css_variaveis",
    title: "Módulo 19: Variáveis CSS",
    description: "Centralize valores e crie temas dinâmicos.",
    aula: {
        titulo: "Custom Properties",
        conteudo: "<p>Defina <code>:root { --cor-primaria: #3498db; }</code> e use <code>color: var(--cor-primaria);</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um tema claro/escuro usando variáveis CSS. Defina cores no :root e uma classe .dark que sobrescreve as variáveis.",
            codigoInicial: "<style>\n:root { --bg: white; --text: black; }\nbody.dark { /* estilos */ }\nbody { background: var(--bg); color: var(--text); }\n</style>\n<div>Texto</div>\n<button onclick='document.body.classList.toggle(\"dark\")'>Alternar</button>",
            xp: 55,
            dica: "body.dark { --bg: black; --text: white; }",
            validar: (codigo) => {
                return codigo.includes('--') && codigo.includes('var(');
            }
        }
    ]
},

{
    id: "css_transformacoes",
    title: "Módulo 20: Transformações",
    description: "Modifique a forma e posição dos elementos.",
    aula: {
        titulo: "transform",
        conteudo: "<p><code>transform: translate(10px, 20px) rotate(45deg) scale(1.2);</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um card que ao passar o mouse, rode 5 graus e aumente 5% (use transform).",
            codigoInicial: "<style>\n.card { transition: transform 0.2s; }\n</style>\n<div class='card'>Card</div>",
            xp: 40,
            dica: ".card:hover {\n  transform: rotate(5deg) scale(1.05);\n}",
            validar: (codigo) => {
                return codigo.includes('rotate') && codigo.includes('scale');
            }
        }
    ]
},

// ==================== MÓDULOS 21–30: CSS AVANÇADO ====================

{
    id: "css_flexbox_avancado",
    title: "Módulo 21: Flexbox Avançado",
    description: "Domine align-self, order e flex-basis.",
    aula: {
        titulo: "Propriedades avançadas",
        conteudo: "<p><code>align-self</code> sobrescreve align-items, <code>order</code> muda ordem, <code>flex-basis</code> define tamanho base.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um contêiner flex com três itens. Faça o segundo item ter align-self: center e order: -1 (aparecer primeiro).",
            codigoInicial: "<style>\n.flex { display: flex; align-items: flex-start; height: 200px; }\n</style>\n<div class='flex'><div>1</div><div class='especial'>2</div><div>3</div></div>",
            xp: 50,
            dica: ".especial {\n  align-self: center;\n  order: -1;\n}",
            validar: (codigo) => {
                return codigo.includes('align-self') && codigo.includes('order');
            }
        }
    ]
},

{
    id: "css_grid_avancado",
    title: "Módulo 22: Grid Avançado",
    description: "Use grid-column, grid-row e minmax.",
    aula: {
        titulo: "Posicionamento manual",
        conteudo: "<p><code>grid-column: 1 / 3</code> (ocupa colunas 1 a 3), <code>grid-row: span 2</code>, <code>minmax(100px, 1fr)</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma grade 3x3. Faça o primeiro card ocupar 2 colunas e 2 linhas.",
            codigoInicial: "<style>\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n</style>\n<div class='grid'><div class='destaque'>Destaque</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div></div>",
            xp: 50,
            dica: ".destaque {\n  grid-column: span 2;\n  grid-row: span 2;\n}",
            validar: (codigo) => {
                return codigo.includes('grid-column') && codigo.includes('grid-row');
            }
        }
    ]
},

{
    id: "css_clamp",
    title: "Módulo 23: Funções clamp(), min(), max()",
    description: "Crie tipografia e layouts fluidos modernos.",
    aula: {
        titulo: "Funções CSS modernas",
        conteudo: "<p><code>font-size: clamp(1rem, 2vw, 2rem);</code> (valor mínimo, ideal, máximo).</p>"
    },
    exercicios: [
        {
            instrucao: "Defina um título com tamanho de fonte fluido: mínimo 1.5rem, ideal 5vw, máximo 3rem.",
            codigoInicial: "<style>\nh1 { /* estilos */ }\n</style>\n<h1>Título Fluido</h1>",
            xp: 45,
            dica: "h1 { font-size: clamp(1.5rem, 5vw, 3rem); }",
            validar: (codigo) => {
                return codigo.includes('clamp');
            }
        }
    ]
},

{
    id: "css_container_queries",
    title: "Módulo 24: Container Queries",
    description: "Estilize componentes baseado no tamanho do contêiner pai.",
    aula: {
        titulo: "Container Queries",
        conteudo: "<p><code>.card-container { container-type: inline-size; }</code><br><code>@container (min-width: 300px) { .card { flex-direction: row; } }</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um componente de card que muda de layout (coluna para linha) quando o contêiner pai tem largura maior que 300px.",
            codigoInicial: "<style>\n.card-container { container-type: inline-size; }\n.card { display: flex; flex-direction: column; }\n</style>\n<div class='card-container'><div class='card'>Conteúdo</div></div>",
            xp: 55,
            dica: "@container (min-width: 300px) {\n  .card { flex-direction: row; }\n}",
            validar: (codigo) => {
                return codigo.includes('container-type') && codigo.includes('@container');
            }
        }
    ]
},

{
    id: "css_layer",
    title: "Módulo 25: Camadas CSS (@layer)",
    description: "Controle a ordem de precedência de estilos.",
    aula: {
        titulo: "@layer",
        conteudo: "<p><code>@layer base, theme, components;</code> Estilos em camadas posteriores sobrescrevem anteriores.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie duas camadas: 'reset' e 'componentes'. Na camada reset, defina margem 0 para todos os elementos. Na camada componentes, defina margem 1rem para os parágrafos.",
            codigoInicial: "<style>\n/* layers */\n</style>\n<p>Parágrafo</p>",
            xp: 40,
            dica: "@layer reset {\n  * { margin: 0; }\n}\n@layer componentes {\n  p { margin: 1rem; }\n}",
            validar: (codigo) => {
                return codigo.includes('@layer');
            }
        }
    ]
},

{
    id: "css_has",
    title: "Módulo 26: Seletor :has()",
    description: "Selecione um elemento que contém um descendente específico.",
    aula: {
        titulo: ":has() pseudo-class",
        conteudo: "<p><code>article:has(img) { border: 1px solid gold; }</code> seleciona artigos que contêm imagem.</p>"
    },
    exercicios: [
        {
            instrucao: "Destaque (background amarelo) qualquer div que contenha um parágrafo com a classe 'destaque'.",
            codigoInicial: "<style>\n/* seu estilo */\n</style>\n<div><p class='destaque'>Texto</p></div>\n<div><p>Normal</p></div>",
            xp: 45,
            dica: "div:has(p.destaque) {\n  background: yellow;\n}",
            validar: (codigo) => {
                return codigo.includes(':has');
            }
        }
    ]
},

{
    id: "css_acessibilidade",
    title: "Módulo 27: Acessibilidade em CSS",
    description: "Estilos que respeitam as necessidades do usuário.",
    aula: {
        titulo: "Acessibilidade",
        conteudo: "<p><code>:focus-visible</code> aplica estilo apenas quando foco via teclado. <code>@media (prefers-reduced-motion: reduce)</code> reduz animações.</p>"
    },
    exercicios: [
        {
            instrucao: "Adicione um outline dourado no focus-visible para botões, e uma regra que desabilita animações para quem prefere movimento reduzido.",
            codigoInicial: "<style>\nbutton { padding: 10px; }\n</style>\n<button>Botão</button>",
            xp: 45,
            dica: "button:focus-visible {\n  outline: 2px solid gold;\n}\n@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; }\n}",
            validar: (codigo) => {
                return codigo.includes(':focus-visible') && codigo.includes('prefers-reduced-motion');
            }
        }
    ]
},

{
    id: "css_performance",
    title: "Módulo 28: Performance CSS",
    description: "Otimize o carregamento e a renderização.",
    aula: {
        titulo: "Boas práticas de performance",
        conteudo: "<p><code>will-change: transform</code> avisa o navegador sobre animações. <code>contain: layout</code> isola o componente.</p>"
    },
    exercicios: [
        {
            instrucao: "Adicione will-change ao elemento que será animado e use contain em um widget.",
            codigoInicial: "<style>\n.animated { /* estilos */ }\n.widget { /* estilos */ }\n</style>\n<div class='animated'>Animar</div>\n<div class='widget'>Widget</div>",
            xp: 50,
            dica: ".animated { will-change: transform; }\n.widget { contain: layout; }",
            validar: (codigo) => {
                return codigo.includes('will-change') && codigo.includes('contain');
            }
        }
    ]
},

{
    id: "css_arquitetura",
    title: "Módulo 29: Arquitetura CSS",
    description: "Organize projetos CSS em larga escala.",
    aula: {
        titulo: "Metodologias",
        conteudo: "<p>BEM (Block Element Modifier): <code>.card__title--destaque</code>. ITCSS, SMACSS, 7-1 pattern.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie classes seguindo a metodologia BEM para um card com título, texto e botão (modifier primary).",
            codigoInicial: "<style>\n/* classes BEM */\n</style>\n<div class='card'>\n  <h3 class='card__title'>Título</h3>\n  <p class='card__text'>Texto</p>\n  <button class='card__button card__button--primary'>Ação</button>\n</div>",
            xp: 40,
            dica: ".card { border: 1px solid #ccc; padding: 1rem; }\n.card__title { font-size: 1.25rem; }\n.card__text { color: #666; }\n.card__button--primary { background: blue; color: white; }",
            validar: (codigo) => {
                return codigo.includes('__') && codigo.includes('--');
            }
        }
    ]
},

{
    id: "css_projeto_final",
    title: "Módulo 30: Projeto Final",
    description: "Construa um dashboard responsivo com temas.",
    aula: {
        titulo: "Dashboard Responsivo",
        conteudo: "<p>Crie um dashboard administrativo com layout grid, cards responsivos, menu mobile, tema claro/escuro usando variáveis CSS.</p>"
    },
    exercicios: [
        {
            instrucao: "Implemente um dashboard com: header, sidebar (oculta no mobile), main com 3 cards, gráfico placeholder (apenas visual). Use Grid para layout geral, Flexbox para cards, media queries para responsividade, e variáveis para tema.",
            codigoInicial: "<!-- Dashboard -->\n<style>\n/* seus estilos */\n</style>\n<div class='dashboard'>\n  <header>Header</header>\n  <aside>Sidebar</aside>\n  <main>\n    <div class='card'>Card 1</div>\n    <div class='card'>Card 2</div>\n    <div class='card'>Card 3</div>\n  </main>\n</div>",
            xp: 120,
            dica: ".dashboard { display: grid; grid-template-areas: 'header header' 'sidebar main'; }\n@media (max-width: 768px) { .dashboard { grid-template-areas: 'header' 'main'; } aside { display: none; } }\n:root { --bg: white; --text: black; }\nbody { background: var(--bg); color: var(--text); }",
            validar: (codigo, iframeDoc) => {
                const dashboard = iframeDoc.querySelector('.dashboard');
                const cards = iframeDoc.querySelectorAll('.card');
                return dashboard && cards.length >= 3 && codigo.includes('grid-template-areas') && codigo.includes('@media');
            }
        }
    ]
}

];