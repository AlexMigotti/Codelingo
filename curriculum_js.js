// curriculum_js.js — Trilha JavaScript Moderno (30 módulos)
// The Luminous Scholar — Versão Corrigida

const curriculumJS = [

// ==================== MÓDULOS 1–10: FUNDAMENTOS ====================

{
    id: "js_variaveis",
    title: "Módulo 1: Variáveis (var, let, const)",
    description: "Entenda as diferenças entre var, let e const e o conceito de escopo.",
    aula: {
        titulo: "Declarando variáveis no ES6+",
        conteudo: `
            <h2>var vs let vs const</h2>
            <ul>
                <li><code>var</code>: escopo de função, pode ser redeclarada (evite usar)</li>
                <li><code>let</code>: escopo de bloco, não pode ser redeclarada no mesmo escopo</li>
                <li><code>const</code>: escopo de bloco, não pode ser reatribuída</li>
            </ul>
            <pre><code>let idade = 25;
idade = 26;  // ok
const PI = 3.14;
PI = 3.1415;  // erro!</code></pre>
        `
    },
    exercicios: [
        {
            instrucao: "Declare uma variável 'nome' com let e atribua seu nome. Depois, declare uma constante 'ano' com o valor 2025.",
            codigoInicial: "// Seu código aqui",
            xp: 25,
            dica: "let nome = 'João';\nconst ano = 2025;",
            validar: (codigo) => {
                return codigo.includes('let nome') && codigo.includes('const ano');
            }
        }
    ]
},

{
    id: "js_template_strings",
    title: "Módulo 2: Template Strings",
    description: "Crie strings multilinha e incorpore variáveis de forma elegante.",
    aula: {
        titulo: "Strings com crases",
        conteudo: "<p>Template strings usam crases (<code>``</code>) e permitem interpolação com <code>${expressao}</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie duas variáveis 'produto' (ex: 'Notebook') e 'preco' (ex: 2499.99). Use template string para exibir 'O produto X custa R$ Y'.",
            codigoInicial: "// Use template string",
            xp: 25,
            dica: "const produto = 'Notebook';\nconst preco = 2499.99;\nconsole.log(`O produto ${produto} custa R$ ${preco}`);",
            validar: (codigo) => {
                return codigo.includes('`') && codigo.includes('${');
            }
        }
    ]
},

{
    id: "js_arrow_functions",
    title: "Módulo 3: Arrow Functions",
    description: "Escreva funções mais curtas e entenda o this lexical.",
    aula: {
        titulo: "Arrow functions",
        conteudo: "<p><code>const soma = (a, b) => a + b;</code> Arrow functions não têm seu próprio <code>this</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Converta a função 'function dobro(n) { return n * 2; }' em uma arrow function.",
            codigoInicial: "// Sua arrow function",
            xp: 25,
            dica: "const dobro = n => n * 2;",
            validar: (codigo) => {
                return codigo.includes('=>') && codigo.includes('dobro');
            }
        }
    ]
},

{
    id: "js_destructuring",
    title: "Módulo 4: Desestruturação",
    description: "Extraia valores de arrays e objetos de forma concisa.",
    aula: {
        titulo: "Destructuring assignment",
        conteudo: "<p><code>const [a, b] = [10, 20];</code> e <code>const { nome, idade } = pessoa;</code></p>"
    },
    exercicios: [
        {
            instrucao: "Dado o objeto '{ nome: 'Ana', cidade: 'SP' }', extraia nome e cidade usando desestruturação.",
            codigoInicial: "// Desestruturação",
            xp: 30,
            dica: "const pessoa = { nome: 'Ana', cidade: 'SP' };\nconst { nome, cidade } = pessoa;",
            validar: (codigo) => {
                return codigo.includes('{ nome, cidade }') || codigo.includes('{nome,cidade}');
            }
        }
    ]
},

{
    id: "js_spread_rest",
    title: "Módulo 5: Spread e Rest",
    description: "Combine arrays e agrupe argumentos com ...",
    aula: {
        titulo: "Spread e Rest operators",
        conteudo: "<p>Spread: <code>[...arr1, ...arr2]</code>. Rest: <code>function soma(...numeros) {}</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma função 'unirArrays' que usa spread para combinar dois arrays.",
            codigoInicial: "// Sua função",
            xp: 30,
            dica: "const unirArrays = (arr1, arr2) => [...arr1, ...arr2];",
            validar: (codigo) => {
                return codigo.includes('...') && codigo.includes('unirArrays');
            }
        }
    ]
},

{
    id: "js_map_filter_reduce",
    title: "Módulo 6: map, filter, reduce",
    description: "Transforme, filtre e reduza arrays com programação funcional.",
    aula: {
        titulo: "Métodos de array",
        conteudo: "<p><code>map()</code> transforma, <code>filter()</code> seleciona, <code>reduce()</code> acumula.</p>"
    },
    exercicios: [
        {
            instrucao: "Dado o array [1,2,3,4,5], use filter para obter apenas os números pares.",
            codigoInicial: "// Seu código",
            xp: 35,
            dica: "const pares = [1,2,3,4,5].filter(n => n % 2 === 0);",
            validar: (codigo) => {
                return codigo.includes('.filter') && codigo.includes('% 2 === 0');
            }
        }
    ]
},

{
    id: "js_classes",
    title: "Módulo 7: Classes ES6",
    description: "Programação orientada a objetos com sintaxe de classe.",
    aula: {
        titulo: "Classes em JavaScript",
        conteudo: "<p><code>class Animal { constructor(nome) { this.nome = nome; } }</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma classe 'Pessoa' com propriedades nome e idade, e um método 'apresentar()' que retorna 'Olá, sou NOME'.",
            codigoInicial: "// Sua classe",
            xp: 40,
            dica: "class Pessoa {\n  constructor(nome, idade) {\n    this.nome = nome;\n    this.idade = idade;\n  }\n  apresentar() {\n    return `Olá, sou ${this.nome}`;\n  }\n}",
            validar: (codigo) => {
                return codigo.includes('class Pessoa') && codigo.includes('apresentar');
            }
        }
    ]
},

{
    id: "js_promises",
    title: "Módulo 8: Promises",
    description: "Trabalhe com operações assíncronas.",
    aula: {
        titulo: "Promises",
        conteudo: "<p><code>new Promise((resolve, reject) => { ... })</code> e métodos <code>then()</code>, <code>catch()</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma Promise que resolve com 'Sucesso!' após 1 segundo.",
            codigoInicial: "// Sua Promise",
            xp: 45,
            dica: "new Promise(resolve => setTimeout(() => resolve('Sucesso!'), 1000));",
            validar: (codigo) => {
                return codigo.includes('new Promise') && codigo.includes('setTimeout');
            }
        }
    ]
},

{
    id: "js_async_await",
    title: "Módulo 9: Async/Await",
    description: "Escreva código assíncrono com sintaxe síncrona.",
    aula: {
        titulo: "Async functions",
        conteudo: "<p><code>async function buscar() { const dados = await fetch(url); }</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma função async 'aguardar' que recebe ms e usa await com setTimeout.",
            codigoInicial: "// Async/await",
            xp: 40,
            dica: "function delay(ms) { return new Promise(r => setTimeout(r, ms)); }\nasync function aguardar(ms) { await delay(ms); console.log('Pronto!'); }",
            validar: (codigo) => {
                return codigo.includes('async') && codigo.includes('await');
            }
        }
    ]
},

{
    id: "js_fetch_api",
    title: "Módulo 10: Fetch API",
    description: "Faça requisições HTTP e manipule respostas JSON.",
    aula: {
        titulo: "Fetch",
        conteudo: "<p><code>fetch('https://api.exemplo.com').then(res => res.json()).then(data => console.log(data));</code></p>"
    },
    exercicios: [
        {
            instrucao: "Use fetch para obter dados da API 'https://jsonplaceholder.typicode.com/posts/1' e exiba o título no console.",
            codigoInicial: "// Fetch",
            xp: 45,
            dica: "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(r => r.json())\n  .then(data => console.log(data.title));",
            validar: (codigo) => {
                return codigo.includes('fetch') && codigo.includes('.json()');
            }
        }
    ]
},

// ==================== MÓDULOS 11–20: INTERMEDIÁRIO ====================

{
    id: "js_localstorage",
    title: "Módulo 11: localStorage",
    description: "Persista dados no navegador.",
    aula: {
        titulo: "Web Storage",
        conteudo: "<p><code>localStorage.setItem('chave', 'valor')</code> e <code>localStorage.getItem('chave')</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Salve o valor 'João' no localStorage com a chave 'usuario'.",
            codigoInicial: "// localStorage",
            xp: 35,
            dica: "localStorage.setItem('usuario', 'João');",
            validar: (codigo) => {
                return codigo.includes('localStorage.setItem');
            }
        }
    ]
},

{
    id: "js_json",
    title: "Módulo 12: JSON",
    description: "Converta objetos para string JSON e vice-versa.",
    aula: {
        titulo: "JSON",
        conteudo: "<p><code>JSON.stringify(obj)</code> e <code>JSON.parse(str)</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Converta o objeto '{nome: 'Ana', idade: 25}' para JSON string e depois volte para objeto.",
            codigoInicial: "// JSON",
            xp: 35,
            dica: "const obj = { nome: 'Ana', idade: 25 };\nconst str = JSON.stringify(obj);\nconst novoObj = JSON.parse(str);",
            validar: (codigo) => {
                return codigo.includes('JSON.stringify') && codigo.includes('JSON.parse');
            }
        }
    ]
},

{
    id: "js_closure",
    title: "Módulo 13: Closures",
    description: "Entenda como funções 'lembram' do ambiente onde foram criadas.",
    aula: {
        titulo: "Closure",
        conteudo: "<p>Uma função interna tem acesso às variáveis da função externa, mesmo após ela retornar.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie uma função 'contador' que retorna uma função que incrementa e retorna um valor a cada chamada.",
            codigoInicial: "// Closure",
            xp: 45,
            dica: "function contador() { let count = 0; return () => ++count; }\nconst c = contador();\nconsole.log(c()); // 1\nconsole.log(c()); // 2",
            validar: (codigo) => {
                return codigo.includes('function contador') && codigo.includes('return');
            }
        }
    ]
},

{
    id: "js_this_bind",
    title: "Módulo 14: this e bind",
    description: "Controle o contexto de execução de funções.",
    aula: {
        titulo: "this e seus métodos",
        conteudo: "<p><code>bind()</code>, <code>call()</code> e <code>apply()</code> controlam o valor de <code>this</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um objeto 'calculadora' com método 'somar' que usa this. Use bind para fixar o this.",
            codigoInicial: "// bind",
            xp: 40,
            dica: "const calc = { valor: 5, somar(a) { return this.valor + a; } };\nconst soma5 = calc.somar.bind(calc);\nconsole.log(soma5(3)); // 8",
            validar: (codigo) => {
                return codigo.includes('.bind(') && codigo.includes('this');
            }
        }
    ]
},

{
    id: "js_modules",
    title: "Módulo 15: Módulos ES6",
    description: "Organize código em arquivos separados com import/export.",
    aula: {
        titulo: "import e export",
        conteudo: "<p><code>export const funcao = () => {};</code> e <code>import { funcao } from './arquivo.js';</code></p>"
    },
    exercicios: [
        {
            instrucao: "Escreva um código que exporta uma função 'soma' e depois a importa (simule em um único arquivo).",
            codigoInicial: "// import/export",
            xp: 40,
            dica: "// modulo.js\nexport const soma = (a, b) => a + b;\n\n// main.js\nimport { soma } from './modulo.js';\nconsole.log(soma(2,3));",
            validar: (codigo) => {
                return codigo.includes('export') && codigo.includes('import');
            }
        }
    ]
},

{
    id: "js_dom_manipulation",
    title: "Módulo 16: Manipulação do DOM",
    description: "Selecione e modifique elementos HTML dinamicamente.",
    aula: {
        titulo: "DOM API",
        conteudo: "<p><code>document.querySelector()</code>, <code>element.innerHTML</code>, <code>element.style</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Selecione um elemento com id 'titulo' e mude seu texto para 'Novo Título'.",
            codigoInicial: "// DOM",
            xp: 35,
            dica: "document.getElementById('titulo').innerText = 'Novo Título';",
            validar: (codigo) => {
                return codigo.includes('getElementById') || codigo.includes('querySelector');
            }
        }
    ]
},

{
    id: "js_eventos",
    title: "Módulo 17: Eventos",
    description: "Responda a cliques, teclado e outros eventos.",
    aula: {
        titulo: "Event listeners",
        conteudo: "<p><code>element.addEventListener('click', () => { ... });</code></p>"
    },
    exercicios: [
        {
            instrucao: "Adicione um evento de clique a um botão que exibe 'Clicou!' no console.",
            codigoInicial: "// Evento",
            xp: 35,
            dica: "const btn = document.querySelector('button');\nbtn.addEventListener('click', () => console.log('Clicou!'));",
            validar: (codigo) => {
                return codigo.includes('addEventListener') && codigo.includes('click');
            }
        }
    ]
},

{
    id: "js_settimeout_interval",
    title: "Módulo 18: setTimeout e setInterval",
    description: "Execute código após um delay ou repetidamente.",
    aula: {
        titulo: "Temporizadores",
        conteudo: "<p><code>setTimeout(() => {}, 1000)</code> e <code>setInterval(() => {}, 1000)</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Use setTimeout para exibir 'Passou 1 segundo' após 1000ms.",
            codigoInicial: "// setTimeout",
            xp: 30,
            dica: "setTimeout(() => console.log('Passou 1 segundo'), 1000);",
            validar: (codigo) => {
                return codigo.includes('setTimeout');
            }
        }
    ]
},

{
    id: "js_errors",
    title: "Módulo 19: Tratamento de Erros",
    description: "Capture exceções com try/catch.",
    aula: {
        titulo: "try/catch/finally",
        conteudo: "<p><code>try { ... } catch (erro) { ... } finally { ... }</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um bloco try/catch que tenta converter 'abc' para número e captura o erro.",
            codigoInicial: "// try/catch",
            xp: 35,
            dica: "try {\n  Number('abc');\n} catch(e) {\n  console.log('Erro capturado');\n}",
            validar: (codigo) => {
                return codigo.includes('try') && codigo.includes('catch');
            }
        }
    ]
},

{
    id: "js_hoisting",
    title: "Módulo 20: Hoisting",
    description: "Entenda como var e function declarations são içadas.",
    aula: {
        titulo: "Hoisting",
        conteudo: "<p>Declarações com <code>var</code> e <code>function</code> são içadas para o topo do escopo.</p>"
    },
    exercicios: [
        {
            instrucao: "Demonstre o hoisting chamando uma função antes de sua declaração.",
            codigoInicial: "// Hoisting",
            xp: 30,
            dica: "saudar();\nfunction saudar() { console.log('Olá!'); }",
            validar: (codigo) => {
                return codigo.includes('function') && codigo.includes('saudar()');
            }
        }
    ]
},

// ==================== MÓDULOS 21–30: AVANÇADO ====================

{
    id: "js_proxy",
    title: "Módulo 21: Proxy",
    description: "Intercepte operações em objetos.",
    aula: {
        titulo: "Proxy API",
        conteudo: "<p><code>new Proxy(alvo, { get(obj, prop) { ... }, set(obj, prop, val) { ... } })</code></p>"
    },
    exercicios: [
        {
            instrucao: "Crie um proxy que impede que valores negativos sejam atribuídos à propriedade 'idade'.",
            codigoInicial: "// Proxy",
            xp: 55,
            dica: "const pessoa = { idade: 0 };\nconst proxy = new Proxy(pessoa, {\n  set(obj, prop, val) {\n    if (prop === 'idade' && val < 0) throw new Error('Idade negativa');\n    obj[prop] = val;\n    return true;\n  }\n});",
            validar: (codigo) => {
                return codigo.includes('new Proxy') && codigo.includes('set');
            }
        }
    ]
},

{
    id: "js_web_workers",
    title: "Módulo 22: Web Workers",
    description: "Processamento em segundo plano sem travar a UI.",
    aula: {
        titulo: "Web Workers",
        conteudo: "<p><code>new Worker('worker.js')</code> e comunicação via <code>postMessage</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um worker inline que calcula o quadrado de um número.",
            codigoInicial: "// Web Worker",
            xp: 60,
            dica: "const blob = new Blob(['self.onmessage = e => self.postMessage(e.data * e.data);'], {type:'application/javascript'});\nconst w = new Worker(URL.createObjectURL(blob));\nw.postMessage(5);\nw.onmessage = e => console.log(e.data);",
            validar: (codigo) => {
                return codigo.includes('Worker') && codigo.includes('postMessage');
            }
        }
    ]
},

{
    id: "js_service_worker",
    title: "Módulo 23: Service Worker",
    description: "Habilite funcionalidade offline (PWA).",
    aula: {
        titulo: "Service Workers",
        conteudo: "<p><code>navigator.serviceWorker.register('/sw.js')</code> para cache offline.</p>"
    },
    exercicios: [
        {
            instrucao: "Registre um service worker básico.",
            codigoInicial: "// Service Worker",
            xp: 50,
            dica: "if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }",
            validar: (codigo) => {
                return codigo.includes('serviceWorker') && codigo.includes('register');
            }
        }
    ]
},

{
    id: "js_generators",
    title: "Módulo 24: Generators",
    description: "Crie funções que podem ser pausadas e retomadas.",
    aula: {
        titulo: "function* e yield",
        conteudo: "<p><code>function* gerador() { yield 1; yield 2; }</code> e <code>next()</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um generator que produz os números de 1 a 3.",
            codigoInicial: "// Generator",
            xp: 45,
            dica: "function* contador() { yield 1; yield 2; yield 3; }\nconst gen = contador();\nconsole.log(gen.next().value);",
            validar: (codigo) => {
                return codigo.includes('function*') && codigo.includes('yield');
            }
        }
    ]
},

{
    id: "js_geolocation",
    title: "Módulo 25: Geolocalização",
    description: "Obtenha a posição do usuário.",
    aula: {
        titulo: "Geolocation API",
        conteudo: "<p><code>navigator.geolocation.getCurrentPosition(sucesso, erro)</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Crie um botão que exibe a latitude do usuário.",
            codigoInicial: "// Geolocation",
            xp: 50,
            dica: "button.onclick = () => navigator.geolocation.getCurrentPosition(p => alert(p.coords.latitude));",
            validar: (codigo) => {
                return codigo.includes('geolocation') && codigo.includes('getCurrentPosition');
            }
        }
    ]
},

{
    id: "js_websockets",
    title: "Módulo 26: WebSockets",
    description: "Comunicação bidirecional em tempo real.",
    aula: {
        titulo: "WebSocket API",
        conteudo: "<p><code>const ws = new WebSocket('wss://servidor'); ws.onmessage = e => {...};</code></p>"
    },
    exercicios: [
        {
            instrucao: "Conecte a um WebSocket de teste e envie 'Olá'.",
            codigoInicial: "// WebSocket",
            xp: 55,
            dica: "const ws = new WebSocket('wss://echo.websocket.org');\nws.onopen = () => ws.send('Olá');\nws.onmessage = e => console.log(e.data);",
            validar: (codigo) => {
                return codigo.includes('WebSocket') && codigo.includes('.send');
            }
        }
    ]
},

{
    id: "js_webrtc",
    title: "Módulo 27: WebRTC",
    description: "Acesse câmera e microfone.",
    aula: {
        titulo: "getUserMedia",
        conteudo: "<p><code>navigator.mediaDevices.getUserMedia({ video: true })</code>.</p>"
    },
    exercicios: [
        {
            instrucao: "Exiba a câmera do usuário em um elemento video.",
            codigoInicial: "// WebRTC",
            xp: 60,
            dica: "<video autoplay id='webcam'></video>\n<script>\nnavigator.mediaDevices.getUserMedia({video:true})\n  .then(s => document.getElementById('webcam').srcObject = s);\n</script>",
            validar: (codigo) => {
                return codigo.includes('getUserMedia') && codigo.includes('srcObject');
            }
        }
    ]
},

{
    id: "js_debounce_throttle",
    title: "Módulo 28: Debounce e Throttle",
    description: "Otimize eventos de alto impacto.",
    aula: {
        titulo: "Técnicas de performance",
        conteudo: "<p>Debounce atrasa a execução, throttle limita a frequência.</p>"
    },
    exercicios: [
        {
            instrucao: "Implemente uma função debounce simples.",
            codigoInicial: "// Debounce",
            xp: 55,
            dica: "function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }",
            validar: (codigo) => {
                return codigo.includes('debounce') && codigo.includes('setTimeout') && codigo.includes('clearTimeout');
            }
        }
    ]
},

{
    id: "js_testing_jest",
    title: "Módulo 29: Testes Unitários",
    description: "Escreva testes automatizados.",
    aula: {
        titulo: "Jest",
        conteudo: "<p><code>test('descrição', () => { expect(soma(1,2)).toBe(3); });</code></p>"
    },
    exercicios: [
        {
            instrucao: "Escreva um teste para uma função 'soma' que verifica se 1+2=3.",
            codigoInicial: "// Teste",
            xp: 45,
            dica: "function soma(a, b) { return a + b; }\n// test('soma 1+2', () => { expect(soma(1,2)).toBe(3); });",
            validar: (codigo) => {
                return codigo.includes('function soma') && codigo.includes('expect');
            }
        }
    ]
},

{
    id: "js_projeto_final",
    title: "Módulo 30: Projeto Final",
    description: "Construa um app de tarefas com localStorage.",
    aula: {
        titulo: "Projeto Integrador",
        conteudo: "<p>Crie um aplicativo de lista de tarefas (To-Do List) completo com adicionar, remover, marcar como concluída e persistência.</p>"
    },
    exercicios: [
        {
            instrucao: "Implemente um To-Do List com HTML, CSS e JavaScript que salva as tarefas no localStorage.",
            codigoInicial: "<!-- To-Do App -->",
            xp: 120,
            dica: "Crie um input e botão para adicionar, uma lista <ul> para exibir, funções para adicionar, remover e salvar/recuperar do localStorage.",
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