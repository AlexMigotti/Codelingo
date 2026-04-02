// script.js — The Luminous Scholar v5.0
// 5 trilhas: Web, Python, HTML5, CSS3, JavaScript

const TRILHAS = [
    {
        id: 'web',
        nome: 'Fundamentos Web',
        descricao: 'HTML, CSS e JavaScript do zero ao avançado',
        icon: '🌐',
        badge: 'badge-web',
        badgeText: '20 módulos',
        getCurriculum: () => typeof curriculum !== 'undefined' ? curriculum : [],
        editorMode: 'htmlmixed',
        filename: 'index.html',
    },
    {
        id: 'python',
        nome: 'Python Essencial',
        descricao: 'Lógica, estruturas de dados e automação',
        icon: '🐍',
        badge: 'badge-py',
        badgeText: '10 módulos',
        getCurriculum: () => typeof curriculumPython !== 'undefined' ? curriculumPython : [],
        editorMode: 'python',
        filename: 'script.py',
    },
    {
        id: 'html5',
        nome: 'HTML5 Avançado',
        descricao: 'Semântica, acessibilidade, APIs modernas e PWA',
        icon: '📄',
        badge: 'badge-html',
        badgeText: '30 módulos',
        getCurriculum: () => typeof curriculumHTML !== 'undefined' ? curriculumHTML : [],
        editorMode: 'htmlmixed',
        filename: 'index.html',
    },
    {
        id: 'css3',
        nome: 'CSS3 Moderno',
        descricao: 'Layouts responsivos, animações, Grid, Flexbox',
        icon: '🎨',
        badge: 'badge-css',
        badgeText: '30 módulos',
        getCurriculum: () => typeof curriculumCSS !== 'undefined' ? curriculumCSS : [],
        editorMode: 'css',
        filename: 'style.css',
    },
    {
        id: 'javascript',
        nome: 'JavaScript Moderno',
        descricao: 'ES6+, assincronicidade, APIs, POO e projetos',
        icon: '⚡',
        badge: 'badge-js',
        badgeText: '30 módulos',
        getCurriculum: () => typeof curriculumJS !== 'undefined' ? curriculumJS : [],
        editorMode: 'javascript',
        filename: 'script.js',
    },
    {
        id: 'cpp',
        nome: 'C++ Essencial',
        descricao: 'Fundamentos, POO, STL e programação moderna',
        icon: '⚙️',
        badge: 'badge-cpp',
        badgeText: '30 módulos',
        getCurriculum: () => typeof curriculumCPP !== 'undefined' ? curriculumCPP : [],
        editorMode: 'text/x-c++src',
        filename: 'main.cpp',
    }
];

// ========== ESTADO ==========
const STORAGE_VERSION = 'ls_v5';

let estado = {
    trilhaId: 'web',
    moduloAtivo: -1,
    exercicioAtual: 0,
    xpTotal: 0,
    streak: 0,
    modulosCompletos: {},
    tentativas: 0,
    maxTentativas: 3,
    novoDesbloqueado: null,
};

let ui = {};
let codeMirrorEditor = null;
let debouncePreview = null;

// ========== UTILIDADES ==========
function getTrilhaAtual() {
    return TRILHAS.find(t => t.id === estado.trilhaId) || TRILHAS[0];
}
function getCurriculumAtual() {
    return getTrilhaAtual().getCurriculum();
}
function getCompletosAtual() {
    return estado.modulosCompletos[estado.trilhaId] || [];
}
function setCompletosAtual(arr) {
    estado.modulosCompletos[estado.trilhaId] = arr;
}

// ========== PERSISTÊNCIA ==========
function carregarSessao() {
    try {
        const v = localStorage.getItem('ls_version');
        if (v !== STORAGE_VERSION) {
            localStorage.clear();
            localStorage.setItem('ls_version', STORAGE_VERSION);
            return;
        }
        const xp = localStorage.getItem('ls_xp');
        if (xp) estado.xpTotal = parseInt(xp) || 0;
        const streak = localStorage.getItem('ls_streak');
        if (streak) estado.streak = parseInt(streak) || 0;
        const mods = localStorage.getItem('ls_completos');
        if (mods) {
            const parsed = JSON.parse(mods);
            if (typeof parsed === 'object' && !Array.isArray(parsed)) {
                estado.modulosCompletos = parsed;
            }
        }
        const tid = localStorage.getItem('ls_trilha');
        if (tid && TRILHAS.find(t => t.id === tid)) estado.trilhaId = tid;
        const mid = localStorage.getItem('ls_modulo_' + estado.trilhaId);
        if (mid !== null) {
            const idx = parseInt(mid);
            const curr = getCurriculumAtual();
            if (idx >= 0 && idx < curr.length) estado.moduloAtivo = idx;
        }
    } catch(e) { console.warn(e); }
}

function salvarSessao() {
    try {
        localStorage.setItem('ls_version', STORAGE_VERSION);
        localStorage.setItem('ls_xp', estado.xpTotal);
        localStorage.setItem('ls_streak', estado.streak);
        localStorage.setItem('ls_completos', JSON.stringify(estado.modulosCompletos));
        localStorage.setItem('ls_trilha', estado.trilhaId);
        if (estado.moduloAtivo >= 0) {
            localStorage.setItem('ls_modulo_' + estado.trilhaId, estado.moduloAtivo);
        }
    } catch(e) {}
}

// ========== INICIALIZAÇÃO ==========
window.onload = function() {
    ui = {
        xpCount: document.getElementById('xp-count'),
        streakCount: document.getElementById('streak-count'),
        scholarLabel: document.getElementById('scholar-level-label'),
        tabs: document.querySelectorAll('.ls-nav-btn'),
        panes: document.querySelectorAll('.ls-pane'),
        trilhaMap: document.getElementById('trilha-map'),
        trilhaPathLabel: document.getElementById('trilha-path-label'),
        trilhaPathTitle: document.getElementById('trilha-path-title'),
        btnAulas: document.getElementById('btn-aulas'),
        btnExercicios: document.getElementById('btn-exercicios'),
        progressBarFill: document.getElementById('progress-bar-fill'),
        progressText: document.getElementById('progress-text'),
        progressBarAria: document.getElementById('progress-bar-aria'),
        aulaTitle: document.getElementById('aula-title'),
        aulaContent: document.getElementById('aula-content'),
        aulaBreadcrumb: document.getElementById('aula-modulo-label'),
        moduloProgress: document.getElementById('modulo-progress'),
        moduloProgressSteps: document.getElementById('modulo-progress-steps'),
        btnGoExercises: document.getElementById('go-to-exercises'),
        exTitle: document.getElementById('ex-title'),
        exProgressDots: document.getElementById('ex-progress-dots'),
        exInstruction: document.getElementById('ex-instruction'),
        editorTextarea: document.getElementById('code-editor'),
        preview: document.getElementById('live-preview'),
        btnRun: document.getElementById('run-code'),
        btnHint: document.getElementById('btn-hint'),
        btnCloseHint: document.getElementById('btn-close-hint'),
        btnReset: document.getElementById('btn-reset'),
        hintBox: document.getElementById('hint-box'),
        hintText: document.getElementById('hint-text'),
        feedbackArea: document.getElementById('feedback-area'),
        feedbackIcon: document.getElementById('feedback-icon'),
        feedbackMsg: document.getElementById('feedback-msg'),
        tentativasInfo: document.getElementById('tentativas-info'),
        tentativasTexto: document.getElementById('tentativas-texto'),
        xpToast: document.getElementById('xp-toast'),
        modalOverlay: document.getElementById('modal-overlay'),
        modalMessage: document.getElementById('modal-message'),
        modalXpBadge: document.getElementById('modal-xp-badge'),
        modalCloseBtn: document.getElementById('modal-close-btn'),
        wsMissionBadge: document.getElementById('ws-mission-badge'),
        wsFilename: document.getElementById('ws-filename'),
        avatarBtn: document.getElementById('ls-avatar-btn'),
        trilhaSelectorOverlay: document.getElementById('trilha-selector-overlay'),
        tsGrid: document.getElementById('ts-grid'),
    };
    carregarSessao();
    inicializarCodeMirror();
    inicializarSeletorTrilha();
    iniciar();
};

function iniciar() {
    atualizarStats();
    configurarNavegacao();
    renderizarTrilha();
    configurarEventos();
    restaurarModuloAtivo();
}

function configurarEventos() {
    ui.btnGoExercises.addEventListener('click', () => abrirAba('tab-exercicios'));
    ui.btnRun.addEventListener('click', validarExercicio);
    ui.btnHint.addEventListener('click', mostrarDica);
    ui.btnCloseHint.addEventListener('click', fecharDica);
    ui.btnReset.addEventListener('click', resetarCodigo);
    ui.modalCloseBtn.addEventListener('click', fecharModal);
    document.getElementById('modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) fecharModal();
    });
}

function restaurarModuloAtivo() {
    if (estado.moduloAtivo >= 0) {
        const curr = getCurriculumAtual();
        if (estado.moduloAtivo < curr.length) {
            const mod = curr[estado.moduloAtivo];
            ui.btnAulas.disabled = false;
            ui.btnExercicios.disabled = false;
            ui.aulaTitle.innerText = mod.aula.titulo;
            ui.aulaContent.innerHTML = mod.aula.conteudo;
            if (ui.aulaBreadcrumb) ui.aulaBreadcrumb.innerText = mod.title;
            atualizarProgressoModulo();
            carregarExercicio(false);
        }
    }
}

function atualizarStats() {
    ui.xpCount.innerText = estado.xpTotal >= 1000 ? (estado.xpTotal / 1000).toFixed(1) + 'k' : estado.xpTotal;
    ui.streakCount.innerText = estado.streak;
    const level = Math.max(1, Math.floor(estado.xpTotal / 200) + 1);
    if (ui.scholarLabel) ui.scholarLabel.innerText = 'Scholar Level ' + level;
}

function inicializarSeletorTrilha() {
    ui.tsGrid.innerHTML = '';
    TRILHAS.forEach(trilha => {
        const card = document.createElement('div');
        card.className = 'ts-card' + (trilha.id === estado.trilhaId ? ' active' : '');
        card.dataset.trilhaId = trilha.id;
        card.innerHTML = `
            <span class="ts-card-icon">${trilha.icon}</span>
            <div class="ts-card-info">
                <h4>${trilha.nome}</h4>
                <p>${trilha.descricao}</p>
            </div>
            <span class="ts-card-badge ${trilha.badge}">${trilha.badgeText}</span>
        `;
        card.addEventListener('click', () => selecionarTrilha(trilha.id));
        ui.tsGrid.appendChild(card);
    });
    ui.avatarBtn.addEventListener('click', () => abrirSeletorTrilha());
    ui.trilhaSelectorOverlay.addEventListener('click', function(e) {
        if (e.target === this) fecharSeletorTrilha();
    });
}

function abrirSeletorTrilha() {
    ui.trilhaSelectorOverlay.classList.add('open');
    ui.trilhaSelectorOverlay.setAttribute('aria-hidden', 'false');
}
function fecharSeletorTrilha() {
    ui.trilhaSelectorOverlay.classList.remove('open');
    ui.trilhaSelectorOverlay.setAttribute('aria-hidden', 'true');
}

function selecionarTrilha(id) {
    if (id === estado.trilhaId) { fecharSeletorTrilha(); return; }
    estado.trilhaId = id;
    estado.moduloAtivo = -1;
    estado.exercicioAtual = 0;
    try {
        const mid = localStorage.getItem('ls_modulo_' + id);
        if (mid !== null) {
            const idx = parseInt(mid);
            const curr = getCurriculumAtual();
            if (idx >= 0 && idx < curr.length) estado.moduloAtivo = idx;
        }
    } catch(e) {}
    ui.tsGrid.querySelectorAll('.ts-card').forEach(c => {
        c.classList.toggle('active', c.dataset.trilhaId === id);
    });
    ui.btnAulas.disabled = true;
    ui.btnExercicios.disabled = true;
    ui.aulaTitle.innerText = 'Selecione um módulo na Trilha';
    ui.aulaContent.innerHTML = '';
    const trilha = getTrilhaAtual();
    if (codeMirrorEditor) codeMirrorEditor.setOption('mode', trilha.editorMode);
    if (ui.wsFilename) ui.wsFilename.innerText = trilha.filename;
    salvarSessao();
    renderizarTrilha();
    abrirAba('tab-trilha');
    fecharSeletorTrilha();
    restaurarModuloAtivo();
}

function configurarNavegacao() {
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
    const tabAlvo = document.querySelector('[data-target="' + idAlvo + '"]');
    if (tabAlvo) { tabAlvo.classList.add('active'); tabAlvo.setAttribute('aria-selected','true'); }
    const paneAlvo = document.getElementById(idAlvo);
    if (paneAlvo) {
        paneAlvo.classList.add('active');
        if (idAlvo === 'tab-exercicios') {
            setTimeout(() => { if (codeMirrorEditor) { codeMirrorEditor.refresh(); codeMirrorEditor.focus(); } }, 60);
        }
    }
}

function inicializarCodeMirror() {
    const trilha = getTrilhaAtual();
    codeMirrorEditor = CodeMirror.fromTextArea(ui.editorTextarea, {
        mode: trilha.editorMode,
        theme: 'dracula',
        lineNumbers: true,
        matchBrackets: true,
        autoCloseTags: true,
        lineWrapping: false,
        tabSize: 2,
        indentWithTabs: false,
        extraKeys: { Tab: cm => cm.replaceSelection('  ', 'end') },
    });
    codeMirrorEditor.on('change', () => {
        clearTimeout(debouncePreview);
        debouncePreview = setTimeout(atualizarPreview, 380);
    });
}

// ========== TRILHA (MAPA) ==========
const FASES_WEB = [
    { label:'Fase 1 — Fundamentos', cls:'f1', ids:['html_masterclass','css_masterclass','js_masterclass','html_forms_semantic','html_media_tables'] },
    { label:'Fase 2 — CSS Intermediário', cls:'f2', ids:['css_flexbox','css_grid','css_responsivo','css_animacoes'] },
    { label:'Fase 3 — JS Avançado', cls:'f3', ids:['js_logica','js_arrays_loops','js_funcoes','js_dom_avancado'] },
    { label:'Fase 4 — Projetos Práticos', cls:'f4', ids:['projeto_landing','projeto_portfolio','projeto_todo','projeto_quiz'] },
    { label:'Fase 5 — Profissional', cls:'f5', ids:['git_versionamento','acessibilidade_web','seo_boas_praticas'] },
];
const FASES_PY = [
    { label:'Python — Primeiros Passos', cls:'f-py', ids:['py_intro','py_variaveis','py_strings'] },
    { label:'Python — Lógica', cls:'f-py', ids:['py_condicional','py_loops','py_funcoes'] },
    { label:'Python — Estruturas', cls:'f-py', ids:['py_listas','py_dicts','py_arquivos','py_projeto'] },
];
const FASES_HTML = [
    { label:'HTML5 — Fundamentos', cls:'f-html', ids:['html_estrutura_base','html_semantica_basica','html_titulos_paragrafos','html_listas','html_links_navegacao'] },
    { label:'HTML5 — Mídia e Formulários', cls:'f-html', ids:['html_imagens','html_tabelas','html_formularios','html_multimidia','html_iframe'] },
    { label:'HTML5 — SEO e Acessibilidade', cls:'f-html', ids:['html_seo_meta','html_microdados','html_aria_basico','html_svg','html_canvas'] },
    { label:'HTML5 — APIs Avançadas', cls:'f-html', ids:['html_drag_drop','html_contenteditable','html_details_summary','html_progress_meter','html_validacao_form'] },
    { label:'HTML5 — Web Components e PWA', cls:'f-html', ids:['html_custom_elements','html_shadow_dom','html_localstorage','html_geolocation','html_web_workers'] },
    { label:'HTML5 — Projeto Final', cls:'f-html', ids:['html_service_worker','html_websockets','html_webrtc','html_security','html_projeto_final'] },
];
const FASES_CSS = [
    { label:'CSS3 — Fundamentos', cls:'f-css', ids:['css_seletores','css_box_model','css_cores_fundo','css_fontes','css_display'] },
    { label:'CSS3 — Layout', cls:'f-css', ids:['css_posicionamento','css_pseudo_classes','css_pseudo_elementos','css_especificidade','css_unidades'] },
    { label:'CSS3 — Flexbox', cls:'f-css', ids:['css_flexbox_intro','css_flex_wrap','css_flex_grow','css_grid_intro','css_grid_areas'] },
    { label:'CSS3 — Animações e Transições', cls:'f-css', ids:['css_transicoes','css_animacoes','css_media_queries','css_variaveis','css_transformacoes'] },
    { label:'CSS3 — Avançado', cls:'f-css', ids:['css_flexbox_avancado','css_grid_avancado','css_clamp','css_container_queries','css_layer'] },
    { label:'CSS3 — Projeto Final', cls:'f-css', ids:['css_has','css_acessibilidade','css_performance','css_arquitetura','css_projeto_final'] },
];
const FASES_JS = [
    { label:'JS — Fundamentos ES6+', cls:'f-js', ids:['js_variaveis','js_template_strings','js_arrow_functions','js_destructuring','js_spread_rest'] },
    { label:'JS — Arrays e POO', cls:'f-js', ids:['js_map_filter_reduce','js_classes','js_promises','js_async_await','js_fetch_api'] },
    { label:'JS — Browser APIs', cls:'f-js', ids:['js_localstorage','js_json','js_closure','js_this_bind','js_modules'] },
    { label:'JS — DOM e Eventos', cls:'f-js', ids:['js_dom_manipulation','js_eventos','js_settimeout_interval','js_errors','js_hoisting'] },
    { label:'JS — APIs Avançadas', cls:'f-js', ids:['js_proxy','js_web_workers','js_service_worker','js_generators','js_geolocation'] },
    { label:'JS — Projeto Final', cls:'f-js', ids:['js_websockets','js_webrtc','js_debounce_throttle','js_testing_jest','js_projeto_final'] },
];
const FASES_CPP = [
    { label:'C++ — Fundamentos', cls:'f-cpp', ids:['cpp_hello_world','cpp_variaveis_tipos','cpp_entrada_saida','cpp_condicionais','cpp_loops'] },
    { label:'C++ — Estruturas de Dados', cls:'f-cpp', ids:['cpp_arrays','cpp_funcoes','cpp_ponteiros','cpp_alocacao_dinamica','cpp_arrays_dinamicos'] },
    { label:'C++ — POO', cls:'f-cpp', ids:['cpp_referencias','cpp_sobrecarga','cpp_classes','cpp_construtores','cpp_heranca'] },
    { label:'C++ — POO Avançada', cls:'f-cpp', ids:['cpp_polimorfismo','cpp_classes_abstratas','cpp_sobrecarga_operadores','cpp_templates','cpp_excecoes'] },
    { label:'C++ — STL e Moderno', cls:'f-cpp', ids:['cpp_vector_stl','cpp_algoritmos_stl','cpp_map_set','cpp_smart_pointers','cpp_move_semantics'] },
    { label:'C++ — Projeto Final', cls:'f-cpp', ids:['cpp_lambdas','cpp_threads','cpp_arquivos','cpp_constexpr','cpp_projeto_final'] },
];
const ICONES_WEB = {
    html_masterclass:'🏗️', css_masterclass:'🎨', js_masterclass:'⚡',
    html_forms_semantic:'📋', html_media_tables:'📊',
    css_flexbox:'📐', css_grid:'🔲', css_responsivo:'📱', css_animacoes:'✨',
    js_logica:'🧠', js_arrays_loops:'🔁', js_funcoes:'🔧', js_dom_avancado:'🖱️',
    projeto_landing:'🚀', projeto_portfolio:'💼', projeto_todo:'✅', projeto_quiz:'🎯',
    git_versionamento:'📦', acessibilidade_web:'♿', seo_boas_praticas:'🔍',
};
const ICONES_PY = {
    py_intro:'🐍', py_variaveis:'📦', py_strings:'🔤',
    py_condicional:'🔀', py_loops:'🔄', py_funcoes:'⚙️',
    py_listas:'📋', py_dicts:'📖', py_arquivos:'💾', py_projeto:'🏆',
};
const ICONES_HTML = {
    html_estrutura_base:'🏗️', html_semantica_basica:'📝', html_titulos_paragrafos:'✍️',
    html_listas:'📋', html_links_navegacao:'🔗', html_imagens:'🖼️',
    html_tabelas:'📊', html_formularios:'📝', html_multimidia:'🎬', html_iframe:'🪟',
    html_seo_meta:'🔍', html_microdados:'🏷️', html_aria_basico:'♿', html_svg:'✏️', html_canvas:'🎨',
    html_drag_drop:'🖱️', html_contenteditable:'✏️', html_details_summary:'📂',
    html_progress_meter:'📈', html_validacao_form:'✅',
    html_custom_elements:'🧩', html_shadow_dom:'👥', html_localstorage:'💾',
    html_geolocation:'📍', html_web_workers:'⚙️',
    html_service_worker:'🔧', html_websockets:'🔌', html_webrtc:'📡',
    html_security:'🔒', html_projeto_final:'🏆',
};
const ICONES_CSS = {
    css_seletores:'🎯', css_box_model:'📦', css_cores_fundo:'🎨', css_fontes:'🔤', css_display:'📐',
    css_posicionamento:'📌', css_pseudo_classes:'🔮', css_pseudo_elementos:'✨',
    css_especificidade:'⚖️', css_unidades:'📏',
    css_flexbox_intro:'↔️', css_flex_wrap:'🔀', css_flex_grow:'📈',
    css_grid_intro:'🔲', css_grid_areas:'🗺️',
    css_transicoes:'🌊', css_animacoes:'🎬', css_media_queries:'📱',
    css_variaveis:'🔧', css_transformacoes:'🔄',
    css_flexbox_avancado:'💡', css_grid_avancado:'🏗️', css_clamp:'📐',
    css_container_queries:'📦', css_layer:'🗂️',
    css_has:'🔍', css_acessibilidade:'♿', css_performance:'⚡',
    css_arquitetura:'🏛️', css_projeto_final:'🏆',
};
const ICONES_JS = {
    js_variaveis:'📦', js_template_strings:'🔤', js_arrow_functions:'➡️',
    js_destructuring:'📤', js_spread_rest:'🌊',
    js_map_filter_reduce:'🔁', js_classes:'🏛️', js_promises:'🤝',
    js_async_await:'⏳', js_fetch_api:'🌐',
    js_localstorage:'💾', js_json:'📄', js_closure:'🔒',
    js_this_bind:'🎯', js_modules:'📦',
    js_dom_manipulation:'🖱️', js_eventos:'📡', js_settimeout_interval:'⏱️',
    js_errors:'⚠️', js_hoisting:'🏗️',
    js_proxy:'🪄', js_web_workers:'⚙️', js_service_worker:'🔧',
    js_generators:'🔄', js_geolocation:'📍',
    js_websockets:'🔌', js_webrtc:'📡', js_debounce_throttle:'⏬',
    js_testing_jest:'🧪', js_projeto_final:'🏆',
};
const ICONES_CPP = {
    cpp_hello_world:'👋', cpp_variaveis_tipos:'📦', cpp_entrada_saida:'⌨️',
    cpp_condicionais:'🔀', cpp_loops:'🔄',
    cpp_arrays:'📋', cpp_funcoes:'🔧', cpp_ponteiros:'👆',
    cpp_alocacao_dinamica:'🧠', cpp_arrays_dinamicos:'📈',
    cpp_referencias:'🔗', cpp_sobrecarga:'⚙️', cpp_classes:'🏛️',
    cpp_construtores:'🏗️', cpp_heranca:'🧬',
    cpp_polimorfismo:'🔮', cpp_classes_abstratas:'🎭',
    cpp_sobrecarga_operadores:'➕', cpp_templates:'📐', cpp_excecoes:'⚠️',
    cpp_vector_stl:'📦', cpp_algoritmos_stl:'🔍', cpp_map_set:'🗺️',
    cpp_smart_pointers:'🧠', cpp_move_semantics:'🚀',
    cpp_lambdas:'λ', cpp_threads:'🧵', cpp_arquivos:'💾',
    cpp_constexpr:'⚡', cpp_projeto_final:'🏆',
};

const POSICOES_ZZ = ['C','R','C','L','C','R','C','L','C','R'];

function renderizarTrilha() {
    ui.trilhaMap.innerHTML = '';
    const curr = getCurriculumAtual();
    const completos = getCompletosAtual();
    const trilha = getTrilhaAtual();
    if (ui.trilhaPathLabel) ui.trilhaPathLabel.innerText = 'Current Path';
    if (ui.trilhaPathTitle) ui.trilhaPathTitle.innerText = trilha.nome;
    const pct = curr.length > 0 ? Math.round((completos.length / curr.length) * 100) : 0;
    ui.progressBarFill.style.width = pct + '%';
    ui.progressText.innerText = pct + '%';
    if (ui.progressBarAria) ui.progressBarAria.setAttribute('aria-valuenow', pct);

    let fases, icones;
    if      (trilha.id === 'python')     { fases = FASES_PY;  icones = ICONES_PY;  }
    else if (trilha.id === 'html5')      { fases = FASES_HTML; icones = ICONES_HTML; }
    else if (trilha.id === 'css3')       { fases = FASES_CSS;  icones = ICONES_CSS;  }
    else if (trilha.id === 'javascript') { fases = FASES_JS;   icones = ICONES_JS;   }
    else if (trilha.id === 'cpp')        { fases = FASES_CPP;  icones = ICONES_CPP;  }
    else                                 { fases = FASES_WEB;  icones = ICONES_WEB;  }

    let primeiroDisp = curr.length;
    for (let i = 0; i < curr.length; i++) {
        const done = completos.includes(curr[i].id);
        const locked = i > 0 && !completos.includes(curr[i-1].id);
        if (!done && !locked) { primeiroDisp = i; break; }
    }

    let faseAtual = -1;
    const nodeEls = [];
    curr.forEach((modulo, index) => {
        const done = completos.includes(modulo.id);
        const locked = index > 0 && !completos.includes(curr[index-1].id);
        const isAtual = index === primeiroDisp;
        const faseDeste = fases.findIndex(f => f.ids.includes(modulo.id));
        if (faseDeste !== faseAtual && faseDeste >= 0) {
            faseAtual = faseDeste;
            const faixa = document.createElement('div');
            faixa.className = 'fase-faixa';
            const pill = document.createElement('div');
            pill.className = 'fase-pill ' + fases[faseDeste].cls;
            pill.textContent = fases[faseDeste].label;
            faixa.appendChild(pill);
            ui.trilhaMap.appendChild(faixa);
        }
        const xpTotal = modulo.exercicios.reduce((a,ex)=>a+ex.xp,0);
        const pos = POSICOES_ZZ[index % POSICOES_ZZ.length];
        const row = document.createElement('div');
        row.className = 'mapa-row pos-' + pos;
        const wrap = document.createElement('div');
        wrap.className = 'mapa-node-wrap' + (isAtual ? ' is-atual' : '');
        wrap.style.animationDelay = (index * 0.04) + 's';
        const startBadge = document.createElement('div');
        startBadge.className = 'node-start-label';
        startBadge.textContent = 'START';
        wrap.appendChild(startBadge);
        const node = document.createElement('button');
        let sc = 's-lock';
        if (done) sc = 's-done';
        else if (isAtual) sc = 's-atual';
        else if (!locked) sc = 's-open';
        node.className = 'mapa-node ' + sc;
        node.setAttribute('aria-label', modulo.title + (done?' — concluído':locked?' — bloqueado':''));
        node.setAttribute('tabindex', locked ? '-1' : '0');
        if (locked) node.innerHTML = '<i class="fas fa-lock" style="font-size:1rem;opacity:0.4"></i>';
        else if (done) node.innerHTML = '<i class="fas fa-check" style="font-size:1.2rem"></i>';
        else node.textContent = (icones[modulo.id] || '📖');
        const label = document.createElement('div');
        label.className = 'node-label';
        const shortTitle = modulo.title.replace(/^Módulo \d+:\s*/,'').split('(')[0].trim();
        label.textContent = shortTitle.length > 14 ? shortTitle.substring(0,14)+'…' : shortTitle;
        const tooltip = document.createElement('div');
        tooltip.className = 'node-tooltip';
        tooltip.innerHTML = `<div class="tt-title">${modulo.title}</div><div class="tt-sub">${modulo.exercicios.length} exercícios</div><div class="tt-xp">⭐ ${xpTotal} XP</div>`;
        wrap.appendChild(node);
        wrap.appendChild(label);
        wrap.appendChild(tooltip);
        row.appendChild(wrap);
        ui.trilhaMap.appendChild(row);
        if (!locked) node.addEventListener('click', function() { carregarModulo(index); });
        nodeEls.push({ wrap, done, locked });
    });
    estado.novoDesbloqueado = null;
    requestAnimationFrame(() => desenharTrilhaSVG(nodeEls));
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
    const centros = nodeEls.map(obj => {
        const r = obj.wrap.getBoundingClientRect();
        return { x: r.left - mapRect.left + r.width/2, y: r.top - mapRect.top + r.height/2 };
    });
    for (let i = 0; i < centros.length - 1; i++) {
        const a = centros[i], b = centros[i+1];
        const midY = (a.y + b.y) / 2;
        const d = `M ${a.x} ${a.y} C ${a.x} ${midY},${b.x} ${midY},${b.x} ${b.y}`;
        const path = document.createElementNS(ns, 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', nodeEls[i].done ? '#22c55e' : '#2a2a2a');
        path.setAttribute('stroke-width', '5');
        path.setAttribute('stroke-linecap', 'round');
        if (!nodeEls[i].done) path.setAttribute('stroke-dasharray', '8 7');
        path.style.opacity = nodeEls[i].done ? '0.7' : '0.5';
        svg.appendChild(path);
    }
    ui.trilhaMap.insertBefore(svg, ui.trilhaMap.firstChild);
}

function carregarModulo(index) {
    const curr = getCurriculumAtual();
    const modulo = curr[index];
    estado.moduloAtivo = index;
    estado.exercicioAtual = 0;
    ui.btnAulas.disabled = false;
    ui.btnExercicios.disabled = false;
    ui.aulaTitle.innerText = modulo.aula.titulo;
    ui.aulaContent.innerHTML = modulo.aula.conteudo;
    if (ui.aulaBreadcrumb) ui.aulaBreadcrumb.innerText = modulo.title;
    atualizarProgressoModulo();
    carregarExercicio(false);
    abrirAba('tab-aulas');
    salvarSessao();
}

function atualizarProgressoModulo() {
    if (estado.moduloAtivo < 0) return;
    const curr = getCurriculumAtual();
    const mod = curr[estado.moduloAtivo];
    if (!mod) return;
    ui.moduloProgress.style.display = 'block';
    ui.moduloProgressSteps.innerHTML = '';
    mod.exercicios.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'step-dot' + (i < estado.exercicioAtual ? ' done' : (i === estado.exercicioAtual ? ' active' : ''));
        ui.moduloProgressSteps.appendChild(dot);
    });
}

function carregarExercicio(mudarAba) {
    if (estado.moduloAtivo < 0) return;
    const curr = getCurriculumAtual();
    const mod = curr[estado.moduloAtivo];
    const exercicio = mod.exercicios[estado.exercicioAtual];
    const total = mod.exercicios.length;
    const trilha = getTrilhaAtual();
    if (ui.wsMissionBadge) ui.wsMissionBadge.innerText = 'Missão ' + (estado.exercicioAtual+1);
    ui.exTitle.innerText = 'Desafio ' + (estado.exercicioAtual+1) + ' / ' + total;
    if (ui.wsFilename) ui.wsFilename.innerText = trilha.filename;
    ui.exProgressDots.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'ws-dot' + (i < estado.exercicioAtual ? ' done' : (i === estado.exercicioAtual ? ' active' : ''));
        ui.exProgressDots.appendChild(dot);
    }
    ui.exInstruction.innerHTML = exercicio.instrucao;
    if (codeMirrorEditor) {
        codeMirrorEditor.setOption('mode', trilha.editorMode);
        codeMirrorEditor.setValue(exercicio.codigoInicial);
        codeMirrorEditor.clearHistory();
        setTimeout(() => { codeMirrorEditor.refresh(); codeMirrorEditor.focus(); }, 80);
    }
    ui.hintText.innerHTML = exercicio.dica || "Revise a teoria na aba Aulas.";
    fecharDica();
    ui.btnHint.disabled = false;
    ui.btnHint.style.opacity = '';
    esconderFeedback();
    estado.tentativas = 0;
    atualizarTentativas();
    atualizarPreview();
    atualizarProgressoModulo();
    if (mudarAba !== false) abrirAba('tab-exercicios');
}

function atualizarPreview() {
    const codigo = codeMirrorEditor ? codeMirrorEditor.getValue() : '';
    const trilha = getTrilhaAtual();
    if (trilha.id === 'python') {
        const escaped = codigo.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        ui.preview.srcdoc = '<html><body style="background:#0d1117;color:#c9d1d9;font-family:monospace;font-size:14px;padding:16px;margin:0;white-space:pre">' + escaped + '</body></html>';
    } else {
        ui.preview.srcdoc = codigo;
    }
}

function resetarCodigo() {
    if (estado.moduloAtivo < 0) return;
    const ex = getCurriculumAtual()[estado.moduloAtivo].exercicios[estado.exercicioAtual];
    if (codeMirrorEditor) { codeMirrorEditor.setValue(ex.codigoInicial); codeMirrorEditor.clearHistory(); }
    esconderFeedback(); fecharDica();
    estado.tentativas = 0; atualizarTentativas(); atualizarPreview();
}

function mostrarDica() {
    ui.hintBox.classList.add('visible');
    ui.btnHint.disabled = true; ui.btnHint.style.opacity = '0.4';
}
function fecharDica() {
    ui.hintBox.classList.remove('visible');
    ui.btnHint.disabled = false; ui.btnHint.style.opacity = '';
}

function atualizarTentativas() {
    if (estado.tentativas === 0) { ui.tentativasInfo.style.display = 'none'; return; }
    const rest = estado.maxTentativas - estado.tentativas;
    ui.tentativasInfo.style.display = 'flex';
    ui.tentativasTexto.innerText = rest > 0 ? rest + ' tentativa(s) antes da dica aparecer' : 'Confira a dica acima ⬆️';
}

function mostrarFeedback(tipo, msg) {
    ui.feedbackIcon.innerText = tipo === 'success' ? '✅' : '❌';
    ui.feedbackMsg.innerText = msg;
    ui.feedbackArea.className = 'ws-feedback ' + tipo;
    ui.feedbackArea.style.display = 'flex';
    if (tipo === 'error') {
        ui.btnRun.classList.remove('shake');
        void ui.btnRun.offsetWidth;
        ui.btnRun.classList.add('shake');
    }
}
function esconderFeedback() {
    ui.feedbackArea.style.display = 'none';
    ui.feedbackArea.className = 'ws-feedback';
}

function validarExercicio() {
    if (estado.moduloAtivo < 0) return;
    const curr = getCurriculumAtual();
    const mod = curr[estado.moduloAtivo];
    const exercicio = mod.exercicios[estado.exercicioAtual];
    const codigo = codeMirrorEditor ? codeMirrorEditor.getValue() : '';
    const trilha = getTrilhaAtual();
    if (trilha.id === 'python') {
        let aprovado = false;
        try { aprovado = exercicio.validar(codigo, null); } catch(e) { aprovado = false; }
        processarResultadoValidacao(aprovado, exercicio, mod);
        return;
    }
    const iframeTemp = document.createElement('iframe');
    iframeTemp.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:800px;height:600px;';
    iframeTemp.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    document.body.appendChild(iframeTemp);
    iframeTemp.onload = function() {
        const iframeDoc = iframeTemp.contentDocument || iframeTemp.contentWindow.document;
        let aprovado = false;
        try { aprovado = exercicio.validar(codigo, iframeDoc); } catch(e) { aprovado = false; }
        document.body.removeChild(iframeTemp);
        processarResultadoValidacao(aprovado, exercicio, mod);
    };
    iframeTemp.srcdoc = codigo;
}

function processarResultadoValidacao(aprovado, exercicio, mod) {
    if (aprovado) {
        mostrarFeedback('success', 'Correto! +' + exercicio.xp + ' XP ganhos.');
        ganharXP(exercicio.xp);
        estado.exercicioAtual++;
        if (estado.exercicioAtual < mod.exercicios.length) {
            setTimeout(() => carregarExercicio(false), 1100);
        } else {
            setTimeout(() => concluirModulo(mod), 1100);
        }
    } else {
        estado.tentativas++;
        atualizarTentativas();
        if (estado.tentativas >= estado.maxTentativas) {
            mostrarDica();
            mostrarFeedback('error', 'Ainda não está certo. Confira a dica!');
        } else {
            mostrarFeedback('error', 'Ops! Resultado inesperado. Tente novamente.');
        }
    }
}

function ganharXP(pontos) {
    estado.xpTotal += pontos;
    atualizarStats();
    mostrarToastXP(pontos);
    salvarSessao();
}
function mostrarToastXP(pontos) {
    ui.xpToast.innerText = '+' + pontos + ' XP ✨';
    ui.xpToast.classList.add('show');
    setTimeout(() => ui.xpToast.classList.remove('show'), 2200);
}

function concluirModulo(mod) {
    const completos = getCompletosAtual();
    if (!completos.includes(mod.id)) {
        completos.push(mod.id);
        setCompletosAtual(completos);
        salvarSessao();
    }
    const xpTotal = mod.exercicios.reduce((a,ex)=>a+ex.xp,0);
    ui.modalMessage.innerText = 'Você dominou "' + mod.title + '"! O próximo módulo foi desbloqueado.';
    ui.modalXpBadge.innerText = '🏆 +' + xpTotal + ' XP';
    ui.modalOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}
function fecharModal() {
    ui.modalOverlay.classList.remove('visible');
    document.body.style.overflow = '';
    renderizarTrilha();
    abrirAba('tab-trilha');
}