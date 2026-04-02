// curriculum_cpp.js — Trilha C++ (30 módulos)
// The Luminous Scholar

const curriculumCPP = [

// ═══════════════════════════════════════════════════════════
// MÓDULOS 1–10: FUNDAMENTOS DE C++
// ═══════════════════════════════════════════════════════════

{
    id: "cpp_hello_world",
    title: "Módulo 1: Hello World e Compilação",
    description: "Instale um compilador (g++), compile e execute seu primeiro programa.",
    aula: {
        titulo: "Primeiro Programa em C++",
        conteudo: `
            <h2>Estrutura básica</h2>
            <pre><code>#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}</code></pre>
            <p>Compile com <code>g++ programa.cpp -o programa</code> e execute com <code>./programa</code> (Linux/Mac) ou <code>programa.exe</code> (Windows).</p>
        `
    },
    exercicios: [{
        instrucao: `Escreva um programa C++ que exiba "Bem-vindo ao C++!" e o número 42 em linhas separadas.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // seu código\n    return 0;\n}`,
        xp: 25,
        dica: `cout << "Bem-vindo ao C++!" << endl;\ncout << 42 << endl;`,
        validar: (codigo) => codigo.includes('cout') && codigo.includes('endl')
    }]
},

{
    id: "cpp_variaveis_tipos",
    title: "Módulo 2: Variáveis e Tipos Primitivos",
    description: "Declare variáveis dos tipos int, double, char, bool e use const.",
    aula: {
        titulo: "Tipos de dados em C++",
        conteudo: `
            <pre><code>int idade = 25;
double altura = 1.75;
char letra = 'A';
bool ativo = true;
const double PI = 3.14159;</code></pre>
            <p>Use <code>sizeof()</code> para ver o tamanho em bytes de cada tipo.</p>
        `
    },
    exercicios: [{
        instrucao: `Declare uma constante PI = 3.14159, uma variável raio = 5.0, calcule a área do círculo (PI * raio * raio) e exiba o resultado.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // seu código\n    return 0;\n}`,
        xp: 30,
        dica: `const double PI = 3.14159;\ndouble raio = 5.0;\ndouble area = PI * raio * raio;\ncout << area << endl;`,
        validar: (codigo) => codigo.includes('const double') && codigo.includes('PI')
    }]
},

{
    id: "cpp_entrada_saida",
    title: "Módulo 3: Entrada e Saída (cin e cout)",
    description: "Leia dados do teclado e exiba resultados formatados.",
    aula: {
        titulo: "cin e cout",
        conteudo: `
            <pre><code>string nome;
int idade;
cout << "Digite seu nome: ";
cin >> nome;
cout << "Digite sua idade: ";
cin >> idade;
cout << "Olá " << nome << ", você tem " << idade << " anos." << endl;</code></pre>
            <p>Use <code>getline(cin, nome)</code> para ler linhas com espaços.</p>
        `
    },
    exercicios: [{
        instrucao: `Peça ao usuário seu nome e idade. Exiba "Olá [nome], você tem [idade] anos."`,
        codigoInicial: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // seu código\n    return 0;\n}`,
        xp: 30,
        dica: `string nome;\nint idade;\ncin >> nome >> idade;\ncout << "Olá " << nome << ", você tem " << idade << " anos." << endl;`,
        validar: (codigo) => codigo.includes('cin') && codigo.includes('cout')
    }]
},

{
    id: "cpp_condicionais",
    title: "Módulo 4: Estruturas Condicionais (if, else, switch)",
    description: "Tome decisões no código com if/else e switch.",
    aula: {
        titulo: "Condicionais em C++",
        conteudo: `
            <pre><code>int nota;
cin >> nota;
if (nota >= 7) {
    cout << "Aprovado" << endl;
} else if (nota >= 5) {
    cout << "Recuperação" << endl;
} else {
    cout << "Reprovado" << endl;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Leia um número de 1 a 7 e exiba o dia da semana correspondente (1 = domingo) usando switch.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int dia;\n    cin >> dia;\n    // switch aqui\n    return 0;\n}`,
        xp: 35,
        dica: `switch(dia) {\n    case 1: cout << "Domingo"; break;\n    case 2: cout << "Segunda"; break;\n    // ...\n    default: cout << "Inválido";\n}`,
        validar: (codigo) => codigo.includes('switch') && codigo.includes('case')
    }]
},

{
    id: "cpp_loops",
    title: "Módulo 5: Laços de Repetição (for, while, do-while)",
    description: "Repita blocos de código com loops.",
    aula: {
        titulo: "Loops em C++",
        conteudo: `
            <pre><code>// for
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}

// while
int j = 0;
while (j < 10) {
    cout << j << " ";
    j++;
}

// do-while (executa pelo menos uma vez)
int k = 0;
do {
    cout << k << " ";
    k++;
} while (k < 10);</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Peça um número N ao usuário e exiba a tabuada desse número (de 1 a 10) usando for.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // seu loop\n    return 0;\n}`,
        xp: 35,
        dica: `for (int i = 1; i <= 10; i++) {\n    cout << n << " x " << i << " = " << n * i << endl;\n}`,
        validar: (codigo) => codigo.includes('for') && codigo.includes('cout')
    }]
},

{
    id: "cpp_arrays",
    title: "Módulo 6: Arrays Estáticos",
    description: "Armazene múltiplos valores em um array de tamanho fixo.",
    aula: {
        titulo: "Arrays em C++",
        conteudo: `
            <pre><code>int notas[5] = {10, 8, 7, 9, 6};
cout << notas[0] << endl; // 10

// Preencher com loop
for (int i = 0; i < 5; i++) {
    cin >> notas[i];
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie um array de 5 notas, peça ao usuário que as preencha, calcule e exiba a média.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nint main() {\n    float notas[5];\n    // seu código\n    return 0;\n}`,
        xp: 40,
        dica: `float soma = 0;\nfor(int i=0;i<5;i++) { cin >> notas[i]; soma += notas[i]; }\ncout << "Média: " << soma/5 << endl;`,
        validar: (codigo) => codigo.includes('float notas[') && codigo.includes('soma')
    }]
},

{
    id: "cpp_funcoes",
    title: "Módulo 7: Funções (declaração, definição, passagem por valor)",
    description: "Organize código em blocos reutilizáveis.",
    aula: {
        titulo: "Funções em C++",
        conteudo: `
            <pre><code>// Declaração (protótipo)
int soma(int a, int b);

// Definição
int soma(int a, int b) {
    return a + b;
}

int main() {
    int resultado = soma(5, 3);
    cout << resultado << endl; // 8
    return 0;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma função dobro(int x) que retorna o dobro do argumento. Teste com um valor lido do usuário.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\n// sua função aqui\n\nint main() {\n    int n;\n    cin >> n;\n    cout << dobro(n) << endl;\n    return 0;\n}`,
        xp: 35,
        dica: `int dobro(int x) { return x * 2; }`,
        validar: (codigo) => codigo.includes('int dobro(') && codigo.includes('return')
    }]
},

{
    id: "cpp_ponteiros",
    title: "Módulo 8: Ponteiros (endereços, desreferenciamento)",
    description: "Entenda o conceito de ponteiros e manipulação direta de memória.",
    aula: {
        titulo: "Ponteiros em C++",
        conteudo: `
            <pre><code>int x = 10;
int* ptr = &x;  // ptr armazena o endereço de x
cout << *ptr << endl; // 10 (desreferenciamento)
*ptr = 20;
cout << x << endl; // 20</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Declare uma variável valor = 100, um ponteiro para ela, exiba o endereço e o valor, depois altere o valor através do ponteiro e exiba a variável original.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // seu código\n    return 0;\n}`,
        xp: 45,
        dica: `int valor = 100;\nint* ptr = &valor;\ncout << ptr << " " << *ptr << endl;\n*ptr = 200;\ncout << valor << endl;`,
        validar: (codigo) => codigo.includes('*ptr') && codigo.includes('&valor')
    }]
},

{
    id: "cpp_alocacao_dinamica",
    title: "Módulo 9: Alocação Dinâmica (new, delete)",
    description: "Aloque memória no heap com new e libere com delete.",
    aula: {
        titulo: "Memória heap",
        conteudo: `
            <pre><code>int* ptr = new int;    // aloca um inteiro
*ptr = 42;
cout << *ptr << endl;
delete ptr;             // libera

int* arr = new int[10]; // aloca array
delete[] arr;           // libera array</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Peça ao usuário quantos números ele quer armazenar, aloque dinamicamente um array desse tamanho, preencha, calcule a soma e libere a memória.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // seu código\n    return 0;\n}`,
        xp: 50,
        dica: `int* arr = new int[n];\nint soma = 0;\nfor(int i=0;i<n;i++) { cin >> arr[i]; soma += arr[i]; }\ncout << soma << endl;\ndelete[] arr;`,
        validar: (codigo) => codigo.includes('new int[') && codigo.includes('delete[]')
    }]
},

{
    id: "cpp_arrays_dinamicos",
    title: "Módulo 10: Arrays Dinâmicos e Aritmética de Ponteiros",
    description: "Manipule arrays alocados dinamicamente com aritmética de ponteiros.",
    aula: {
        titulo: "Aritmética de ponteiros",
        conteudo: `
            <pre><code>int* arr = new int[5];
for (int i = 0; i < 5; i++) {
    *(arr + i) = i * 10;  // arr[i] equivalente
}
cout << *(arr + 2) << endl; // 20</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma função inverte(int* arr, int tamanho) que inverte os elementos do array usando aritmética de ponteiros.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nvoid inverte(int* arr, int tam) {\n    // seu código\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    inverte(arr, 5);\n    for(int i=0;i<5;i++) cout << arr[i] << " ";\n    return 0;\n}`,
        xp: 55,
        dica: `for(int i=0;i<tam/2;i++) {\n    int temp = *(arr + i);\n    *(arr + i) = *(arr + tam - 1 - i);\n    *(arr + tam - 1 - i) = temp;\n}`,
        validar: (codigo) => codigo.includes('*(arr +') && codigo.includes('inverte')
    }]
},

// ═══════════════════════════════════════════════════════════
// MÓDULOS 11–20: C++ INTERMEDIÁRIO
// ═══════════════════════════════════════════════════════════

{
    id: "cpp_referencias",
    title: "Módulo 11: Referências (passagem por referência)",
    description: "Use referências para modificar variáveis originais sem ponteiros.",
    aula: {
        titulo: "Referências em C++",
        conteudo: `
            <pre><code>void trocar(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    trocar(x, y);
    cout << x << " " << y << endl; // 10 5
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma função soma(int& a, int& b, int& resultado) que armazena a soma de a e b no parâmetro resultado.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nvoid soma(int& a, int& b, int& resultado) {\n    // seu código\n}\n\nint main() {\n    int x=5, y=7, res=0;\n    soma(x,y,res);\n    cout << res << endl;\n    return 0;\n}`,
        xp: 40,
        dica: `resultado = a + b;`,
        validar: (codigo) => codigo.includes('int&') && codigo.includes('resultado = a + b')
    }]
},

{
    id: "cpp_sobrecarga",
    title: "Módulo 12: Sobrecarga de Funções",
    description: "Crie múltiplas funções com o mesmo nome mas diferentes parâmetros.",
    aula: {
        titulo: "Sobrecarga",
        conteudo: `
            <pre><code>int max(int a, int b) { return a > b ? a : b; }
double max(double a, double b) { return a > b ? a : b; }
int max(int a, int b, int c) { return max(max(a,b), c); }</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie três funções area: para círculo (double raio), retângulo (double largura, double altura) e triângulo (double base, double altura).`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\n// suas funções aqui\n\nint main() {\n    cout << area(5.0) << endl;\n    cout << area(4.0, 6.0) << endl;\n    return 0;\n}`,
        xp: 45,
        dica: `double area(double r) { return 3.14159 * r * r; }\ndouble area(double l, double a) { return l * a; }`,
        validar: (codigo) => codigo.includes('double area(') && codigo.match(/area/g).length >= 2
    }]
},

{
    id: "cpp_classes",
    title: "Módulo 13: Classes e Objetos (Parte 1)",
    description: "Introdução à Programação Orientada a Objetos.",
    aula: {
        titulo: "Classes em C++",
        conteudo: `
            <pre><code>class Ponto {
private:
    double x, y;
public:
    void setX(double valor) { x = valor; }
    void setY(double valor) { y = valor; }
    double getX() { return x; }
    double getY() { return y; }
    double distanciaOrigem() { return sqrt(x*x + y*y); }
};</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma classe Aluno com atributos nome (string) e nota (double), métodos getters/setters e um método aprovado() que retorna true se nota >= 7.`,
        codigoInicial: `#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Aluno {\n    // seus atributos e métodos\n};\n\nint main() {\n    Aluno a;\n    a.setNome("Ana");\n    a.setNota(8.5);\n    cout << a.aprovado() << endl;\n    return 0;\n}`,
        xp: 50,
        dica: `private: string nome; double nota;\npublic: void setNome(string n) { nome = n; }\nbool aprovado() { return nota >= 7; }`,
        validar: (codigo) => codigo.includes('class Aluno') && codigo.includes('aprovado')
    }]
},

{
    id: "cpp_construtores",
    title: "Módulo 14: Construtores e Destrutores",
    description: "Inicialize objetos com construtores e libere recursos com destrutores.",
    aula: {
        titulo: "Construtores",
        conteudo: `
            <pre><code>class Ponto {
private:
    double x, y;
public:
    Ponto() : x(0), y(0) {}  // construtor padrão
    Ponto(double x_, double y_) : x(x_), y(y_) {} // parametrizado
    ~Ponto() { cout << "Destruído" << endl; }
};</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma classe Retangulo com construtor que recebe largura e altura (use lista de inicialização) e um destrutor que exibe "Retângulo destruído".`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nclass Retangulo {\n    // seu código\n};\n\nint main() {\n    Retangulo r(10, 5);\n    return 0;\n}`,
        xp: 45,
        dica: `private: double largura, altura;\npublic: Retangulo(double l, double a) : largura(l), altura(a) {}\n~Retangulo() { cout << "Destruído" << endl; }`,
        validar: (codigo) => codigo.includes('~Retangulo') && codigo.includes(': largura')
    }]
},

{
    id: "cpp_heranca",
    title: "Módulo 15: Herança Simples",
    description: "Crie classes derivadas que herdam atributos e métodos.",
    aula: {
        titulo: "Herança",
        conteudo: `
            <pre><code>class Animal {
protected:
    string nome;
public:
    Animal(string n) : nome(n) {}
    void falar() { cout << nome << " faz um som" << endl; }
};

class Cachorro : public Animal {
public:
    Cachorro(string n) : Animal(n) {}
    void falar() { cout << nome << " late" << endl; }
};</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma classe base Forma com método area() (retorna 0). Crie classes Retangulo e Circulo que herdam de Forma e implementam area().`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nclass Forma {\npublic:\n    virtual double area() { return 0; }\n};\n\n// suas classes aqui\n\nint main() {\n    Retangulo r(5,3);\n    Circulo c(2);\n    cout << r.area() << " " << c.area() << endl;\n    return 0;\n}`,
        xp: 55,
        dica: `class Retangulo : public Forma {\n    double l, a;\npublic:\n    Retangulo(double l_, double a_) : l(l_), a(a_) {}\n    double area() override { return l * a; }\n};`,
        validar: (codigo) => codigo.includes(': public Forma') && codigos.includes('override')
    }]
},

{
    id: "cpp_polimorfismo",
    title: "Módulo 16: Polimorfismo e Funções Virtuais",
    description: "Use virtual e override para comportamento dinâmico.",
    aula: {
        titulo: "Polimorfismo",
        conteudo: `
            <pre><code>class Animal {
public:
    virtual void falar() { cout << "Som" << endl; }
    virtual ~Animal() {}
};

class Gato : public Animal {
public:
    void falar() override { cout << "Miau" << endl; }
};

int main() {
    Animal* a = new Gato();
    a->falar(); // Miau (polimorfismo)
    delete a;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie um array de ponteiros Forma* apontando para objetos Retangulo e Circulo. Itere e chame area() para cada um, demonstrando polimorfismo.`,
        codigoInicial: `// use as classes do exercício anterior`,
        xp: 60,
        dica: `Forma* formas[2];\nformas[0] = new Retangulo(5,3);\nformas[1] = new Circulo(2);\nfor(int i=0;i<2;i++) cout << formas[i]->area() << endl;`,
        validar: (codigo) => codigo.includes('virtual') && codigo.includes('override')
    }]
},

{
    id: "cpp_classes_abstratas",
    title: "Módulo 17: Classes Abstratas (funções virtuais puras)",
    description: "Crie interfaces com métodos puramente virtuais.",
    aula: {
        titulo: "Classes Abstratas",
        conteudo: `
            <pre><code>class Figura {
public:
    virtual double area() = 0; // função virtual pura
    virtual ~Figura() {}
};

// Não pode instanciar Figura, apenas classes que implementam area()</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Transforme a classe Forma do exercício anterior em abstrata (area() virtual pura). Crie uma nova classe Triangulo que implementa area().`,
        codigoInicial: `class Forma {\npublic:\n    virtual double area() = 0;\n    virtual ~Forma() {}\n};\n\n// suas classes`,
        xp: 55,
        dica: `class Triangulo : public Forma {\n    double base, altura;\npublic:\n    Triangulo(double b, double h) : base(b), altura(h) {}\n    double area() override { return base * altura / 2; }\n};`,
        validar: (codigo) => codigo.includes('= 0') && codigo.includes('Triangulo')
    }]
},

{
    id: "cpp_sobrecarga_operadores",
    title: "Módulo 18: Sobrecarga de Operadores (+, <<)",
    description: "Defina comportamento personalizado para operadores.",
    aula: {
        titulo: "Sobrecarga",
        conteudo: `
            <pre><code>class Ponto {
public:
    int x, y;
    Ponto operator+(const Ponto& outro) {
        return {x + outro.x, y + outro.y};
    }
};

ostream& operator<<(ostream& os, const Ponto& p) {
    os << "(" << p.x << "," << p.y << ")";
    return os;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Sobrecarregue o operador + para a classe Ponto (soma das coordenadas) e o operador << para exibir (x, y).`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nclass Ponto {\npublic:\n    int x, y;\n    Ponto(int x_=0, int y_=0) : x(x_), y(y_) {}\n    // sobrecarga do + aqui\n};\n\n// sobrecarga do << aqui\n\nint main() {\n    Ponto a(1,2), b(3,4);\n    Ponto c = a + b;\n    cout << c << endl;\n    return 0;\n}`,
        xp: 50,
        dica: `Ponto operator+(const Ponto& outro) { return {x + outro.x, y + outro.y}; }\nostream& operator<<(ostream& os, const Ponto& p) { os << "(" << p.x << "," << p.y << ")"; return os; }`,
        validar: (codigo) => codigo.includes('operator+') && codigo.includes('operator<<')
    }]
},

{
    id: "cpp_templates",
    title: "Módulo 19: Templates (função e classe genérica)",
    description: "Escreva código genérico que funciona com qualquer tipo.",
    aula: {
        titulo: "Templates",
        conteudo: `
            <pre><code>template <typename T>
T max(T a, T b) {
    return a > b ? a : b;
}

template <typename T>
class Par {
public:
    T primeiro, segundo;
    Par(T p, T s) : primeiro(p), segundo(s) {}
};</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma função template max(T a, T b) que retorna o maior. Teste com int, double e string.`,
        codigoInicial: `#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate <typename T>\nT max(T a, T b) {\n    // seu código\n}\n\nint main() {\n    cout << max(5,3) << endl;\n    cout << max(2.5, 3.7) << endl;\n    cout << max(string("abc"), string("abd")) << endl;\n    return 0;\n}`,
        xp: 45,
        dica: `return a > b ? a : b;`,
        validar: (codigo) => codigo.includes('template <typename T>') && codigo.includes('max(T a, T b)')
    }]
},

{
    id: "cpp_excecoes",
    title: "Módulo 20: Tratamento de Exceções (try, catch, throw)",
    description: "Capture e trate erros de forma elegante.",
    aula: {
        titulo: "Exceções",
        conteudo: `
            <pre><code>double dividir(double a, double b) {
    if (b == 0) throw "Divisão por zero!";
    return a / b;
}

int main() {
    try {
        cout << dividir(10, 0) << endl;
    } catch (const char* msg) {
        cerr << msg << endl;
    }
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma função sacar(double valor, double saldo) que lança uma exceção se valor > saldo. Capture e exiba "Saldo insuficiente".`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nvoid sacar(double valor, double saldo) {\n    // seu código\n}\n\nint main() {\n    try {\n        sacar(100, 50);\n    } catch (const char* msg) {\n        cout << msg << endl;\n    }\n    return 0;\n}`,
        xp: 45,
        dica: `if (valor > saldo) throw "Saldo insuficiente";\ncout << "Saque realizado" << endl;`,
        validar: (codigo) => codigo.includes('throw') && codigo.includes('try')
    }]
},

// ═══════════════════════════════════════════════════════════
// MÓDULOS 21–30: C++ AVANÇADO
// ═══════════════════════════════════════════════════════════

{
    id: "cpp_vector_stl",
    title: "Módulo 21: STL – vector",
    description: "Use vector como array dinâmico seguro da biblioteca padrão.",
    aula: {
        titulo: "std::vector",
        conteudo: `
            <pre><code>#include <vector>
vector<int> numeros;
numeros.push_back(10);
numeros.push_back(20);
cout << numeros[0] << endl; // 10
cout << numeros.size() << endl; // 2

for (int n : numeros) {
    cout << n << " ";
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Leia números do usuário até que ele digite -1, armazenando-os em um vector<int>. Depois exiba os números em ordem inversa.`,
        codigoInicial: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> nums;\n    int x;\n    // seu código\n    return 0;\n}`,
        xp: 45,
        dica: `while(cin >> x && x != -1) nums.push_back(x);\nfor(int i = nums.size()-1; i>=0; i--) cout << nums[i] << " ";`,
        validar: (codigo) => codigo.includes('vector<int>') && codigo.includes('push_back')
    }]
},

{
    id: "cpp_algoritmos_stl",
    title: "Módulo 22: STL – Algoritmos (sort, find, accumulate)",
    description: "Use algoritmos da biblioteca padrão para manipular containers.",
    aula: {
        titulo: "<algorithm> e <numeric>",
        conteudo: `
            <pre><code>#include <algorithm>
#include <numeric>

vector<int> v = {5, 2, 8, 1, 9};
sort(v.begin(), v.end()); // 1,2,5,8,9
auto it = find(v.begin(), v.end(), 5);
int soma = accumulate(v.begin(), v.end(), 0);</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie um vector com 10 números aleatórios (use rand()), ordene, calcule a soma e exiba o menor e o maior elemento.`,
        codigoInicial: `#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n    srand(time(0));\n    vector<int> v(10);\n    // seu código\n    return 0;\n}`,
        xp: 50,
        dica: `for(int& n : v) n = rand() % 100;\nsort(v.begin(), v.end());\nint soma = accumulate(v.begin(), v.end(), 0);\ncout << "Menor: " << v[0] << " Maior: " << v[9] << " Soma: " << soma;`,
        validar: (codigo) => codigo.includes('sort') && codigo.includes('accumulate')
    }]
},

{
    id: "cpp_map_set",
    title: "Módulo 23: STL – map e set",
    description: "Use containers associativos para mapeamento chave-valor e conjuntos únicos.",
    aula: {
        titulo: "map e set",
        conteudo: `
            <pre><code>#include <map>
#include <set>

map<string, int> idade;
idade["Ana"] = 25;
idade["João"] = 30;

set<int> numeros;
numeros.insert(10);
numeros.insert(20);
if (numeros.find(10) != numeros.end()) {
    cout << "Encontrou" << endl;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Leia uma frase do usuário e conte a frequência de cada palavra usando map<string, int>.`,
        codigoInicial: `#include <iostream>\n#include <map>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string frase;\n    getline(cin, frase);\n    map<string, int> freq;\n    stringstream ss(frase);\n    string palavra;\n    // seu código\n    return 0;\n}`,
        xp: 50,
        dica: `while(ss >> palavra) freq[palavra]++;\nfor(auto& p : freq) cout << p.first << ": " << p.second << endl;`,
        validar: (codigo) => codigo.includes('map<string, int>') && codigo.includes('freq[palavra]')
    }]
},

{
    id: "cpp_smart_pointers",
    title: "Módulo 24: Smart Pointers (unique_ptr, shared_ptr)",
    description: "Gerencie memória automaticamente com smart pointers.",
    aula: {
        titulo: "unique_ptr e shared_ptr",
        conteudo: `
            <pre><code>#include <memory>

unique_ptr<int> ptr = make_unique<int>(42);
cout << *ptr << endl;

shared_ptr<int> ptr1 = make_shared<int>(100);
shared_ptr<int> ptr2 = ptr1; // contagem de referências</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma classe Recurso com construtor/destrutor que exibe mensagens. Use unique_ptr para gerenciar um objeto Recurso e demonstre a transferência de propriedade com move().`,
        codigoInicial: `#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Recurso {\npublic:\n    Recurso() { cout << "Criado" << endl; }\n    ~Recurso() { cout << "Destruído" << endl; }\n};\n\nint main() {\n    // seu código\n    return 0;\n}`,
        xp: 55,
        dica: `unique_ptr<Recurso> p1 = make_unique<Recurso>();\nunique_ptr<Recurso> p2 = move(p1);`,
        validar: (codigo) => codigo.includes('unique_ptr') && codigo.includes('make_unique')
    }]
},

{
    id: "cpp_move_semantics",
    title: "Módulo 25: Move Semantics (move constructor, move assignment)",
    description: "Transfira recursos de forma eficiente sem cópias.",
    aula: {
        titulo: "Move Semantics",
        conteudo: `
            <pre><code>class Buffer {
    int* dados;
public:
    Buffer(int tamanho) { dados = new int[tamanho]; }
    Buffer(Buffer&& outro) noexcept : dados(outro.dados) {
        outro.dados = nullptr;
    }
    Buffer& operator=(Buffer&& outro) noexcept {
        if (this != &outro) {
            delete[] dados;
            dados = outro.dados;
            outro.dados = nullptr;
        }
        return *this;
    }
    ~Buffer() { delete[] dados; }
};</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma classe StringMovel com construtor de movimento e operador de movimento. Teste movendo um objeto para outro.`,
        codigoInicial: `// sua classe`,
        xp: 60,
        dica: `class StringMovel {\n    char* str;\npublic:\n    StringMovel(const char* s) { str = strdup(s); }\n    StringMovel(StringMovel&& outro) noexcept : str(outro.str) { outro.str = nullptr; }\n    ~StringMovel() { delete[] str; }\n};`,
        validar: (codigo) => codigo.includes('&&') && codigo.includes('noexcept')
    }]
},

{
    id: "cpp_lambdas",
    title: "Módulo 26: Expressões Lambda",
    description: "Crie funções anônimas inline para algoritmos.",
    aula: {
        titulo: "Lambdas",
        conteudo: `
            <pre><code>auto soma = [](int a, int b) { return a + b; };
cout << soma(5,3) << endl;

vector<int> v = {1,2,3,4,5};
for_each(v.begin(), v.end(), [](int n) {
    cout << n * 2 << " ";
});</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Dado um vector<int>, use sort com uma lambda que ordena em ordem decrescente. Use for_each com outra lambda para imprimir cada elemento.`,
        codigoInicial: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3,1,4,1,5,9,2,6};\n    // seu código\n    return 0;\n}`,
        xp: 50,
        dica: `sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\nfor_each(v.begin(), v.end(), [](int n) { cout << n << " "; });`,
        validar: (codigo) => codigo.includes('[]') && codigo.includes('sort')
    }]
},

{
    id: "cpp_threads",
    title: "Módulo 27: Concorrência com std::thread",
    description: "Execute código em paralelo com threads.",
    aula: {
        titulo: "Threads e mutex",
        conteudo: `
            <pre><code>#include <thread>
#include <mutex>

mutex mtx;
int contador = 0;

void incrementar() {
    lock_guard<mutex> lock(mtx);
    contador++;
}

int main() {
    thread t1(incrementar);
    thread t2(incrementar);
    t1.join();
    t2.join();
    cout << contador << endl;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie duas threads: uma que incrementa um contador compartilhado 1000 vezes e outra que decrementa 1000 vezes. Proteja o contador com mutex e verifique o valor final (deve ser zero).`,
        codigoInicial: `#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nmutex mtx;\nint contador = 0;\n\nvoid inc() { for(int i=0;i<1000;i++) { lock_guard<mutex> lock(mtx); contador++; } }\nvoid dec() { for(int i=0;i<1000;i++) { lock_guard<mutex> lock(mtx); contador--; } }\n\nint main() {\n    thread t1(inc), t2(dec);\n    t1.join(); t2.join();\n    cout << contador << endl;\n    return 0;\n}`,
        xp: 65,
        dica: `código já está correto – apenas execute e veja o resultado zero.`,
        validar: (codigo) => codigo.includes('thread') && codigo.includes('mutex')
    }]
},

{
    id: "cpp_arquivos",
    title: "Módulo 28: Arquivos (fstream, ifstream, ofstream)",
    description: "Leia e escreva arquivos de texto e binários.",
    aula: {
        titulo: "fstream",
        conteudo: `
            <pre><code>#include <fstream>

ofstream out("dados.txt");
out << "Linha 1" << endl;
out << "Linha 2" << endl;
out.close();

ifstream in("dados.txt");
string linha;
while (getline(in, linha)) {
    cout << linha << endl;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Leia um arquivo entrada.txt contendo números inteiros (um por linha), calcule a soma e escreva o resultado em saida.txt.`,
        codigoInicial: `#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream in("entrada.txt");\n    ofstream out("saida.txt");\n    int n, soma = 0;\n    // seu código\n    out << soma << endl;\n    return 0;\n}`,
        xp: 50,
        dica: `while(in >> n) soma += n;`,
        validar: (codigo) => codigo.includes('ifstream') && codigo.includes('ofstream')
    }]
},

{
    id: "cpp_constexpr",
    title: "Módulo 29: Metaprogramação com constexpr e static_assert",
    description: "Execute código em tempo de compilação.",
    aula: {
        titulo: "constexpr",
        conteudo: `
            <pre><code>constexpr int fatorial(int n) {
    return n <= 1 ? 1 : n * fatorial(n - 1);
}

int main() {
    constexpr int resultado = fatorial(5);
    static_assert(resultado == 120, "Erro!");
    cout << resultado << endl;
}</code></pre>
        `
    },
    exercicios: [{
        instrucao: `Crie uma função constexpr int potencia(int base, int exp) que retorna base^exp (expoente não negativo). Use static_assert para verificar que potencia(2,3) == 8.`,
        codigoInicial: `#include <iostream>\nusing namespace std;\n\nconstexpr int potencia(int base, int exp) {\n    // seu código\n}\n\nint main() {\n    static_assert(potencia(2,3) == 8, "Erro!");\n    cout << potencia(2,5) << endl;\n    return 0;\n}`,
        xp: 55,
        dica: `return exp == 0 ? 1 : base * potencia(base, exp - 1);`,
        validar: (codigo) => codigo.includes('constexpr') && codigo.includes('static_assert')
    }]
},

{
    id: "cpp_projeto_final",
    title: "Módulo 30: Projeto Final – Sistema de Gerenciamento de Biblioteca",
    description: "Aplique todos os conceitos em um projeto completo.",
    aula: {
        titulo: "Projeto Integrador",
        conteudo: `
            <p>Desenvolva um sistema de gerenciamento de biblioteca com:</p>
            <ul>
                <li>Classes: Livro (titulo, autor, ISBN, disponivel), Usuario (nome, id)</li>
                <li>STL: vector ou map para armazenar livros e usuários</li>
                <li>Persistência em arquivo (salvar/carregar dados)</li>
                <li>Smart pointers para gerenciar empréstimos</li>
                <li>Tratamento de exceções para ISBN inválido ou livro indisponível</li>
                <li>Menu interativo no console</li>
            </ul>
        `
    },
    exercicios: [{
        instrucao: `Implemente a classe Livro e a classe Biblioteca com métodos: adicionarLivro, listarLivros, emprestarLivro, devolverLivro, salvarDados, carregarDados. Escreva o código completo.`,
        codigoInicial: `// Projeto final – Sistema de Biblioteca\n// Implemente todas as classes e funções necessárias`,
        xp: 150,
        dica: `Use vector<Livro> para armazenar, fstream para arquivo, e unique_ptr para empréstimos.`,
        validar: (codigo) => codigo.includes('class Livro') && codigo.includes('class Biblioteca') && codigo.includes('vector')
    }]
}

]; // fim curriculumCPP