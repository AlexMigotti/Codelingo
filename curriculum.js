// curriculum.js - CodeLingo Premium v3.0
// Trilha completa: 20 módulos em 5 fases

const curriculum = [

// ╔══════════════════════════════════════════╗
// ║  FASE 1 — FUNDAMENTOS                   ║
// ╚══════════════════════════════════════════╝

    {
        id: "html_masterclass",
        title: "Módulo 1: O Esqueleto da Web (HTML5)",
        description: "Entenda como os navegadores leem a internet e crie sua primeira estrutura real do absoluto zero.",
        aula: {
            titulo: "A Anatomia Profunda do HTML",
            conteudo: `
                <h2>O que realmente é o HTML?</h2>
                <p>Imagine que você está construindo uma casa. O HTML (<em>HyperText Markup Language</em>) é a fundação, as vigas e as paredes de tijolos. Ele não é uma linguagem de programação — ele não faz cálculos nem toma decisões — ele é uma linguagem de <strong>marcação</strong>: sua função é dar <em>significado</em> ao conteúdo.</p>
                <p>Todo site que você já acessou na vida — do Google ao YouTube, do Instagram ao seu banco — começa com HTML. É a base de tudo na web.</p>

                <h2>Como o Navegador Lê o Seu Código</h2>
                <p>Quando você acessa um site, o navegador baixa um arquivo <code>.html</code> e o lê de cima para baixo, linha por linha. A cada tag que encontra, ele monta um elemento visual na tela — esse processo se chama <strong>renderização</strong>.</p>

                <h2>A Estrutura de Ouro (Boilerplate)</h2>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Nome da Aba&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Tudo o que o usuário vê fica aqui!
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

                <h3>Dissecando a Estrutura:</h3>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code>: Avisa ao navegador para usar as regras modernas do HTML5. Sem ela, o navegador ativa o <em>Quirks Mode</em>, gerando bugs difíceis de rastrear.</li>
                    <li><code>&lt;html lang="pt-BR"&gt;</code>: A raiz de toda a árvore. O atributo <code>lang</code> é essencial para leitores de tela e para o Google.</li>
                    <li><code>&lt;head&gt;</code>: O cérebro invisível. Configurações, título da aba, fontes e estilos vivem aqui.</li>
                    <li><code>&lt;meta charset="UTF-8"&gt;</code>: Sem ela, acentos como ã, ç e é viram símbolos estranhos.</li>
                    <li><code>&lt;body&gt;</code>: O palco. Tudo que aparece na tela vive aqui dentro.</li>
                </ul>

                <h2>Tags Essenciais de Conteúdo</h2>
                <ul>
                    <li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: Títulos em hierarquia. Use apenas um <code>&lt;h1&gt;</code> por página.</li>
                    <li><code>&lt;p&gt;</code>: Parágrafo de texto.</li>
                    <li><code>&lt;strong&gt;</code>: <strong>Negrito</strong> com importância semântica.</li>
                    <li><code>&lt;em&gt;</code>: <em>Itálico</em> com ênfase semântica.</li>
                    <li><code>&lt;a href="..."&gt;</code>: Link. O <code>href</code> define o destino.</li>
                </ul>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: A Fundação.</strong><br>Digite a estrutura base completa de um site HTML.<br><br>
                1. Declare <code>&lt;!DOCTYPE html&gt;</code><br>
                2. Abra a tag <code>&lt;html&gt;</code><br>
                3. Crie o <code>&lt;head&gt;</code> com <code>&lt;title&gt;Meu Primeiro Site&lt;/title&gt;</code><br>
                4. Crie o <code>&lt;body&gt;</code><br>
                5. Feche tudo corretamente`,
                codigoInicial: `<!-- Digite sua estrutura HTML abaixo: -->`,
                xp: 25,
                dica: `<code>&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>&nbsp;&nbsp;&lt;head&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Meu Primeiro Site&lt;/title&gt;<br>&nbsp;&nbsp;&lt;/head&gt;<br>&nbsp;&nbsp;&lt;body&gt;<br>&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('<!doctype html>') && c.includes('<html') && c.includes('<head>') && c.includes('<title>meu primeiro site</title>') && c.includes('<body>') && c.includes('</body>') && c.includes('</html>');
                }
            },
            {
                instrucao: `<strong>Missão 2: Dando Vida ao Corpo.</strong><br>Dentro do <code>&lt;body&gt;</code>, crie:<br><br>
                1. Um <code>&lt;h1&gt;</code> com o texto <strong>Diário de Bordo</strong><br>
                2. Um <code>&lt;p&gt;</code> com o texto <strong>Iniciando minha jornada na programação.</strong>`,
                codigoInicial: `<!DOCTYPE html>
<html>
  <head>
    <title>Meu Primeiro Site</title>
  </head>
  <body>
    <!-- Digite seu H1 e seu P aqui: -->

  </body>
</html>`,
                xp: 35,
                dica: `Dentro do <code>&lt;body&gt;</code>:<br><code>&lt;h1&gt;Diário de Bordo&lt;/h1&gt;</code><br><code>&lt;p&gt;Iniciando minha jornada na programação.&lt;/p&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const h1 = iframeDoc.querySelector('h1');
                    const p = iframeDoc.querySelector('p');
                    return h1 && h1.textContent.toLowerCase().includes('diário') && p && p.textContent.toLowerCase().includes('jornada');
                }
            }
        ]
    },

    {
        id: "css_masterclass",
        title: "Módulo 2: O Modelo de Caixa (CSS3)",
        description: "Descubra o maior segredo do Design Web: como o CSS enxerga os elementos na tela.",
        aula: {
            titulo: "Pintura, Decoração e o Box Model",
            conteudo: `
                <h2>O que é o CSS?</h2>
                <p>O CSS (<em>Cascading Style Sheets</em>) foi criado para <strong>separar o conteúdo da apresentação</strong>. Com CSS, você define as regras visuais num arquivo separado e elas se aplicam a todo o site de uma vez.</p>

                <h2>A Sintaxe Fundamental</h2>
                <pre><code>seletor {
  propriedade: valor; /* sempre termina com ; */
}</code></pre>

                <h2>O Box Model — O Maior Segredo da Web</h2>
                <p><strong>Todo elemento HTML é uma caixa retangular</strong> com 4 camadas:</p>
                <pre><code>┌──────────── margin ────────────┐
│  ┌────────── border ─────────┐ │
│  │  ┌────── padding ───────┐ │ │
│  │  │       content        │ │ │
│  │  └──────────────────────┘ │ │
│  └───────────────────────────┘ │
└────────────────────────────────┘</code></pre>
                <ul>
                    <li><strong>Content:</strong> O texto ou imagem. Controlado com <code>width</code> e <code>height</code>.</li>
                    <li><strong>Padding:</strong> Espaço interno — o elemento "respira" por dentro.</li>
                    <li><strong>Border:</strong> A moldura. Ex: <code>border: 2px solid gold</code>.</li>
                    <li><strong>Margin:</strong> Espaço externo — empurra outros elementos para longe.</li>
                </ul>
                <p>💡 Se o texto parece espremido: use <code>padding</code>. Se elementos estão colados: use <code>margin</code>.</p>

                <h2>Propriedades Essenciais</h2>
                <pre><code>p {
  color: #ffffff;
  font-size: 18px;
  background-color: #111;
  padding: 20px;
  margin: 10px auto;
  border: 1px solid #555;
  border-radius: 8px;
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Sua Primeira Regra CSS.</strong><br>Dentro da tag <code>&lt;style&gt;</code>, escreva uma regra para o elemento <code>p</code>:<br><br>
                1. <code>color: white;</code><br>
                2. <code>background-color: #222;</code>`,
                codigoInicial: `<style>
  /* Escreva sua regra CSS aqui: */

</style>

<p>Sou uma caixa de texto na web. Estilize-me!</p>`,
                xp: 30,
                dica: `<code>p {<br>&nbsp;&nbsp;color: white;<br>&nbsp;&nbsp;background-color: #222;<br>}</code>`,
                validar: (codigo, iframeDoc) => {
                    const p = iframeDoc.querySelector('p');
                    if (!p) return false;
                    const iw = iframeDoc.defaultView;
                    const style = iw.getComputedStyle(p);
                    return style.color === 'rgb(255, 255, 255)' && (style.backgroundColor === 'rgb(34, 34, 34)' || codigo.includes('#222'));
                }
            },
            {
                instrucao: `<strong>Missão 2: Aplicando o Box Model.</strong><br>Na regra do <code>p</code>, adicione:<br><br>
                1. <code>padding: 25px;</code><br>
                2. <code>border-radius: 12px;</code>`,
                codigoInicial: `<style>
  p {
    color: white;
    background-color: #222;
    /* Adicione padding e border-radius aqui: */

  }
</style>

<p>Agora sim tenho espaço para respirar!</p>`,
                xp: 40,
                dica: `Após o <code>background-color</code>:<br><code>padding: 25px;</code><br><code>border-radius: 12px;</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s+/g, ' ').toLowerCase();
                    return c.includes('padding: 25px') && c.includes('border-radius: 12px');
                }
            }
        ]
    },

    {
        id: "js_masterclass",
        title: "Módulo 3: Interatividade e o DOM (JS)",
        description: "Descubra como os desenvolvedores dão inteligência às páginas e fazem botões ganharem vida.",
        aula: {
            titulo: "O Controlador da Matrix: Document Object Model",
            conteudo: `
                <h2>O que é o JavaScript?</h2>
                <p>O JavaScript (JS) é a única linguagem de programação que roda diretamente no navegador. É ela que transforma páginas estáticas em aplicações interativas — animações, validações, atualizações em tempo real.</p>

                <h2>O DOM — A Árvore Viva</h2>
                <p>Quando o navegador termina de ler o HTML, ele constrói uma <strong>árvore de objetos vivos</strong> na memória chamada <strong>DOM (Document Object Model)</strong>. O JS tem acesso total a essa árvore via o objeto global <code>document</code>.</p>

                <h2>Capturando Elementos</h2>
                <pre><code>const titulo = document.querySelector('h1');
titulo.innerText = "Texto novo!";
titulo.style.color = "gold";</code></pre>

                <h2>Reagindo ao Usuário</h2>
                <pre><code>const botao = document.querySelector('button');

botao.addEventListener('click', function() {
  // Este código só roda quando o botão for clicado
  document.querySelector('h1').innerText = 'Clicado!';
});</code></pre>

                <h2>Alterando Estilos Dinamicamente</h2>
                <p>Propriedades CSS com hífen viram camelCase no JS:</p>
                <pre><code>caixa.style.backgroundColor = 'blue';  // background-color
caixa.style.borderRadius = '50%';       // border-radius
caixa.style.fontSize = '24px';          // font-size</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: O Primeiro Hack do DOM.</strong><br>Na tag <code>&lt;script&gt;</code>:<br><br>
                1. Crie <code>const alvo = document.querySelector('h2')</code><br>
                2. Altere com <code>alvo.innerText = 'Fui alterado pelo JavaScript!'</code>`,
                codigoInicial: `<h2>Aguardando instruções...</h2>

<script>
  // 1. Crie a const 'alvo' e capture o h2

  // 2. Modifique o texto do alvo

</script>`,
                xp: 50,
                dica: `<code>const alvo = document.querySelector('h2');</code><br><code>alvo.innerText = 'Fui alterado pelo JavaScript!';</code>`,
                validar: (codigo, iframeDoc) => {
                    const h2 = iframeDoc.querySelector('h2');
                    return h2 && h2.textContent.toLowerCase().includes('fui alterado');
                }
            },
            {
                instrucao: `<strong>Missão 2: O Desafio do Clique.</strong><br>Faça a caixa vermelha ficar <strong>azul</strong> ao clicar no botão:<br><br>
                1. <code>const btn = document.querySelector('button')</code><br>
                2. <code>const caixa = document.querySelector('div')</code><br>
                3. <code>btn.addEventListener('click', function() { caixa.style.backgroundColor = 'blue'; })</code>`,
                codigoInicial: `<style>
  div { width:120px; height:120px; background-color:darkred; border-radius:8px; margin-bottom:15px; }
</style>

<div></div>
<button>Ativar Modo Azul</button>

<script>
  // Siga as instruções:

</script>`,
                xp: 150,
                dica: `<code>const btn = document.querySelector('button');</code><br><code>const caixa = document.querySelector('div');</code><br><code>btn.addEventListener('click', function() {<br>&nbsp;&nbsp;caixa.style.backgroundColor = 'blue';<br>});</code>`,
                validar: (codigo, iframeDoc) => {
                    const btn = iframeDoc.querySelector('button');
                    const div = iframeDoc.querySelector('div');
                    if (!btn || !div) return false;
                    btn.click();
                    const iw = iframeDoc.defaultView;
                    const style = iw.getComputedStyle(div);
                    return style.backgroundColor === 'rgb(0, 0, 255)' || div.style.backgroundColor === 'blue';
                }
            }
        ]
    },

    {
        id: "html_forms_semantic",
        title: "Módulo 4: Formulários e Semântica",
        description: "Aprenda a criar formulários funcionais e use tags semânticas que o Google e leitores de tela entendem.",
        aula: {
            titulo: "Formulários e HTML Semântico",
            conteudo: `
                <h2>Por que Formulários?</h2>
                <p>Formulários são a principal forma de <strong>coletar dados do usuário</strong> na web — logins, cadastros, pesquisas, comentários. Sem formulários, a web seria apenas leitura.</p>

                <h2>A Tag &lt;form&gt; e Seus Campos</h2>
                <pre><code>&lt;form&gt;
  &lt;label for="nome"&gt;Seu nome:&lt;/label&gt;
  &lt;input type="text" id="nome" name="nome" placeholder="Digite aqui"&gt;

  &lt;label for="email"&gt;E-mail:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>

                <h3>Tipos de Input mais usados:</h3>
                <ul>
                    <li><code>type="text"</code>: campo de texto livre</li>
                    <li><code>type="email"</code>: valida formato de e-mail automaticamente</li>
                    <li><code>type="password"</code>: esconde o que é digitado</li>
                    <li><code>type="number"</code>: aceita apenas números</li>
                    <li><code>type="checkbox"</code>: caixa de marcação</li>
                    <li><code>type="radio"</code>: seleção única entre opções</li>
                </ul>
                <p>O atributo <code>for</code> do label deve ser igual ao <code>id</code> do input — isso os vincula, melhorando acessibilidade.</p>

                <h2>HTML Semântico — Dê Significado à Estrutura</h2>
                <p>Tags semânticas descrevem o <em>papel</em> do conteúdo, não só sua aparência. O Google, leitores de tela e outros desenvolvedores entendem muito melhor um site que usa essas tags.</p>
                <pre><code>&lt;header&gt;   → cabeçalho do site ou seção
&lt;nav&gt;      → menu de navegação
&lt;main&gt;     → conteúdo principal (único por página)
&lt;section&gt;  → seção temática do conteúdo
&lt;article&gt;  → conteúdo independente (post, notícia)
&lt;aside&gt;    → conteúdo lateral (barra lateral)
&lt;footer&gt;   → rodapé</code></pre>
                <p>Evite usar <code>&lt;div&gt;</code> para tudo. Uma <code>&lt;div&gt;</code> não tem significado — ela é apenas um contêiner genérico. Quando existe uma tag semântica adequada, use-a.</p>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Seu Primeiro Formulário.</strong><br>Crie um formulário de login com:<br><br>
                1. Um <code>&lt;label&gt;</code> com texto <strong>Usuário:</strong> e <code>for="usuario"</code><br>
                2. Um <code>&lt;input type="text"&gt;</code> com <code>id="usuario"</code><br>
                3. Um <code>&lt;button type="submit"&gt;</code> com texto <strong>Entrar</strong>`,
                codigoInicial: `<!-- Crie seu formulário abaixo: -->
<form>

</form>`,
                xp: 40,
                dica: `<code>&lt;form&gt;<br>&nbsp;&nbsp;&lt;label for="usuario"&gt;Usuário:&lt;/label&gt;<br>&nbsp;&nbsp;&lt;input type="text" id="usuario"&gt;<br>&nbsp;&nbsp;&lt;button type="submit"&gt;Entrar&lt;/button&gt;<br>&lt;/form&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const label = iframeDoc.querySelector('label[for="usuario"]');
                    const input = iframeDoc.querySelector('input#usuario');
                    const btn = iframeDoc.querySelector('button[type="submit"]');
                    return label && input && btn && btn.textContent.toLowerCase().includes('entrar');
                }
            },
            {
                instrucao: `<strong>Missão 2: Estrutura Semântica.</strong><br>Monte a estrutura semântica de uma página usando as tags corretas:<br><br>
                1. Um <code>&lt;header&gt;</code> com um <code>&lt;h1&gt;</code> dizendo <strong>Meu Blog</strong><br>
                2. Um <code>&lt;main&gt;</code> com um <code>&lt;article&gt;</code> contendo qualquer parágrafo<br>
                3. Um <code>&lt;footer&gt;</code> com qualquer texto`,
                codigoInicial: `<!-- Monte a estrutura semântica da página: -->
`,
                xp: 50,
                dica: `<code>&lt;header&gt;&lt;h1&gt;Meu Blog&lt;/h1&gt;&lt;/header&gt;<br>&lt;main&gt;&lt;article&gt;&lt;p&gt;Texto&lt;/p&gt;&lt;/article&gt;&lt;/main&gt;<br>&lt;footer&gt;Rodapé&lt;/footer&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const header = iframeDoc.querySelector('header');
                    const main = iframeDoc.querySelector('main');
                    const article = iframeDoc.querySelector('article');
                    const footer = iframeDoc.querySelector('footer');
                    const h1 = iframeDoc.querySelector('h1');
                    return header && main && article && footer && h1 && h1.textContent.toLowerCase().includes('blog');
                }
            }
        ]
    },

    {
        id: "html_media_tables",
        title: "Módulo 5: Listas, Tabelas e Mídias",
        description: "Domine as tags para organizar dados em listas e tabelas, e incorpore imagens e vídeos.",
        aula: {
            titulo: "Organizando Conteúdo: Listas, Tabelas e Mídias",
            conteudo: `
                <h2>Listas</h2>
                <p>Existem dois tipos principais de lista em HTML:</p>
                <pre><code>&lt;!-- Lista não ordenada (bullets) --&gt;
&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Lista ordenada (números) --&gt;
&lt;ol&gt;
  &lt;li&gt;Primeiro passo&lt;/li&gt;
  &lt;li&gt;Segundo passo&lt;/li&gt;
  &lt;li&gt;Terceiro passo&lt;/li&gt;
&lt;/ol&gt;</code></pre>

                <h2>Tabelas</h2>
                <p>Tabelas são para dados tabulares — nunca para layout de página (use Flexbox ou Grid para isso).</p>
                <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nome&lt;/th&gt;
      &lt;th&gt;Idade&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Ana&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

                <h2>Imagens</h2>
                <pre><code>&lt;img src="foto.jpg" alt="Descrição da imagem" width="400"&gt;</code></pre>
                <p>O atributo <code>alt</code> é obrigatório para acessibilidade e SEO. Nunca omita.</p>

                <h2>Vídeos</h2>
                <pre><code>&lt;video src="video.mp4" controls width="600"&gt;
  Seu navegador não suporta vídeos HTML5.
&lt;/video&gt;</code></pre>
                <p>O atributo <code>controls</code> exibe os controles nativos de play/pause/volume.</p>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Lista de Habilidades.</strong><br>Crie uma lista não ordenada (<code>&lt;ul&gt;</code>) com 3 itens (<code>&lt;li&gt;</code>):<br><br>
                <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>`,
                codigoInicial: `<!-- Crie sua lista aqui: -->
`,
                xp: 25,
                dica: `<code>&lt;ul&gt;<br>&nbsp;&nbsp;&lt;li&gt;HTML&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;CSS&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;JavaScript&lt;/li&gt;<br>&lt;/ul&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const itens = iframeDoc.querySelectorAll('ul li');
                    if (itens.length < 3) return false;
                    const textos = Array.from(itens).map(i => i.textContent.toLowerCase());
                    return textos.some(t => t.includes('html')) && textos.some(t => t.includes('css')) && textos.some(t => t.includes('javascript'));
                }
            },
            {
                instrucao: `<strong>Missão 2: Tabela de Dados.</strong><br>Crie uma tabela com:<br><br>
                1. Um <code>&lt;thead&gt;</code> com uma linha contendo os cabeçalhos <strong>Nome</strong> e <strong>Nota</strong><br>
                2. Um <code>&lt;tbody&gt;</code> com pelo menos uma linha de dados`,
                codigoInicial: `<!-- Crie sua tabela aqui: -->
`,
                xp: 45,
                dica: `<code>&lt;table&gt;<br>&nbsp;&nbsp;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;Nome&lt;/th&gt;&lt;th&gt;Nota&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;<br>&nbsp;&nbsp;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Ana&lt;/td&gt;&lt;td&gt;10&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;<br>&lt;/table&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const thead = iframeDoc.querySelector('thead');
                    const tbody = iframeDoc.querySelector('tbody');
                    const ths = iframeDoc.querySelectorAll('th');
                    const tds = iframeDoc.querySelectorAll('td');
                    if (!thead || !tbody || ths.length < 2 || tds.length < 2) return false;
                    const thTexts = Array.from(ths).map(t => t.textContent.toLowerCase());
                    return thTexts.some(t => t.includes('nome')) && thTexts.some(t => t.includes('nota'));
                }
            }
        ]
    },

// ╔══════════════════════════════════════════╗
// ║  FASE 2 — CSS INTERMEDIÁRIO             ║
// ╚══════════════════════════════════════════╝

    {
        id: "css_flexbox",
        title: "Módulo 6: Flexbox",
        description: "Domine o sistema de layout mais usado na web moderna e alinhe elementos com precisão cirúrgica.",
        aula: {
            titulo: "Flexbox: O Fim dos Problemas de Layout",
            conteudo: `
                <h2>O Problema que o Flexbox Resolve</h2>
                <p>Antes do Flexbox, centralizar um elemento na tela era uma das tarefas mais frustrantes do CSS. Desenvolvedores usavam truques com <code>float</code>, <code>position: absolute</code> e margens negativas — todos frágeis e difíceis de manter.</p>
                <p>O Flexbox (<em>Flexible Box Layout</em>) foi criado especificamente para resolver o alinhamento e distribuição de elementos em uma dimensão (linha ou coluna).</p>

                <h2>Ativando o Flexbox</h2>
                <p>Você aplica <code>display: flex</code> no elemento <strong>pai</strong> (chamado de contêiner). Os filhos diretos automaticamente se tornam <strong>flex items</strong>.</p>
                <pre><code>.container {
  display: flex;
}</code></pre>

                <h2>Propriedades do Contêiner</h2>
                <pre><code>.container {
  display: flex;

  /* Direção: row (padrão, horizontal) ou column (vertical) */
  flex-direction: row;

  /* Alinhamento no eixo principal (horizontal se row) */
  justify-content: center;       /* centraliza */
  justify-content: space-between; /* distribui com espaço entre */
  justify-content: space-around;  /* distribui com espaço ao redor */
  justify-content: flex-start;    /* início (padrão) */
  justify-content: flex-end;      /* final */

  /* Alinhamento no eixo cruzado (vertical se row) */
  align-items: center;     /* centraliza verticalmente */
  align-items: flex-start; /* topo */
  align-items: flex-end;   /* base */
  align-items: stretch;    /* estica (padrão) */

  /* Quebra de linha quando não cabe */
  flex-wrap: wrap;
  gap: 16px; /* espaço entre os itens */
}</code></pre>

                <h2>Centralização Perfeita em 3 Linhas</h2>
                <pre><code>.centralizado {
  display: flex;
  justify-content: center;
  align-items: center;
}</code></pre>
                <p>Esse trio é o padrão mais usado no CSS moderno. Memorize-o.</p>

                <h2>Propriedades dos Itens</h2>
                <pre><code>.item {
  flex: 1;       /* cresce para preencher o espaço disponível */
  flex: 0 0 200px; /* tamanho fixo de 200px */
  order: 2;      /* muda a ordem visual sem alterar o HTML */
  align-self: flex-end; /* alinhamento individual (sobrescreve align-items) */
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Alinhamento Horizontal.</strong><br>A <code>.caixa</code> contém 3 divs filhas. Use Flexbox para distribuí-las com espaço igual <strong>entre</strong> elas.<br><br>
                Na regra <code>.caixa</code>, adicione:<br>
                1. <code>display: flex;</code><br>
                2. <code>justify-content: space-between;</code>`,
                codigoInicial: `<style>
  .caixa {
    background: #1a1a2e;
    padding: 20px;
    border: 2px solid #444;
    height: 100px;
    /* Adicione Flexbox aqui: */

  }
  .item {
    width: 80px;
    height: 60px;
    background: #e94560;
    border-radius: 8px;
  }
</style>

<div class="caixa">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>`,
                xp: 40,
                dica: `Adicione na regra <code>.caixa</code>:<br><code>display: flex;</code><br><code>justify-content: space-between;</code>`,
                validar: (codigo, iframeDoc) => {
                    const caixa = iframeDoc.querySelector('.caixa');
                    if (!caixa) return false;
                    const iw = iframeDoc.defaultView;
                    const style = iw.getComputedStyle(caixa);
                    return style.display === 'flex' && style.justifyContent === 'space-between';
                }
            },
            {
                instrucao: `<strong>Missão 2: Centralização Perfeita.</strong><br>Centralize o conteúdo dentro da <code>.vitrine</code> tanto horizontal quanto verticalmente.<br><br>
                1. <code>display: flex;</code><br>
                2. <code>justify-content: center;</code><br>
                3. <code>align-items: center;</code>`,
                codigoInicial: `<style>
  .vitrine {
    background: #0f0e17;
    border: 2px solid #ff8906;
    height: 200px;
    /* Centralize o conteúdo aqui: */

  }
  .badge {
    background: #ff8906;
    color: #0f0e17;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: bold;
    font-family: sans-serif;
  }
</style>

<div class="vitrine">
  <div class="badge">Centralizado!</div>
</div>`,
                xp: 50,
                dica: `Na regra <code>.vitrine</code>:<br><code>display: flex;</code><br><code>justify-content: center;</code><br><code>align-items: center;</code>`,
                validar: (codigo, iframeDoc) => {
                    const vitrine = iframeDoc.querySelector('.vitrine');
                    if (!vitrine) return false;
                    const iw = iframeDoc.defaultView;
                    const s = iw.getComputedStyle(vitrine);
                    return s.display === 'flex' && s.justifyContent === 'center' && s.alignItems === 'center';
                }
            }
        ]
    },

    {
        id: "css_grid",
        title: "Módulo 7: CSS Grid",
        description: "Crie layouts de duas dimensões com o sistema mais poderoso do CSS moderno.",
        aula: {
            titulo: "CSS Grid: Layouts em Duas Dimensões",
            conteudo: `
                <h2>Flexbox vs Grid: Quando Usar Cada Um?</h2>
                <p><strong>Flexbox</strong> é ideal para layouts em <em>uma dimensão</em> — uma linha de botões, uma lista de cards, uma barra de navegação.</p>
                <p><strong>Grid</strong> é ideal para layouts em <em>duas dimensões</em> — o layout completo de uma página, uma galeria de fotos, um dashboard.</p>

                <h2>Criando uma Grade</h2>
                <pre><code>.grade {
  display: grid;

  /* 3 colunas de tamanhos iguais */
  grid-template-columns: 1fr 1fr 1fr;

  /* Shorthand com repeat() */
  grid-template-columns: repeat(3, 1fr);

  /* Colunas com tamanhos diferentes */
  grid-template-columns: 200px 1fr 1fr;

  gap: 20px; /* espaço entre células */
}</code></pre>
                <p>A unidade <code>fr</code> significa <em>fração</em> do espaço disponível. <code>1fr 1fr 1fr</code> cria 3 colunas iguais.</p>

                <h2>Áreas Nomeadas — O Super Poder do Grid</h2>
                <pre><code>.pagina {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main  "
    "footer  footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 60px;
}

header { grid-area: header; }
.sidebar { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }</code></pre>

                <h2>Posicionamento Manual</h2>
                <pre><code>.destaque {
  grid-column: 1 / 3; /* ocupa da coluna 1 até a 3 */
  grid-row: 1 / 2;    /* ocupa da linha 1 até a 2 */
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Galeria de Cards.</strong><br>Transforme o <code>.grid</code> em uma grade de <strong>3 colunas iguais</strong> com espaçamento:<br><br>
                1. <code>display: grid;</code><br>
                2. <code>grid-template-columns: repeat(3, 1fr);</code><br>
                3. <code>gap: 16px;</code>`,
                codigoInicial: `<style>
  .grid {
    background: #111;
    padding: 20px;
    /* Monte a grade aqui: */

  }
  .card {
    background: #1e3a5f;
    border: 1px solid #2e5a8f;
    border-radius: 8px;
    height: 80px;
  }
</style>

<div class="grid">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>`,
                xp: 45,
                dica: `Na regra <code>.grid</code>:<br><code>display: grid;</code><br><code>grid-template-columns: repeat(3, 1fr);</code><br><code>gap: 16px;</code>`,
                validar: (codigo, iframeDoc) => {
                    const grid = iframeDoc.querySelector('.grid');
                    if (!grid) return false;
                    const iw = iframeDoc.defaultView;
                    const s = iw.getComputedStyle(grid);
                    return s.display === 'grid' && (s.gridTemplateColumns.includes('1fr') || s.gridTemplateColumns.split(' ').length === 3);
                }
            },
            {
                instrucao: `<strong>Missão 2: Card Destaque.</strong><br>Faça o primeiro card (<code>.destaque</code>) ocupar as 3 colunas completas da grade:<br><br>
                1. <code>grid-column: 1 / 4;</code>`,
                codigoInicial: `<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 16px;
    background: #111;
  }
  .card {
    background: #1e3a5f;
    border: 1px solid #2e5a8f;
    border-radius: 8px;
    height: 70px;
  }
  .destaque {
    background: #e94560;
    border-color: #ff6b6b;
    /* Faça este card ocupar as 3 colunas: */

  }
</style>

<div class="grid">
  <div class="card destaque"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>`,
                xp: 55,
                dica: `Na regra <code>.destaque</code>, adicione:<br><code>grid-column: 1 / 4;</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s+/g, ' ').toLowerCase();
                    return c.includes('grid-column: 1 / 4') || c.includes('grid-column:1/4') || c.includes('grid-column: 1/4');
                }
            }
        ]
    },

    {
        id: "css_responsivo",
        title: "Módulo 8: Responsividade",
        description: "Faça seus sites funcionarem perfeitamente em celulares, tablets e desktops com Media Queries.",
        aula: {
            titulo: "Design Responsivo e Media Queries",
            conteudo: `
                <h2>Por que Responsividade é Obrigatória?</h2>
                <p>Mais de <strong>60% do tráfego da web</strong> vem de dispositivos móveis. Um site que não funciona no celular perde a maioria dos seus visitantes — e o Google penaliza sites não responsivos nos resultados de busca.</p>

                <h2>A Meta Tag Viewport</h2>
                <p>Antes de qualquer CSS, você precisa dessa linha no <code>&lt;head&gt;</code>:</p>
                <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
                <p>Sem ela, o celular renderiza a página como se fosse um desktop e depois dá zoom out — resultando num texto minúsculo e ilegível.</p>

                <h2>Media Queries</h2>
                <p>Media queries aplicam estilos condicionalmente baseado nas características do dispositivo:</p>
                <pre><code>/* Estilos padrão (mobile-first) */
.container {
  width: 100%;
  padding: 16px;
}

/* Tablet (a partir de 768px) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop (a partir de 1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}</code></pre>

                <h2>Mobile-First: A Estratégia Certa</h2>
                <p>Comece estilizando para o menor dispositivo e use <code>min-width</code> para adicionar estilos em telas maiores. Isso é mais fácil de manter e tem melhor performance.</p>

                <h2>Breakpoints Mais Usados</h2>
                <ul>
                    <li><code>480px</code>: smartphones pequenos</li>
                    <li><code>768px</code>: tablets</li>
                    <li><code>1024px</code>: laptops</li>
                    <li><code>1280px</code>: desktops</li>
                </ul>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Colunas Responsivas.</strong><br>O <code>.grid</code> tem 1 coluna por padrão. Adicione uma media query que, a partir de <strong>600px</strong>, mude para <strong>3 colunas</strong>:<br><br>
                <code>@media (min-width: 600px) { .grid { grid-template-columns: repeat(3, 1fr); } }</code>`,
                codigoInicial: `<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px;
    background: #0d0d0d;
  }
  .card {
    background: #1a1a2e;
    border: 1px solid #16213e;
    border-radius: 8px;
    height: 60px;
  }
  /* Adicione sua media query aqui: */

</style>

<div class="grid">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>`,
                xp: 55,
                dica: `Adicione após os estilos:<br><code>@media (min-width: 600px) {<br>&nbsp;&nbsp;.grid {<br>&nbsp;&nbsp;&nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br>&nbsp;&nbsp;}<br>}</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s+/g, ' ').toLowerCase();
                    return c.includes('@media') && c.includes('min-width') && (c.includes('600px') || c.includes('600 px')) && c.includes('repeat(3');
                }
            },
            {
                instrucao: `<strong>Missão 2: Menu Responsivo.</strong><br>O menu está em coluna no mobile. Adicione uma media query para que, a partir de <strong>768px</strong>, o <code>.menu</code> use <code>flex-direction: row</code>`,
                codigoInicial: `<style>
  .menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #111;
    padding: 16px;
    list-style: none;
  }
  .menu li a {
    color: #D4AF37;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    padding: 8px 16px;
    display: block;
    background: #1a1a1a;
    border-radius: 6px;
  }
  /* Adicione sua media query aqui: */

</style>

<ul class="menu">
  <li><a href="#">Início</a></li>
  <li><a href="#">Sobre</a></li>
  <li><a href="#">Contato</a></li>
</ul>`,
                xp: 55,
                dica: `<code>@media (min-width: 768px) {<br>&nbsp;&nbsp;.menu {<br>&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: row;<br>&nbsp;&nbsp;}<br>}</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s+/g, ' ').toLowerCase();
                    return c.includes('@media') && c.includes('768px') && c.includes('flex-direction: row');
                }
            }
        ]
    },

    {
        id: "css_animacoes",
        title: "Módulo 9: Animações CSS",
        description: "Dê vida às suas interfaces com transitions suaves e keyframe animations profissionais.",
        aula: {
            titulo: "Animações CSS: Transitions e Keyframes",
            conteudo: `
                <h2>Por que Animar?</h2>
                <p>Animações bem feitas não são decoração — elas <strong>comunicam</strong>. Um botão que muda de cor ao hover diz "sou clicável". Um elemento que desliza para entrar diz "cheguei, preste atenção aqui". Animações ruins distraem; animações boas guiam.</p>

                <h2>Transition — A Animação Simples</h2>
                <p>Transitions animam a mudança de um estado CSS para outro (como no hover):</p>
                <pre><code>.botao {
  background: #D4AF37;
  transition: background 0.3s ease, transform 0.2s ease;
  /* propriedade | duração | timing-function */
}

.botao:hover {
  background: #b5952f;
  transform: translateY(-2px); /* sobe 2px no hover */
}</code></pre>

                <h3>Timing functions mais usadas:</h3>
                <ul>
                    <li><code>ease</code>: começa devagar, acelera, termina devagar (padrão)</li>
                    <li><code>linear</code>: velocidade constante</li>
                    <li><code>ease-in</code>: começa devagar, termina rápido</li>
                    <li><code>ease-out</code>: começa rápido, termina devagar (mais natural)</li>
                    <li><code>cubic-bezier()</code>: curva totalmente customizada</li>
                </ul>

                <h2>Keyframes — A Animação Completa</h2>
                <p>Para animações que rodam continuamente ou têm múltiplos estágios, use <code>@keyframes</code>:</p>
                <pre><code>@keyframes pulsar {
  0%   { transform: scale(1); opacity: 1; }
  50%  { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.elemento {
  animation: pulsar 2s ease-in-out infinite;
  /* nome | duração | timing | repetição */
}</code></pre>

                <h2>Propriedades de animation</h2>
                <pre><code>.elemento {
  animation-name: pulsar;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; /* ou um número */
  animation-direction: alternate; /* vai e volta */
  animation-delay: 0.5s; /* espera antes de começar */
  animation-fill-mode: forwards; /* mantém estado final */
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Botão com Hover Suave.</strong><br>Faça o botão ter uma transição suave ao passar o mouse:<br><br>
                Na regra <code>.btn</code>, adicione:<br>
                <code>transition: background 0.3s ease, transform 0.2s ease;</code><br><br>
                Na regra <code>.btn:hover</code>, adicione:<br>
                <code>background: #b5952f;</code><br>
                <code>transform: translateY(-3px);</code>`,
                codigoInicial: `<style>
  body { display: flex; justify-content: center; padding: 40px; background: #111; }
  .btn {
    background: #D4AF37;
    color: #111;
    border: none;
    padding: 14px 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    /* Adicione a transition aqui: */

  }
  .btn:hover {
    /* Adicione os estilos do hover aqui: */

  }
</style>

<button class="btn">Passe o mouse aqui</button>`,
                xp: 45,
                dica: `Em <code>.btn</code>:<br><code>transition: background 0.3s ease, transform 0.2s ease;</code><br><br>Em <code>.btn:hover</code>:<br><code>background: #b5952f;</code><br><code>transform: translateY(-3px);</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s+/g, ' ').toLowerCase();
                    return c.includes('transition') && c.includes('0.3s') && c.includes('.btn:hover') && (c.includes('background: #b5952f') || c.includes('background:#b5952f'));
                }
            },
            {
                instrucao: `<strong>Missão 2: Animação de Pulso.</strong><br>Crie uma animação <code>@keyframes</code> chamada <strong>pulsar</strong> que escale o elemento de 1 para 1.15 e volte.<br><br>
                1. Crie <code>@keyframes pulsar</code> com <code>0%/100%: scale(1)</code> e <code>50%: scale(1.15)</code><br>
                2. Aplique no <code>.circulo</code>: <code>animation: pulsar 1.5s ease-in-out infinite;</code>`,
                codigoInicial: `<style>
  body { display: flex; justify-content: center; padding: 40px; background: #111; }
  .circulo {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #e94560, #c0392b);
    border-radius: 50%;
    /* Aplique a animation aqui: */

  }
  /* Crie o @keyframes aqui: */

</style>

<div class="circulo"></div>`,
                xp: 60,
                dica: `<code>@keyframes pulsar {<br>&nbsp;&nbsp;0%, 100% { transform: scale(1); }<br>&nbsp;&nbsp;50% { transform: scale(1.15); }<br>}<br>.circulo { animation: pulsar 1.5s ease-in-out infinite; }</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s+/g, ' ').toLowerCase();
                    return c.includes('@keyframes pulsar') && c.includes('scale(1.15)') && c.includes('animation: pulsar');
                }
            }
        ]
    },

// ╔══════════════════════════════════════════╗
// ║  FASE 3 — JAVASCRIPT ALÉM DO BÁSICO    ║
// ╚══════════════════════════════════════════╝

    {
        id: "js_logica",
        title: "Módulo 10: Lógica e Condicionais",
        description: "Ensine o seu programa a tomar decisões com if/else, operadores e lógica booleana.",
        aula: {
            titulo: "Lógica de Programação e Condicionais",
            conteudo: `
                <h2>O que é Lógica de Programação?</h2>
                <p>Todo programa útil precisa tomar decisões: "se o usuário está logado, mostra o painel; senão, redireciona para o login". A lógica de programação é a arte de expressar essas decisões em código.</p>

                <h2>Variáveis e Tipos de Dados</h2>
                <pre><code>const nome = "Ana";          // string (texto)
let idade = 25;              // number (número)
let ativo = true;            // boolean (verdadeiro/falso)
let cargo = null;            // null (ausência intencional de valor)
let salario = undefined;     // undefined (não definido)</code></pre>

                <h2>Operadores de Comparação</h2>
                <pre><code>5 === 5    // true  — igualdade estrita (valor E tipo)
5 == "5"  // true  — igualdade fraca (evite!)
5 !== 3   // true  — diferença estrita
10 > 5    // true  — maior que
10 >= 10  // true  — maior ou igual
3 < 5     // true  — menor que</code></pre>
                <p>⚠️ Sempre use <code>===</code> e <code>!==</code>. O <code>==</code> faz conversões de tipo inesperadas que geram bugs difíceis de encontrar.</p>

                <h2>Operadores Lógicos</h2>
                <pre><code>true && true   // true  — E (ambos precisam ser true)
true || false  // true  — OU (pelo menos um precisa ser true)
!true          // false — NÃO (inverte)</code></pre>

                <h2>Estrutura if / else if / else</h2>
                <pre><code>const nota = 7;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 7) {
    console.log("Aprovado.");
} else if (nota >= 5) {
    console.log("Recuperação.");
} else {
    console.log("Reprovado.");
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Verificador de Maioridade.</strong><br>Crie um script que:<br><br>
                1. Declare <code>const idade = 20</code><br>
                2. Use um <code>if/else</code> para verificar se <code>idade >= 18</code><br>
                3. Se sim, mude o texto do <code>&lt;p id="resultado"&gt;</code> para <strong>Maior de idade!</strong><br>
                4. Se não, coloque <strong>Menor de idade.</strong>`,
                codigoInicial: `<p id="resultado">Verificando...</p>

<script>
  // 1. Declare a variável idade com valor 20

  // 2. Escreva o if/else e altere o texto do parágrafo

</script>`,
                xp: 55,
                dica: `<code>const idade = 20;<br>const p = document.querySelector('#resultado');<br>if (idade >= 18) {<br>&nbsp;&nbsp;p.innerText = 'Maior de idade!';<br>} else {<br>&nbsp;&nbsp;p.innerText = 'Menor de idade.';<br>}</code>`,
                validar: (codigo, iframeDoc) => {
                    const p = iframeDoc.querySelector('#resultado');
                    return p && p.textContent.toLowerCase().includes('maior de idade');
                }
            },
            {
                instrucao: `<strong>Missão 2: Classificador de Notas.</strong><br>Crie um script que classifique uma nota:<br><br>
                - <code>nota >= 9</code>: mostre <strong>Excelente</strong><br>
                - <code>nota >= 7</code>: mostre <strong>Aprovado</strong><br>
                - Abaixo: mostre <strong>Reprovado</strong><br><br>
                Use <code>const nota = 8</code> e escreva o resultado no <code>#status</code>`,
                codigoInicial: `<p id="status">...</p>

<script>
  const nota = 8;
  const el = document.querySelector('#status');
  // Escreva o if/else if/else abaixo:

</script>`,
                xp: 60,
                dica: `<code>if (nota >= 9) {<br>&nbsp;&nbsp;el.innerText = 'Excelente';<br>} else if (nota >= 7) {<br>&nbsp;&nbsp;el.innerText = 'Aprovado';<br>} else {<br>&nbsp;&nbsp;el.innerText = 'Reprovado';<br>}</code>`,
                validar: (codigo, iframeDoc) => {
                    const el = iframeDoc.querySelector('#status');
                    return el && el.textContent.toLowerCase().includes('aprovado');
                }
            }
        ]
    },

    {
        id: "js_arrays_loops",
        title: "Módulo 11: Arrays e Loops",
        description: "Armazene coleções de dados e processe-as automaticamente com laços de repetição.",
        aula: {
            titulo: "Arrays, Loops e Métodos Modernos",
            conteudo: `
                <h2>O que é um Array?</h2>
                <p>Um array é uma <strong>lista ordenada de valores</strong>. Pense nele como uma prateleira numerada onde cada posição (índice) guarda um item. O índice começa em <code>0</code>.</p>
                <pre><code>const frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
console.log(frutas.length); // 3</code></pre>

                <h2>Manipulando Arrays</h2>
                <pre><code>const lista = [1, 2, 3];

lista.push(4);       // adiciona ao final → [1,2,3,4]
lista.pop();         // remove do final  → [1,2,3]
lista.unshift(0);    // adiciona ao início → [0,1,2,3]
lista.shift();       // remove do início → [1,2,3]

lista.includes(2);   // true — verifica se contém
lista.indexOf(2);    // 1 — retorna o índice
lista.join(", ");    // "1, 2, 3" — converte em string</code></pre>

                <h2>O Loop for</h2>
                <pre><code>const nomes = ["Ana", "Bruno", "Carla"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
// Ana, Bruno, Carla</code></pre>

                <h2>O forEach — A Forma Moderna</h2>
                <pre><code>nomes.forEach(function(nome) {
    console.log("Olá, " + nome);
});

// Versão com arrow function (mais curta):
nomes.forEach(nome => console.log("Olá, " + nome));</code></pre>

                <h2>O map — Transforma Arrays</h2>
                <pre><code>const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2);
// dobrados = [2, 4, 6, 8]

// Muito usado para gerar HTML dinâmico:
const itens = ["A", "B", "C"];
const html = itens.map(item =&gt; "&lt;li&gt;" + item + "&lt;/li&gt;").join("");</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Lista Dinâmica.</strong><br>Use um array e <code>forEach</code> para criar uma lista HTML dinâmica.<br><br>
                1. Crie <code>const linguagens = ['HTML', 'CSS', 'JavaScript']</code><br>
                2. Para cada item, crie um <code>&lt;li&gt;</code> e adicione dentro do <code>&lt;ul id="lista"&gt;</code> usando <code>innerHTML +=</code>`,
                codigoInicial: `<ul id="lista"></ul>

<script>
  const linguagens = ['HTML', 'CSS', 'JavaScript'];
  const lista = document.querySelector('#lista');

  // Use forEach para adicionar um <li> para cada linguagem:

</script>`,
                xp: 60,
                dica: `<code>linguagens.forEach(function(lang) {<br>&nbsp;&nbsp;lista.innerHTML += '&lt;li&gt;' + lang + '&lt;/li&gt;';<br>});</code>`,
                validar: (codigo, iframeDoc) => {
                    const itens = iframeDoc.querySelectorAll('#lista li');
                    if (itens.length < 3) return false;
                    const textos = Array.from(itens).map(i => i.textContent.toLowerCase());
                    return textos.some(t => t.includes('html')) && textos.some(t => t.includes('css')) && textos.some(t => t.includes('javascript'));
                }
            },
            {
                instrucao: `<strong>Missão 2: Contador de Itens.</strong><br>Use <code>.length</code> para mostrar quantos itens tem o array.<br><br>
                1. Crie um array <code>const tarefas</code> com pelo menos 4 strings<br>
                2. Mostre no <code>#contador</code> o texto: <strong>Total: X tarefas</strong> (onde X é o length do array)`,
                codigoInicial: `<p id="contador">...</p>

<script>
  // Crie um array 'tarefas' com 4 ou mais itens
  // Mostre o total no parágrafo
</script>`,
                xp: 50,
                dica: `<code>const tarefas = ['estudar', 'praticar', 'revisar', 'criar projeto'];<br>const el = document.querySelector('#contador');<br>el.innerText = 'Total: ' + tarefas.length + ' tarefas';</code>`,
                validar: (codigo, iframeDoc) => {
                    const el = iframeDoc.querySelector('#contador');
                    if (!el) return false;
                    const txt = el.textContent.toLowerCase();
                    return txt.includes('total') && txt.includes('tarefas');
                }
            }
        ]
    },

    {
        id: "js_funcoes",
        title: "Módulo 12: Funções e Escopo",
        description: "Organize seu código em blocos reutilizáveis e entenda como as variáveis se enxergam.",
        aula: {
            titulo: "Funções, Arrow Functions e Escopo",
            conteudo: `
                <h2>O que é uma Função?</h2>
                <p>Uma função é um <strong>bloco de código reutilizável</strong> com um nome. Em vez de repetir o mesmo código em vários lugares, você escreve uma vez e chama quando precisar.</p>
                <pre><code>// Declaração de função
function saudar(nome) {
    return "Olá, " + nome + "!";
}

// Chamando a função
const mensagem = saudar("Ana"); // "Olá, Ana!"
console.log(mensagem);</code></pre>

                <h2>Parâmetros e Retorno</h2>
                <pre><code>function calcularArea(largura, altura) {
    const area = largura * altura;
    return area; // o return envia o resultado de volta
}

const area = calcularArea(5, 3); // 15
console.log(area); // 15</code></pre>
                <p>Sem <code>return</code>, a função retorna <code>undefined</code>.</p>

                <h2>Arrow Functions — Sintaxe Moderna</h2>
                <pre><code>// Função tradicional
function dobrar(n) { return n * 2; }

// Arrow function equivalente
const dobrar = (n) => n * 2;

// Se houver apenas um parâmetro, parênteses são opcionais
const dobrar = n => n * 2;

// Com múltiplas linhas, use chaves e return explícito
const calcular = (a, b) => {
    const resultado = a + b;
    return resultado;
};</code></pre>

                <h2>Escopo — Onde as Variáveis Vivem</h2>
                <pre><code>const global = "sou global"; // acessível em todo lugar

function minhaFuncao() {
    const local = "sou local"; // só acessível DENTRO da função
    console.log(global); // funciona ✅
    console.log(local);  // funciona ✅
}

console.log(global); // funciona ✅
console.log(local);  // ERRO! ❌ local não existe aqui fora</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Calculadora de IMC.</strong><br>Crie uma função que calcule e exiba o IMC:<br><br>
                1. Declare <code>function calcularIMC(peso, altura)</code><br>
                2. Calcule: <code>peso / (altura * altura)</code> e retorne o resultado com <code>.toFixed(1)</code><br>
                3. Mostre no <code>#resultado</code>: <strong>IMC: X</strong>`,
                codigoInicial: `<p id="resultado">...</p>

<script>
  // 1. Crie a função calcularIMC(peso, altura) que retorna o IMC

  // 2. Chame a função com peso=70 e altura=1.75
  // 3. Exiba o resultado no #resultado

</script>`,
                xp: 65,
                dica: `<code>function calcularIMC(peso, altura) {<br>&nbsp;&nbsp;return (peso / (altura * altura)).toFixed(1);<br>}<br>const imc = calcularIMC(70, 1.75);<br>document.querySelector('#resultado').innerText = 'IMC: ' + imc;</code>`,
                validar: (codigo, iframeDoc) => {
                    const el = iframeDoc.querySelector('#resultado');
                    return el && el.textContent.toLowerCase().includes('imc:') && /\d+[.,]\d+/.test(el.textContent);
                }
            },
            {
                instrucao: `<strong>Missão 2: Arrow Function de Saudação.</strong><br>Escreva o mesmo programa usando arrow function:<br><br>
                1. Crie: <code>const saudar = nome => "Olá, " + nome + "!"</code><br>
                2. Chame com o nome <strong>Coder</strong> e mostre o resultado no <code>#msg</code>`,
                codigoInicial: `<p id="msg">...</p>

<script>
  // Crie a arrow function 'saudar' e chame com "Coder"

</script>`,
                xp: 50,
                dica: `<code>const saudar = nome => "Olá, " + nome + "!";<br>document.querySelector('#msg').innerText = saudar("Coder");</code>`,
                validar: (codigo, iframeDoc) => {
                    const el = iframeDoc.querySelector('#msg');
                    return el && el.textContent.toLowerCase().includes('olá') && el.textContent.toLowerCase().includes('coder');
                }
            }
        ]
    },

    {
        id: "js_dom_avancado",
        title: "Módulo 13: Eventos e DOM Avançado",
        description: "Crie, remova e manipule elementos dinamicamente. Domine classList e localStorage.",
        aula: {
            titulo: "DOM Avançado: Criar, Modificar e Persistir",
            conteudo: `
                <h2>Criando Elementos Dinamicamente</h2>
                <pre><code>// Cria um novo elemento
const novoItem = document.createElement('li');
novoItem.textContent = "Item novo";
novoItem.className = "item-lista";

// Adiciona ao DOM
const lista = document.querySelector('ul');
lista.appendChild(novoItem);

// Remove um elemento
novoItem.remove();</code></pre>

                <h2>classList — Gerenciando Classes CSS</h2>
                <p>Manipular classes é a forma mais elegante de mudar o visual de elementos:</p>
                <pre><code>const caixa = document.querySelector('.caixa');

caixa.classList.add('ativo');        // adiciona classe
caixa.classList.remove('ativo');     // remove classe
caixa.classList.toggle('ativo');     // adiciona se não tem, remove se tem
caixa.classList.contains('ativo');   // true/false — verifica</code></pre>

                <h2>Lendo Valores de Input</h2>
                <pre><code>const campo = document.querySelector('#meu-input');
const valor = campo.value; // lê o que o usuário digitou</code></pre>

                <h2>localStorage — Salvando Dados no Navegador</h2>
                <p>O localStorage guarda dados que <strong>persistem mesmo após fechar o navegador</strong>. Ideal para preferências do usuário, rascunhos, carrinho de compras.</p>
                <pre><code>// Salvar
localStorage.setItem('tema', 'escuro');
localStorage.setItem('usuario', JSON.stringify({ nome: 'Ana', xp: 100 }));

// Ler
const tema = localStorage.getItem('tema'); // "escuro"
const usuario = JSON.parse(localStorage.getItem('usuario'));

// Remover
localStorage.removeItem('tema');
localStorage.clear(); // limpa tudo</code></pre>
                <p>⚠️ O localStorage só guarda strings. Para salvar objetos e arrays, use <code>JSON.stringify()</code> ao salvar e <code>JSON.parse()</code> ao ler.</p>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Adicionando Itens Dinamicamente.</strong><br>Ao clicar no botão, pegue o texto do input e adicione um novo <code>&lt;li&gt;</code> na lista.<br><br>
                1. Ao clicar no <code>#btn-add</code>, leia o <code>.value</code> do <code>#campo</code><br>
                2. Crie um <code>&lt;li&gt;</code> com esse texto<br>
                3. Adicione com <code>appendChild</code> no <code>#lista</code>`,
                codigoInicial: `<input id="campo" type="text" placeholder="Digite um item" style="padding:8px;margin-right:8px">
<button id="btn-add" style="padding:8px 16px">Adicionar</button>
<ul id="lista"></ul>

<script>
  const btn = document.querySelector('#btn-add');
  const campo = document.querySelector('#campo');
  const lista = document.querySelector('#lista');

  btn.addEventListener('click', function() {
    // 1. Leia o valor do campo
    // 2. Crie um <li> com esse valor
    // 3. Adicione na lista
  });
</script>`,
                xp: 70,
                dica: `<code>const texto = campo.value;<br>const li = document.createElement('li');<br>li.textContent = texto;<br>lista.appendChild(li);<br>campo.value = ''; // limpa o campo</code>`,
                validar: (codigo, iframeDoc) => {
                    const campo = iframeDoc.querySelector('#campo');
                    const btn = iframeDoc.querySelector('#btn-add');
                    const lista = iframeDoc.querySelector('#lista');
                    if (!campo || !btn || !lista) return false;
                    campo.value = 'Teste';
                    btn.click();
                    return lista.querySelectorAll('li').length > 0;
                }
            },
            {
                instrucao: `<strong>Missão 2: Toggle de Tema.</strong><br>Ao clicar no botão, alterne a classe <code>dark</code> no <code>&lt;body&gt;</code> usando <code>classList.toggle</code>.<br><br>
                O CSS já está pronto com os estilos de tema claro e escuro.`,
                codigoInicial: `<style>
  body { background: #fff; color: #111; transition: 0.3s; font-family: sans-serif; padding: 20px; }
  body.dark { background: #111; color: #eee; }
  button { padding: 10px 20px; cursor: pointer; border-radius: 6px; border: none; font-size: 16px; }
</style>

<p>Clique para alternar o tema da página</p>
<button id="toggle-tema">Alternar Tema</button>

<script>
  const btn = document.querySelector('#toggle-tema');

  btn.addEventListener('click', function() {
    // Use classList.toggle para adicionar/remover a classe 'dark' do body
  });
</script>`,
                xp: 55,
                dica: `Dentro do evento de clique:<br><code>document.body.classList.toggle('dark');</code>`,
                validar: (codigo, iframeDoc) => {
                    const btn = iframeDoc.querySelector('#toggle-tema');
                    if (!btn) return false;
                    btn.click();
                    return iframeDoc.body.classList.contains('dark');
                }
            }
        ]
    },

// ╔══════════════════════════════════════════╗
// ║  FASE 4 — PROJETOS PRÁTICOS            ║
// ╚══════════════════════════════════════════╝

    {
        id: "projeto_landing",
        title: "Módulo 14: Projeto — Landing Page",
        description: "Construa uma landing page completa combinando HTML semântico, Flexbox e CSS moderno.",
        aula: {
            titulo: "Construindo uma Landing Page Profissional",
            conteudo: `
                <h2>O que é uma Landing Page?</h2>
                <p>Uma landing page é uma página com <strong>objetivo único</strong>: converter visitantes em leads, usuários ou compradores. É a primeira coisa que muitas pessoas veem sobre um produto, então precisa causar boa impressão em segundos.</p>

                <h2>Estrutura Típica de uma Landing Page</h2>
                <pre><code>&lt;header&gt;  → Logo + navegação
&lt;section class="hero"&gt;    → Título principal + CTA
&lt;section class="features"&gt; → Diferenciais/benefícios
&lt;section class="cta"&gt;     → Chamada final para ação
&lt;footer&gt;  → Links e copyright</code></pre>

                <h2>A Seção Hero — A Mais Importante</h2>
                <p>O "hero" é a primeira seção visível. Ela precisa responder em 5 segundos: <em>"O que é isso? Por que eu deveria me importar? O que faço agora?"</em></p>
                <pre><code>.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
}</code></pre>

                <h2>Cards de Features com Grid</h2>
                <pre><code>.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 80px 5%;
}
.feature-card {
  background: #1a1a2e;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #2a2a4a;
  text-align: center;
}</code></pre>

                <h2>Dicas de Design</h2>
                <ul>
                    <li>Use apenas 2-3 cores principais. Consistência transmite profissionalismo.</li>
                    <li>O CTA (Call to Action) deve ser o elemento mais destacado visualmente.</li>
                    <li>Use espaçamento generoso — elementos "apertados" parecem amadores.</li>
                    <li>Uma fonte para títulos, uma para corpo. Nunca misture mais de 2 famílias.</li>
                </ul>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: O Hero.</strong><br>Crie a seção hero de uma landing page com:<br><br>
                1. Um <code>&lt;header&gt;</code> com um <code>&lt;h1&gt;</code> contendo o nome do produto<br>
                2. Uma <code>&lt;section class="hero"&gt;</code> com:<br>
                &nbsp;&nbsp;- Um <code>&lt;h2&gt;</code> com qualquer slogan<br>
                &nbsp;&nbsp;- Um <code>&lt;p&gt;</code> com descrição<br>
                &nbsp;&nbsp;- Um <code>&lt;button class="cta"&gt;</code> com texto <strong>Começar Agora</strong><br>
                3. Estilize o <code>.hero</code> com <code>display:flex</code>, <code>flex-direction:column</code>, <code>align-items:center</code>`,
                codigoInicial: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: sans-serif; background: #0a0a0a; color: #eee; }
  header { padding: 20px 40px; background: #111; border-bottom: 1px solid #222; }
  .hero {
    min-height: 60vh;
    padding: 60px 20px;
    text-align: center;
    /* Adicione display flex e alinhamentos aqui: */

  }
  .hero h2 { font-size: 2.5rem; margin-bottom: 16px; }
  .hero p { color: #aaa; margin-bottom: 32px; max-width: 500px; }
  .cta {
    background: #D4AF37;
    color: #0a0a0a;
    border: none;
    padding: 16px 36px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
  }
</style>

<!-- Monte sua estrutura semântica aqui: -->
`,
                xp: 80,
                dica: `<code>&lt;header&gt;&lt;h1&gt;MeuApp&lt;/h1&gt;&lt;/header&gt;<br>&lt;section class="hero"&gt;<br>&nbsp;&nbsp;&lt;h2&gt;Slogan aqui&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;p&gt;Descrição&lt;/p&gt;<br>&nbsp;&nbsp;&lt;button class="cta"&gt;Começar Agora&lt;/button&gt;<br>&lt;/section&gt;</code><br><br>E no CSS do <code>.hero</code>:<br><code>display: flex; flex-direction: column; align-items: center;</code>`,
                validar: (codigo, iframeDoc) => {
                    const header = iframeDoc.querySelector('header');
                    const hero = iframeDoc.querySelector('.hero');
                    const btn = iframeDoc.querySelector('.cta');
                    if (!header || !hero || !btn) return false;
                    const iw = iframeDoc.defaultView;
                    const s = iw.getComputedStyle(hero);
                    return s.display === 'flex' && btn.textContent.toLowerCase().includes('come');
                }
            },
            {
                instrucao: `<strong>Missão 2: Cards de Features.</strong><br>Crie 3 cards em um grid de 3 colunas.<br><br>
                1. Um <code>&lt;section class="features"&gt;</code> com <code>display:grid</code> e <code>grid-template-columns: repeat(3, 1fr)</code><br>
                2. 3 <code>&lt;div class="card"&gt;</code> cada um com um <code>&lt;h3&gt;</code> e um <code>&lt;p&gt;</code>`,
                codigoInicial: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: sans-serif; background: #0a0a0a; color: #eee; padding: 40px; }
  .features {
    /* Monte o grid aqui: */

    gap: 24px;
  }
  .card {
    background: #141414;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 28px;
  }
  .card h3 { color: #D4AF37; margin-bottom: 12px; }
  .card p { color: #888; line-height: 1.6; }
</style>

<!-- Crie a section.features com 3 .card aqui: -->
`,
                xp: 70,
                dica: `<code>.features { display: grid; grid-template-columns: repeat(3, 1fr); }</code><br><br>E a estrutura:<br><code>&lt;section class="features"&gt;<br>&nbsp;&nbsp;&lt;div class="card"&gt;&lt;h3&gt;Título&lt;/h3&gt;&lt;p&gt;Texto&lt;/p&gt;&lt;/div&gt;<br>&nbsp;&nbsp;... (3 cards)<br>&lt;/section&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const features = iframeDoc.querySelector('.features');
                    const cards = iframeDoc.querySelectorAll('.card');
                    if (!features || cards.length < 3) return false;
                    const iw = iframeDoc.defaultView;
                    const s = iw.getComputedStyle(features);
                    return s.display === 'grid';
                }
            }
        ]
    },

    {
        id: "projeto_portfolio",
        title: "Módulo 15: Projeto — Portfólio",
        description: "Construa seu portfólio pessoal com seção de habilidades, projetos e contato.",
        aula: {
            titulo: "Portfólio Pessoal: Sua Vitrine para o Mercado",
            conteudo: `
                <h2>Por que ter um Portfólio?</h2>
                <p>O portfólio é a prova tangível do seu trabalho. Qualquer desenvolvedor pode dizer que sabe HTML e CSS — mas mostrar um portfólio bem feito é o que convence recrutadores e clientes.</p>

                <h2>Estrutura do Portfólio</h2>
                <pre><code>&lt;!-- Seção 1: Apresentação --&gt;
&lt;section id="sobre"&gt;
  &lt;img src="foto.jpg" alt="Minha foto"&gt;
  &lt;h1&gt;Seu Nome&lt;/h1&gt;
  &lt;p&gt;Desenvolvedor Front-End&lt;/p&gt;
&lt;/section&gt;

&lt;!-- Seção 2: Habilidades --&gt;
&lt;section id="habilidades"&gt;
  &lt;div class="skill-tag"&gt;HTML&lt;/div&gt;
  &lt;div class="skill-tag"&gt;CSS&lt;/div&gt;
&lt;/section&gt;

&lt;!-- Seção 3: Projetos --&gt;
&lt;section id="projetos"&gt;
  &lt;div class="projeto-card"&gt;...&lt;/div&gt;
&lt;/section&gt;

&lt;!-- Seção 4: Contato --&gt;
&lt;section id="contato"&gt;
  &lt;form&gt;...&lt;/form&gt;
&lt;/section&gt;</code></pre>

                <h2>Tags de Habilidades (Skill Tags)</h2>
                <pre><code>.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.skill-tag {
  background: rgba(212,175,55,0.1);
  border: 1px solid #D4AF37;
  color: #D4AF37;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
}</code></pre>

                <h2>Cards de Projetos</h2>
                <pre><code>.projeto-card {
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.projeto-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(212,175,55,0.15);
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Seção de Apresentação.</strong><br>Crie a seção de apresentação do portfólio:<br><br>
                1. Uma <code>&lt;section id="sobre"&gt;</code> com Flexbox centralizado<br>
                2. Um <code>&lt;h1&gt;</code> com seu nome (ou qualquer nome)<br>
                3. Um <code>&lt;p&gt;</code> com seu cargo<br>
                4. Tags de habilidades: 3 <code>&lt;span class="skill"&gt;</code> com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JS</strong>`,
                codigoInicial: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: sans-serif; background: #0a0a0a; color: #eee; }
  #sobre {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
    gap: 16px;
  }
  #sobre h1 { font-size: 3rem; }
  #sobre p { color: #aaa; font-size: 1.2rem; }
  .skills { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
  .skill {
    background: rgba(212,175,55,0.1);
    border: 1px solid #D4AF37;
    color: #D4AF37;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.9rem;
  }
</style>

<!-- Crie a section#sobre aqui: -->
`,
                xp: 70,
                dica: `<code>&lt;section id="sobre"&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Meu Nome&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;p&gt;Desenvolvedor Front-End&lt;/p&gt;<br>&nbsp;&nbsp;&lt;div class="skills"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="skill"&gt;HTML&lt;/span&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="skill"&gt;CSS&lt;/span&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="skill"&gt;JS&lt;/span&gt;<br>&nbsp;&nbsp;&lt;/div&gt;<br>&lt;/section&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const sobre = iframeDoc.querySelector('#sobre');
                    const h1 = iframeDoc.querySelector('#sobre h1');
                    const skills = iframeDoc.querySelectorAll('.skill');
                    return sobre && h1 && h1.textContent.trim().length > 0 && skills.length >= 3;
                }
            },
            {
                instrucao: `<strong>Missão 2: Grid de Projetos.</strong><br>Crie uma grade de 2 cards de projeto:<br><br>
                1. Uma <code>&lt;section id="projetos"&gt;</code> com <code>display:grid</code> e <code>grid-template-columns: repeat(2, 1fr)</code><br>
                2. 2 <code>&lt;div class="projeto-card"&gt;</code> com um <code>&lt;h3&gt;</code> (nome do projeto) e <code>&lt;p&gt;</code> (descrição) cada`,
                codigoInicial: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: sans-serif; background: #0a0a0a; color: #eee; padding: 40px; }
  #projetos {
    /* Monte o grid aqui */

    gap: 24px;
  }
  .projeto-card {
    background: #141414;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 28px;
    transition: transform 0.3s;
  }
  .projeto-card:hover { transform: translateY(-4px); }
  .projeto-card h3 { color: #D4AF37; margin-bottom: 12px; }
  .projeto-card p { color: #888; }
</style>

<!-- Crie a section#projetos com 2 cards aqui: -->
`,
                xp: 65,
                dica: `<code>#projetos { display: grid; grid-template-columns: repeat(2, 1fr); }</code><br><br>E a estrutura HTML:<br><code>&lt;section id="projetos"&gt;<br>&nbsp;&nbsp;&lt;div class="projeto-card"&gt;&lt;h3&gt;Projeto 1&lt;/h3&gt;&lt;p&gt;Desc.&lt;/p&gt;&lt;/div&gt;<br>&nbsp;&nbsp;&lt;div class="projeto-card"&gt;&lt;h3&gt;Projeto 2&lt;/h3&gt;&lt;p&gt;Desc.&lt;/p&gt;&lt;/div&gt;<br>&lt;/section&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const sec = iframeDoc.querySelector('#projetos');
                    const cards = iframeDoc.querySelectorAll('.projeto-card');
                    if (!sec || cards.length < 2) return false;
                    const iw = iframeDoc.defaultView;
                    return iw.getComputedStyle(sec).display === 'grid';
                }
            }
        ]
    },

    {
        id: "projeto_todo",
        title: "Módulo 16: Projeto — To-Do List",
        description: "Construa uma lista de tarefas completa com adicionar, marcar como feita e remover itens.",
        aula: {
            titulo: "Projeto To-Do List: Tudo que Aprendemos, Junto",
            conteudo: `
                <h2>O Projeto</h2>
                <p>A to-do list é o projeto clássico de JavaScript porque usa praticamente tudo: manipulação de DOM, eventos, arrays, funções e condicionais. Ao terminar, você terá uma aplicação real e funcional.</p>

                <h2>Funcionalidades que vamos construir</h2>
                <ul>
                    <li>Digitar uma tarefa e adicionar ao clicar (ou pressionar Enter)</li>
                    <li>Clicar na tarefa para marcá-la como concluída</li>
                    <li>Botão de deletar em cada tarefa</li>
                    <li>Contador de tarefas pendentes</li>
                </ul>

                <h2>Estrutura HTML Base</h2>
                <pre><code>&lt;div class="app"&gt;
  &lt;h1&gt;Minhas Tarefas&lt;/h1&gt;
  &lt;div class="input-area"&gt;
    &lt;input id="input-tarefa" type="text" placeholder="Nova tarefa..."&gt;
    &lt;button id="btn-add"&gt;+&lt;/button&gt;
  &lt;/div&gt;
  &lt;ul id="lista-tarefas"&gt;&lt;/ul&gt;
  &lt;p id="contador"&gt;&lt;/p&gt;
&lt;/div&gt;</code></pre>

                <h2>A Função de Adicionar Tarefa</h2>
                <pre><code>function adicionarTarefa(texto) {
  const li = document.createElement('li');
  li.className = 'tarefa';

  li.innerHTML =
    '&lt;span class="texto"&gt;' + texto + '&lt;/span&gt;' +
    '&lt;button class="btn-del"&gt;✕&lt;/button&gt;';

  // Toggle de concluído ao clicar no texto
  li.querySelector('.texto').addEventListener('click', () => {
    li.classList.toggle('concluida');
    atualizarContador();
  });

  // Remover ao clicar no botão
  li.querySelector('.btn-del').addEventListener('click', () => {
    li.remove();
    atualizarContador();
  });

  document.querySelector('#lista-tarefas').appendChild(li);
  atualizarContador();
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Adicionar Tarefas.</strong><br>Implemente a função para adicionar tarefas ao clicar no botão:<br><br>
                1. Ao clicar em <code>#btn-add</code>, leia o valor do <code>#input-task</code><br>
                2. Se o valor não estiver vazio, crie um <code>&lt;li&gt;</code> com esse texto<br>
                3. Adicione na <code>#lista</code> e limpe o input`,
                codigoInicial: `<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:sans-serif; background:#0a0a0a; color:#eee; padding:30px; max-width:500px; }
  h1 { color:#D4AF37; margin-bottom:20px; }
  .input-row { display:flex; gap:8px; margin-bottom:20px; }
  #input-task { flex:1; padding:10px 14px; background:#1a1a1a; border:1px solid #333; border-radius:6px; color:#eee; font-size:1rem; }
  #btn-add { padding:10px 16px; background:#D4AF37; border:none; border-radius:6px; font-size:1.2rem; font-weight:bold; cursor:pointer; color:#111; }
  #lista { list-style:none; display:flex; flex-direction:column; gap:8px; }
  #lista li { background:#141414; padding:12px 16px; border-radius:8px; border:1px solid #2a2a2a; }
</style>

<h1>To-Do List</h1>
<div class="input-row">
  <input id="input-task" type="text" placeholder="Nova tarefa...">
  <button id="btn-add">+</button>
</div>
<ul id="lista"></ul>

<script>
  const btn = document.querySelector('#btn-add');
  const input = document.querySelector('#input-task');
  const lista = document.querySelector('#lista');

  btn.addEventListener('click', function() {
    // Implemente aqui: ler o valor, criar li, adicionar na lista

  });
</script>`,
                xp: 75,
                dica: `<code>const texto = input.value.trim();<br>if (texto !== '') {<br>&nbsp;&nbsp;const li = document.createElement('li');<br>&nbsp;&nbsp;li.textContent = texto;<br>&nbsp;&nbsp;lista.appendChild(li);<br>&nbsp;&nbsp;input.value = '';<br>}</code>`,
                validar: (codigo, iframeDoc) => {
                    const input = iframeDoc.querySelector('#input-task');
                    const btn = iframeDoc.querySelector('#btn-add');
                    const lista = iframeDoc.querySelector('#lista');
                    if (!input || !btn || !lista) return false;
                    input.value = 'Tarefa teste';
                    btn.click();
                    return lista.querySelectorAll('li').length > 0;
                }
            },
            {
                instrucao: `<strong>Missão 2: Riscar Tarefa.</strong><br>Ao clicar em um item da lista, adicione a classe <code>feito</code> para riscá-lo.<br><br>
                No evento de clique do botão Adicionar, após criar o <code>&lt;li&gt;</code>, adicione um <code>addEventListener('click')</code> nele que faça <code>classList.toggle('feito')</code>`,
                codigoInicial: `<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:sans-serif; background:#0a0a0a; color:#eee; padding:30px; max-width:500px; }
  h1 { color:#D4AF37; margin-bottom:20px; }
  .input-row { display:flex; gap:8px; margin-bottom:20px; }
  #input-task { flex:1; padding:10px 14px; background:#1a1a1a; border:1px solid #333; border-radius:6px; color:#eee; font-size:1rem; }
  #btn-add { padding:10px 16px; background:#D4AF37; border:none; border-radius:6px; font-size:1.2rem; font-weight:bold; cursor:pointer; color:#111; }
  #lista { list-style:none; display:flex; flex-direction:column; gap:8px; }
  #lista li { background:#141414; padding:12px 16px; border-radius:8px; border:1px solid #2a2a2a; cursor:pointer; transition:0.2s; }
  #lista li.feito { text-decoration:line-through; opacity:0.4; }
</style>

<h1>To-Do List</h1>
<div class="input-row">
  <input id="input-task" type="text" placeholder="Nova tarefa...">
  <button id="btn-add">+</button>
</div>
<ul id="lista"></ul>

<script>
  const btn = document.querySelector('#btn-add');
  const input = document.querySelector('#input-task');
  const lista = document.querySelector('#lista');

  btn.addEventListener('click', function() {
    const texto = input.value.trim();
    if (texto !== '') {
      const li = document.createElement('li');
      li.textContent = texto;
      // Adicione o evento de clique aqui para toggle da classe 'feito':

      lista.appendChild(li);
      input.value = '';
    }
  });
</script>`,
                xp: 70,
                dica: `Após criar o <code>li</code>:<br><code>li.addEventListener('click', function() {<br>&nbsp;&nbsp;li.classList.toggle('feito');<br>});</code>`,
                validar: (codigo, iframeDoc) => {
                    const input = iframeDoc.querySelector('#input-task');
                    const btn = iframeDoc.querySelector('#btn-add');
                    const lista = iframeDoc.querySelector('#lista');
                    if (!input || !btn || !lista) return false;
                    input.value = 'Tarefa click test';
                    btn.click();
                    const li = lista.querySelector('li');
                    if (!li) return false;
                    li.click();
                    return li.classList.contains('feito');
                }
            }
        ]
    },

    {
        id: "projeto_quiz",
        title: "Módulo 17: Projeto — Quiz Interativo",
        description: "Crie um quiz com perguntas, pontuação em tempo real e tela de resultado final.",
        aula: {
            titulo: "Quiz Interativo: Lógica e Interface Juntas",
            conteudo: `
                <h2>Estrutura de Dados do Quiz</h2>
                <p>Um quiz é basicamente um array de objetos, cada um representando uma pergunta:</p>
                <pre><code>const perguntas = [
  {
    pergunta: "O que significa HTML?",
    opcoes: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText and links"
    ],
    correta: 0  // índice da resposta correta
  },
  {
    pergunta: "Qual propriedade centraliza com Flexbox?",
    opcoes: ["text-align", "justify-content", "margin"],
    correta: 1
  }
];</code></pre>

                <h2>Renderizando as Perguntas</h2>
                <pre><code>let questaoAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
  const q = perguntas[questaoAtual];

  document.querySelector('#pergunta').textContent = q.pergunta;

  const opcoesEl = document.querySelector('#opcoes');
  opcoesEl.innerHTML = '';

  q.opcoes.forEach((opcao, index) => {
    const btn = document.createElement('button');
    btn.textContent = opcao;
    btn.addEventListener('click', () => verificarResposta(index));
    opcoesEl.appendChild(btn);
  });
}</code></pre>

                <h2>Verificando a Resposta</h2>
                <pre><code>function verificarResposta(indexEscolhido) {
  const correta = perguntas[questaoAtual].correta;

  if (indexEscolhido === correta) {
    pontuacao++;
  }

  questaoAtual++;

  if (questaoAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.querySelector('#quiz').innerHTML =
    '&lt;h2&gt;Você fez ' + pontuacao + ' de ' + perguntas.length + '!&lt;/h2&gt;';
}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Perguntas e Opções.</strong><br>Monte a estrutura de dados do quiz e renderize a primeira pergunta:<br><br>
                1. Crie um array <code>perguntas</code> com pelo menos <strong>2 objetos</strong>, cada um com <code>pergunta</code>, <code>opcoes</code> (array de 3 strings) e <code>correta</code> (índice 0, 1 ou 2)<br>
                2. Crie a função <code>mostrarPergunta()</code> que exibe <code>perguntas[0].pergunta</code> no <code>#pergunta</code><br>
                3. Chame a função`,
                codigoInicial: `<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:sans-serif; background:#0a0a0a; color:#eee; padding:30px; max-width:600px; }
  #pergunta { font-size:1.3rem; color:#D4AF37; margin-bottom:24px; line-height:1.5; }
  #opcoes { display:flex; flex-direction:column; gap:10px; }
  #opcoes button { background:#1a1a1a; border:1px solid #333; color:#eee; padding:12px 20px; border-radius:8px; cursor:pointer; font-size:1rem; text-align:left; transition:0.2s; }
  #opcoes button:hover { border-color:#D4AF37; color:#D4AF37; }
</style>

<p id="pergunta">...</p>
<div id="opcoes"></div>

<script>
  // 1. Crie o array 'perguntas' com 2 objetos

  // 2. Crie e chame a função mostrarPergunta()

</script>`,
                xp: 80,
                dica: `<code>const perguntas = [<br>&nbsp;&nbsp;{ pergunta: "O que é HTML?", opcoes: ["Linguagem", "Framework", "Banco"], correta: 0 },<br>&nbsp;&nbsp;{ pergunta: "CSS significa?", opcoes: ["Code", "Cascading Style Sheets", "Core"], correta: 1 }<br>];<br>function mostrarPergunta() {<br>&nbsp;&nbsp;document.querySelector('#pergunta').textContent = perguntas[0].pergunta;<br>}<br>mostrarPergunta();</code>`,
                validar: (codigo, iframeDoc) => {
                    const p = iframeDoc.querySelector('#pergunta');
                    return p && p.textContent.trim().length > 5 && p.textContent !== '...';
                }
            },
            {
                instrucao: `<strong>Missão 2: Quiz Completo.</strong><br>Implemente o quiz com navegação entre perguntas e placar final.<br><br>
                Complete o código para que ao clicar numa opção:<br>
                1. Se for a correta, incremente a pontuação<br>
                2. Avance para a próxima pergunta<br>
                3. Se acabarem as perguntas, mostre o placar no <code>#quiz</code>`,
                codigoInicial: `<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:sans-serif; background:#0a0a0a; color:#eee; padding:30px; max-width:600px; }
  #quiz h2 { color:#D4AF37; font-size:1.5rem; margin-bottom:8px; }
  #contador { color:#888; font-size:0.9rem; margin-bottom:20px; }
  #pergunta { font-size:1.2rem; margin-bottom:20px; line-height:1.5; }
  #opcoes { display:flex; flex-direction:column; gap:10px; }
  #opcoes button { background:#1a1a1a; border:1px solid #333; color:#eee; padding:12px 20px; border-radius:8px; cursor:pointer; font-size:1rem; text-align:left; }
  #opcoes button:hover { border-color:#D4AF37; }
  .resultado { text-align:center; padding:40px 0; }
  .resultado h2 { font-size:2rem; color:#D4AF37; margin-bottom:12px; }
</style>

<div id="quiz">
  <h2 id="contador"></h2>
  <p id="pergunta"></p>
  <div id="opcoes"></div>
</div>

<script>
  const perguntas = [
    { pergunta: "O que é o HTML?", opcoes: ["Linguagem de marcação", "Linguagem de programação", "Banco de dados"], correta: 0 },
    { pergunta: "Qual tag cria um parágrafo?", opcoes: ["<div>", "<span>", "<p>"], correta: 2 },
    { pergunta: "display: flex ativa o...?", opcoes: ["Grid", "Flexbox", "Float"], correta: 1 }
  ];

  let atual = 0;
  let pontos = 0;

  function mostrarPergunta() {
    const q = perguntas[atual];
    document.querySelector('#contador').textContent = \`Questão \${atual + 1} de \${perguntas.length}\`;
    document.querySelector('#pergunta').textContent = q.pergunta;
    const opcoesEl = document.querySelector('#opcoes');
    opcoesEl.innerHTML = '';
    q.opcoes.forEach((op, i) => {
      const btn = document.createElement('button');
      btn.textContent = op;
      btn.addEventListener('click', () => verificar(i));
      opcoesEl.appendChild(btn);
    });
  }

  function verificar(idx) {
    // Complete: verifique se idx === correta, incremente pontos,
    // avance 'atual' e chame mostrarPergunta() ou mostrarResultado()

  }

  function mostrarResultado() {
    document.querySelector('#quiz').innerHTML =
      \`&lt;div class="resultado"&gt;&lt;h2&gt;Fim!&lt;/h2&gt;&lt;p&gt;Você acertou \${pontos} de \${perguntas.length}&lt;/p&gt;&lt;/div&gt;\`;
  }

  mostrarPergunta();
</script>`,
                xp: 100,
                dica: `<code>function verificar(idx) {<br>&nbsp;&nbsp;if (idx === perguntas[atual].correta) pontos++;<br>&nbsp;&nbsp;atual++;<br>&nbsp;&nbsp;if (atual &lt; perguntas.length) {<br>&nbsp;&nbsp;&nbsp;&nbsp;mostrarPergunta();<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;mostrarResultado();<br>&nbsp;&nbsp;}<br>}</code>`,
                validar: (codigo, iframeDoc) => {
                    const botoes = iframeDoc.querySelectorAll('#opcoes button');
                    if (botoes.length === 0) return false;
                    const total = 3;
                    for (let i = 0; i < total; i++) {
                        const bts = iframeDoc.querySelectorAll('#opcoes button');
                        if (bts.length > 0) bts[0].click();
                    }
                    const quiz = iframeDoc.querySelector('#quiz');
                    return quiz && (quiz.textContent.toLowerCase().includes('fim') || quiz.textContent.toLowerCase().includes('acertou') || quiz.textContent.toLowerCase().includes('resultado'));
                }
            }
        ]
    },

// ╔══════════════════════════════════════════╗
// ║  FASE 5 — PROFISSIONAL                  ║
// ╚══════════════════════════════════════════╝

    {
        id: "git_versionamento",
        title: "Módulo 18: Git e Versionamento",
        description: "Aprenda os comandos essenciais do Git para versionar seu código como um profissional.",
        aula: {
            titulo: "Git: O Controle de Versão que Todo Dev Usa",
            conteudo: `
                <h2>O que é o Git e por que é indispensável?</h2>
                <p>Imagine trabalhar semanas num projeto, fazer uma mudança e perceber que quebrou tudo — sem como voltar ao estado anterior. O Git resolve isso: é um sistema que <strong>fotografa o estado do seu código</strong> em cada commit, permitindo voltar a qualquer ponto da história.</p>
                <p>Além disso, o Git permite que múltiplos desenvolvedores trabalhem no mesmo projeto simultaneamente sem sobrescrever o trabalho uns dos outros.</p>

                <h2>Conceitos Fundamentais</h2>
                <ul>
                    <li><strong>Repositório (repo):</strong> A pasta do projeto com todo seu histórico de versões.</li>
                    <li><strong>Commit:</strong> Um "checkpoint" — uma foto do estado do código naquele momento.</li>
                    <li><strong>Branch:</strong> Uma linha de desenvolvimento paralela. A principal se chama <code>main</code>.</li>
                    <li><strong>Remote:</strong> A cópia do repositório num servidor (GitHub, GitLab).</li>
                </ul>

                <h2>Fluxo Diário com Git</h2>
                <pre><code># 1. Iniciar um repositório (uma vez por projeto)
git init

# 2. Ver o status dos arquivos
git status

# 3. Adicionar arquivos para o próximo commit
git add .                    # adiciona tudo
git add index.html style.css # adiciona arquivos específicos

# 4. Criar o commit com uma mensagem descritiva
git commit -m "feat: adiciona seção hero da landing page"

# 5. Ver o histórico de commits
git log --oneline

# 6. Enviar para o GitHub
git push origin main</code></pre>

                <h2>Comandos de Recuperação</h2>
                <pre><code># Descartar mudanças não commitadas em um arquivo
git checkout -- index.html

# Voltar o repositório inteiro para um commit anterior
git reset --hard abc1234  # onde abc1234 é o hash do commit

# Ver diferenças entre o estado atual e o último commit
git diff</code></pre>

                <h2>Boas Práticas para Mensagens de Commit</h2>
                <pre><code>feat: adiciona formulário de contato
fix: corrige bug no menu mobile
style: ajusta espaçamento da seção hero
docs: atualiza README com instruções de instalação
refactor: extrai função de validação para módulo separado</code></pre>
                <p>Mensagens de commit claras fazem uma diferença enorme quando você (ou seu time) precisa entender o histórico semanas depois.</p>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Identifique os Comandos.</strong><br>Ordene mentalmente as etapas do fluxo Git. Para este exercício, escreva no editor os 3 comandos Git para:<br><br>
                1. Adicionar todos os arquivos<br>
                2. Fazer o commit com a mensagem <strong>"feat: minha primeira versão"</strong><br>
                3. Enviar para o repositório remoto<br><br>
                Escreva um comando por linha, começando com <code>#</code> (comentário) antes de cada um explicando o que faz.`,
                codigoInicial: `<!-- Este módulo é teórico. Escreva os comandos Git abaixo como comentários HTML -->

<!-- Comando 1: Adicionar todos os arquivos -->
<!-- git ??? -->

<!-- Comando 2: Criar o commit -->
<!-- git ??? -->

<!-- Comando 3: Enviar para o GitHub -->
<!-- git ??? -->`,
                xp: 40,
                dica: `<code>&lt;!-- git add . --&gt;</code><br><code>&lt;!-- git commit -m "feat: minha primeira versão" --&gt;</code><br><code>&lt;!-- git push origin main --&gt;</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('git add') && c.includes('git commit') && c.includes('git push');
                }
            },
            {
                instrucao: `<strong>Missão 2: Estrutura de Repositório.</strong><br>Todo repositório Git bem organizado precisa de um arquivo <code>README.md</code>. Crie uma página HTML que simule um README com:<br><br>
                1. Um <code>&lt;h1&gt;</code> com o nome do projeto<br>
                2. Um <code>&lt;h2&gt;</code> com o texto <strong>Como usar</strong><br>
                3. Um <code>&lt;ol&gt;</code> com 3 passos de instalação/uso`,
                codigoInicial: `<!-- Simule um README.md em HTML: -->
`,
                xp: 35,
                dica: `<code>&lt;h1&gt;Meu Projeto&lt;/h1&gt;<br>&lt;h2&gt;Como usar&lt;/h2&gt;<br>&lt;ol&gt;<br>&nbsp;&nbsp;&lt;li&gt;Clone o repositório&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Abra o index.html&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Edite à vontade&lt;/li&gt;<br>&lt;/ol&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const h1 = iframeDoc.querySelector('h1');
                    const h2 = iframeDoc.querySelector('h2');
                    const passos = iframeDoc.querySelectorAll('ol li');
                    return h1 && h2 && h2.textContent.toLowerCase().includes('usar') && passos.length >= 3;
                }
            }
        ]
    },

    {
        id: "acessibilidade_web",
        title: "Módulo 19: Acessibilidade Web",
        description: "Construa sites que funcionam para todos — incluindo pessoas com deficiência visual, motora e cognitiva.",
        aula: {
            titulo: "Acessibilidade: Web para Todos",
            conteudo: `
                <h2>Por que Acessibilidade Importa?</h2>
                <p>Cerca de <strong>15% da população mundial</strong> tem algum tipo de deficiência. Além da questão ética e legal (muitos países têm leis de acessibilidade digital), sites acessíveis têm melhor SEO, melhor experiência para todos os usuários e maior alcance de mercado.</p>

                <h2>ARIA — Accessible Rich Internet Applications</h2>
                <p>Atributos ARIA adicionam significado semântico para leitores de tela quando o HTML puro não é suficiente:</p>
                <pre><code>&lt;!-- Descreve o papel do elemento --&gt;
&lt;div role="navigation"&gt;...&lt;/div&gt;
&lt;div role="main"&gt;...&lt;/div&gt;

&lt;!-- Rótulo acessível (quando não há texto visível) --&gt;
&lt;button aria-label="Fechar modal"&gt;✕&lt;/button&gt;

&lt;!-- Descreve o estado atual --&gt;
&lt;button aria-expanded="false"&gt;Menu&lt;/button&gt;

&lt;!-- Relaciona elementos --&gt;
&lt;p id="descricao"&gt;Senha com mínimo 8 caracteres&lt;/p&gt;
&lt;input aria-describedby="descricao" type="password"&gt;</code></pre>

                <h2>Contraste de Cores</h2>
                <p>A WCAG (Web Content Accessibility Guidelines) define que o contraste entre texto e fundo deve ser de pelo menos <strong>4.5:1</strong> para texto normal. Ferramentas como o Contrast Checker do WebAIM verificam isso.</p>
                <pre><code>/* Bom contraste ✅ */
.btn { background: #D4AF37; color: #000000; }

/* Contraste insuficiente ❌ */
.btn { background: #D4AF37; color: #ffffff; }</code></pre>

                <h2>Navegação por Teclado</h2>
                <p>Usuários com deficiência motora navegam usando apenas o teclado (tecla Tab). Todo elemento interativo precisa ser focável e ter um indicador visual claro de foco:</p>
                <pre><code>/* NUNCA remova o outline sem substituir! */
button:focus { outline: 2px solid #D4AF37; outline-offset: 3px; }
a:focus { outline: 2px solid #D4AF37; }

/* Evite: */
* { outline: none; } /* ❌ quebra acessibilidade por teclado */</code></pre>

                <h2>Textos Alternativos em Imagens</h2>
                <pre><code>&lt;!-- Imagem decorativa: alt vazio --&gt;
&lt;img src="ornamento.png" alt=""&gt;

&lt;!-- Imagem informativa: descreva o conteúdo --&gt;
&lt;img src="grafico-vendas.png" alt="Gráfico de barras mostrando crescimento de 30% nas vendas de 2023 para 2024"&gt;

&lt;!-- Imagem que é um link: descreva o destino --&gt;
&lt;a href="/"&gt;&lt;img src="logo.png" alt="Ir para a página inicial"&gt;&lt;/a&gt;</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: ARIA Labels.</strong><br>Este formulário de busca tem um botão sem texto visível. Torne-o acessível:<br><br>
                1. Adicione <code>aria-label="Buscar"</code> no botão com ícone<br>
                2. Adicione <code>aria-label="Campo de busca"</code> no input<br>
                3. Adicione <code>role="search"</code> no formulário`,
                codigoInicial: `<style>
  body { font-family:sans-serif; background:#0a0a0a; color:#eee; padding:30px; }
  form { display:flex; gap:8px; max-width:400px; }
  input { flex:1; padding:10px 14px; background:#1a1a1a; border:1px solid #333; border-radius:6px; color:#eee; }
  button { padding:10px 16px; background:#D4AF37; border:none; border-radius:6px; cursor:pointer; font-size:1.2rem; }
</style>

<!-- Torne este formulário acessível: -->
<form>
  <input type="text" placeholder="Pesquisar...">
  <button type="submit">🔍</button>
</form>`,
                xp: 45,
                dica: `<code>&lt;form role="search"&gt;<br>&nbsp;&nbsp;&lt;input aria-label="Campo de busca" type="text" placeholder="Pesquisar..."&gt;<br>&nbsp;&nbsp;&lt;button aria-label="Buscar" type="submit"&gt;🔍&lt;/button&gt;<br>&lt;/form&gt;</code>`,
                validar: (codigo, iframeDoc) => {
                    const form = iframeDoc.querySelector('form');
                    const input = iframeDoc.querySelector('input');
                    const btn = iframeDoc.querySelector('button');
                    return form && form.getAttribute('role') === 'search' && input && input.getAttribute('aria-label') && btn && btn.getAttribute('aria-label');
                }
            },
            {
                instrucao: `<strong>Missão 2: Foco Visível.</strong><br>Adicione estilos de foco visíveis para melhorar a navegação por teclado:<br><br>
                1. No CSS, estilize <code>button:focus</code> e <code>a:focus</code> com <code>outline: 2px solid #D4AF37</code> e <code>outline-offset: 3px</code>`,
                codigoInicial: `<style>
  body { font-family:sans-serif; background:#0a0a0a; color:#eee; padding:30px; }
  .nav { display:flex; gap:16px; margin-bottom:24px; }
  a { color:#D4AF37; text-decoration:none; padding:8px 16px; border-radius:6px; }
  button { background:#D4AF37; color:#000; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-size:1rem; }

  /* Adicione os estilos de foco aqui: */

</style>

<nav class="nav">
  <a href="#">Início</a>
  <a href="#">Projetos</a>
  <a href="#">Contato</a>
</nav>
<button>Saiba Mais</button>`,
                xp: 40,
                dica: `<code>button:focus {<br>&nbsp;&nbsp;outline: 2px solid #D4AF37;<br>&nbsp;&nbsp;outline-offset: 3px;<br>}<br>a:focus {<br>&nbsp;&nbsp;outline: 2px solid #D4AF37;<br>&nbsp;&nbsp;outline-offset: 3px;<br>}</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s+/g, ' ').toLowerCase();
                    return c.includes('button:focus') && c.includes('a:focus') && c.includes('outline') && c.includes('#d4af37');
                }
            }
        ]
    },

    {
        id: "seo_boas_praticas",
        title: "Módulo 20: SEO e Boas Práticas",
        description: "Otimize seus sites para o Google, melhore a performance e escreva código limpo e profissional.",
        aula: {
            titulo: "SEO, Performance e Código Profissional",
            conteudo: `
                <h2>O que é SEO?</h2>
                <p>SEO (<em>Search Engine Optimization</em>) é o conjunto de práticas que fazem o Google (e outros buscadores) entenderem e ranquearem melhor o seu site. Um bom SEO técnico começa no HTML.</p>

                <h2>Meta Tags Essenciais</h2>
                <pre><code>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

  &lt;!-- Título: aparece na aba e nos resultados do Google --&gt;
  &lt;title&gt;Produto Incrível | Empresa XYZ&lt;/title&gt;

  &lt;!-- Descrição: aparece no snippet do Google --&gt;
  &lt;meta name="description" content="Descubra o produto que mudará sua vida. Frete grátis, entrega em 24h."&gt;

  &lt;!-- Open Graph: como o link aparece ao compartilhar no WhatsApp/LinkedIn --&gt;
  &lt;meta property="og:title" content="Produto Incrível"&gt;
  &lt;meta property="og:description" content="Descubra o produto que mudará sua vida."&gt;
  &lt;meta property="og:image" content="https://meusite.com/preview.jpg"&gt;
&lt;/head&gt;</code></pre>

                <h2>Hierarquia de Títulos para SEO</h2>
                <pre><code>&lt;!-- ✅ Correto: hierarquia lógica --&gt;
&lt;h1&gt;Título Principal da Página&lt;/h1&gt;
  &lt;h2&gt;Seção Importante&lt;/h2&gt;
    &lt;h3&gt;Subseção&lt;/h3&gt;
  &lt;h2&gt;Outra Seção Importante&lt;/h2&gt;

&lt;!-- ❌ Errado: usar h3 por visual, pulando h2 --&gt;
&lt;h1&gt;Título&lt;/h1&gt;
&lt;h3&gt;Subtítulo (pulou o h2!)&lt;/h3&gt;</code></pre>

                <h2>Performance: Carregamento Rápido</h2>
                <pre><code>&lt;!-- Scripts no final do body (não bloqueiam a renderização) --&gt;
&lt;body&gt;
  ...
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;!-- Ou com defer (carrega em paralelo, executa depois) --&gt;
&lt;script src="script.js" defer&gt;&lt;/script&gt;

&lt;!-- Imagens com lazy loading --&gt;
&lt;img src="foto.jpg" loading="lazy" alt="Descrição"&gt;</code></pre>

                <h2>Boas Práticas de Código Limpo</h2>
                <ul>
                    <li>Use nomes de classes em inglês e com padrão kebab-case: <code>hero-section</code>, <code>card-grid</code></li>
                    <li>Agrupe CSS por componente, não por propriedade</li>
                    <li>Comente seções complexas — você do futuro vai agradecer</li>
                    <li>Use ferramentas como Prettier para formatação automática</li>
                    <li>Valide seu HTML em <code>validator.w3.org</code></li>
                </ul>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Meta Tags Completas.</strong><br>Crie um <code>&lt;head&gt;</code> completo com todas as meta tags essenciais para SEO:<br><br>
                1. <code>&lt;meta charset="UTF-8"&gt;</code><br>
                2. <code>&lt;meta name="viewport"...&gt;</code><br>
                3. <code>&lt;title&gt;</code> com qualquer título<br>
                4. <code>&lt;meta name="description" content="..."&gt;</code>`,
                codigoInicial: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Adicione as 4 meta tags essenciais aqui: -->

</head>
<body>
  <h1>Meu Site Otimizado</h1>
</body>
</html>`,
                xp: 50,
                dica: `<code>&lt;meta charset="UTF-8"&gt;<br>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br>&lt;title&gt;Meu Site | Seu Negócio&lt;/title&gt;<br>&lt;meta name="description" content="Descrição do seu site com até 160 caracteres."&gt;</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('charset="utf-8"') && c.includes('viewport') && c.includes('<title>') && c.includes('name="description"');
                }
            },
            {
                instrucao: `<strong>Missão Final: Página Completa e Semântica.</strong><br>Construa uma página HTML completa que aplique tudo que aprendeu:<br><br>
                1. <code>&lt;head&gt;</code> com charset, viewport e title<br>
                2. <code>&lt;header&gt;</code> com <code>&lt;nav&gt;</code><br>
                3. <code>&lt;main&gt;</code> com um <code>&lt;h1&gt;</code> e um <code>&lt;p&gt;</code><br>
                4. <code>&lt;footer&gt;</code><br>
                5. Um <code>&lt;img&gt;</code> com atributo <code>alt</code> preenchido`,
                codigoInicial: `<!-- Construa a página completa aqui: -->
`,
                xp: 120,
                dica: `Combine tudo: head completo, header+nav, main+h1+p, footer, e pelo menos uma imagem com alt.`,
                validar: (codigo, iframeDoc) => {
                    const header = iframeDoc.querySelector('header');
                    const main = iframeDoc.querySelector('main');
                    const footer = iframeDoc.querySelector('footer');
                    const h1 = iframeDoc.querySelector('h1');
                    const img = iframeDoc.querySelector('img[alt]');
                    const c = codigo.toLowerCase();
                    return header && main && footer && h1 && img && c.includes('charset') && c.includes('viewport') && c.includes('<title>');
                }
            }
        ]
    }

]; // fim do curriculum
