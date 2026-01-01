# Sito Manuel Riccardi - Artista Contemporaneo

Sito web statico per l'artista Manuel Riccardi.

## Deployment su Vercel

### Opzione 1: Tramite Interfaccia Web (Consigliato)

1. **Crea un account su Vercel**
   - Vai su [vercel.com](https://vercel.com)
   - Clicca su "Sign Up" e registrati con GitHub, GitLab o email

2. **Prepara il repository Git**
   - Se non hai ancora un repository Git, inizializzalo:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Crea un repository su GitHub/GitLab e fai push:
     ```bash
     git remote add origin <URL_DEL_TUO_REPOSITORY>
     git push -u origin main
     ```

3. **Deploy su Vercel**
   - Vai su [vercel.com/new](https://vercel.com/new)
   - Clicca su "Import Git Repository"
   - Seleziona il tuo repository
   - Vercel rileverà automaticamente che è un sito statico
   - Clicca su "Deploy"
   - Il sito sarà online in pochi minuti!

### Opzione 2: Tramite Vercel CLI

1. **Installa Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login su Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Segui le istruzioni nella CLI
   - Per il deploy di produzione:
     ```bash
     vercel --prod
     ```

## Struttura del Progetto

```
sito manu/
├── index.html              # Homepage
├── pages/
│   ├── galleria.html       # Galleria pubblica
│   ├── collezione-privata.html  # Collezione privata
│   └── abusive-mushroom.html   # Pagina Abusive Mushroom
├── assets/                 # Immagini e risorse
├── styles.css              # Stili CSS
├── script.js               # JavaScript
└── vercel.json             # Configurazione Vercel
```

## Note

- Il sito è completamente statico (HTML, CSS, JavaScript)
- Vercel gestirà automaticamente il routing e l'hosting
- Le immagini sono incluse nella cartella `assets/`
- Il file `vercel.json` contiene la configurazione per Vercel

## Domini Personalizzati

Dopo il deploy, puoi aggiungere un dominio personalizzato:
1. Vai su Vercel Dashboard
2. Seleziona il tuo progetto
3. Vai su "Settings" > "Domains"
4. Aggiungi il tuo dominio


