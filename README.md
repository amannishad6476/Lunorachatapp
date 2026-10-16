# Lunora - Social & Compatibility Android App and website 

Complete Android & Web app replicated faithfully from the 39-page PDF design screenshots for **Lunora (Social & Compatibility)**.

---

## 📱 Features & Screen Breakdown (Mapped to PDF)

### 1. Onboarding Flow (Steps 1 – 7)
- **Step 1/7: About You** *(Page 2)*
  - Full Name input with user icon
  - Username with validation (`@amannishad`), character count `10/30`, green checkmark
  - Pronoun chips (`She/Her`, `He/Him`, `They/Them`, `+ Custom`, `Skip` with gold outline)
- **Step 2/7: Birth Details - Date & Time** *(Page 3)*
  - Date of birth (`15 February 2007`), Age 18+ policy notice
  - Time of birth (`11:25 pm`)
- **Step 3/7: Birth Details - City & Privacy** *(Pages 1 & 5)*
  - City of birth with search & autocomplete (`Gorakhpur`, `Luchnow `, `Delhi`, etc.)
  - Private birth details security guarantee card
- **Step 4/7: Relationship Status** *(Pages 4, 7, 28)*
  - 10 Status choices in a 3-column grid (`Single`, `Talking / Hanging out`, `Dating`, `Exclusive relationship`, `Situationship`, `Living together`, `Open / Poly`, `Engaged`, `Married`, `Separated / Divorced`)
- **Step 5/7: Context / Life Bio** *(Pages 6, 8, 9)*
  - "In your own words" (0/400 counter)
  - Interactive examples (Series B product manager, IIT Delhi BTech student)
- **Step 6/7: What are you into?** *(Pages 10 – 19)*
  - Horizontal jump category tabs with counters (`Community (1)`, `Creative (1)`, `Food (1)`, etc.)
  - Over 13 categories with chips (Langar Seva, Chai, Campus Life, Studying, Trips, Cars, Basketball, Self Care, etc.)
  - Progress bar tracking `"X of 10 chosen"`, dynamic button `PICK X MORE ✨` ➔ `CONTINUE ✨`
- **Step 7/7: Enable Notifications** *(Page 20)*
  - Notification benefits overview (Bumps, Connection requests, Daily reading)
  - `SEE MY FIRST READING ✨` action button

---

### 2. Main App (Three Tabs)

#### Tab 1: You *(Page 21)*
- Dynamic header: `THURSDAY · SEP 24`, `Hi, Aman` + Gold Avatar initial button
- **DAILY INSIGHT card**: Streak tracker (`F Sa Su M Tu W Th`), flame counter `0 🔥`, title *"Today's vibration is waiting"*, chevron button opening the deep reading view
- **TODAY'S AFFIRMATION card**: Streak tracker, *"I receive ease"*, quote, interactive `Claim` ➔ `Claimed ✓`
- **ASK LUNORA section**: Question prompt cards + refresh button + "Ask your own question" mic pill

#### Tab 2: People / Compatibility *(Pages 22, 27)*
- Action cards: `Mutual: Add connection` and `Private: Add custom profile`
- Overlapping cosmic graphic: `? - Y - ?` (You and hidden connection)
- `YOU'RE FLYING SOLO` banner
- `Two ways to add someone` guide (Connections & Saved Profiles)
- Real-time compatibility synastry list (e.g. Priya Sharma 92% Electric, Karan Mehta 84% Harmonic)

#### Tab 3: Ask Lunora *(Pages 23–25, 39)*
- Welcoming prompt: *"How can I help you today, there?"*
- `TRY ASKING` interactive celestial questions
- Live Astrological AI chat tuned to Aman's chart (Moon in Shatabhisha, Aquarius)
- Mic voice input with simulated toast (`Speech is unavailable.` from Page 39)

---

### 3. Detailed Modals & Subscreens
- **Daily Insight Screen** *(Pages 32, 33, 35–38)*:
  - Astrology transit overview (`Moon in Shatabhisha, Aquarius`)
  - Horizontal tabs: `Career`, `Love`, `Money` (Active), `Learning`, `Health`
  - Deep reading card with `DO` (green) and `AVOID` (red) guidance
  - Follow-up questions leading into Lunora chat
- **Report Insight Sheet** *(Page 34)*:
  - Radio options (Offensive, Harmful, Sexual, Misleading, etc.) and optional details
- **Profile Screen** *(Pages 26, 29)*:
  - Glowing gold avatar `A`, name `Aman`, `15 Feb 2007 · Gorakhpur · —`
  - Edit details, Help & support dropdown (Contact us, Report an issue), Manage account, Log out
- **Manage Account** *(Page 31)*:
  - `SIGNED IN AS 918303719864`
  - `Delete account` with safety confirmation
- **Log Out Dialog** *(Page 30)*:
  - Centered confirmation modal with exact text and buttons

---

## 🚀 Running & Building

### 1. Run in Browser (Live Dev Server)
The app is currently running live at:
```bash
http://localhost:5173/
```
To restart anytime:
```bash
npm run dev
```

### 2. Build Web Assets
```bash
npm run build
```

### 3. Build & Open in Android Studio
The native Android project is generated in `./android`:
```bash
npm run cap:sync      # Sync web assets into Android project
npm run cap:android   # Opens project directly in Android Studio
```
Or build APK directly with Gradle:
```bash
cd android
.\gradlew.bat assembleDebug
```
The APK will be generated at `android/app/build/outputs/apk/debug/app-debug.apk`.

---

## 🧭 Direct PDF Screen Navigator
Click the floating **"PDF Screen Jump"** button on the bottom right of the screen at any time to instantly jump to any of the 39 screens from the PDF!
