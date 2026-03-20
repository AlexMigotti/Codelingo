// script.js - CodeLingo Premium v2.0
// Melhorias: CodeMirror, debounce, feedback inline, toast XP,
//            modal de conclusão, fix de validação CSS/JS, tentativas,
//            progresso visual, localStorage completo, acessibilidade

// =============================================
//  ESTADO DA APLICAÇÃO
// =============================================
let estado = {
    moduloAtivo: -1,
    exercicioAtual: 0,
    xpTotal: 0,
    modulosCompletos: [],
    tentativas: 0,
    maxTentativas: 3,           // Dica aparece automaticamente após 3 erros
    novoDesbloqueado: null,     // ID do módulo recém-desbloqueado
};

// Referências da UI
let ui = {};

// Instância do CodeMirror
let codeMirrorEditor = null;

// Timer do debounce para o preview
let debouncePreview = null;

// =============================================
//  PERSISTÊNCIA (LocalStorage)
// =============================================
const STORAGE_VERSION = 'v2'; // mude isto para resetar todos os saves

function carregarSessao() {
    try {
        // Se a versão salva for diferente, limpa tudo para evitar dados corrompidos
        const versao = localStorage.getItem('codelingo_version');
        if (versao !== STORAGE_VERSION) {
            localStorage.clear();
            localStorage.setItem('codelingo_version', STORAGE_VERSION);
            return; // começa do zero
        }

        const xp = localStorage.getItem('codelingo_xp');
        if (xp) estado.xpTotal = parseInt(xp) || 0;

        const mods = localStorage.getItem('codelingo_completos');
        if (mods) {
            const parsed = JSON.parse(mods);
            // Validar que os IDs salvos existem no curriculum atual
            const idsValidos = curriculum.map(m => m.id);
            estado.modulosCompletos = parsed.filter(id => idsValidos.includes(id));
        }

        // Restaurar módulo ativo só se for um índice válido
        const modAtivo = localStorage.getItem('codelingo_modulo_ativo');
        if (modAtivo !== null) {
            const idx = parseInt(modAtivo);
            if (idx >= 0 && idx < curriculum.length) {
                estado.moduloAtivo = idx;
            }
        }
    } catch (e) {
        console.warn('LocalStorage bloqueado. Progresso apenas nesta sessão.');
    }
}

function salvarSessao() {
    try {
        localStorage.setItem('codelingo_xp', estado.xpTotal);
        localStorage.setItem('codelingo_completos', JSON.stringify(estado.modulosCompletos));
        if (estado.moduloAtivo >= 0) {
            localStorage.setItem('codelingo_modulo_ativo', estado.moduloAtivo);
        }
    } catch (e) { /* silencioso */ }
}

// =============================================
//  INICIALIZAÇÃO
// =============================================
window.onload = function () {
    ui = {
        xpCount:              document.getElementById('xp-count'),
        tabs:                 document.querySelectorAll('.tab-btn'),
        panes:                document.querySelectorAll('.tab-pane'),
        trilhaMap:            document.getElementById('trilha-map'),
        btnAulas:             document.getElementById('btn-aulas'),
        btnExercicios:        document.getElementById('btn-exercicios'),
        aulaTitle:            document.getElementById('aula-title'),
        aulaContent:          document.getElementById('aula-content'),
        moduloProgress:       document.getElementById('modulo-progress'),
        moduloProgressSteps:  document.getElementById('modulo-progress-steps'),
        btnGoExercises:       document.getElementById('go-to-exercises'),
        exTitle:              document.getElementById('ex-title'),
        exProgressDots:       document.getElementById('ex-progress-dots'),
        exInstruction:        document.getElementById('ex-instruction'),
        editorTextarea:       document.getElementById('code-editor'),
        preview:              document.getElementById('live-preview'),
        btnRun:               document.getElementById('run-code'),
        btnHint:              document.getElementById('btn-hint'),
        btnCloseHint:         document.getElementById('btn-close-hint'),
        btnReset:             document.getElementById('btn-reset'),
        hintBox:              document.getElementById('hint-box'),
        hintText:             document.getElementById('hint-text'),
        feedbackArea:         document.getElementById('feedback-area'),
        feedbackIcon:         document.getElementById('feedback-icon'),
        feedbackMsg:          document.getElementById('feedback-msg'),
        tentativasInfo:       document.getElementById('tentativas-info'),
        tentativasTexto:      document.getElementById('tentativas-texto'),
        xpToast:              document.getElementById('xp-toast'),
        modalOverlay:         document.getElementById('modal-overlay'),
        modalMessage:         document.getElementById('modal-message'),
        modalXpBadge:         document.getElementById('modal-xp-badge'),
        modalCloseBtn:        document.getElementById('modal-close-btn'),
        progressBarFill:      document.getElementById('progress-bar-fill'),
        progressText:         document.getElementById('progress-text'),
        progressBarAria:      document.getElementById('progress-bar-aria'),
    };

    if (typeof curriculum === 'undefined') {
        ui.trilhaMap.innerHTML = "<h3 style='color:var(--error)'>Erro: curriculum.js não detectado.</h3>";
        return;
    }

    carregarSessao();
    inicializarCodeMirror();
    iniciar();
};

function inicializarCodeMirror() {
    codeMirrorEditor = CodeMirror.fromTextArea(ui.editorTextarea, {
        mode: 'htmlmixed',
        theme: 'dracula',
        lineNumbers: true,
        matchBrackets: true,
        autoCloseTags: true,
        lineWrapping: false,
        tabSize: 2,
        indentWithTabs: false,
        extraKeys: {
            Tab: function (cm) {
                cm.replaceSelection('  ', 'end');
            }
        }
    });

    // Debounce: atualiza preview 400ms após parar de digitar
    codeMirrorEditor.on('change', () => {
        clearTimeout(debouncePreview);
        debouncePreview = setTimeout(atualizarPreview, 400);
    });
}

function iniciar() {
    atualizarXP();
    renderizarTrilha();
    configurarAbas();

    ui.btnGoExercises.addEventListener('click', () => abrirAba('tab-exercicios'));
    ui.btnRun.addEventListener('click', validarExercicio);
    ui.btnHint.addEventListener('click', mostrarDica);
    ui.btnCloseHint.addEventListener('click', fecharDica);
    ui.btnReset.addEventListener('click', resetarCodigo);
    ui.modalCloseBtn.addEventListener('click', fecharModal);

    // Reabrir no módulo da última sessão
    if (estado.moduloAtivo >= 0 && estado.moduloAtivo < curriculum.length) {
        const modulo = curriculum[estado.moduloAtivo];
        ui.btnAulas.disabled = false;
        ui.btnExercicios.disabled = false;
        ui.aulaTitle.innerText = modulo.aula.titulo;
        ui.aulaContent.innerHTML = modulo.aula.conteudo;
        atualizarProgressoModulo();
        carregarExercicio(false); // false = não mudar de aba
    }
}

// =============================================
//  NAVEGAÇÃO POR ABAS
// =============================================
function configurarAbas() {
    ui.tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (!tab.disabled) abrirAba(tab.dataset.target);
        });
    });
}

function abrirAba(idAlvo) {
    ui.tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
    });
    ui.panes.forEach(p => p.classList.remove('active'));

    const tabAlvo = document.querySelector(`[data-target="${idAlvo}"]`);
    if (tabAlvo) {
        tabAlvo.classList.add('active');
        tabAlvo.setAttribute('aria-selected', 'true');
    }
    document.getElementById(idAlvo).classList.add('active');

    // Refresh do CodeMirror ao abrir aba de exercícios
    if (idAlvo === 'tab-exercicios' && codeMirrorEditor) {
        setTimeout(() => codeMirrorEditor.refresh(), 50);
    }
}

// =============================================
//  TRILHA ESTILO DUOLINGO
// =============================================
function renderizarTrilha() {
    ui.trilhaMap.innerHTML = '';

    const total     = curriculum.length;
    const completos = estado.modulosCompletos.length;
    const pct = total > 0 ? Math.round((completos / total) * 100) : 0;
    ui.progressBarFill.style.width = pct + '%';
    ui.progressText.innerText = pct + '%';
    if (ui.progressBarAria) ui.progressBarAria.setAttribute('aria-valuenow', pct);

    const faseInfo = [
        { label: 'Fase 1 — Fundamentos',         cls: 'f1', ids: ['html_masterclass','css_masterclass','js_masterclass','html_forms_semantic','html_media_tables'] },
        { label: 'Fase 2 — CSS Intermediário',   cls: 'f2', ids: ['css_flexbox','css_grid','css_responsivo','css_animacoes'] },
        { label: 'Fase 3 — JS Avançado',         cls: 'f3', ids: ['js_logica','js_arrays_loops','js_funcoes','js_dom_avancado'] },
        { label: 'Fase 4 — Projetos Práticos',   cls: 'f4', ids: ['projeto_landing','projeto_portfolio','projeto_todo','projeto_quiz'] },
        { label: 'Fase 5 — Profissional',        cls: 'f5', ids: ['git_versionamento','acessibilidade_web','seo_boas_praticas'] },
    ];

    const icones = {
        html_masterclass:'🏗️', css_masterclass:'🎨', js_masterclass:'⚡',
        html_forms_semantic:'📋', html_media_tables:'📊',
        css_flexbox:'📐', css_grid:'🔲', css_responsivo:'📱', css_animacoes:'✨',
        js_logica:'🧠', js_arrays_loops:'🔁', js_funcoes:'🔧', js_dom_avancado:'🖱️',
        projeto_landing:'🚀', projeto_portfolio:'💼', projeto_todo:'✅', projeto_quiz:'🎯',
        git_versionamento:'📦', acessibilidade_web:'♿', seo_boas_praticas:'🔍',
    };

    const posicoes = ['C','R','C','L','C','R','C','L','C','R'];

    let primeiroDisponivel = curriculum.length;
    for (let i = 0; i < curriculum.length; i++) {
        const done   = estado.modulosCompletos.includes(curriculum[i].id);
        const locked = i > 0 && !estado.modulosCompletos.includes(curriculum[i-1].id);
        if (!done && !locked) { primeiroDisponivel = i; break; }
    }

    let faseAtual = -1;
    const nodeEls = [];

    curriculum.forEach((modulo, index) => {
        const isCompleted = estado.modulosCompletos.includes(modulo.id);
        const isLocked    = index > 0 && !estado.modulosCompletos.includes(curriculum[index-1].id);
        const isAtual     = index === primeiroDisponivel;

        const faseDeste = faseInfo.findIndex(f => f.ids.includes(modulo.id));
        if (faseDeste !== faseAtual) {
            faseAtual = faseDeste;
            const faixa = document.createElement('div');
            faixa.className = 'fase-faixa';
            const pill = document.createElement('div');
            pill.className = 'fase-pill ' + faseInfo[faseDeste].cls;
            pill.textContent = faseInfo[faseDeste].label;
            faixa.appendChild(pill);
            ui.trilhaMap.appendChild(faixa);
        }

        const xpTotal = modulo.exercicios.reduce((a, ex) => a + ex.xp, 0);
        const pos = posicoes[index % posicoes.length];

        const row = document.createElement('div');
        row.className = 'mapa-row pos-' + pos;

        const wrap = document.createElement('div');
        wrap.className = 'mapa-node-wrap' + (isAtual ? ' is-atual' : '');
        wrap.style.animationDelay = (index * 0.045) + 's';

        const startLabel = document.createElement('div');
        startLabel.className = 'node-start-label';
        startLabel.textContent = 'START';
        wrap.appendChild(startLabel);

        const node = document.createElement('button');
        let sc = 's-lock';
        if (isCompleted)      sc = 's-done';
        else if (isAtual)     sc = 's-atual';
        else if (!isLocked)   sc = 's-open';
        node.className = 'mapa-node ' + sc;
        node.setAttribute('aria-label', modulo.title + (isCompleted ? ' — concluído' : isLocked ? ' — bloqueado' : ''));
        node.setAttribute('tabindex', isLocked ? '-1' : '0');

        if (isLocked) {
            node.innerHTML = '<i class="fas fa-lock" style="font-size:1.1rem;opacity:0.5"></i>';
        } else if (isCompleted) {
            node.innerHTML = '<i class="fas fa-check" style="font-size:1.3rem"></i>';
        } else {
            node.textContent = icones[modulo.id] || '📖';
        }

        const tooltip = document.createElement('div');
        tooltip.className = 'node-tooltip';
        tooltip.innerHTML =
            '<div class="tt-title">' + modulo.title + '</div>' +
            '<div class="tt-sub">' + modulo.exercicios.length + ' exercícios</div>' +
            '<div class="tt-xp">⭐ ' + xpTotal + ' XP</div>';

        wrap.appendChild(node);
        wrap.appendChild(tooltip);
        row.appendChild(wrap);
        ui.trilhaMap.appendChild(row);

        if (!isLocked) {
            node.addEventListener('click', function() { carregarModulo(index); });
        }

        nodeEls.push({ wrap, isCompleted, isLocked });
    });

    estado.novoDesbloqueado = null;
    requestAnimationFrame(function() { desenharTrilhaSVG(nodeEls); });
}

function desenharTrilhaSVG(nodeEls) {
    const svgVelho = ui.trilhaMap.querySelector('.trilha-svg-bg');
    if (svgVelho) svgVelho.remove();

    const mapRect = ui.trilhaMap.getBoundingClientRect();
    if (mapRect.height === 0) return;

    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'trilha-svg-bg');
    svg.setAttribute('viewBox', '0 0 ' + mapRect.width + ' ' + mapRect.height);
    svg.setAttribute('preserveAspectRatio', 'none');

    const centros = nodeEls.map(function(obj) {
        const r = obj.wrap.getBoundingClientRect();
        return {
            x: r.left - mapRect.left + r.width / 2,
            y: r.top  - mapRect.top  + r.height / 2,
        };
    });

    for (let i = 0; i < centros.length - 1; i++) {
        const a = centros[i];
        const b = centros[i + 1];
        const isDone = nodeEls[i].isCompleted;
        const midY = (a.y + b.y) / 2;
        const d = 'M ' + a.x + ' ' + a.y +
                  ' C ' + a.x + ' ' + midY + ',' +
                          b.x + ' ' + midY + ',' +
                          b.x + ' ' + b.y;
        const path = document.createElementNS(ns, 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', isDone ? '#22c55e' : '#2e2e2e');
        path.setAttribute('stroke-width', '5');
        path.setAttribute('stroke-linecap', 'round');
        if (!isDone) path.setAttribute('stroke-dasharray', '8 7');
        path.style.opacity = isDone ? '0.6' : '0.4';
        svg.appendChild(path);
    }

    ui.trilhaMap.insertBefore(svg, ui.trilhaMap.firstChild);
}
// =============================================
//  CARREGAR MÓDULO
// =============================================
function carregarModulo(index) {
    estado.moduloAtivo = index;
    estado.exercicioAtual = 0;

    const modulo = curriculum[index];

    ui.btnAulas.disabled = false;
    ui.btnExercicios.disabled = false;

    ui.aulaTitle.innerText = modulo.aula.titulo;
    ui.aulaContent.innerHTML = modulo.aula.conteudo;

    atualizarProgressoModulo();
    carregarExercicio(false);
    abrirAba('tab-aulas');
    salvarSessao();
}

// =============================================
//  PROGRESSO DO MÓDULO (STEPS DA AULA)
// =============================================
function atualizarProgressoModulo() {
    if (estado.moduloAtivo < 0) return;
    const modulo = curriculum[estado.moduloAtivo];
    const total = modulo.exercicios.length;

    ui.moduloProgress.style.display = 'block';
    ui.moduloProgressSteps.innerHTML = '';

    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = `step-dot ${i < estado.exercicioAtual ? 'done' : (i === estado.exercicioAtual ? 'active' : '')}`;
        ui.moduloProgressSteps.appendChild(dot);
    }
}

// =============================================
//  CARREGAR EXERCÍCIO
// =============================================
function carregarExercicio(mudarAba = true) {
    if (estado.moduloAtivo < 0) return;

    const modulo    = curriculum[estado.moduloAtivo];
    const exercicio = modulo.exercicios[estado.exercicioAtual];
    const total     = modulo.exercicios.length;

    // Atualizar título e dots
    ui.exTitle.innerText = `Missão ${estado.exercicioAtual + 1}`;

    // Renderizar progress dots
    ui.exProgressDots.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = `progress-dot ${i < estado.exercicioAtual ? 'done' : (i === estado.exercicioAtual ? 'active' : '')}`;
        dot.setAttribute('aria-label', `Exercício ${i + 1} de ${total}`);
        ui.exProgressDots.appendChild(dot);
    }

    ui.exInstruction.innerHTML = exercicio.instrucao;

    // Atualizar o editor CodeMirror
    if (codeMirrorEditor) {
        codeMirrorEditor.setValue(exercicio.codigoInicial);
        codeMirrorEditor.clearHistory();
        setTimeout(() => {
            codeMirrorEditor.refresh();
            codeMirrorEditor.focus();
        }, 60);
    }

    // Dica
    ui.hintText.innerHTML = exercicio.dica || "Revise a teoria na aba 'Aulas' ou foque nas tags principais.";
    ui.hintBox.classList.remove('visible');
    ui.btnHint.disabled = false;
    ui.btnHint.style.opacity = '';

    // Limpar feedback e tentativas
    esconderFeedback();
    estado.tentativas = 0;
    atualizarTentativas();

    atualizarPreview();
    atualizarProgressoModulo();

    if (mudarAba) abrirAba('tab-exercicios');
}

// =============================================
//  PREVIEW
// =============================================
function atualizarPreview() {
    const codigo = codeMirrorEditor ? codeMirrorEditor.getValue() : '';
    ui.preview.srcdoc = codigo;
}

// =============================================
//  VALIDAÇÃO DO EXERCÍCIO
// =============================================
function validarExercicio() {
    if (estado.moduloAtivo < 0) return;

    const modulo    = curriculum[estado.moduloAtivo];
    const exercicio = modulo.exercicios[estado.exercicioAtual];
    const codigo    = codeMirrorEditor ? codeMirrorEditor.getValue() : '';

    // Cria um iframe temporário oculto para validação isolada
    // Evita depender do onload do preview que é assíncrono e instável
    const iframeTemp = document.createElement('iframe');
    iframeTemp.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:800px;height:600px;';
    iframeTemp.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    document.body.appendChild(iframeTemp);

    iframeTemp.onload = function () {
        const iframeDoc = iframeTemp.contentDocument || iframeTemp.contentWindow.document;

        let aprovado = false;
        try {
            aprovado = exercicio.validar(codigo, iframeDoc);
        } catch (e) {
            console.warn('Erro na validação:', e);
            aprovado = false;
        }

        // Remove iframe temporário
        document.body.removeChild(iframeTemp);

        if (aprovado) {
            mostrarFeedback('success', `Correto! +${exercicio.xp} XP ganhos.`);
            ganharXP(exercicio.xp);
            estado.exercicioAtual++;
            if (estado.exercicioAtual < modulo.exercicios.length) {
                setTimeout(() => carregarExercicio(false), 1200);
            } else {
                setTimeout(() => concluirModulo(modulo), 1200);
            }
        } else {
            estado.tentativas++;
            atualizarTentativas();
            if (estado.tentativas >= estado.maxTentativas) {
                mostrarDica();
                mostrarFeedback('error', 'Ainda não está certo. Confira a dica acima!');
            } else {
                mostrarFeedback('error', 'Ops! O resultado ainda não está como esperado. Tente novamente.');
            }
        }
    };

    iframeTemp.srcdoc = codigo;
}
function resetarCodigo() {
    if (estado.moduloAtivo < 0) return;
    const exercicio = curriculum[estado.moduloAtivo].exercicios[estado.exercicioAtual];
    if (codeMirrorEditor) {
        codeMirrorEditor.setValue(exercicio.codigoInicial);
        codeMirrorEditor.clearHistory();
    }
    esconderFeedback();
    ui.hintBox.classList.remove('visible');
    estado.tentativas = 0;
    atualizarTentativas();
    atualizarPreview();
}

// =============================================
//  DICA
// =============================================
function mostrarDica() {
    ui.hintBox.classList.add('visible');
    ui.btnHint.disabled = true;
    ui.btnHint.style.opacity = '0.4';
}

function fecharDica() {
    ui.hintBox.classList.remove('visible');
    ui.btnHint.disabled = false;
    ui.btnHint.style.opacity = '';
}

// =============================================
//  TENTATIVAS
// =============================================
function atualizarTentativas() {
    if (estado.tentativas === 0) {
        ui.tentativasInfo.style.display = 'none';
        return;
    }
    const restantes = estado.maxTentativas - estado.tentativas;
    ui.tentativasInfo.style.display = 'flex';

    if (restantes > 0) {
        ui.tentativasTexto.innerText = `${restantes} tentativa(s) antes de ver a dica automaticamente`;
    } else {
        ui.tentativasTexto.innerText = 'Dica disponível acima ⬆️';
    }
}

// =============================================
//  FEEDBACK INLINE
// =============================================
function mostrarFeedback(tipo, msg) {
    const icone = tipo === 'success' ? '✅' : '❌';
    ui.feedbackIcon.innerText = icone;
    ui.feedbackMsg.innerText = msg;
    ui.feedbackArea.className = `feedback-area ${tipo}`;
    ui.feedbackArea.style.display = 'flex';

    // Shake no botão Validar se erro
    if (tipo === 'error') {
        ui.btnRun.classList.remove('shake');
        void ui.btnRun.offsetWidth; // reflow para reiniciar animação
        ui.btnRun.classList.add('shake');
    }
}

function esconderFeedback() {
    ui.feedbackArea.style.display = 'none';
    ui.feedbackArea.className = 'feedback-area';
}

// =============================================
//  XP E TOAST
// =============================================
function ganharXP(pontos) {
    estado.xpTotal += pontos;
    atualizarXP();
    mostrarToastXP(pontos);
    salvarSessao();
}

function atualizarXP() {
    ui.xpCount.innerText = estado.xpTotal;
}

function mostrarToastXP(pontos) {
    ui.xpToast.innerText = `+${pontos} XP ✨`;
    ui.xpToast.classList.add('show');
    setTimeout(() => ui.xpToast.classList.remove('show'), 2200);
}

// =============================================
//  MODAL DE CONCLUSÃO
// =============================================
function concluirModulo(modulo) {
    if (!estado.modulosCompletos.includes(modulo.id)) {
        estado.modulosCompletos.push(modulo.id);

        // Sinalizar qual módulo foi desbloqueado para animar na trilha
        const proximoIndex = curriculum.findIndex(m => m.id === modulo.id) + 1;
        if (proximoIndex < curriculum.length) {
            estado.novoDesbloqueado = curriculum[proximoIndex].id;
        }
        salvarSessao();
    }

    // XP total do módulo
    const xpTotal = modulo.exercicios.reduce((acc, ex) => acc + ex.xp, 0);
    ui.modalMessage.innerText = `Você dominou o módulo "${modulo.title}"! O próximo módulo foi desbloqueado na Trilha.`;
    ui.modalXpBadge.innerText = `🏆 +${xpTotal} XP`;

    ui.modalOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    ui.modalOverlay.classList.remove('visible');
    document.body.style.overflow = '';
    renderizarTrilha();
    abrirAba('tab-trilha');
}

// Fechar modal clicando fora
ui.modalOverlay && document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) fecharModal();
});
