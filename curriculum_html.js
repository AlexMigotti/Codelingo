// curriculum_html.js — Trilha HTML5 Avançado (30 módulos)
// The Luminous Scholar — Versão Corrigida

const curriculumHTML = [

// ==================== MÓDULOS 1–10: FUNDAMENTOS ====================

{
    id: "html_estrutura_base",
    title: "Módulo 1: Estrutura Essencial e DOCTYPE",
    description: "Aprenda a base de todo documento HTML: DOCTYPE, html, head, body e metadados fundamentais.",
    aula: {
        titulo: "A Anatomia de um Documento HTML5",
        conteudo: `
            <h2>O que todo documento HTML precisa ter</h2>
            <p>Um documento HTML5 válido começa com <code>&lt;!DOCTYPE html&gt;</code>, que força o navegador a usar o modo padrão.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Título da Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Olá Mundo&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        `
    },
    exercicios: [
        {
            instrucao: "Escreva o código HTML completo com DOCTYPE, html, head (com title 'Meu Site') e body contendo um <h1>Olá Mundo</h1>.",
            codigoInicial: "<!-- Digite a estrutura completa -->",
            xp: 25,
            dica: "<!DOCTYPE html>\n<html lang='pt-BR'>\n<head>\n  <meta charset='UTF-8'>\n  <title>Meu Site</title>\n</head>\n<body>\n  <h1>Olá Mundo</h1>\n</body>\n</html>",
            validar: (codigo, iframeDoc) => {
                const c = codigo.toLowerCase();
                return c.includes('<!doctype html>') && c.includes('<html') && c.includes('<title>meu site</title>') && c.includes('<h1>olá mundo</h1>');
            }
        }
    ]
},

{
    id: "html_semantica_basica",
    title: "Módulo 2: Semântica com header, main, footer",
    description: "Substitua divs genéricas por tags semânticas.",
    aula: {
        titulo: "Tags Semânticas",
        conteudo: `
            <p>Tags semânticas descrevem o papel do conteúdo:</p>
            <ul>
                <li><code>&lt;header&gt;</code> → cabeçalho</li>
                <li><code>&lt;nav&gt;</code> → navegação</li>
                <li><code>&lt;main&gt;</code> → conteúdo principal</li>
                <li><code>&lt;article&gt;</code> → conteúdo independente</li>
                <li><code>&lt;section&gt;</code> → seção temática</li>
                <li><code>&lt;aside&gt;</code> → conteúdo lateral</li>
                <li><code>&lt;footer&gt;</code> → rodapé</li>
            </ul>
        `
    },
    exercicios: [
        {
            instrucao: "Crie uma página com <header>, <main> (com um artigo) e <footer>.",
            codigoInicial: "<!-- Use tags semânticas -->",
            xp: 30,
            dica: "<header><h1>Meu Site</h1></header>\n<main>\n  <article>\n    <h2>Artigo</h2>\n    <p>Conteúdo...</p>\n  </article>\n</main>\n<footer>Rodapé</footer>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('header') && !!iframeDoc.querySelector('main') && !!iframeDoc.querySelector('footer');
            }
        }
    ]
},

{
    id: "html_titulos_paragrafos",
    title: "Módulo 3: Hierarquia de Títulos (h1 a h6)",
    description: "Estruture corretamente o texto com níveis de título.",
    aula: {
        titulo: "Hierarquia Lógica de Títulos",
        conteudo: "<p>Use apenas um <code>&lt;h1&gt;</code> por página. Os demais títulos devem formar uma árvore lógica, sem pular níveis.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma estrutura com h1, dois h2 e, dentro do segundo h2, um h3 e um parágrafo.",
            codigoInicial: "<!-- Monte a hierarquia -->",
            xp: 25,
            dica: "<h1>Título</h1>\n<h2>Seção 1</h2>\n<h2>Seção 2</h2>\n  <h3>Subseção</h3>\n  <p>Texto</p>",
            validar: (codigo, iframeDoc) => {
                return iframeDoc.querySelector('h1') && iframeDoc.querySelectorAll('h2').length >= 2 && iframeDoc.querySelector('h3');
            }
        }
    ]
},

{
    id: "html_listas",
    title: "Módulo 4: Listas Ordenadas e Não Ordenadas",
    description: "Organize itens em listas com ul, ol e li.",
    aula: {
        titulo: "Listas em HTML",
        conteudo: "<p><code>&lt;ul&gt;</code> para listas com marcadores, <code>&lt;ol&gt;</code> para listas numeradas.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma lista não ordenada com 3 itens de compras.",
            codigoInicial: "<!-- Crie a lista -->",
            xp: 25,
            dica: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>",
            validar: (codigo, iframeDoc) => {
                return iframeDoc.querySelectorAll('ul li').length >= 3;
            }
        }
    ]
},

{
    id: "html_links_navegacao",
    title: "Módulo 5: Links e Âncoras",
    description: "Crie navegação entre páginas usando hiperlinks.",
    aula: {
        titulo: "O elemento a",
        conteudo: "<p><code>&lt;a href='url'&gt;texto&lt;/a&gt;</code>. Use <code>target='_blank'</code> para abrir em nova aba.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um link para 'https://exemplo.com' que abra em nova aba.",
            codigoInicial: "<!-- Link -->",
            xp: 25,
            dica: "<a href='https://exemplo.com' target='_blank'>Exemplo</a>",
            validar: (codigo, iframeDoc) => {
                const link = iframeDoc.querySelector('a');
                return link && link.href.includes('exemplo') && link.target === '_blank';
            }
        }
    ]
},

{
    id: "html_imagens",
    title: "Módulo 6: Imagens e atributo alt",
    description: "Incorpore imagens com img e torne-as acessíveis.",
    aula: {
        titulo: "Imagens na Web",
        conteudo: "<p>Use <code>&lt;img src='caminho' alt='descrição'&gt;</code>. O atributo <code>alt</code> é obrigatório para acessibilidade.</p>"
    },
    exercicios: [
        {
            instrucao: "Insira uma imagem com src 'https://picsum.photos/200/150' e alt 'Imagem de exemplo'.",
            codigoInicial: "<!-- Insira a imagem -->",
            xp: 25,
            dica: "<img src='https://picsum.photos/200/150' alt='Imagem de exemplo'>",
            validar: (codigo, iframeDoc) => {
                const img = iframeDoc.querySelector('img');
                return img && img.hasAttribute('alt');
            }
        }
    ]
},

{
    id: "html_tabelas",
    title: "Módulo 7: Tabelas de Dados",
    description: "Estruture dados tabulares com tabelas semânticas.",
    aula: {
        titulo: "Tabelas HTML",
        conteudo: "<p>Use <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code> e <code>&lt;td&gt;</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma tabela com 2 colunas (Nome, Idade) e 2 linhas de dados.",
            codigoInicial: "<!-- Sua tabela -->",
            xp: 30,
            dica: "<table><thead><tr><th>Nome</th><th>Idade</th></tr></thead><tbody><tr><td>Ana</td><td>25</td></tr><tr><td>João</td><td>30</td></tr></tbody></table>",
            validar: (codigo, iframeDoc) => {
                return iframeDoc.querySelectorAll('th').length >= 2 && iframeDoc.querySelectorAll('tr').length >= 3;
            }
        }
    ]
},

{
    id: "html_formularios",
    title: "Módulo 8: Formulários",
    description: "Colete dados do usuário com formulários acessíveis.",
    aula: {
        titulo: "Elementos de Formulário",
        conteudo: "<p>Use <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code> com <code>for</code>, <code>&lt;input&gt;</code> e <code>&lt;button type='submit'&gt;</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um formulário com campos: nome (text) e email (email).",
            codigoInicial: "<!-- Formulário -->",
            xp: 30,
            dica: "<form><label for='nome'>Nome:</label><input type='text' id='nome'><label for='email'>Email:</label><input type='email' id='email'><button type='submit'>Enviar</button></form>",
            validar: (codigo, iframeDoc) => {
                return iframeDoc.querySelector('input[type="text"]') && iframeDoc.querySelector('input[type="email"]');
            }
        }
    ]
},

{
    id: "html_multimidia",
    title: "Módulo 9: Áudio e Vídeo",
    description: "Incorpore mídia nativa sem plugins.",
    aula: {
        titulo: "Elementos multimídia",
        conteudo: "<p><code>&lt;audio controls src='arquivo.mp3'&gt;&lt;/audio&gt;</code> e <code>&lt;video controls width='400' src='video.mp4'&gt;&lt;/video&gt;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Adicione um player de áudio com src de teste.",
            codigoInicial: "<!-- Áudio -->",
            xp: 30,
            dica: "<audio controls src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'></audio>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('audio');
            }
        }
    ]
},

{
    id: "html_iframe",
    title: "Módulo 10: Iframes",
    description: "Insira mapas, vídeos ou outras páginas com iframe.",
    aula: {
        titulo: "Iframe",
        conteudo: "<p><code>&lt;iframe src='url' title='descrição' width='400' height='250'&gt;&lt;/iframe&gt;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Insira um vídeo do YouTube usando iframe.",
            codigoInicial: "<!-- Iframe -->",
            xp: 30,
            dica: "<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' title='Vídeo exemplo' width='400' height='250'></iframe>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('iframe');
            }
        }
    ]
},

// ==================== MÓDULOS 11–20: INTERMEDIÁRIO ====================

{
    id: "html_seo_meta",
    title: "Módulo 11: Meta Tags para SEO",
    description: "Controle como seu site aparece no Google.",
    aula: {
        titulo: "Meta Tags Essenciais",
        conteudo: "<p><code>&lt;meta name='description' content='...'&gt;</code> e <code>&lt;meta property='og:title' content='...'&gt;</code> para redes sociais.</p>"
    },
    exercicios: [
        {
            instrucao: "Adicione uma meta description com conteúdo 'Curso de HTML5 completo'.",
            codigoInicial: "<!-- Meta tags -->",
            xp: 35,
            dica: "<meta name='description' content='Curso de HTML5 completo'>",
            validar: (codigo) => {
                return codigo.toLowerCase().includes('name="description"') && codigo.toLowerCase().includes('curso de html5');
            }
        }
    ]
},

{
    id: "html_microdados",
    title: "Módulo 12: Microdados Schema.org",
    description: "Estruture dados para rich snippets.",
    aula: {
        titulo: "Schema.org",
        conteudo: "<p>Use <code>itemscope itemtype</code> e <code>itemprop</code> para marcar entidades como Receitas, Produtos, Pessoas.</p>"
    },
    exercicios: [
        {
            instrucao: "Marque um produto com nome e preço usando Schema.org.",
            codigoInicial: "<!-- Microdados -->",
            xp: 40,
            dica: "<div itemscope itemtype='https://schema.org/Product'><span itemprop='name'>Notebook</span><span itemprop='price'>1999</span></div>",
            validar: (codigo) => {
                return codigo.includes('itemscope') && codigo.includes('itemprop');
            }
        }
    ]
},

{
    id: "html_aria_basico",
    title: "Módulo 13: Introdução ao ARIA",
    description: "Melhore a acessibilidade com ARIA.",
    aula: {
        titulo: "Atributos ARIA",
        conteudo: "<p><code>role='navigation'</code>, <code>aria-label='Fechar'</code>, <code>aria-expanded='false'</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um botão com ícone 'X' e aria-label='Fechar'.",
            codigoInicial: "<!-- Botão acessível -->",
            xp: 35,
            dica: "<button aria-label='Fechar'>X</button>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('button[aria-label]');
            }
        }
    ]
},

{
    id: "html_svg",
    title: "Módulo 14: SVG",
    description: "Desenhe gráficos vetoriais diretamente no HTML.",
    aula: {
        titulo: "SVG inline",
        conteudo: "<p><code>&lt;svg width='100' height='100'&gt;&lt;circle cx='50' cy='50' r='40' fill='red'/&gt;&lt;/svg&gt;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Desenhe um círculo vermelho de raio 30 em um SVG 100x100.",
            codigoInicial: "<!-- SVG -->",
            xp: 35,
            dica: "<svg width='100' height='100'><circle cx='50' cy='50' r='30' fill='red'/></svg>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('circle');
            }
        }
    ]
},

{
    id: "html_canvas",
    title: "Módulo 15: Canvas",
    description: "Renderize gráficos via JavaScript.",
    aula: {
        titulo: "Canvas API",
        conteudo: "<p><code>&lt;canvas id='c' width='200' height='200'&gt;&lt;/canvas&gt;</code> e JavaScript para desenhar.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um canvas 200x200 e desenhe um círculo azul no centro.",
            codigoInicial: "<!-- Canvas + script -->",
            xp: 45,
            dica: "<canvas id='c' width='200' height='200'></canvas><script>const ctx = document.getElementById('c').getContext('2d'); ctx.fillStyle = 'blue'; ctx.arc(100,100,40,0,2*Math.PI); ctx.fill();</script>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('canvas');
            }
        }
    ]
},

{
    id: "html_drag_drop",
    title: "Módulo 16: Drag and Drop",
    description: "Torne elementos arrastáveis.",
    aula: {
        titulo: "Drag and Drop API",
        conteudo: "<p>Atributos <code>draggable='true'</code> e eventos <code>dragstart</code>, <code>drop</code>, <code>dragover</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um elemento arrastável com texto 'Arraste-me'.",
            codigoInicial: "<!-- Drag and drop -->",
            xp: 40,
            dica: "<div draggable='true' ondragstart='event.dataTransfer.setData(\"text/plain\",\"ok\")'>Arraste-me</div>",
            validar: (codigo) => {
                return codigo.includes('draggable') && codigo.includes('dragstart');
            }
        }
    ]
},

{
    id: "html_contenteditable",
    title: "Módulo 17: Conteúdo Editável",
    description: "Permita edição direta na página.",
    aula: {
        titulo: "contenteditable",
        conteudo: "<p><code>&lt;div contenteditable='true'&gt;Texto editável&lt;/div&gt;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um parágrafo editável.",
            codigoInicial: "<!-- contenteditable -->",
            xp: 30,
            dica: "<p contenteditable='true'>Edite este texto</p>",
            validar: (codigo) => {
                return codigo.includes('contenteditable');
            }
        }
    ]
},

{
    id: "html_details_summary",
    title: "Módulo 18: Detalhes Expansíveis",
    description: "Crie widgets de FAQ sem JavaScript.",
    aula: {
        titulo: "details e summary",
        conteudo: "<p><code>&lt;details&gt;&lt;summary&gt;Título&lt;/summary&gt;Conteúdo&lt;/details&gt;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um bloco expansível com pergunta e resposta.",
            codigoInicial: "<!-- details -->",
            xp: 30,
            dica: "<details><summary>Pergunta</summary><p>Resposta</p></details>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('details');
            }
        }
    ]
},

{
    id: "html_progress_meter",
    title: "Módulo 19: Progresso e Medidores",
    description: "Exiba barras de progresso.",
    aula: {
        titulo: "progress e meter",
        conteudo: "<p><code>&lt;progress value='45' max='100'&gt;&lt;/progress&gt;</code> e <code>&lt;meter value='0.75'&gt;75%&lt;/meter&gt;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma barra de progresso com 60%.",
            codigoInicial: "<!-- progress -->",
            xp: 25,
            dica: "<progress value='60' max='100'></progress>",
            validar: (codigo, iframeDoc) => {
                return !!iframeDoc.querySelector('progress');
            }
        }
    ]
},

{
    id: "html_validacao_form",
    title: "Módulo 20: Validação Nativa",
    description: "Valide formulários sem JavaScript.",
    aula: {
        titulo: "Validação HTML5",
        conteudo: "<p>Atributos <code>required</code>, <code>pattern</code>, <code>type='email'</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um campo de email obrigatório.",
            codigoInicial: "<!-- Campo validado -->",
            xp: 35,
            dica: "<input type='email' required>",
            validar: (codigo) => {
                return codigo.includes('type="email"') && codigo.includes('required');
            }
        }
    ]
},

// ==================== MÓDULOS 21–30: AVANÇADO ====================

{
    id: "html_custom_elements",
    title: "Módulo 21: Custom Elements",
    description: "Crie suas próprias tags HTML.",
    aula: {
        titulo: "Web Components",
        conteudo: "<p>Use <code>customElements.define('meu-elemento', class extends HTMLElement {...})</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um custom element <saudacao> que exibe 'Olá, Mundo!'.",
            codigoInicial: "<!-- Custom element -->",
            xp: 55,
            dica: "<saudacao></saudacao><script>class Saudacao extends HTMLElement { connectedCallback() { this.innerText = 'Olá, Mundo!'; } } customElements.define('saudacao', Saudacao);</script>",
            validar: (codigo, iframeDoc) => {
                return codigo.includes('customElements.define') && iframeDoc.querySelector('saudacao');
            }
        }
    ]
},

{
    id: "html_shadow_dom",
    title: "Módulo 22: Shadow DOM",
    description: "Isole estilos e marcação.",
    aula: {
        titulo: "Shadow DOM",
        conteudo: "<p><code>element.attachShadow({mode: 'open'})</code> cria um escopo isolado.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um shadow DOM com texto 'Encapsulado' e estilo próprio.",
            codigoInicial: "<!-- Shadow DOM -->",
            xp: 55,
            dica: "<div id='host'></div><script>const host = document.getElementById('host'); const shadow = host.attachShadow({mode:'open'}); shadow.innerHTML = '<style>:host{color:red}</style>Encapsulado';</script>",
            validar: (codigo) => {
                return codigo.includes('attachShadow');
            }
        }
    ]
},

{
    id: "html_localstorage",
    title: "Módulo 23: localStorage",
    description: "Persista dados no navegador.",
    aula: {
        titulo: "Web Storage",
        conteudo: "<p><code>localStorage.setItem('chave', 'valor')</code> e <code>localStorage.getItem('chave')</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Salve o texto 'Meu nome' no localStorage com a chave 'nome'.",
            codigoInicial: "<!-- localStorage -->",
            xp: 40,
            dica: "<script>localStorage.setItem('nome', 'Meu nome');</script>",
            validar: (codigo) => {
                return codigo.includes('localStorage.setItem');
            }
        }
    ]
},

{
    id: "html_geolocation",
    title: "Módulo 24: Geolocalização",
    description: "Obtenha a posição do usuário.",
    aula: {
        titulo: "Geolocation API",
        conteudo: "<p><code>navigator.geolocation.getCurrentPosition(sucesso, erro)</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um botão que exibe a latitude e longitude do usuário.",
            codigoInicial: "<!-- Geolocation -->",
            xp: 50,
            dica: "<button onclick='navigator.geolocation.getCurrentPosition(p => alert(p.coords.latitude+\",\"+p.coords.longitude))'>Onde estou?</button>",
            validar: (codigo) => {
                return codigo.includes('geolocation');
            }
        }
    ]
},

{
    id: "html_web_workers",
    title: "Módulo 25: Web Workers",
    description: "Processamento em segundo plano.",
    aula: {
        titulo: "Web Workers",
        conteudo: "<p><code>new Worker('worker.js')</code> e comunicação via <code>postMessage</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um worker inline que soma dois números.",
            codigoInicial: "<!-- Web Worker -->",
            xp: 60,
            dica: "const blob = new Blob(['self.onmessage = e => self.postMessage(e.data[0] + e.data[1]);'], {type:'application/javascript'}); const w = new Worker(URL.createObjectURL(blob)); w.postMessage([5,3]); w.onmessage = e => console.log(e.data);",
            validar: (codigo) => {
                return codigo.includes('Worker') && codigo.includes('postMessage');
            }
        }
    ]
},

{
    id: "html_service_worker",
    title: "Módulo 26: Service Worker",
    description: "Habilite funcionalidade offline.",
    aula: {
        titulo: "Service Workers e PWA",
        conteudo: "<p><code>navigator.serviceWorker.register('/sw.js')</code> para cache offline.</p>"
    },
    exercicios: [
        {
            instrucao: "Registre um service worker básico.",
            codigoInicial: "<!-- Service Worker -->",
            xp: 50,
            dica: "if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }",
            validar: (codigo) => {
                return codigo.includes('serviceWorker') && codigo.includes('register');
            }
        }
    ]
},

{
    id: "html_websockets",
    title: "Módulo 27: WebSockets",
    description: "Comunicação bidirecional.",
    aula: {
        titulo: "WebSocket API",
        conteudo: "<p><code>const ws = new WebSocket('wss://servidor'); ws.onmessage = e => {...};</code></p>"
    },
    exercicios: [
        {
            instrucao: "Conecte a um WebSocket de teste.",
            codigoInicial: "<!-- WebSocket -->",
            xp: 55,
            dica: "const ws = new WebSocket('wss://echo.websocket.org'); ws.onopen = () => ws.send('Olá'); ws.onmessage = e => console.log(e.data);",
            validar: (codigo) => {
                return codigo.includes('WebSocket') && codigo.includes('.send');
            }
        }
    ]
},

{
    id: "html_webrtc",
    title: "Módulo 28: WebRTC",
    description: "Acesse câmera e microfone.",
    aula: {
        titulo: "getUserMedia",
        conteudo: "<p><code>navigator.mediaDevices.getUserMedia({ video: true })</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Exiba a câmera do usuário em um elemento video.",
            codigoInicial: "<!-- WebRTC -->",
            xp: 60,
            dica: "<video autoplay id='webcam'></video><script>navigator.mediaDevices.getUserMedia({video:true}).then(s => document.getElementById('webcam').srcObject = s);</script>",
            validar: (codigo) => {
                return codigo.includes('getUserMedia') && codigo.includes('srcObject');
            }
        }
    ]
},

{
    id: "html_security",
    title: "Módulo 29: Segurança",
    description: "Proteja seu site contra XSS e outros ataques.",
    aula: {
        titulo: "Boas práticas de segurança",
        conteudo: "<p>Use <code>textContent</code> em vez de <code>innerHTML</code> com dados do usuário, e CSP para restringir scripts.</p>"
    },
    exercicios: [
        {
            instrucao: "Adicione uma meta tag CSP que permite scripts apenas da própria origem.",
            codigoInicial: "<!-- CSP -->",
            xp: 45,
            dica: "<meta http-equiv='Content-Security-Policy' content='script-src self'>",
            validar: (codigo) => {
                return codigo.includes('Content-Security-Policy');
            }
        }
    ]
},

{
    id: "html_projeto_final",
    title: "Módulo 30: Projeto Final",
    description: "Construa um app de notas com localStorage.",
    aula: {
        titulo: "Projeto Integrador",
        conteudo: "<p>Crie um aplicativo de notas completo com formulário, lista e persistência.</p>"
    },
    exercicios: [
        {
            instrucao: "Implemente um app de notas que salva e carrega do localStorage.",
            codigoInicial: "<!-- App de Notas -->",
            xp: 120,
            dica: "Crie um input e um botão para adicionar notas, uma lista para exibir, e funções para salvar/recuperar do localStorage.",
            validar: (codigo, iframeDoc) => {
                const input = iframeDoc.querySelector('input');
                const btn = iframeDoc.querySelector('button');
                const lista = iframeDoc.querySelector('ul');
                return input && btn && lista && codigo.includes('localStorage');
            }
        }
    ]
}

];