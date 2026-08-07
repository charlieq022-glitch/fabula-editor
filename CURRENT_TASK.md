# CURRENT TASK

## Titolo
Layout adattabile del pannello destro

## Obiettivo
Consentire al pannello destro di essere visualizzato:
- a destra (layout attuale)
- in basso (layout alternativo)

L'utente potrà cambiare layout mantenendo invariate tutte le funzionalità.

## Architettura approvata

- Utilizzare classi CSS:
  - layout-right
  - layout-bottom
- Nessuna duplicazione di HTML.
- Nessuna duplicazione di logica JS.
- Il layout deve essere guidato da classi CSS.
- Salvare la preferenza in localStorage.
- Il resizer deve adattarsi automaticamente:
  - destra → ridimensiona larghezza
  - basso → ridimensiona altezza

## File interessati

- index.html
- style.css
- script.js

## Stato

✅ Analisi completata.
❌ Implementazione non iniziata.

## Prossimo passo

Implementare il layout CSS mantenendo la compatibilità con il codice esistente.

NON modificare ancora altre funzionalità.

Prima analizza i file interessati e presenta il piano delle modifiche.
Attendi conferma prima di scrivere codice.