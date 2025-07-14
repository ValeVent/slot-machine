# Slot Machine

Questo progetto è un'applicazione web che simula una slot machine, sviluppata in Angular. Permette agli utenti di generare combinazioni casuali di numeri o lettere e visualizzare i risultati con un effetto di "spin".

## Descrizione Approfondita del Progetto

L'applicazione "Slot Machine" offre un'interfaccia semplice e divertente per simulare il funzionamento di una slot. L'utente può scegliere tra due modalità: generare una combinazione di tre numeri o una combinazione di tre lettere. Cliccando su un pulsante, la slot "gira" e visualizza i nuovi risultati con un'animazione di rotazione. La logica di generazione dei numeri/lettere e la gestione dello stato sono centralizzate in un servizio Angular, mentre i componenti NumeriComponent e LettereComponent si occupano della visualizzazione specifica dei risultati. Il routing di Angular è utilizzato per navigare tra le diverse modalità di visualizzazione.


## Tecnologie Utilizzate

- Angular: Framework per la costruzione dell'applicazione web.

- TypeScript: Linguaggio di programmazione per lo sviluppo dell'applicazione.

- HTML: Struttura dei componenti e del template.

- CSS: Per lo styling e le animazioni di "spin" dei risultati.

- RxJS (BehaviorSubject): Utilizzato nel servizio per la gestione reattiva e la propagazione dei risultati generati ai componenti di visualizzazione.

- Angular Router: Per la navigazione tra le modalità "numeri" e "lettere".

- Bootstrap 5: Framework CSS utilizzato per il layout e lo stile di base (es. btn, form-select, classi di utilità per il layout).


## Funzionalità Principali

- Generazione Casuale: Genera una sequenza casuale di tre numeri (da 0 a 9) o tre lettere maiuscole.

- Selezione Modalità: Un menu a tendina permette all'utente di scegliere tra la modalità "Numeri" e "Lettere".

- Animazione di Spin: I risultati vengono visualizzati con un effetto di rotazione (spin-effect) per simulare il movimento di una slot machine.

- Pulsante "Genera": Un grande pulsante rotondo attiva la generazione di nuovi risultati.

- Componenti Dedicati: Separazione della logica di visualizzazione in NumeriComponent e LettereComponent per una maggiore modularità.

- Servizio Condiviso: SlotService gestisce la logica di generazione dei risultati e li distribuisce ai componenti tramite un BehaviorSubject.


## Come Avviare il Progetto

Segui questi passaggi per configurare ed eseguire il progetto localmente:


### Prerequisiti

- Node.js (versione LTS raccomandata)

- npm (Node Package Manager) o Yarn

- Angular CLI: Installa globalmente Angular CLI se non lo hai già fatto:

npm install -g @angular/cli


### Installazione

1. Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/progetto-slot-machine.git

Assicurati di sostituire 'progetto-slot-machine.git' con il nome esatto del tuo repository.

2. Naviga nella directory del progetto:

cd progetto-slot-machine

3. Installa le dipendenze del progetto:

npm install


### Avvio dell'Applicazione

1. Avvia il server di sviluppo Angular:

ng serve

2. Apri il tuo browser web e naviga su http://localhost:4200/. L'applicazione si ricaricherà automaticamente ad ogni modifica dei file sorgente.


## Stato del Progetto

Questo progetto è un'applicazione Angular divertente e funzionale che dimostra l'uso di servizi, routing, gestione dello stato reattivo con RxJS e animazioni CSS per creare un'esperienza utente interattiva.


## Contatti

- GitHub: https://github.com/ValeVent

- LinkedIn: https://www.linkedin.com/in/valentina-venturo

- Sito Web: http://www.valentinaventuro.it


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

