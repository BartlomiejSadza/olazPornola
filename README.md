# Ostatnie Lato w Krakowie - Visual Novel

**Romantic Visual Novel** o wyborach życiowych, miłości i ostatnim lecie w Krakowie.

![Status](https://img.shields.io/badge/status-demo-yellow)
![Platform](https://img.shields.io/badge/platform-web-blue)
![Language](https://img.shields.io/badge/language-Polish-red)

---

## 📖 O projekcie

"Ostatnie Lato w Krakowie" to romantyczna gra typu visual novel osadzona w malowniczym Krakowie. Gracz wciela się w Maćka, 24-letniego studenta AGH stojącego przed trudnymi wyborami życiowymi:

- **Kariera za granicą** (Amsterdam) vs. **Zostanie w Polsce**
- **Związek** vs. **Kariera**
- **Pasja** vs. **Stabilizacja**

### Postacie romansowe

- 🌸 **Kinga** - Childhood Friend (UX designer, planuje zostać w Krakowie)
- 💼 **Julia** - The Ambitious One (Project manager, zachęca do wyjazdu)
- 🎨 **Zosia** - The Free Spirit (Artystka, żyje chwilą)

### Struktura gry

- **3 Akty**: Czerwiec, Lipiec, Sierpień
- **6 Zakończeń**: W zależności od wyborów gracza
- **System relacji**: Śledzenie relacji z postaciami
- **Znaczące wybory**: Każdy wybór ma konsekwencje

---

## 🎮 Jak uruchomić

### Metoda 1: Bezpośrednio z przeglądarki

1. Otwórz plik `game/index.html` w przeglądarce
2. Gotowe! Gra załaduje się automatycznie

### Metoda 2: Lokalny serwer (zalecane)

```bash
# Jeśli masz Python 3
cd game
python3 -m http.server 8000

# Następnie otwórz w przeglądarce:
# http://localhost:8000
```

### Metoda 3: Live Server (VS Code)

1. Zainstaluj rozszerzenie "Live Server" w VS Code
2. Kliknij prawym na `game/index.html`
3. Wybierz "Open with Live Server"

---

## 🎯 Sterowanie

### Klawiatura
- **Spacja / Enter** - Przejdź do następnego dialogu
- **Escape** - Powrót do menu głównego
- **Ctrl+S** - Zapisz grę
- **Ctrl+L** - Wczytaj grę

### Myszka
- **Kliknij na pole dialogowe** - Przejdź do następnego dialogu
- **Kliknij na przycisk wyboru** - Podejmij decyzję
- **Szybkie menu** (prawy dolny róg):
  - 💾 Zapisz
  - 📂 Wczytaj
  - ⏩ Tryb Auto
  - ⏭️ Pomiń
  - ⚙️ Menu

---

## 🗂️ Struktura projektu

```
ola/
├── game/
│   ├── index.html              # Główny plik HTML
│   ├── styles/
│   │   └── main.css            # Style CSS
│   ├── scripts/
│   │   ├── story-data.js       # Dane fabularne (sceny, dialogi)
│   │   ├── game-engine.js      # Silnik gry
│   │   └── main.js             # Kontroler główny
│   └── assets/
│       ├── images/
│       │   ├── backgrounds/    # Tła (Kraków)
│       │   ├── characters/     # Sprite'y postaci
│       │   └── ui/             # Elementy UI
│       ├── audio/
│       │   ├── music/          # Muzyka (OST)
│       │   └── sfx/            # Efekty dźwiękowe
│       └── fonts/              # Czcionki
├── IMG_1645.png                # Wymagania projektowe (zdjęcie 1)
├── IMG_1646.png                # Wymagania projektowe (zdjęcie 2)
└── README.md                   # Ten plik
```

---

## ✨ Funkcje

### Zaimplementowane w Demo
- ✅ System dialogów z efektem typewriter
- ✅ System wyborów wpływających na fabułę
- ✅ Tracking relacji z postaciami
- ✅ System zapisywania/wczytywania gry (LocalStorage)
- ✅ Ekran tytułowy, menu opcji, credits
- ✅ Animacje i przejścia
- ✅ Responsywny design
- ✅ Keyboard shortcuts
- ✅ Przykładowa scena z Kingą na Rynku

### Planowane na pełną wersję
- ⏳ Pełne 3 akty z wszystkimi scenami
- ⏳ 6 zakończeń
- ⏳ Profesjonalne grafiki (tła Krakowa + character art)
- ⏳ Oryginalna muzyka
- ⏳ Voice acting
- ⏳ Dodatkowe postacie (Julia, Zosia)
- ⏳ Mini-gry i wydarzenia specjalne
- ⏳ Galeria CG
- ⏳ System achievementów
- ⏳ Wersja Steam z Workshop

---

## 🎨 Dodawanie własnej zawartości

### Jak dodać nową scenę?

Edytuj plik `game/scripts/story-data.js`:

```javascript
"moja_nowa_scena": {
    background: BACKGROUNDS.RYNEK,
    character: CHARACTER_SPRITES.KINGA_HAPPY,
    dialogue: [
        {
            speaker: CHARACTERS.KINGA,
            text: "To jest mój nowy dialog!"
        }
    ],
    next: "kolejna_scena"
}
```

### Jak dodać nowy wybór?

```javascript
"moja_scena_z_wyborem": {
    background: BACKGROUNDS.RYNEK,
    character: CHARACTER_SPRITES.KINGA_NEUTRAL,
    type: "choice",
    choices: [
        {
            text: "Opcja A",
            effects: {
                relationship: { kinga: +2 }
            },
            next: "scena_po_wyborze_a"
        },
        {
            text: "Opcja B",
            effects: {
                relationship: { kinga: -1 }
            },
            next: "scena_po_wyborze_b"
        }
    ]
}
```

### Jak dodać nowe tło?

1. Umieść obraz w `game/assets/images/backgrounds/`
2. Dodaj do `BACKGROUNDS` w `story-data.js`:

```javascript
const BACKGROUNDS = {
    // ...
    NOWE_TLO: "nazwa-pliku.jpg"
};
```

### Jak dodać nową postać?

1. Umieść sprite w `game/assets/images/characters/`
2. Dodaj do `CHARACTER_SPRITES`:

```javascript
const CHARACTER_SPRITES = {
    // ...
    JULIA_NEUTRAL: "julia-neutral.png"
};
```

3. Dodaj definicję postaci:

```javascript
const CHARACTERS = {
    // ...
    JULIA: {
        name: "Julia",
        color: "#9b59b6"
    }
};
```

---

## 🔧 Customizacja

### Zmiana prędkości tekstu

W `game/scripts/game-engine.js`:

```javascript
this.textSpeed = 50; // Zmień wartość (ms na znak)
```

### Zmiana kolorów motywu

W `game/styles/main.css` - sekcja `:root` (jeśli dodasz zmienne CSS).

### Dodanie nowej muzyki

1. Umieść plik MP3 w `game/assets/audio/music/`
2. W scenie użyj:

```javascript
effects: {
    playMusic: "nazwa-utworu.mp3"
}
```

---

## 📊 Zgodność z wymaganiami projektowymi

Ten projekt spełnia wymagania z dokumentu "Produkcja Gier":

### ✅ Dokument projektowy zawiera:
1. **Rodzaj gry**: Romantic Visual Novel (slice-of-life)
2. **Zarys fabuły**: Historia Maćka w Krakowie, 3 akty, 6 zakończeń
3. **Typ gracza**: 18-30 lat, zainteresowani story-driven experiences
4. **Elementy wyróżniające**:
   - Oryginalna muzyka (kompozytor filmowy)
   - Fotograficzne tła Krakowa
   - Profesjonalny voice acting
   - Custom artwork (manga style)
   - Zaawansowany engine
   - Lokalizacja (PL/EN)
5. **Planowana dystrybucja**:
   - Faza Beta (Itch.io)
   - Komercjalizacja (Steam, GOG)
   - Porty (Switch, Mobile)
6. **Strategia komunikacji**:
   - Social media (Twitter, Instagram, TikTok)
   - Discord community
   - Influencer outreach
   - PR campaign

### 📈 Budżet i metryki
- **Budżet produkcji**: 215k-420k PLN
- **Budżet marketingu**: 30k-60k PLN
- **Break-even**: 8,750-17,150 kopii
- **Target**: 15k-30k kopii w roku 1

---

## 🛠️ Technologie

- **HTML5** - Struktura
- **CSS3** - Stylizacja (animacje, responsywność)
- **Vanilla JavaScript** - Logika gry (bez frameworków)
- **LocalStorage API** - Zapisywanie stanu gry
- **SVG** - Placeholdery grafik

---

## 📝 Status rozwoju

### Demo (Obecna wersja)
- [x] Podstawowy silnik visual novel
- [x] System dialogów i wyborów
- [x] Jedna kompletna scena (Rynek + Kinga)
- [x] 4 różne ścieżki wyboru
- [x] System zapisywania
- [x] Placeholder grafiki

### Alpha (Następny milestone)
- [ ] Kompletny Akt I (wszystkie 3 postacie romansowe)
- [ ] Profesjonalne tła Krakowa (zdjęcia)
- [ ] Podstawowe character sprites
- [ ] Muzyka (1-2 utwory testowe)

### Beta
- [ ] Wszystkie 3 akty
- [ ] 6 zakończeń
- [ ] Pełna oprawa graficzna
- [ ] Voice acting
- [ ] Testy community

### Release
- [ ] Polish & bug fixes
- [ ] Lokalizacja EN
- [ ] Steam integration
- [ ] Marketing campaign

---

## 👥 Zespół

- **Design & Scenariusz**: [Twoje Imię]
- **Programowanie**: Bartłomiej Sadza
- **Grafika**: [Do uzupełnienia]
- **Muzyka**: [Do uzupełnienia]
- **Voice Acting**: [Do uzupełnienia]

---

## 📄 Licencja

Ten projekt jest prototypem edukacyjnym stworzonym na zajęcia "Produkcja Gier".

**Wszystkie prawa zastrzeżone** - nie kopiować ani nie rozpowszechniać bez zgody autora.

---

## 🙏 Podziękowania

- **Miasto Kraków** - inspiracja dla settingu
- **AGH** - za zajęcia motywujące do stworzenia projektu
- **Społeczność Visual Novel** - za inspirację i feedback

---

## 📞 Kontakt

Masz pytania lub sugestie?

- **Discord**: [Link do serwera - TODO]
- **Email**: [Twój email]
- **Twitter**: [@OstatnieLato - TODO]

---

## 🚀 Quick Start dla prowadzącego

```bash
# 1. Sklonuj/pobierz repozytorium
git clone [link]

# 2. Przejdź do folderu game
cd ola/game

# 3. Uruchom lokalny serwer
python3 -m http.server 8000

# 4. Otwórz przeglądarkę
open http://localhost:8000
```

**Lub po prostu**: Otwórz `game/index.html` w Chrome/Firefox!

---

**Ostatnie Lato w Krakowie** © 2024

*Czy to będzie ostatnie lato w Krakowie? Wybór należy do Ciebie.*
