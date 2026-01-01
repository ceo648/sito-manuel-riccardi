# Guida per Aggiungere Immagini alle Pagine

## 📁 Cartella: `assets/`

Tutte le immagini devono essere salvate nella cartella `assets/` alla radice del progetto.

## 🖼️ Galleria Pubblica (`pages/galleria.html`)

### Come aggiungere immagini:

1. Salva le immagini nella cartella `assets/` con nomi descrittivi (es: `galleria-opera-1.jpg`, `galleria-opera-2.jpg`, ecc.)

2. Apri il file `pages/galleria.html` e trova l'array `artworks` (circa riga 192)

3. Aggiungi un nuovo oggetto per ogni immagine:

```javascript
{
    image: '../assets/nome-file-immagine.jpg',
    title: 'Titolo Opera',
    medium: 'Olio su tela',  // o altro medium
    year: '2024'  // anno di creazione
}
```

### Esempio completo:

```javascript
const artworks = [
    {
        image: '../assets/galleria-opera-1.jpg',
        title: 'Titolo Opera 1',
        medium: 'Olio su tela',
        year: '2024'
    },
    {
        image: '../assets/galleria-opera-2.jpg',
        title: 'Titolo Opera 2',
        medium: 'Olio su tela',
        year: '2023'
    },
    // Aggiungi altre opere qui...
];
```

## 🔒 Collezione Privata (`pages/collezione-privata.html`)

### Come aggiungere immagini:

1. Salva le immagini nella cartella `assets/` con nomi descrittivi (es: `privata-opera-1.jpg`, `privata-opera-2.jpg`, ecc.)

2. Apri il file `pages/collezione-privata.html` e trova l'array `privateArtworks` (circa riga 243)

3. Aggiungi un nuovo oggetto per ogni immagine:

```javascript
{
    image: '../assets/nome-file-immagine.jpg',
    title: 'Titolo Opera Privata',
    medium: 'Olio su tela',
    year: '2024',
    description: 'Descrizione opzionale dell\'opera'
}
```

### Esempio completo:

```javascript
const privateArtworks = [
    {
        image: '../assets/privata-opera-1.jpg',
        title: 'Titolo Opera Privata 1',
        medium: 'Olio su tela',
        year: '2024',
        description: 'Descrizione dell\'opera'
    },
    {
        image: '../assets/privata-opera-2.jpg',
        title: 'Titolo Opera Privata 2',
        medium: 'Olio su tela',
        year: '2023',
        description: 'Descrizione dell\'opera'
    },
    // Aggiungi altre opere qui...
];
```

## 📝 Note Importanti

- **Percorsi:** Usa sempre `../assets/` per le immagini nelle pagine (perché sono in una sottocartella `pages/`)
- **Formati supportati:** JPG, JPEG, PNG, WEBP
- **Nomi file:** Evita spazi nei nomi dei file (usa trattini o underscore)
- **Dimensioni:** Le immagini verranno ridimensionate automaticamente, ma usa immagini ad alta risoluzione per migliori risultati

## 🚀 Quando hai le immagini pronte

Quando hai salvato tutte le immagini nella cartella `assets/` e hai i dettagli (titoli, medium, anno), posso aiutarti ad aggiungerle al codice!

