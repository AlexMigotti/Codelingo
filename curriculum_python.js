// curriculum_python.js — Trilha Python Essencial

const curriculumPython = [

    {
        id: "py_intro",
        title: "Módulo 1: Introdução ao Python",
        description: "Por que Python? Filosofia da linguagem, onde é usado e como executar seu primeiro código.",
        aula: {
            titulo: "Python: A Linguagem que o Mundo Adota",
            conteudo: `
                <h2>Por que Python?</h2>
                <p>Python é hoje a linguagem de programação mais popular do mundo segundo todos os índices (TIOBE, Stack Overflow, GitHub). Ela é usada por Google, NASA, Instagram, Spotify, Netflix — e por praticamente todo cientista de dados e pesquisador de IA do planeta.</p>
                <p>Mas o motivo real da popularidade não é apenas o mercado. Python foi projetada com uma filosofia clara: <strong>código legível é mais importante que código conciso</strong>. Você deve conseguir ler um programa Python e entender o que ele faz, quase como lendo inglês.</p>

                <h2>A Filosofia: O Zen do Python</h2>
                <p>Existe um poema escondido dentro do Python. Basta digitar <code>import this</code> no terminal para vê-lo. Alguns princípios centrais:</p>
                <ul>
                    <li><em>"Bonito é melhor que feio."</em></li>
                    <li><em>"Explícito é melhor que implícito."</em></li>
                    <li><em>"Simples é melhor que complexo."</em></li>
                    <li><em>"Legibilidade conta."</em></li>
                </ul>

                <h2>Onde Python é Usado</h2>
                <ul>
                    <li><strong>Ciência de Dados e IA:</strong> NumPy, Pandas, TensorFlow, PyTorch</li>
                    <li><strong>Web Backend:</strong> Django, FastAPI, Flask</li>
                    <li><strong>Automação:</strong> scripts, web scraping, bots</li>
                    <li><strong>DevOps:</strong> Ansible, ferramentas de CI/CD</li>
                    <li><strong>Jogos:</strong> Pygame</li>
                </ul>

                <h2>Seu Primeiro Programa</h2>
                <p>A tradição em programação é começar com "Hello, World!". Em Python, é simplesmente:</p>
                <pre><code>print("Hello, World!")</code></pre>
                <p>Sem ponto e vírgula obrigatório. Sem chaves. Sem declaração de tipo. Python usa <strong>indentação</strong> (espaços) para estruturar o código — isso é parte da sintaxe, não apenas estilo.</p>

                <h2>Comentários</h2>
                <pre><code># Isso é um comentário — o Python ignora tudo após o #
print("Isso roda")  # comentário no final da linha

"""
Isso é um comentário
de múltiplas linhas
(tecnicamente um string não atribuído)
"""</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Hello, Scholar!</strong><br>Escreva um programa Python que exiba a mensagem:<br><br>
                <strong>Olá, Luminous Scholar!</strong><br><br>
                Use o comando <code>print()</code>.`,
                codigoInicial: `# Escreva seu primeiro programa Python aqui:
`,
                xp: 20,
                dica: `<code>print("Olá, Luminous Scholar!")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('print') && c.includes('luminous scholar');
                }
            },
            {
                instrucao: `<strong>Missão 2: Múltiplos prints.</strong><br>Exiba 3 linhas de texto usando 3 comandos <code>print()</code> separados:<br><br>
                1. <strong>Python é incrível</strong><br>
                2. <strong>Eu estou aprendendo</strong><br>
                3. <strong>A jornada começa agora</strong>`,
                codigoInicial: `# Três prints, três linhas:
`,
                xp: 25,
                dica: `<code>print("Python é incrível")<br>print("Eu estou aprendendo")<br>print("A jornada começa agora")</code>`,
                validar: (codigo) => {
                    const matches = (codigo.match(/print\s*\(/g) || []).length;
                    const c = codigo.toLowerCase();
                    return matches >= 3 && c.includes('python') && c.includes('aprendendo');
                }
            }
        ]
    },

    {
        id: "py_variaveis",
        title: "Módulo 2: Variáveis e Tipos",
        description: "Armazene dados, entenda os tipos primitivos e aprenda tipagem dinâmica.",
        aula: {
            titulo: "Variáveis e Tipos de Dados em Python",
            conteudo: `
                <h2>Variáveis: Caixas de Memória</h2>
                <p>Em Python, você não precisa declarar o tipo de uma variável. O interpretador descobre sozinho — isso é chamado de <strong>tipagem dinâmica</strong>.</p>
                <pre><code>nome = "Ana"          # str (texto)
idade = 28            # int (inteiro)
altura = 1.68         # float (decimal)
ativo = True          # bool (verdadeiro/falso)
cargo = None          # NoneType (ausência de valor)</code></pre>

                <h2>Nomeando Variáveis</h2>
                <p>Python usa <strong>snake_case</strong> por convenção — palavras separadas por underscore:</p>
                <pre><code>nome_completo = "Maria Silva"
data_nascimento = "01/01/1995"
total_de_pontos = 1500</code></pre>

                <h2>A Função type()</h2>
                <pre><code>x = 42
print(type(x))     # &lt;class 'int'&gt;

y = "Python"
print(type(y))     # &lt;class 'str'&gt;

z = 3.14
print(type(z))     # &lt;class 'float'&gt;</code></pre>

                <h2>Operações Matemáticas</h2>
                <pre><code>a = 10
b = 3

print(a + b)   # 13 — soma
print(a - b)   # 7  — subtração
print(a * b)   # 30 — multiplicação
print(a / b)   # 3.333... — divisão (sempre float)
print(a // b)  # 3  — divisão inteira
print(a % b)   # 1  — resto (módulo)
print(a ** b)  # 1000 — potência (10³)</code></pre>

                <h2>f-strings: Formatação Moderna</h2>
                <pre><code>nome = "Bruno"
xp = 2400

# Coloque f antes das aspas, variáveis entre chaves
print(f"Olá, {nome}! Você tem {xp} XP.")
# Saída: Olá, Bruno! Você tem 2400 XP.

# Expressões também funcionam
print(f"Dobro do XP: {xp * 2}")</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Apresentação com f-string.</strong><br>Crie duas variáveis e exiba uma frase usando f-string:<br><br>
                1. <code>nome = "SeuNome"</code> (qualquer nome)<br>
                2. <code>xp = 100</code><br>
                3. <code>print(f"...")</code> exibindo: <strong>Sou [nome] e tenho [xp] XP</strong>`,
                codigoInicial: `# Crie as variáveis e o print com f-string:
`,
                xp: 30,
                dica: `<code>nome = "Ana"<br>xp = 100<br>print(f"Sou {nome} e tenho {xp} XP")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('nome') && c.includes('xp') && c.includes('f"') || c.includes("f'");
                }
            },
            {
                instrucao: `<strong>Missão 2: Calculadora Simples.</strong><br>Crie variáveis <code>a = 15</code> e <code>b = 4</code> e exiba:<br><br>
                - A soma: <code>print(a + b)</code><br>
                - A divisão inteira: <code>print(a // b)</code><br>
                - O resto: <code>print(a % b)</code>`,
                codigoInicial: `# Calculadora com a = 15 e b = 4:
`,
                xp: 35,
                dica: `<code>a = 15<br>b = 4<br>print(a + b)<br>print(a // b)<br>print(a % b)</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s/g,'');
                    return c.includes('a=15') && c.includes('b=4') && c.includes('a+b') && c.includes('a//b') && c.includes('a%b');
                }
            }
        ]
    },

    {
        id: "py_strings",
        title: "Módulo 3: Strings em Profundidade",
        description: "Manipulação de texto, métodos de string e formatação avançada.",
        aula: {
            titulo: "Strings: O Texto no DNA do Python",
            conteudo: `
                <h2>Criando Strings</h2>
                <pre><code>s1 = 'aspas simples'
s2 = "aspas duplas"
s3 = """string
multilinhas"""</code></pre>

                <h2>Indexação e Fatiamento (Slicing)</h2>
                <pre><code>palavra = "Python"
#           0 1 2 3 4 5   (índices positivos)
#          -6-5-4-3-2-1   (índices negativos)

print(palavra[0])     # 'P'
print(palavra[-1])    # 'n'
print(palavra[0:3])   # 'Pyt'
print(palavra[::2])   # 'Pto' — pula de 2 em 2
print(palavra[::-1])  # 'nohtyP' — inverte!</code></pre>

                <h2>Métodos Essenciais de String</h2>
                <pre><code>texto = "  Hello, World!  "

texto.upper()          # "  HELLO, WORLD!  "
texto.lower()          # "  hello, world!  "
texto.strip()          # "Hello, World!"  (remove espaços)
texto.replace("Hello","Oi")  # "  Oi, World!  "
texto.split(", ")      # ["  Hello", "World!  "]
"Python".startswith("Py")    # True
"Python".endswith("on")      # True
"hon" in "Python"            # True (verificação de substring)
len("Python")                # 6</code></pre>

                <h2>Formatação Numérica com f-strings</h2>
                <pre><code>pi = 3.14159
print(f"PI com 2 casas: {pi:.2f}")   # 3.14
print(f"PI com 4 casas: {pi:.4f}")   # 3.1416

valor = 1500000
print(f"Formatado: {valor:,}")        # 1,500,000

porcentagem = 0.752
print(f"Taxa: {porcentagem:.1%}")     # 75.2%</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Manipulando Strings.</strong><br>Dada a string <code>frase = "  the luminous scholar  "</code>:<br><br>
                1. Aplique <code>.strip()</code> e guarde em <code>limpa</code><br>
                2. Aplique <code>.upper()</code> na variável limpa e guarde em <code>maiuscula</code><br>
                3. Exiba <code>maiuscula</code> com print`,
                codigoInicial: `frase = "  the luminous scholar  "
# 1. strip()

# 2. upper()

# 3. print

`,
                xp: 35,
                dica: `<code>limpa = frase.strip()<br>maiuscula = limpa.upper()<br>print(maiuscula)</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('.strip()') && c.includes('.upper()') && c.includes('print');
                }
            },
            {
                instrucao: `<strong>Missão 2: Slicing e len().</strong><br>Com a string <code>linguagem = "JavaScript"</code>:<br><br>
                1. Exiba os primeiros 4 caracteres: <code>linguagem[:4]</code><br>
                2. Exiba o comprimento com <code>len()</code><br>
                3. Exiba a string invertida: <code>linguagem[::-1]</code>`,
                codigoInicial: `linguagem = "JavaScript"
# Seus 3 prints aqui:

`,
                xp: 40,
                dica: `<code>print(linguagem[:4])<br>print(len(linguagem))<br>print(linguagem[::-1])</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('[:4]') && c.includes('len(') && c.includes('[::-1]');
                }
            }
        ]
    },

    {
        id: "py_condicional",
        title: "Módulo 4: Condicionais",
        description: "if, elif, else e operadores lógicos para tomar decisões no seu código.",
        aula: {
            titulo: "Condicionais: O Código que Decide",
            conteudo: `
                <h2>if / elif / else</h2>
                <pre><code>nota = 7.5

if nota >= 9:
    print("Excelente!")
elif nota >= 7:
    print("Aprovado.")
elif nota >= 5:
    print("Recuperação.")
else:
    print("Reprovado.")</code></pre>
                <p>⚠️ Em Python, a <strong>indentação é obrigatória</strong>. Use 4 espaços (ou 1 tab) para cada nível. Erros de indentação são erros de sintaxe.</p>

                <h2>Operadores de Comparação</h2>
                <pre><code>10 == 10   # True  — igual
10 != 5    # True  — diferente
10 > 5     # True  — maior
10 >= 10   # True  — maior ou igual
5 < 10     # True  — menor
5 <= 5     # True  — menor ou igual</code></pre>

                <h2>Operadores Lógicos</h2>
                <pre><code>True and True   # True  — ambos precisam ser True
True or False   # True  — pelo menos um True
not True        # False — inverte</code></pre>

                <h2>Ternário (Condicional em uma linha)</h2>
                <pre><code>idade = 20
status = "maior" if idade >= 18 else "menor"
print(status)  # "maior"</code></pre>

                <h2>Verificações Especiais</h2>
                <pre><code>lista = [1, 2, 3]
print(3 in lista)      # True
print(5 not in lista)  # True

x = None
print(x is None)       # True — use 'is' para comparar com None</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Classificador de IMC.</strong><br>Crie um classificador usando <code>imc = 22.5</code>:<br><br>
                - <code>imc < 18.5</code>: print <strong>"Abaixo do peso"</strong><br>
                - <code>imc < 25</code>: print <strong>"Peso normal"</strong><br>
                - <code>imc < 30</code>: print <strong>"Sobrepeso"</strong><br>
                - caso contrário: print <strong>"Obesidade"</strong>`,
                codigoInicial: `imc = 22.5
# Escreva o if/elif/else aqui:
`,
                xp: 40,
                dica: `<code>if imc < 18.5:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Abaixo do peso")<br>elif imc < 25:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Peso normal")<br>elif imc < 30:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Sobrepeso")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Obesidade")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('if') && c.includes('elif') && c.includes('else') && c.includes('18.5') && c.includes('print');
                }
            },
            {
                instrucao: `<strong>Missão 2: Verificação de Acesso.</strong><br>Com <code>idade = 20</code> e <code>tem_ingresso = True</code>, use <strong>and</strong> para verificar se pode entrar:<br><br>
                Se <code>idade >= 18 and tem_ingresso</code>: print <strong>"Acesso liberado"</strong><br>
                Caso contrário: print <strong>"Acesso negado"</strong>`,
                codigoInicial: `idade = 20
tem_ingresso = True
# Use 'and' na condição:
`,
                xp: 40,
                dica: `<code>if idade >= 18 and tem_ingresso:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Acesso liberado")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Acesso negado")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('and') && c.includes('acesso liberado');
                }
            }
        ]
    },

    {
        id: "py_loops",
        title: "Módulo 5: Loops",
        description: "for, while, range() e técnicas de iteração para processar dados automaticamente.",
        aula: {
            titulo: "Loops: Repetição com Propósito",
            conteudo: `
                <h2>O Loop for</h2>
                <pre><code># Iterando sobre uma lista
frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print(fruta)

# Iterando com range()
for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):     # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2): # 0, 2, 4, 6, 8
    print(i)</code></pre>

                <h2>O Loop while</h2>
                <pre><code>contador = 0
while contador < 5:
    print(contador)
    contador += 1  # SEMPRE incremente para evitar loop infinito!</code></pre>

                <h2>break e continue</h2>
                <pre><code>for i in range(10):
    if i == 5:
        break       # Para o loop completamente
    print(i)        # Imprime 0,1,2,3,4

for i in range(10):
    if i % 2 == 0:
        continue    # Pula esta iteração
    print(i)        # Imprime apenas ímpares: 1,3,5,7,9</code></pre>

                <h2>enumerate() — índice + valor</h2>
                <pre><code>linguagens = ["Python", "JavaScript", "Rust"]
for i, lang in enumerate(linguagens):
    print(f"{i+1}. {lang}")
# 1. Python
# 2. JavaScript
# 3. Rust</code></pre>

                <h2>List Comprehension — O Poder do Python</h2>
                <pre><code># Forma tradicional
quadrados = []
for n in range(1, 6):
    quadrados.append(n ** 2)

# List comprehension (equivalente, mais elegante)
quadrados = [n ** 2 for n in range(1, 6)]
# [1, 4, 9, 16, 25]</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Tabuada.</strong><br>Use um loop <code>for</code> com <code>range(1, 11)</code> para imprimir a tabuada do 7:<br><br>
                <code>7 x 1 = 7</code><br>
                <code>7 x 2 = 14</code><br>
                ... até <code>7 x 10 = 70</code>`,
                codigoInicial: `# Tabuada do 7 com for + range:
`,
                xp: 45,
                dica: `<code>for i in range(1, 11):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f"7 x {i} = {7 * i}")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('for') && c.includes('range') && c.includes('print') && (c.includes('7 *') || c.includes('7*') || c.includes('* i') || c.includes('*i'));
                }
            },
            {
                instrucao: `<strong>Missão 2: List Comprehension.</strong><br>Crie uma lista dos cubos (n³) dos números de 1 a 5 usando list comprehension:<br><br>
                <code>cubos = [n ** 3 for n in range(1, 6)]</code><br>
                Depois exiba com <code>print(cubos)</code>`,
                codigoInicial: `# Crie a list comprehension dos cubos:
`,
                xp: 50,
                dica: `<code>cubos = [n ** 3 for n in range(1, 6)]<br>print(cubos)</code>`,
                validar: (codigo) => {
                    const c = codigo.replace(/\s/g,'');
                    return c.includes('**3') && c.includes('for') && c.includes('range(1,6)') && c.includes('print');
                }
            }
        ]
    },

    {
        id: "py_funcoes",
        title: "Módulo 6: Funções",
        description: "def, parâmetros, return, args/kwargs e funções lambda.",
        aula: {
            titulo: "Funções: Blocos de Código Reutilizáveis",
            conteudo: `
                <h2>Definindo Funções</h2>
                <pre><code>def saudar(nome):
    """Docstring: explica o que a função faz."""
    return f"Olá, {nome}!"

mensagem = saudar("Scholar")
print(mensagem)  # "Olá, Scholar!"</code></pre>

                <h2>Parâmetros Padrão</h2>
                <pre><code>def potencia(base, expoente=2):
    return base ** expoente

print(potencia(3))      # 9  (usa expoente=2)
print(potencia(3, 3))   # 27 (usa expoente=3)</code></pre>

                <h2>*args e **kwargs</h2>
                <pre><code>def soma(*numeros):
    return sum(numeros)

print(soma(1, 2, 3))       # 6
print(soma(10, 20, 30, 40)) # 100

def perfil(**dados):
    for chave, valor in dados.items():
        print(f"{chave}: {valor}")

perfil(nome="Ana", xp=2400, nivel=42)</code></pre>

                <h2>Funções Lambda</h2>
                <pre><code># Função normal
def dobrar(x): return x * 2

# Lambda equivalente
dobrar = lambda x: x * 2

# Muito usadas com sorted(), map(), filter()
numeros = [3, 1, 4, 1, 5, 9, 2, 6]
ordenado = sorted(numeros, key=lambda x: x)
pares = list(filter(lambda x: x % 2 == 0, numeros))</code></pre>

                <h2>Escopo: Local vs Global</h2>
                <pre><code>contador = 0  # variável global

def incrementar():
    global contador  # acessa a variável global
    contador += 1

incrementar()
print(contador)  # 1</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Função de Cálculo.</strong><br>Crie uma função <code>calcular_imc(peso, altura)</code> que:<br><br>
                1. Calcule o IMC: <code>peso / (altura ** 2)</code><br>
                2. Retorne o valor com 2 casas decimais usando <code>round(valor, 2)</code><br>
                3. Chame com <code>peso=70, altura=1.75</code> e exiba com print`,
                codigoInicial: `# Defina a função calcular_imc:

`,
                xp: 55,
                dica: `<code>def calcular_imc(peso, altura):<br>&nbsp;&nbsp;&nbsp;&nbsp;imc = peso / (altura ** 2)<br>&nbsp;&nbsp;&nbsp;&nbsp;return round(imc, 2)<br><br>print(calcular_imc(70, 1.75))</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('def calcular_imc') && c.includes('return') && c.includes('print');
                }
            },
            {
                instrucao: `<strong>Missão 2: Lambda + Filter.</strong><br>Use <code>filter()</code> com uma função <code>lambda</code> para filtrar apenas os números <strong>maiores que 10</strong> da lista:<br><br>
                <code>numeros = [3, 15, 7, 22, 1, 18, 9, 30]</code><br>
                Guarde em <code>grandes</code> e exiba com print`,
                codigoInicial: `numeros = [3, 15, 7, 22, 1, 18, 9, 30]
# Use filter + lambda:
`,
                xp: 55,
                dica: `<code>grandes = list(filter(lambda x: x > 10, numeros))<br>print(grandes)</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('lambda') && c.includes('filter') && c.includes('10') && c.includes('print');
                }
            }
        ]
    },

    {
        id: "py_listas",
        title: "Módulo 7: Listas e Tuplas",
        description: "Estruturas de dados sequenciais — criação, manipulação, ordenação e list comprehensions.",
        aula: {
            titulo: "Listas e Tuplas: Coleções Ordenadas",
            conteudo: `
                <h2>Listas — Mutáveis</h2>
                <pre><code>notas = [7.5, 8.0, 9.5, 6.0, 10.0]

# Acessando
print(notas[0])        # 7.5
print(notas[-1])       # 10.0

# Fatiamento
print(notas[1:3])      # [8.0, 9.5]

# Modificando
notas[0] = 8.5         # altera o primeiro elemento</code></pre>

                <h2>Métodos de Lista</h2>
                <pre><code>lista = [3, 1, 4, 1, 5]

lista.append(9)        # adiciona ao final → [3,1,4,1,5,9]
lista.insert(0, 0)     # insere na posição 0 → [0,3,1,4,1,5,9]
lista.remove(1)        # remove o primeiro '1' encontrado
lista.pop()            # remove e retorna o último
lista.sort()           # ordena in-place
lista.reverse()        # inverte in-place
lista.count(1)         # conta ocorrências
lista.index(4)         # retorna índice do valor
len(lista)             # tamanho</code></pre>

                <h2>sorted() vs .sort()</h2>
                <pre><code>nums = [5, 2, 8, 1, 9]

# sorted() retorna uma nova lista (não altera a original)
ordenados = sorted(nums)
ordenados_desc = sorted(nums, reverse=True)

# .sort() modifica a lista in-place (não retorna nada)
nums.sort()</code></pre>

                <h2>Tuplas — Imutáveis</h2>
                <pre><code># Tuplas: como listas, mas não podem ser modificadas
coordenadas = (10.5, -23.8)
rgb = (255, 128, 0)

# Desempacotamento
x, y = coordenadas
r, g, b = rgb
print(f"X={x}, Y={y}")</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Estatísticas de Notas.</strong><br>Dada a lista de notas, calcule e exiba:<br><br>
                1. A maior nota: <code>max(notas)</code><br>
                2. A menor nota: <code>min(notas)</code><br>
                3. A média: <code>sum(notas) / len(notas)</code>`,
                codigoInicial: `notas = [7.5, 8.0, 9.5, 6.0, 10.0, 7.0, 8.5]
# Calcule e exiba maior, menor e média:
`,
                xp: 45,
                dica: `<code>print(max(notas))<br>print(min(notas))<br>print(sum(notas) / len(notas))</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('max(') && c.includes('min(') && c.includes('sum(') && c.includes('len(');
                }
            },
            {
                instrucao: `<strong>Missão 2: Filtrar e Ordenar.</strong><br>Da lista abaixo, crie uma nova com apenas os números pares, ordenados do maior para o menor:<br><br>
                <code>nums = [12, 7, 4, 19, 8, 3, 16, 5, 20]</code>`,
                codigoInicial: `nums = [12, 7, 4, 19, 8, 3, 16, 5, 20]
# 1. Filtre os pares (list comprehension: n % 2 == 0)
# 2. Ordene do maior para o menor (sorted com reverse=True)
# 3. Exiba com print
`,
                xp: 55,
                dica: `<code>pares = [n for n in nums if n % 2 == 0]<br>resultado = sorted(pares, reverse=True)<br>print(resultado)</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('% 2 == 0') || c.includes('%2==0');
                }
            }
        ]
    },

    {
        id: "py_dicts",
        title: "Módulo 8: Dicionários",
        description: "Estruturas chave-valor, o coração de JSON e de praticamente todo dado real em Python.",
        aula: {
            titulo: "Dicionários: Dados com Significado",
            conteudo: `
                <h2>O que é um Dicionário?</h2>
                <p>Um dicionário é uma estrutura de dados que associa <strong>chaves</strong> a <strong>valores</strong> — como um dicionário real, onde cada palavra (chave) tem uma definição (valor).</p>
                <pre><code>usuario = {
    "nome": "Ana Silva",
    "xp": 2400,
    "nivel": 42,
    "ativo": True,
    "habilidades": ["Python", "SQL", "Docker"]
}</code></pre>

                <h2>Acessando Valores</h2>
                <pre><code>print(usuario["nome"])           # "Ana Silva"
print(usuario.get("xp"))         # 2400
print(usuario.get("cargo", "N/A"))  # "N/A" — valor padrão se não existir</code></pre>

                <h2>Modificando Dicionários</h2>
                <pre><code>usuario["xp"] = 2600          # atualiza valor existente
usuario["cargo"] = "Sênior"   # adiciona nova chave
del usuario["ativo"]          # remove chave</code></pre>

                <h2>Métodos Essenciais</h2>
                <pre><code>usuario.keys()    # dict_keys(['nome', 'xp', 'nivel'...])
usuario.values()  # dict_values(['Ana Silva', 2400, 42...])
usuario.items()   # pares (chave, valor)

# Iterar sobre chave e valor
for chave, valor in usuario.items():
    print(f"{chave}: {valor}")</code></pre>

                <h2>Dictionary Comprehension</h2>
                <pre><code>quadrados = {n: n**2 for n in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Perfil do Scholar.</strong><br>Crie um dicionário <code>perfil</code> com as chaves:<br><br>
                - <code>"nome"</code>: seu nome<br>
                - <code>"xp"</code>: 1500<br>
                - <code>"linguagens"</code>: uma lista com pelo menos 2 linguagens<br><br>
                Depois exiba o nome e o XP com f-string usando <code>perfil["nome"]</code>`,
                codigoInicial: `# Crie o dicionário perfil:

`,
                xp: 45,
                dica: `<code>perfil = {"nome": "Ana", "xp": 1500, "linguagens": ["Python", "JS"]}<br>print(f'{perfil["nome"]} tem {perfil["xp"]} XP')</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('"nome"') && c.includes('"xp"') && c.includes('"linguagens"') && c.includes('print');
                }
            },
            {
                instrucao: `<strong>Missão 2: Iteração com items().</strong><br>Dado o dicionário de pontuações, exiba cada chave e valor usando <code>.items()</code>:<br><br>
                Formato esperado: <code>html: 95</code>, <code>css: 88</code>, etc.`,
                codigoInicial: `pontuacoes = {"html": 95, "css": 88, "python": 92, "js": 79}
# Itere com .items() e exiba "chave: valor":
`,
                xp: 45,
                dica: `<code>for chave, valor in pontuacoes.items():<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f"{chave}: {valor}")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('.items()') && c.includes('for') && c.includes('print');
                }
            }
        ]
    },

    {
        id: "py_arquivos",
        title: "Módulo 9: Arquivos e Erros",
        description: "Leitura e escrita de arquivos, tratamento de exceções com try/except.",
        aula: {
            titulo: "Arquivos e Tratamento de Erros",
            conteudo: `
                <h2>Lendo e Escrevendo Arquivos</h2>
                <pre><code># Escrever em um arquivo
with open("dados.txt", "w", encoding="utf-8") as f:
    f.write("Linha 1\n")
    f.write("Linha 2\n")

# Ler o arquivo inteiro
with open("dados.txt", "r", encoding="utf-8") as f:
    conteudo = f.read()

# Ler linha por linha
with open("dados.txt", "r") as f:
    for linha in f:
        print(linha.strip())</code></pre>
                <p>O <code>with</code> garante que o arquivo seja fechado automaticamente, mesmo se ocorrer um erro.</p>

                <h2>Modos de Abertura</h2>
                <ul>
                    <li><code>"r"</code> — leitura (padrão)</li>
                    <li><code>"w"</code> — escrita (apaga o conteúdo existente)</li>
                    <li><code>"a"</code> — append (adiciona ao final)</li>
                    <li><code>"x"</code> — cria (falha se já existir)</li>
                </ul>

                <h2>Tratamento de Exceções</h2>
                <pre><code>try:
    numero = int(input("Digite um número: "))
    resultado = 100 / numero
    print(f"Resultado: {resultado}")
except ValueError:
    print("Erro: não é um número válido!")
except ZeroDivisionError:
    print("Erro: divisão por zero!")
except Exception as e:
    print(f"Erro inesperado: {e}")
finally:
    print("Isso sempre executa.")</code></pre>

                <h2>Levantando Exceções</h2>
                <pre><code>def dividir(a, b):
    if b == 0:
        raise ValueError("Divisor não pode ser zero!")
    return a / b

try:
    print(dividir(10, 0))
except ValueError as e:
    print(f"Capturado: {e}")</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Try/Except Básico.</strong><br>Escreva um bloco <code>try/except</code> que:<br><br>
                1. Tente converter a string <code>"abc"</code> para inteiro com <code>int("abc")</code><br>
                2. Capture o <code>ValueError</code><br>
                3. Exiba: <strong>Erro: valor inválido!</strong>`,
                codigoInicial: `# Escreva o try/except:
`,
                xp: 50,
                dica: `<code>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;int("abc")<br>except ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Erro: valor inválido!")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('try:') && c.includes('except valueerror') && c.includes('print');
                }
            },
            {
                instrucao: `<strong>Missão 2: Divisão Segura.</strong><br>Crie a função <code>divisao_segura(a, b)</code> que:<br><br>
                - Se <code>b == 0</code>: retorne a string <strong>"Divisão por zero!"</strong><br>
                - Caso contrário: retorne o resultado de <code>a / b</code><br><br>
                Teste com <code>print(divisao_segura(10, 0))</code> e <code>print(divisao_segura(10, 4))</code>`,
                codigoInicial: `# Defina a função divisao_segura:
`,
                xp: 55,
                dica: `<code>def divisao_segura(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;if b == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Divisão por zero!"<br>&nbsp;&nbsp;&nbsp;&nbsp;return a / b</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('def divisao_segura') && c.includes('b == 0') && c.includes('return');
                }
            }
        ]
    },

    {
        id: "py_projeto",
        title: "Módulo 10: Projeto Final Python",
        description: "Combine tudo: funções, dicionários, loops e lógica num projeto completo.",
        aula: {
            titulo: "Projeto: Sistema de Cadastro de Alunos",
            conteudo: `
                <h2>O Projeto</h2>
                <p>Você vai construir um mini-sistema de cadastro de alunos usando tudo o que aprendeu: funções, dicionários, listas, loops e condicionais.</p>

                <h2>Estrutura de Dados</h2>
                <pre><code>alunos = []

def cadastrar(nome, nota):
    aluno = {"nome": nome, "nota": nota}
    alunos.append(aluno)

def listar():
    for aluno in alunos:
        status = "Aprovado" if aluno["nota"] >= 7 else "Reprovado"
        print(f"{aluno['nome']}: {aluno['nota']} — {status}")

def media():
    if not alunos:
        return 0
    total = sum(a["nota"] for a in alunos)
    return round(total / len(alunos), 2)</code></pre>

                <h2>Usando o Sistema</h2>
                <pre><code>cadastrar("Ana", 8.5)
cadastrar("Bruno", 6.0)
cadastrar("Carla", 9.5)

listar()
print(f"Média da turma: {media()}")</code></pre>

                <h2>Generator Expression</h2>
                <pre><code># sum() com generator (eficiente para listas grandes)
total = sum(a["nota"] for a in alunos)
aprovados = [a["nome"] for a in alunos if a["nota"] >= 7]</code></pre>
            `
        },
        exercicios: [
            {
                instrucao: `<strong>Missão 1: Cadastro e Listagem.</strong><br>Crie a função <code>cadastrar(alunos, nome, nota)</code> que adiciona um dicionário <code>{"nome": nome, "nota": nota}</code> à lista, e chame-a 3 vezes.<br>Depois exiba todos os alunos com um loop <code>for</code>.`,
                codigoInicial: `alunos = []

def cadastrar(alunos, nome, nota):
    # Adicione o dicionário {"nome": nome, "nota": nota} à lista


# Cadastre 3 alunos e depois exiba todos com for:
`,
                xp: 70,
                dica: `<code>def cadastrar(alunos, nome, nota):<br>&nbsp;&nbsp;&nbsp;&nbsp;alunos.append({"nome": nome, "nota": nota})<br><br>cadastrar(alunos, "Ana", 8.5)<br>cadastrar(alunos, "Bruno", 6.0)<br>cadastrar(alunos, "Carla", 9.5)<br><br>for a in alunos:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(a)</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('def cadastrar') && c.includes('append') && c.includes('"nome"') && c.includes('for');
                }
            },
            {
                instrucao: `<strong>Missão Final: Sistema Completo.</strong><br>Complete o sistema com a função <code>relatorio(alunos)</code> que:<br><br>
                1. Para cada aluno, exiba: <strong>Nome — Nota — Aprovado/Reprovado</strong><br>
                2. Ao final, exiba a média da turma<br>
                3. Use <code>sum(a["nota"] for a in alunos) / len(alunos)</code> para a média`,
                codigoInicial: `alunos = [
    {"nome": "Ana", "nota": 8.5},
    {"nome": "Bruno", "nota": 6.0},
    {"nome": "Carla", "nota": 9.5},
    {"nome": "Diego", "nota": 4.5},
]

def relatorio(alunos):
    # Para cada aluno: exiba nome, nota e status (>= 7 = Aprovado)
    # Ao final: exiba a média

relatorio(alunos)
`,
                xp: 120,
                dica: `<code>def relatorio(alunos):<br>&nbsp;&nbsp;&nbsp;&nbsp;for a in alunos:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s = "Aprovado" if a["nota"] >= 7 else "Reprovado"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f'{a["nome"]} — {a["nota"]} — {s}')<br>&nbsp;&nbsp;&nbsp;&nbsp;media = sum(a["nota"] for a in alunos) / len(alunos)<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f"Média: {media:.2f}")</code>`,
                validar: (codigo) => {
                    const c = codigo.toLowerCase();
                    return c.includes('def relatorio') && c.includes('>= 7') && c.includes('sum(') && c.includes('len(') && c.includes('print');
                }
            }
        ]
    }

]; // fim curriculumPython
