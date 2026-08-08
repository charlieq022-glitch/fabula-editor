const traduzioni = {
    it: {
        chaptersAndScenes: "Capitoli & Scene",
        characters: "Personaggi",
        dictionaryAndLexicon: "Dizionario & Lessico",
        plotAndWorlds: "Plot & Mondi",
        open: "Apri",
        chapter: "Capitolo",
        scene: "Scena",
        sceneTools: "Strumenti di Scena",
        sceneTab: "Scena",
        chronoTab: "Cronologia",
        dictTab: "Dizionario",
        pov: "Personaggio POV",
        goal: "Obiettivo (Goal)",
        conflict: "Conflitto",
        outcome: "Risultato (Outcome)",
        beatSheet: "Beat Sheet di Scena",
        savedVersions: "Versioni Salvate",
        saveNow: "+ Salva Ora",
        noVersions: "Nessuna versione salvata.",
        definition: "Definizione:",
        example: "Esempio:",
        shareAlert: "Link di condivisione copiato negli appunti!",
        newChapter: "Nuovo Capitolo",
        newScene: "Nuova Scena",
        newCharacter: "Nuovo Personaggio",
        editChapter: "Modifica Titolo Capitolo",
        editScene: "Modifica Titolo Scena",
        placeholderPlot: "Appunti generali sulla trama...",
        placeholderWrite: "Scrivi qui...",
        words: "Parole",
        goalLabel: "Obiettivo",
        logline: "Logline"
    },
    en: {
        chaptersAndScenes: "Chapters & Scenes",
        characters: "Characters",
        dictionaryAndLexicon: "Dictionary & Lexicon",
        plotAndWorlds: "Plot & Worlds",
        open: "Open",
        chapter: "Chapter",
        scene: "Scene",
        sceneTools: "Scene Tools",
        sceneTab: "Scene",
        chronoTab: "Timeline",
        dictTab: "Dictionary",
        pov: "POV Character",
        goal: "Goal",
        conflict: "Conflict",
        outcome: "Outcome",
        beatSheet: "Scene Beat Sheet",
        savedVersions: "Saved Versions",
        saveNow: "+ Save Now",
        noVersions: "No saved versions.",
        definition: "Definition:",
        example: "Example:",
        shareAlert: "Sharing link copied to clipboard!",
        newChapter: "New Chapter",
        newScene: "New Scene",
        newCharacter: "New Character",
        editChapter: "Edit Chapter Title",
        editScene: "Edit Scene Title",
        placeholderPlot: "General notes on plot...",
        placeholderWrite: "Start writing here...",
        words: "Words",
        goalLabel: "Goal",
        logline: "Logline"
    },
    es: {
        chaptersAndScenes: "Capítulos y Escenas",
        characters: "Personajes",
        dictionaryAndLexicon: "Diccionario y Léxico",
        plotAndWorlds: "Trama y Mundos",
        open: "Abrir",
        chapter: "Capítulo",
        scene: "Escena",
        sceneTools: "Herramientas de Escena",
        sceneTab: "Escena",
        chronoTab: "Cronología",
        dictTab: "Diccionario",
        pov: "Personaje POV",
        goal: "Objetivo (Goal)",
        conflict: "Conflicto",
        outcome: "Resultado (Outcome)",
        beatSheet: "Beat Sheet de Escena",
        savedVersions: "Versiones Guardadas",
        saveNow: "+ Guardar Ahora",
        noVersions: "No hay versiones guardadas.",
        definition: "Definición:",
        example: "Ejemplo:",
        shareAlert: "¡Enlace de compartición copiado al portapapeles!",
        newChapter: "Nuevo Capítulo",
        newScene: "Nueva Escena",
        newCharacter: "Nuevo Personaje",
        editChapter: "Editar Título de Capítulo",
        editScene: "Editar Título de Escena",
        placeholderPlot: "Notas generales sobre la trama...",
        placeholderWrite: "Escribe aquí...",
        words: "Palabras",
        goalLabel: "Objetivo",
        logline: "Logline"
    }
};

let linguaCorrente = 'it';

function t(key) {
    return traduzioni[linguaCorrente][key] || traduzioni['it'][key] || key;
}

function cambiaLingua(lang) {
    linguaCorrente = lang;
    renderizzaAlbero();
    if (tipoAttivo === 'scena') selezionaScena(elementoAttivoId);
    else if (tipoAttivo === 'personaggio') selezionaPersonaggio(elementoAttivoId);
    aggiornaInterfacciaStatica();
}

function aggiornaInterfacciaStatica() {
    const impostaTestoSicuro = (id, testo) => {
        const el = document.getElementById(id);
        if (el) el.innerText = testo;
    };

    impostaTestoSicuro('tab-scena', t('sceneTab'));
    impostaTestoSicuro('tab-crono', t('chronoTab'));
    impostaTestoSicuro('tab-diz', t('dictTab'));
    impostaTestoSicuro('lbl-pov', t('pov'));
    impostaTestoSicuro('lbl-logline', t('logline'));
    impostaTestoSicuro('lbl-beats', t('beatSheet'));
    impostaTestoSicuro('lbl-versions', t('savedVersions'));
    impostaTestoSicuro('btn-save-now', t('saveNow'));
    impostaTestoSicuro('lbl-no-versions', t('noVersions'));
}

let progettoData = {
    titoloProgetto: "Screenwriting",
    obiettivoParole: 50000,
    plotTrama: "",
    capitoliCollassati: false,
    personaggiCollassati: false,
    dizionarioCollassato: false,
    plotCollassato: false,
    layoutPannello: "right",
    altezzaPannelloBottom: 300,
    larghezzaPannelloRight: 340,
    capitoli: [
        {
            idCapitolo: 1,
            titoloCapitolo: "Capitolo 1",
            collassato: false,
            scene: [
                { 
                    idScene: 1, 
                    titolo: "1. Scena Iniziale", 
                    contenuto: "", 
                    pov: "", 
                    logline: "", 
                    beats: ["Inizio in medias res"] 
                }
            ]
        }
    ],
    personaggi: [
        { idChar: 101, nome: "Protagonista", cognome: "", ruolo: "Protagonista", eta: "", descrizione: "", obiettivo: "", arcoNarrativo: "" }
    ],
    dizionario: [
        { id: 201, termine: "Timore", categoria: "Sinonimi ed Emozioni", definizione: "Stato d'animo di preoccupazione di fronte a un pericolo.", esempio: "Ansia, apprensione, terrore." },
        { id: 202, termine: "Ossimoro", categoria: "Figure Retoriche", definizione: "Accostamento nella stessa locuzione di termini di senso contrario.", esempio: "Silenzio eloquente, ghiaccio bollente." },
        { id: 203, termine: "Metafora", categoria: "Figure Retoriche", definizione: "Sostituzione di un termine con un altro cui spetta un senso letterale diverso.", esempio: "Quel ragazzo è un leone coraggioso." },
        { id: 204, termine: "Bisturi", categoria: "Mappatura Lessicale", definizione: "Piccolo coltello a lama sottilissima usato in chirurgia e anatomia.", esempio: "Il chirurgo afferrò lo strumento con precisione." }
    ]
};

const datiSalvati = localStorage.getItem('fabula_progetto_data');
if (datiSalvati) {
    try {
        const parsed = JSON.parse(datiSalvati);
        progettoData = { ...progettoData, ...parsed };
    } catch (e) {
        console.error("Errore nel caricamento dei dati salvati", e);
    }
}

function salvaDati() {
    localStorage.setItem('fabula_progetto_data', JSON.stringify(progettoData));
}

let elementoAttivoId = 1;
let tipoAttivo = 'scena';
let filtroDizionarioCorrente = 'Tutti';

window.toggleFocusMode = function() {
    const leftSidebar = document.getElementById('left-sidebar');
    const rightPanel = document.getElementById('right-structure-panel');
    
    const isLeftCollapsed = leftSidebar ? leftSidebar.classList.contains('collapsed') : true;
    const isRightCollapsed = rightPanel ? rightPanel.classList.contains('collapsed') : true;

    if (isLeftCollapsed && isRightCollapsed) {
        if (leftSidebar) leftSidebar.classList.remove('collapsed');
        if (rightPanel) {
            rightPanel.classList.remove('collapsed');
            rightPanel.style.display = 'flex';
        }
    } else {
        if (leftSidebar) leftSidebar.classList.add('collapsed');
        if (rightPanel) {
            rightPanel.classList.add('collapsed');
            rightPanel.style.display = 'none';
        }
    }
};

window.switchPanel = function(tab) {
    ['tab-scena', 'tab-crono', 'tab-diz'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    
    ['panel-scena', 'panel-cronologia', 'panel-dizionario'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    const header = document.getElementById('label-panel-header');

    if(tab === 'scena') {
        const tabEl = document.getElementById('tab-scena'); if(tabEl) tabEl.classList.add('active');
        const panelEl = document.getElementById('panel-scena'); if(panelEl) panelEl.style.display = 'block';
        if(header) header.innerText = t('sceneTools');
    } else if(tab === 'cronologia') {
        const tabEl = document.getElementById('tab-crono'); if(tabEl) tabEl.classList.add('active');
        const panelEl = document.getElementById('panel-cronologia'); if(panelEl) panelEl.style.display = 'block';
        if(header) header.innerText = t('chronoTab');
    } else if(tab === 'dizionario') {
        const tabEl = document.getElementById('tab-diz'); if(tabEl) tabEl.classList.add('active');
        const panelEl = document.getElementById('panel-dizionario'); if(panelEl) panelEl.style.display = 'block';
        if(header) header.innerText = t('dictionaryAndLexicon');
        renderizzaCarteDizionarioRight();
    }
};

window.apriCronologia = function() {
    const rightPanel = document.getElementById('right-structure-panel');
    if (rightPanel) {
        rightPanel.classList.remove('collapsed');
        rightPanel.style.display = 'flex';
    }
    switchPanel('cronologia');
};

window.salvaVersioneCronologia = function() {
    const d = new Date();
    const timeStr = d.toLocaleDateString() + " " + d.toLocaleTimeString();
    const list = document.getElementById('cronologia-list');
    
    if(!list) return;

    if(list.innerHTML.includes(t('noVersions')) || list.innerHTML.includes('Nessuna versione')) {
        list.innerHTML = '';
    }

    const div = document.createElement('div');
    div.className = 'beat-item';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'center';
    div.innerHTML = `
        <div>
            <strong style="font-size:0.85rem; color:#ecf0f1;">${t('savedVersions')}</strong><br>
            <span style="font-size:0.75rem; color:#95a5a6;">${timeStr}</span>
        </div>
        <button class="small-add-btn" onclick="alert('Ripristino versione in arrivo!')">Ripristina</button>
    `;
    list.prepend(div);
};

window.modificaObiettivoParole = function() {
    const nuovoObiettivo = prompt("Inserisci il nuovo obiettivo totale delle parole:", progettoData.obiettivoParole || 50000);
    if (nuovoObiettivo !== null) {
        const parsed = parseInt(nuovoObiettivo.replace(/\D/g, ''), 10);
        if (!isNaN(parsed) && parsed > 0) {
            progettoData.obiettivoParole = parsed;
            salvaDati();
            if (tipoAttivo === 'scena') {
                let scenaCorrente = null;
                progettoData.capitoli.forEach(c => c.scene.forEach(s => { if(s.idScene === elementoAttivoId) scenaCorrente = s; }));
                if(scenaCorrente) {
                    aggiornaStatisticheMetriche(scenaCorrente.contenuto ? scenaCorrente.contenuto.replace(/<[^>]*>/g, '') : '');
                }
            }
        }
    }
};

function popolaDropdownPov(valoreSelezionato) {
    const povSelect = document.getElementById('pov-input');
    if(!povSelect) return;
    povSelect.innerHTML = `<option value="">-- Seleziona Personaggio --</option>`;
    progettoData.personaggi.forEach(char => {
        const nomeCompleto = `${char.nome || ''} ${char.cognome || ''}`.trim() || 'Senza nome';
        const opt = document.createElement('option');
        opt.value = nomeCompleto;
        opt.textContent = nomeCompleto;
        if(nomeCompleto === valoreSelezionato) {
            opt.selected = true;
        }
        povSelect.appendChild(opt);
    });

    // Gestione classe .selected
    if (valoreSelezionato) {
        povSelect.classList.add('selected');
    } else {
        povSelect.classList.remove('selected');
    }

    // Aggiungi listener per aggiornare la classe al cambio valore
    povSelect.onchange = function() {
        if (this.value) {
            this.classList.add('selected');
        } else {
            this.classList.remove('selected');
        }
        // Assicurati che la modifica venga salvata, se necessario
        // (Aggiungi qui la chiamata a salvaDati o simile se richiesta dalla logica esistente)
    };
}

function aggiornaStatisticheMetriche(testoPuro) {
    if (!testoPuro) testoPuro = "";
    const parole = testoPuro.trim() === '' ? 0 : testoPuro.trim().split(/\s+/).filter(Boolean).length;
    const elStats = document.getElementById('scene-metrics-display');
    if (elStats) {
        elStats.innerHTML = `
            <span>${t('words')}: <strong>${parole}</strong></span>
            <span>•</span>
            <span>${t('goalLabel')}: <strong style="cursor:pointer; color:#bc5a45;" onclick="modificaObiettivoParole()" title="Clicca per modificare l'obiettivo">${Number(progettoData.obiettivoParole || 50000).toLocaleString()}</strong></span>
        `;
    }
}

window.applicaFormattazione = function(tipo) {
    const editor = document.getElementById('current-scene-content');
    if (!editor) return;

    editor.focus();

    if (tipo === 'bold') {
        document.execCommand('bold', false, null);
    } else if (tipo === 'italic') {
        document.execCommand('italic', false, null);
    } else if (tipo === 'guillemets') {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = range.toString();
            const textToInsert = selectedText ? `«${selectedText}»` : '«»';
            document.execCommand('insertText', false, textToInsert);
        }
    }
    
    editor.dispatchEvent(new Event('input', { bubbles: true }));
};

window.toggleCollassaTuttiCapitoli = function() {
    progettoData.capitoliCollassati = !progettoData.capitoliCollassati;
    renderizzaAlbero();
    salvaDati();
};

window.toggleCollassaCapitolo = function(idCapitolo) {
    const cap = progettoData.capitoli.find(c => c.idCapitolo === idCapitolo);
    if (cap) {
        cap.collassato = !cap.collassato;
        renderizzaAlbero();
        salvaDati();
    }
};

function renderizzaAlbero() {
    const treeContainer = document.getElementById('project-tree');
    if(!treeContainer) return;

    treeContainer.innerHTML = '';
    let totaleParoleProgetto = 0;

    const divCapitoliHeader = document.createElement('div');
    divCapitoliHeader.className = 'section-header-title';
    divCapitoliHeader.innerHTML = `
        <div class="section-title-left" onclick="toggleCollassaTuttiCapitoli()">
            <span>${progettoData.capitoliCollassati ? '▶' : '▼'}</span><span>${t('chaptersAndScenes')}</span>
        </div>
        <button class="small-add-btn" onclick="event.stopPropagation(); apriModaleCapitolo()">+ Capitolo</button>
    `;
    treeContainer.appendChild(divCapitoliHeader);

    const capitoliWrapper = document.createElement('div');
    capitoliWrapper.className = `section-items-container ${progettoData.capitoliCollassati ? 'collapsed' : ''}`;
    
    progettoData.capitoli.forEach(capitolo => {
        const chapterGroup = document.createElement('div');
        chapterGroup.className = 'chapter-group';
        chapterGroup.innerHTML = `
            <div class="chapter-header-item">
                <div class="chapter-title-click" onclick="toggleCollassaCapitolo(${capitolo.idCapitolo})">
                    <span>${capitolo.collassato ? '▶' : '▼'}</span><span>${capitolo.titoloCapitolo}</span>
                </div>
                <div class="chapter-actions">
                    <span class="edit-icon" title="Modifica Titolo Capitolo" onclick="apriModaleModificaCapitolo(${capitolo.idCapitolo})">✎</span>
                    <span style="color:#bc5a45; cursor:pointer;" onclick="apriModaleScena(${capitolo.idCapitolo})">+ Scena</span>
                </div>
            </div>
        `;
        const scenesContainer = document.createElement('div');
        scenesContainer.className = `chapter-scenes-container ${capitolo.collassato ? 'collapsed' : ''}`;
        
        capitolo.scene.forEach(scena => {
            const textContent = scena.contenuto || '';
            const paroleScena = textContent.trim() === '' ? 0 : textContent.replace(/<[^>]*>/g, '').trim().split(/\s+/).filter(Boolean).length;
            totaleParoleProgetto += paroleScena;
            const sceneDiv = document.createElement('div');
            sceneDiv.className = `nav-item ${tipoAttivo === 'scena' && scena.idScene === elementoAttivoId ? 'active' : ''}`;
            sceneDiv.innerHTML = `
				<div class="nav-item-content" onclick="selezionaScena(${scena.idScene})">${scena.titolo}</div>
				<div style="display:flex; align-items:center; gap: 6px;">
					<span class="word-count-badge">${paroleScena}</span>
					<span class="edit-icon" title="Modifica Titolo Scena" onclick="apriModaleModificaScena(${capitolo.idCapitolo}, ${scena.idScene})">✎</span>
					<span class="delete-icon" title="Elimina Scena" style="cursor:pointer; color:#e74c3c; font-weight:bold; font-size:1.1rem;" onclick="eliminaScena(${capitolo.idCapitolo}, ${scena.idScene})">&times;</span>
				</div>
			`;
            scenesContainer.appendChild(sceneDiv);
        });
        chapterGroup.appendChild(scenesContainer);
        capitoliWrapper.appendChild(chapterGroup);
    });
    treeContainer.appendChild(capitoliWrapper);

    const divCharHeader = document.createElement('div');
    divCharHeader.className = 'section-header-title';
    divCharHeader.innerHTML = `
        <div class="section-title-left" onclick="progettoData.personaggiCollassati = !progettoData.personaggiCollassati; renderizzaAlbero();">
            <span>${progettoData.personaggiCollassati ? '▶' : '▼'}</span><span>${t('characters')}</span>
        </div>
        <button class="small-add-btn" onclick="event.stopPropagation(); apriModalePersonaggio()">+ Personaggio</button>
    `;
    treeContainer.appendChild(divCharHeader);

    const personaggiWrapper = document.createElement('div');
    personaggiWrapper.className = `section-items-container ${progettoData.personaggiCollassati ? 'collapsed' : ''}`;
    progettoData.personaggi.forEach(char => {
        const charDiv = document.createElement('div');
        charDiv.className = `nav-item ${tipoAttivo === 'personaggio' && char.idChar === elementoAttivoId ? 'active' : ''}`;
        const nomeCompleto = `${char.nome || ''} ${char.cognome || ''}`.trim() || 'Senza nome';
        charDiv.innerHTML = `<div class="nav-item-content" onclick="selezionaPersonaggio(${char.idChar})">${nomeCompleto}</div>`;
        personaggiWrapper.appendChild(charDiv);
    });
    treeContainer.appendChild(personaggiWrapper);

    // SEZIONE PLOT & MONDI (senza più il Dizionario sopra)
    const divPlotHeader = document.createElement('div');
    divPlotHeader.className = 'section-header-title';
    divPlotHeader.style.marginTop = "20px";
    divPlotHeader.innerHTML = `
        <div class="section-title-left" onclick="progettoData.plotCollassato = !progettoData.plotCollassato; renderizzaAlbero();">
            <span>${progettoData.plotCollassato ? '▶' : '▼'}</span><span>${t('plotAndWorlds')}</span>
        </div>
    `;
    treeContainer.appendChild(divPlotHeader);

    const plotWrapper = document.createElement('div');
    plotWrapper.className = `section-items-container ${progettoData.plotCollassato ? 'collapsed' : ''}`;
    plotWrapper.style.paddingLeft = "0";
    plotWrapper.innerHTML = `
        <textarea class="note-input" id="global-plot-input" style="height: 110px; resize: vertical; background: rgba(255,255,255,0.05); color: #ecf0f1; border: 1px solid #34495e;" placeholder="${t('placeholderPlot')}">${progettoData.plotTrama || ""}</textarea>
    `;
    treeContainer.appendChild(plotWrapper);

    setTimeout(() => {
        const plotInput = document.getElementById('global-plot-input');
        if(plotInput) {
            plotInput.oninput = function() {
                progettoData.plotTrama = this.value;
                salvaDati();
            };
        }
    }, 50);

    if (tipoAttivo === 'scena') {
        let scenaCorrente = null;
        progettoData.capitoli.forEach(c => c.scene.forEach(s => { if(s.idScene === elementoAttivoId) scenaCorrente = s; }));
        if(scenaCorrente) {
            const plainText = (scenaCorrente.contenuto || '').replace(/<[^>]*>/g, '');
            aggiornaStatisticheMetriche(plainText);
        }
    }

    salvaDati();
}

window.apriModaleCapitolo = function() {
    const modal = document.getElementById('generic-modal');
    if (!modal) return;
    document.getElementById('modal-generic-title').innerText = "Nuovo Capitolo";
    document.getElementById('modal-generic-label').innerText = "Titolo Capitolo";
    document.getElementById('modal-generic-input').value = "";
    document.getElementById('modal-generic-action').value = "nuovo_capitolo";
    document.getElementById('modal-generic-extra').value = "";
    modal.classList.add('active');
    const input = document.getElementById('modal-generic-input');
    if (input) input.focus();
};

window.apriModaleScena = function(idCapitolo) {
    const modal = document.getElementById('generic-modal');
    if (!modal) return;
    document.getElementById('modal-generic-title').innerText = "Nuova Scena";
    document.getElementById('modal-generic-label').innerText = "Titolo Scena";
    document.getElementById('modal-generic-input').value = "";
    document.getElementById('modal-generic-action').value = "nuova_scena";
    document.getElementById('modal-generic-extra').value = idCapitolo;
    modal.classList.add('active');
    const input = document.getElementById('modal-generic-input');
    if (input) input.focus();
};

window.apriModalePersonaggio = function() {
    const modal = document.getElementById('generic-modal');
    if (!modal) return;
    document.getElementById('modal-generic-title').innerText = t('newCharacter');
    document.getElementById('modal-generic-label').innerText = t('characters');
    document.getElementById('modal-generic-input').value = "";
    document.getElementById('modal-generic-action').value = "nuovo_personaggio";
    modal.classList.add('active');
    const input = document.getElementById('modal-generic-input');
    if (input) input.focus();
};

window.apriModaleModificaCapitolo = function(idCapitolo) {
    const cap = progettoData.capitoli.find(c => c.idCapitolo === idCapitolo);
    if(!cap) return;
    const modal = document.getElementById('generic-modal');
    if (!modal) return;
    document.getElementById('modal-generic-title').innerText = t('editChapter');
    document.getElementById('modal-generic-label').innerText = t('chapter');
    document.getElementById('modal-generic-input').value = cap.titoloCapitolo;
    document.getElementById('modal-generic-action').value = "modifica_capitolo";
    document.getElementById('modal-generic-extra').value = idCapitolo;
    modal.classList.add('active');
    const input = document.getElementById('modal-generic-input');
    if (input) input.focus();
};

window.apriModaleModificaScena = function(idCapitolo, idScena) {
    const cap = progettoData.capitoli.find(c => c.idCapitolo === idCapitolo);
    if(!cap) return;
    const sc = cap.scene.find(s => s.idScene === idScena);
    if(!sc) return;
    const modal = document.getElementById('generic-modal');
    if (!modal) return;
    document.getElementById('modal-generic-title').innerText = t('editScene');
    document.getElementById('modal-generic-label').innerText = t('scene');
    document.getElementById('modal-generic-input').value = sc.titolo;
    document.getElementById('modal-generic-action').value = "modifica_scena";
    document.getElementById('modal-generic-extra').value = `${idCapitolo}_${idScena}`;
    modal.classList.add('active');
    const input = document.getElementById('modal-generic-input');
    if (input) input.focus();
};

window.chiudiModaleGenerica = function() {
    const modal = document.getElementById('generic-modal');
    if (modal) {
        modal.classList.remove('active');
    }
};

window.apriModaleNuovaVoceDizionario = function() {
    const modal = document.getElementById('dict-modal');
    if (!modal) return;
    document.getElementById('dict-edit-id').value = '';
    document.getElementById('modal-dict-term').value = '';
    document.getElementById('modal-dict-def').value = '';
    document.getElementById('modal-dict-ex').value = '';
    modal.classList.add('active');
};

window.chiudiModaleDizionario = function() {
    const modal = document.getElementById('dict-modal');
    if (modal) modal.classList.remove('active');
};

window.salvaVoceDizionario = function() {
    const idEdit = document.getElementById('dict-edit-id').value;
    const termine = document.getElementById('modal-dict-term').value.trim();
    const categoria = document.getElementById('modal-dict-category').value;
    const definizione = document.getElementById('modal-dict-def').value.trim();
    const esempio = document.getElementById('modal-dict-ex').value.trim();

    if(!termine) return;

    if(!progettoData.dizionario) progettoData.dizionario = [];

    if(idEdit) {
        let voce = progettoData.dizionario.find(v => v.id == idEdit);
        if(voce) {
            voce.termine = termine;
            voce.categoria = categoria;
            voce.definizione = definizione;
            voce.esempio = esempio;
        }
    } else {
        progettoData.dizionario.push({
            id: Date.now(),
            termine: termine,
            categoria: categoria,
            definizione: definizione,
            esempio: esempio
        });
    }

    chiudiModaleDizionario();
    renderizzaCarteDizionarioRight();
    salvaDati();
};

window.eliminaVoceDizionario = function(id) {
    progettoData.dizionario = progettoData.dizionario.filter(v => v.id !== id);
    renderizzaCarteDizionarioRight();
    salvaDati();
};

window.modificaVoceDizionario = function(id) {
    let voce = progettoData.dizionario.find(v => v.id === id);
    if(!voce) return;
    const modal = document.getElementById('dict-modal');
    if (!modal) return;
    document.getElementById('dict-edit-id').value = voce.id;
    document.getElementById('modal-dict-term').value = voce.termine;
    document.getElementById('modal-dict-category').value = voce.categoria || 'Sinonimi ed Emozioni';
    document.getElementById('modal-dict-def').value = voce.definizione || '';
    document.getElementById('modal-dict-ex').value = voce.esempio || '';
    modal.classList.add('active');
};

window.salvaModaleGenerica = function() {
    const actionEl = document.getElementById('modal-generic-action');
    const inputEl = document.getElementById('modal-generic-input');
    
    if (!actionEl || !inputEl) {
        chiudiModaleGenerica();
        return;
    }
    
    const action = actionEl.value;
    const val = inputEl.value.trim();
    if (!val) {
        alert("Inserisci un valore valido.");
        return;
    }

    if (action === "modifica_capitolo") {
        const idCap = parseInt(document.getElementById('modal-generic-extra').value);
        const cap = progettoData.capitoli.find(c => c.idCapitolo === idCap);
        if (cap) cap.titoloCapitolo = val;
        renderizzaAlbero();
    } else if (action === "modifica_scena") {
        const ids = document.getElementById('modal-generic-extra').value.split('_');
        const idCap = parseInt(ids[0]);
        const idScena = parseInt(ids[1]);
        const cap = progettoData.capitoli.find(c => c.idCapitolo === idCap);
        if (cap) {
            const sc = cap.scene.find(s => s.idScene === idScena);
            if (sc) sc.titolo = val;
        }
        renderizzaAlbero();
        if (tipoAttivo === 'scena' && elementoAttivoId === idScena) {
            const titleInput = document.getElementById('current-scene-title');
            if (titleInput) titleInput.value = val;
        }
    } else if (action === "nuovo_capitolo") {
        const nuovoId = Date.now();
        progettoData.capitoli.push({ idCapitolo: nuovoId, titoloCapitolo: val, collassato: false, scene: [] });
        renderizzaAlbero();
    } else if (action === "nuova_scena") {
        const idCap = parseInt(document.getElementById('modal-generic-extra').value);
        const cap = progettoData.capitoli.find(c => c.idCapitolo === idCap);
        if (cap) {
            const nuovoIdScena = Date.now();
            cap.scene.push({ 
                idScene: nuovoIdScena, 
                titolo: val, 
                contenuto: "", 
                pov: "", 
                logline: "", 
                beats: [""] 
            });
            cap.collassato = false;
            renderizzaAlbero();
            selezionaScena(nuovoIdScena);
        }
    } else if (action === "nuovo_personaggio") {
        const nuovoId = Date.now();
        progettoData.personaggi.push({ idChar: nuovoId, nome: val, cognome: "", ruolo: "", eta: "", descrizione: "", obiettivo: "", arcoNarrativo: "" });
        renderizzaAlbero();
        selezionaPersonaggio(nuovoId);
    }
    
    chiudiModaleGenerica();
    salvaDati();
};

const CONFIG_BEATS = [
    { label: "Hook (Media res)", placeholder: "Come inizia la scena?" },
    { label: "Situazione / Descrittore-Protagonista", placeholder: "Chi c'è e cosa succede?" },
    { label: "Azione (L'obiettivo)", placeholder: "Cosa vuole ottenere?" },
    { label: "Descrittore-Antagonista", placeholder: "Chi ostacola?" },
    { label: "Disastro / Conflitto", placeholder: "Cosa va storto?" },
    { label: "Set up (La strategia)", placeholder: "Come reagisce?" },
    { label: "Climactic Encounter (Lo scontro ultimo)", placeholder: "Il momento di massima tensione" },
    { label: "Svolta o Cliffhanger", placeholder: "Come finisce?" }
];

function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
}

// Funzione per renderizzare un singolo dettaglio
function renderBeatDetails(beatObj, beatIndex, container) {
    container.innerHTML = '';
    
    // Renderizza i dettagli esistenti
    beatObj.details.forEach((detail, detailIndex) => {
        const textarea = document.createElement('textarea');
        textarea.className = 'minimal-input sub-beat-textarea';
        textarea.value = detail;
        textarea.placeholder = "Dettaglio...";
        textarea.rows = 1;
        textarea.oninput = function() {
            autoResize(this);
            beatObj.details[detailIndex] = this.value;
            // Se svuotato, rimuovi
            if (this.value === "") {
                beatObj.details.splice(detailIndex, 1);
                renderBeatDetails(beatObj, beatIndex, container);
            }
            salvaDati();
        };
        container.appendChild(textarea);
        autoResize(textarea);
    });

    // Aggiungi la riga "Nuovo dettaglio..."
    const newDetailInput = document.createElement('textarea');
    newDetailInput.className = 'minimal-input sub-beat-textarea';
    newDetailInput.placeholder = "Nuovo dettaglio...";
    newDetailInput.rows = 1;
    newDetailInput.onfocus = function() {
        this.placeholder = "Scrivi...";
    };
    newDetailInput.oninput = function() {
        autoResize(this);
        if (this.value !== "") {
            beatObj.details.push(this.value);
            this.value = "";
            renderBeatDetails(beatObj, beatIndex, container);
            // Focus sul nuovo dettaglio
            container.lastElementChild.previousElementSibling.focus();
            salvaDati();
        }
    };
    container.appendChild(newDetailInput);
}

// Funzione per renderizzare una sezione Beat
function renderBeatSection(beatObj, beatIndex) {
    const section = document.createElement('div');
    section.className = 'beat-section';
    
    const label = document.createElement('label');
    label.className = 'beat-label';
    label.textContent = CONFIG_BEATS[beatIndex].label;
    section.appendChild(label);
    
    const mainTextarea = document.createElement('textarea');
    mainTextarea.className = 'minimal-input beat-textarea';
    mainTextarea.value = beatObj.content;
    mainTextarea.placeholder = CONFIG_BEATS[beatIndex].placeholder;
    mainTextarea.rows = 1;
    mainTextarea.oninput = function() {
        autoResize(this);
        beatObj.content = this.value;
        salvaDati();
    };
    section.appendChild(mainTextarea);
    
    const detailsContainer = document.createElement('div');
    renderBeatDetails(beatObj, beatIndex, detailsContainer);
    section.appendChild(detailsContainer);
    
    return section;
}

// Aggiornamento selezionaScena
function selezionaScena(id) {
    tipoAttivo = 'scena';
    elementoAttivoId = id;
    let scenaTrovata = null;
    progettoData.capitoli.forEach(cap => cap.scene.forEach(sc => { if (sc.idScene === id) scenaTrovata = sc; }));
    if (!scenaTrovata) return;

    // Migrazione dati: inizializza campi se mancanti
    if (scenaTrovata.topic === undefined) scenaTrovata.topic = "";
    if (scenaTrovata.ground === undefined) scenaTrovata.ground = "";
    
    // Nuova gestione Beats: migrazione da array stringhe a array oggetti
    if (!scenaTrovata.beats || scenaTrovata.beats.length !== 8) {
        const vecchiBeats = scenaTrovata.beats || [];
        scenaTrovata.beats = new Array(8).fill(null).map((_, i) => ({
            content: typeof vecchiBeats[i] === 'string' ? vecchiBeats[i] : "",
            details: []
        }));
    } else if (typeof scenaTrovata.beats[0] === 'string') {
        scenaTrovata.beats = scenaTrovata.beats.map(b => ({ content: b, details: [] }));
    }

    // Ricostruisce l'editor centrale
    const editorContainer = document.getElementById('main-editor-container');
    if (!editorContainer) return;

    editorContainer.innerHTML = `
        <div class="editor-header">
            <div class="header-left-group">
                <input type="text" class="main-title-input" id="current-scene-title" value="${scenaTrovata.titolo}" readonly title="Il titolo si aggiorna automaticamente dal campo Topic">
            </div>
            <div class="header-right-actions">
                <button class="collapse-btn expand-btn" title="Espandi a tutto schermo" onclick="toggleFocusMode()"></button>
            </div>
        </div>
        <div class="minimal-format-bar">
            <div class="format-bar-group">
                <button class="format-btn" title="Grassetto" onclick="applicaFormattazione('bold')" onmousedown="event.preventDefault()"><b>B</b></button>
                <button class="format-btn" title="Corsivo" onclick="applicaFormattazione('italic')" onmousedown="event.preventDefault()"><i>I</i></button>
                <button class="format-btn" id="btn-guillemets" title="Virgolette caporali" onclick="applicaFormattazione('guillemets')" onmousedown="event.preventDefault()">&raquo;</button>
            </div>
            <div class="live-stats" id="scene-metrics-display">
                <span>${t('words')}: <strong>0</strong></span>
                <span>•</span>
                <span>${t('goalLabel')}: <strong style="cursor:pointer; color:#bc5a45;" onclick="modificaObiettivoParole()" title="Clicca per modificare l'obiettivo">${Number(progettoData.obiettivoParole || 50000).toLocaleString()}</strong></span>
            </div>
        </div>
        <div class="writing-area" id="current-scene-content" contenteditable="true" placeholder="${t('placeholderWrite')}">${scenaTrovata.contenuto || ''}</div>
    `;

    // Eventi di scrittura
    const writingArea = document.getElementById('current-scene-content');
    if (writingArea) {
        writingArea.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                document.execCommand('insertText', false, '\u00a0\u00a0\u00a0\u00a0'); 
            }
        });
        writingArea.oninput = function() {
            scenaTrovata.contenuto = this.innerHTML;
            aggiornaStatisticheMetriche(this.innerText || '');
            salvaDati();
        };
    }

    // Gestione pannello destro
    if (typeof switchPanel === 'function') switchPanel('scena');
    popolaDropdownPov(scenaTrovata.pov || '');

    // Topic & Ground
    const topicInput = document.getElementById('scene-topic-input');
    const groundInput = document.getElementById('scene-ground-input');

    if (topicInput) {
        topicInput.value = scenaTrovata.topic || "";
        autoResize(topicInput);
        topicInput.oninput = function() {
            scenaTrovata.topic = this.value;
            scenaTrovata.titolo = this.value || "Scena senza titolo";
            const editorTitle = document.getElementById('current-scene-title');
            if (editorTitle) editorTitle.value = scenaTrovata.titolo;
            autoResize(this);
            renderizzaAlbero();
            salvaDati();
        };
    }

    if (groundInput) {
        groundInput.value = scenaTrovata.ground || "";
        autoResize(groundInput);
        groundInput.oninput = function() {
            scenaTrovata.ground = this.value;
            autoResize(this);
            salvaDati();
        };
    }

    // Beats fissi con dettagli
    const beatsContainer = document.getElementById('beats-container-new');
    if (beatsContainer) {
        beatsContainer.innerHTML = '';
        scenaTrovata.beats.forEach((beatObj, index) => {
            beatsContainer.appendChild(renderBeatSection(beatObj, index));
        });
        // Auto-resize iniziale dei beat principali
        beatsContainer.querySelectorAll('.beat-textarea').forEach(autoResize);
    }

    renderizzaAlbero();
}


window.selezionaDizionarioPrincipale = function() {
    tipoAttivo = 'dizionario';
    filtroDizionarioCorrente = 'Tutti';
    const rightPanel = document.getElementById('right-structure-panel');
    if (rightPanel) {
        rightPanel.classList.remove('collapsed');
        rightPanel.style.display = 'flex';
    }
    switchPanel('dizionario');
    impostaFiltroDizionario('Tutti');
    renderizzaAlbero();
};

window.selezionaFiltroDizionarioSidebar = function(categoria) {
    tipoAttivo = 'dizionario';
    filtroDizionarioCorrente = categoria;
    const rightPanel = document.getElementById('right-structure-panel');
    if (rightPanel) {
        rightPanel.classList.remove('collapsed');
        rightPanel.style.display = 'flex';
    }
    switchPanel('dizionario');
    impostaFiltroDizionario(categoria);
    renderizzaAlbero();
};

window.impostaFiltroDizionario = function(categoria) {
    filtroDizionarioCorrente = categoria;
    
    ['f-tutti', 'f-retoriche', 'f-emozioni', 'f-lessico'].forEach(btnId => {
        const el = document.getElementById(btnId);
        if(el) el.classList.remove('active');
    });
    if(categoria === 'Tutti') { const el = document.getElementById('f-tutti'); if(el) el.classList.add('active'); }
    else if(categoria === 'Figure Retoriche') { const el = document.getElementById('f-retoriche'); if(el) el.classList.add('active'); }
    else if(categoria === 'Sinonimi ed Emozioni') { const el = document.getElementById('f-emozioni'); if(el) el.classList.add('active'); }
    else if(categoria === 'Mappatura Lessicale') { const el = document.getElementById('f-lessico'); if(el) el.classList.add('active'); }

    renderizzaCarteDizionarioRight();
};

function renderizzaCarteDizionarioRight() {
    const container = document.getElementById('dict-cards-container-right');
    if(!container) return;
    container.innerHTML = '';

    let voci = progettoData.dizionario || [];
    if(filtroDizionarioCorrente !== 'Tutti') {
        voci = voci.filter(v => v.categoria === filtroDizionarioCorrente);
    }

    if(voci.length === 0) {
        container.innerHTML = `<div style="color: #95a5a6; text-align: center; padding: 30px; font-style: italic; font-size: 0.85rem;">Nessuna voce trovata in questa categoria.</div>`;
        return;
    }

    voci.forEach(voce => {
        const card = document.createElement('div');
        card.className = `dict-card-dark`;
        card.innerHTML = `
            <div class="dict-card-dark-header">
                <span class="dict-card-title">${voce.termine}</span>
                <div style="display: flex; gap: 6px; align-items:center;">
                    <span class="edit-icon" title="Modifica" onclick="modificaVoceDizionario(${voce.id})">✏️</span>
                    <span class="edit-icon" title="Elimina" onclick="eliminaVoceDizionario(${voce.id})" style="color:#e74c3c;">🗑️</span>
                </div>
            </div>
            <div class="dict-card-dark-body">
                <p><strong>${t('definition')}</strong> ${voce.definizione || ''}</p>
                ${voce.esempio ? `<p class="example-text">${t('example')} ${voce.esempio}</p>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderizzaBeats(beatsArray) {
    const container = document.getElementById('beats-container');
    if (!container) return;
    container.innerHTML = '';
    const placeholders = [
        "Es: In media res / Stato quo iniziale",
        "Es: Incidente incitante / Scintilla",
        "Es: Primo punto di svolta / Reazione",
        "Es: Momento di crisi / Complicazione",
        "Es: Climax / Scontro decisivo",
        "Es: Risoluzione / Nuova normalità"
    ];
    beatsArray.forEach((beat, index) => {
        const ph = placeholders[index % placeholders.length];
        const div = document.createElement('div');
        div.className = 'beat-item';
        div.innerHTML = `
            <div style="display: flex; gap: 8px; width: 100%;">
                <input type="text" style="flex:1;" value="${beat}" placeholder="${ph}" oninput="progettoData.capitoli.forEach(c => c.scene.forEach(s => {if(s.idScene === ${elementoAttivoId}) s.beats[${index}] = this.value;})); salvaDati();">
                <button onclick="rimuoviBeat(${index})" title="Rimuovi beat" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-weight: bold; font-size: 1.1rem; padding: 0 5px;">✕</button>
            </div>
        `;
        container.appendChild(div);
    });
}

window.aggiungiBeat = function() {
    if (tipoAttivo !== 'scena' || !elementoAttivoId) return;
    let scenaTrovata = null;
    progettoData.capitoli.forEach(cap => cap.scene.forEach(sc => { if (sc.idScene === elementoAttivoId) scenaTrovata = sc; }));
    if (!scenaTrovata) return;

    if (!scenaTrovata.beats) scenaTrovata.beats = [];
    scenaTrovata.beats.push("");
    salvaDati();
    selezionaScena(elementoAttivoId);
};

window.rimuoviBeat = function(index) {
    if (tipoAttivo !== 'scena' || !elementoAttivoId) return;
    let scenaTrovata = null;
    progettoData.capitoli.forEach(cap => cap.scene.forEach(sc => { if (sc.idScene === elementoAttivoId) scenaTrovata = sc; }));
    if (!scenaTrovata || !scenaTrovata.beats) return;

    scenaTrovata.beats.splice(index, 1);
    salvaDati();
    selezionaScena(elementoAttivoId);
};

window.esportaManoscrittoPDF = function() {
    const containerPdf = document.createElement('div');
    containerPdf.style.padding = '40px';
    containerPdf.style.fontFamily = 'Georgia, serif';
    let htmlContent = `<h1 style="text-align: center; margin-bottom: 40px;">${progettoData.titoloProgetto}</h1>`;
    progettoData.capitoli.forEach(cap => {
        htmlContent += `<h2 style="margin-top: 30px;">${cap.titoloCapitolo}</h2>`;
        cap.scene.forEach(sc => {
            htmlContent += `<h3>${sc.titolo}</h3><div>${sc.contenuto || ''}</div>`;
        });
    });
    containerPdf.innerHTML = htmlContent;
    if (typeof html2pdf !== 'undefined') {
        html2pdf().from(containerPdf).set({ margin: 15, filename: 'Manoscritto.pdf' }).save();
    } else {
        alert("La libreria html2pdf non è caricata!");
    }
};

function abilitaRidimensionamentoPannello(resizerId, panelId, isLeftPanel) {
    const resizer = document.getElementById(resizerId);
    const panel = document.getElementById(panelId);
    const appContainer = document.getElementById('app-container');

    if (!resizer || !panel || !appContainer) {
        return;
    }

    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    let pendingWidth = null;

    const onPointerMove = (e) => {
        const isBottom = appContainer.classList.contains('layout-bottom');
        
        if (!isLeftPanel && isBottom) {
            // Ridimensionamento verticale (in basso) - INVARIATO
            const dy = e.clientY - startY;
            const newHeight = startHeight - dy; // trascina verso l'alto per ingrandire
            const maxHeight = window.innerHeight - 100; // Limite dinamico basato su viewport
            if (newHeight >= 150 && newHeight <= maxHeight) {
                panel.style.height = `${newHeight}px`;
                panel.style.width = '100%';
                progettoData.altezzaPannelloBottom = newHeight;
            }
        } else {
            // Ridimensionamento orizzontale ottimizzato
            const dx = e.clientX - startX;
            let newWidth = isLeftPanel ? startWidth + dx : startWidth - dx;
            
            // Limiti dinamici fluidi
            const minWidth = 0;
            const maxWidth = window.innerWidth * 0.8;
            
            if (newWidth < minWidth) newWidth = minWidth;
            if (newWidth > maxWidth) newWidth = maxWidth;
            
            pendingWidth = newWidth;
            
            requestAnimationFrame(() => {
                if (pendingWidth !== null) {
                    panel.style.width = `${pendingWidth}px`;
                    pendingWidth = null;
                }
            });
        }
    };

    const onPointerUp = (e) => {
        salvaDati(); // Salva solo alla fine
        resizer.releasePointerCapture(e.pointerId);
        resizer.classList.remove('dragging');
        resizer.style.zIndex = ''; // Ripristina z-index
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        resizer.removeEventListener('pointermove', onPointerMove);
        resizer.removeEventListener('pointerup', onPointerUp);
    };

    resizer.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        resizer.setPointerCapture(e.pointerId);
        
        startX = e.clientX;
        startY = e.clientY;
        startWidth = panel.getBoundingClientRect().width;
        startHeight = panel.getBoundingClientRect().height;

        resizer.classList.add('dragging');
        resizer.style.zIndex = '1000';
        
        // Disabilita la transizione durante il drag per eliminare l'inerzia
        panel.style.transition = 'none';

        const isBottom = appContainer.classList.contains('layout-bottom');
        document.body.style.cursor = (!isLeftPanel && isBottom) ? 'row-resize' : 'col-resize';
        document.body.style.userSelect = 'none';

        resizer.addEventListener('pointermove', onPointerMove);
        resizer.addEventListener('pointerup', onPointerUp);
    });
}

function attivaRidimensionamento() {
    abilitaRidimensionamentoPannello('resizer-left', 'left-sidebar', true);
    abilitaRidimensionamentoPannello('resizer-right', 'right-structure-panel', false);
}

window.toggleRightPanelLayout = function() {
    progettoData.layoutPannello = (progettoData.layoutPannello === 'right') ? 'bottom' : 'right';
    salvaDati();
    inizializzaLayoutPannello();
};

function inizializzaLayoutPannello() {
    const appContainer = document.getElementById('app-container');
    const rightPanel = document.getElementById('right-structure-panel');
    const toggleBtn = document.getElementById('btn-toggle-layout');
    
    if (!appContainer || !rightPanel) return;

    if (progettoData.layoutPannello === 'bottom') {
        appContainer.classList.add('layout-bottom');
        rightPanel.style.width = '100%';
        rightPanel.style.height = `${progettoData.altezzaPannelloBottom || 300}px`;
        if (toggleBtn) {
            toggleBtn.innerHTML = '◨';
            toggleBtn.title = 'Sposta a destra';
        }
    } else {
        appContainer.classList.remove('layout-bottom');
        rightPanel.style.width = `${progettoData.larghezzaPannelloRight || 340}px`;
        rightPanel.style.height = '100%';
        if (toggleBtn) {
            toggleBtn.innerHTML = '⬓';
            toggleBtn.title = 'Sposta in basso';
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attivaRidimensionamento);
} else {
    attivaRidimensionamento();
}

function avviaApplicazione() {
    attivaRidimensionamento();
    aggiornaInterfacciaStatica();
    renderizzaAlbero();
    inizializzaLayoutPannello();

    if (progettoData.capitoli && progettoData.capitoli[0] && progettoData.capitoli[0].scene[0]) {
        selezionaScena(progettoData.capitoli[0].scene[0].idScene);
    } else {
        selezionaScena(elementoAttivoId);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', avviaApplicazione);
} else {
    avviaApplicazione();
}

document.addEventListener('click', function(e) {
    // Intercetta il click sul pulsante per aggiungere un capitolo
    if (e.target.closest('#btn-nuovo-capitolo') || e.target.closest('.aggiungi-capitolo-btn')) {
        e.preventDefault();
        window.apriModaleCapitolo();
        return;
    }
	
	if (e.target.innerText && e.target.innerText.includes('+ Scena')) {
        e.preventDefault();
        const parentCap = e.target.closest('[data-id-capitolo]');
        const idCap = parentCap ? parentCap.getAttribute('data-id-capitolo') : null;
        if (idCap) window.apriModaleScena(idCap);
        return;
    }
    
    const modal = document.getElementById('generic-modal');
    if (modal && modal.classList.contains('active')) {
        if (e.target === modal || e.target.classList.contains('btn-cancel') || e.target.classList.contains('cancel-btn')) {
            chiudiModaleGenerica();
        }
    }
});

window.eliminaScena = function(idCapitolo, idScena) {
    if (!confirm("Sei sicuro di voler eliminare questa scena?")) return;
    
    const cap = progettoData.capitoli.find(c => c.idCapitolo === idCapitolo);
    if (cap) {
        cap.scene = cap.scene.filter(s => s.idScene !== idScena);
        renderizzaAlbero();
        salvaDati();
        
        // Se la scena eliminata era quella attualmente aperta nell'editor, pulisci la vista
        if (tipoAttivo === 'scena' && elementoAttivoId === idScena) {
            elementoAttivoId = null;
            tipoAttivo = null;
            const editorTitle = document.getElementById('current-scene-title');
            if (editorTitle) editorTitle.value = "";
            const editorContent = document.getElementById('editor-area'); // o il campo di testo principale
            if (editorContent) editorContent.innerHTML = "";
        }
    }
};

// Dati di esempio se il dizionario è vuoto
let dizionarioVoci = [
    { id: 1, termine: "Timore", categoria: "Sinonimi ed Emozioni", definizione: "Stato d'animo di preoccupazione", esempio: "Ansia, apprensione" },
    { id: 2, termine: "Ossimoro", categoria: "Figure Retoriche", definizione: "Accostamento di termini contrari", esempio: "Silenzio eloquente" },
    { id: 3, termine: "Metafora", categoria: "Figure Retoriche", definizione: "Sostituzione di un termine", esempio: "Quel ragazzo è un leone" },
    { id: 4, termine: "Bisturi", categoria: "Mappatura Lessicale", definizione: "Piccolo coltello da chirurgia", esempio: "Il chirurgo afferrò lo strumento" }
];

// 1. Apri e Chiudi Modale
function apriModaleNuovaVoceDizionario() {
    document.getElementById('modal-dict-term').value = '';
    document.getElementById('modal-dict-def').value = '';
    document.getElementById('modal-dict-ex').value = '';
    document.getElementById('dict-modal').style.display = 'flex';
}

function chiudiModaleDizionario() {
    document.getElementById('dict-modal').style.display = 'none';
}

// 2. Salva la nuova voce (o nuovo tag)
function salvaVoceDizionario() {
    const termine = document.getElementById('modal-dict-term').value.trim();
    const categoria = document.getElementById('modal-dict-category').value;
    const definizione = document.getElementById('modal-dict-def').value.trim();
    const esempio = document.getElementById('modal-dict-ex').value.trim();

    if (!termine) {
        alert("Inserisci un termine per il tag.");
        return;
    }

    const nuovaVoce = {
        id: Date.now(),
        termine: termine,
        categoria: categoria,
        definizione: definizione,
        esempio: esempio
    };

    dizionarioVoci.push(nuovaVoce);
    chiudiModaleDizionario();
    renderizzaTagDizionario();
}

// 3. Elimina Tag
function eliminaVoceDizionario(id) {
    dizionarioVoci = dizionarioVoci.filter(item => item.id !== id);
    renderizzaTagDizionario();
}

// Funzione chiamata al cambio della select
window.filtraTagDizionario = function() {
    renderizzaTagDizionario();
};

// 4. Renderizza i Tag suddivisi per Categorie (con Filtro) nel pannello di destra
function renderizzaTagDizionario() {
    const container = document.getElementById('dict-tags-container');
    if (!container) return;

    container.innerHTML = '';

    const filterSelect = document.getElementById('dict-category-filter');
    const selectedCategory = filterSelect ? filterSelect.value : 'Tutte';

    // Categorie ufficiali
    const categorie = ["Sinonimi ed Emozioni", "Figure Retoriche", "Mappatura Lessicale"];

    categorie.forEach(cat => {
        // Se c'è un filtro attivo e la categoria non corrisponde, salta il ciclo
        if (selectedCategory !== 'Tutte' && cat !== selectedCategory) return;

        const vociCategoria = dizionarioVoci.filter(v => v.categoria === cat);
        
        if (vociCategoria.length > 0) {
            // Titolo della Categoria
            const catHeader = document.createElement('div');
            catHeader.className = 'dict-cat-header';
            catHeader.style.cssText = "width: 100%; font-size: 0.75rem; color: #95a5a6; margin-top: 12px; margin-bottom: 4px; font-weight: bold; text-transform: uppercase;";
            catHeader.textContent = cat;
            container.appendChild(catHeader);

            // Contenitore flessibile per i tag di questa categoria
            const tagGroup = document.createElement('div');
            tagGroup.style.cssText = "display: flex; flex-wrap: wrap; gap: 6px; width: 100%;";

            vociCategoria.forEach(voce => {
                const tag = document.createElement('span');
                tag.className = 'dict-tag';
                tag.title = voce.definizione ? `${voce.definizione} (Es: ${voce.esempio})` : voce.termine;
                tag.innerHTML = `${voce.termine} <span class="tag-close" onclick="eliminaVoceDizionario(${voce.id})">×</span>`;
                tagGroup.appendChild(tag);
            });

            container.appendChild(tagGroup);
        }
    });
}

// Richiama il rendering dei tag all'avvio della pagina
document.addEventListener('DOMContentLoaded', () => {
    renderizzaTagDizionario();
});