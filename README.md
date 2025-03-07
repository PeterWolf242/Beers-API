# Beers API

Eine RESTful API zur Verwaltung und Abfrage von Biersorten.

## Installation

```bash
# Repository klonen
git clone <repository-url>
cd beers-api

# Abhängigkeiten installieren
npm install
```

## Nutzung

```bash
# Server starten
npm start
```

Der Server läuft standardmäßig auf `http://localhost:3000`.

## API-Endpunkte

### GET /beers
Alle verfügbaren Biere abrufen.

**Antwort:**
```json
[
  {"id": 1, "name": "Pilsner", "brewery": "Brauerei A"},
  {"id": 2, "name": "Weizen", "brewery": "Brauerei B"}
]
```

### GET /beers/:id
Ein einzelnes Bier abrufen.

**Beispiel:**
`GET /beers/1`

**Antwort:**
```json
{"id": 1, "name": "Pilsner", "brewery": "Brauerei A"}
```

### POST /beers
Ein neues Bier hinzufügen.

**Request Body:**
```json
{"name": "Kölsch", "brewery": "Brauerei C"}
```

**Antwort:**
```json
{"id": 3, "name": "Kölsch", "brewery": "Brauerei C"}
```

### DELETE /beers/:id
Ein Bier löschen.

**Beispiel:**
`DELETE /beers/1`

**Antwort:**
```json
{"message": "Bier gelöscht"}
```

## Lizenz

MIT License
