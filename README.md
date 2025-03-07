# 🍺 Beers API

Willkommen zur **Beers API**, einer einfachen und leistungsfähigen RESTful API zur Verwaltung und Abfrage von Biersorten. 

---

## 🚀 Installation

### 1️⃣ Repository klonen
```bash
git clone <repository-url>
cd beers-api
```

### 2️⃣ Abhängigkeiten installieren
```bash
npm install
```

### 3️⃣ Server starten
```bash
npm start
```

🔗 Der Server läuft standardmäßig auf [`http://localhost:3000`](http://localhost:3000).

---

## 📌 API-Endpunkte

### 🔍 GET `/beers`
📥 Alle verfügbaren Biere abrufen.

**Antwort:**
```json
[
  {"id": 1, "name": "Pilsner", "brewery": "Brauerei A"},
  {"id": 2, "name": "Weizen", "brewery": "Brauerei B"}
]
```

---

### 🔍 GET `/beers/:id`
📥 Ein einzelnes Bier abrufen.

**Beispiel:** `GET /beers/1`

**Antwort:**
```json
{"id": 1, "name": "Pilsner", "brewery": "Brauerei A"}
```

---

### ➕ POST `/beers`
➕ Ein neues Bier hinzufügen.

**Request Body:**
```json
{"name": "Kölsch", "brewery": "Brauerei C"}
```

**Antwort:**
```json
{"id": 3, "name": "Kölsch", "brewery": "Brauerei C"}
```

---

### ❌ DELETE `/beers/:id`
🗑️ Ein Bier löschen.

**Beispiel:** `DELETE /beers/1`

**Antwort:**
```json
{"message": "Bier gelöscht"}
```

---

## 📜 Lizenz

⚖️ Diese API steht unter der **MIT License**.

---

💡 Viel Spaß beim Entwickeln und Prost! 🍻
