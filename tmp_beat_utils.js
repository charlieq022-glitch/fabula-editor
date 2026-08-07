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

function renderBeatDetails(beatObj, beatIndex, container) {
    container.innerHTML = '';
    beatObj.details.forEach((detail, detailIndex) => {
        const textarea = document.createElement('textarea');
        textarea.className = 'minimal-input sub-beat-textarea';
        textarea.value = detail;
        textarea.placeholder = "Dettaglio...";
        textarea.rows = 1;
        textarea.oninput = function() {
            autoResize(this);
            beatObj.details[detailIndex] = this.value;
            if (this.value === "") {
                beatObj.details.splice(detailIndex, 1);
                renderBeatDetails(beatObj, beatIndex, container);
            }
            salvaDati();
        };
        container.appendChild(textarea);
        autoResize(textarea);
    });
    const newDetailInput = document.createElement('textarea');
    newDetailInput.className = 'minimal-input sub-beat-textarea';
    newDetailInput.placeholder = "Nuovo dettaglio...";
    newDetailInput.rows = 1;
    newDetailInput.onfocus = function() { this.placeholder = "Scrivi..."; };
    newDetailInput.oninput = function() {
        autoResize(this);
        if (this.value !== "") {
            beatObj.details.push(this.value);
            this.value = "";
            renderBeatDetails(beatObj, beatIndex, container);
            container.lastElementChild.previousElementSibling.focus();
            salvaDati();
        }
    };
    container.appendChild(newDetailInput);
}

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
