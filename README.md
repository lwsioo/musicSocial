# 🎤 MCNetwork - Technical Documentation (Phase 0)

## 🏗️ Tech Stack & Architettura
Questo documento riassume le scelte tecniche effettuate per lo sviluppo della WebApp MCNetwork.

### 1. Front-end: **Next.js**
- **Perché:** Offre Rendering lato server (SSR) per una velocità massima e una SEO ottimale. Essenziale per la condivisione dei profili MC e delle battle.
- **Utilizzo:** Gestirà tutta l'interfaccia utente, dalla Training Room al Feed.

### 2. Back-end: **Node.js + Express**
- **Perché:** Estremamente veloce nella gestione di richieste asincrone (notifiche, rating in tempo reale).
- **Utilizzo:** Gestirà la logica di business, le votazioni (1-5 stelle) e la comunicazione con il Database.

### 3. Database: **PostgreSQL (via Supabase o Neon.tech)**
- **Perché:** Database relazionale robusto. Indispensabile per gestire classifiche, W/L Ratio e relazioni complesse tra MC e Produttori.
- **Alternativa:** Inizialmente si userà il piano gratuito di **Supabase** per facilità di setup.

### 4. Media Storage (Video/Audio)
- **Scelta Professionale:** Amazon S3 con CloudFront (CDN).
- **Scelta Iniziale (Alternativa Free/Easy):** **Cloudinary**.
  - **Perché:** Offre un piano gratuito generoso. Gestisce automaticamente la trasformazione dei video (es. ridimensionamento per il feed verticale) e ha una CDN integrata per caricamenti istantanei in tutta Italia.

---

## 🛠️ Come configurare l'ambiente (Quick Start)

1. **Inizializzazione Project:**
   ```bash
   npx create-next-app@latest mcnetwork