// Story Data for "Ostatnie Lato w Krakowie"
// Struktura: sceny, dialogi, wybory, postacie

const CHARACTERS = {
    NARRATOR: {
        name: "Narrator",
        color: "#ffffff"
    },
    MACIEJ: {
        name: "Maciej",
        color: "#4a90e2"
    },
    KINGA: {
        name: "Kinga",
        color: "#ff69b4"
    },
    JULIA: {
        name: "Julia",
        color: "#9b59b6"
    },
    ZOSIA: {
        name: "Zosia",
        color: "#1abc9c"
    }
};

const BACKGROUNDS = {
    RYNEK: "rynek-glowny.png",
    KAZIMIERZ: "rynek-glowny.png", // Używamy tego samego Rynku jako placeholder
    WISLA: "rynek-glowny.png",
    WAWEL: "rynek-glowny.png",
    BIURO: "rynek-glowny.png",
    AKADEMIK: "rynek-glowny.png",
    BLACK: null
};

const CHARACTER_SPRITES = {
    KINGA_NEUTRAL: "kinga.png",
    KINGA_HAPPY: "kinga.png",
    KINGA_SAD: "kinga.png",
    KINGA_BLUSH: "kinga.png",
    JULIA_NEUTRAL: "julia.png",
    JULIA_CONFIDENT: "julia.png",
    ZOSIA_NEUTRAL: "zosia.png",
    ZOSIA_HAPPY: "zosia.png",
    MACIEJ: "maciej.png"
};

// Main Story Structure
const STORY = {
    // Prolog
    "start": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Czerwiec 2024. Kraków. Ostatni semestr studiów magisterskich."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Już miesiąc minął od obrony licencjatu. Wszyscy wokół mnie robili plany na przyszłość, a ja... wciąż nie wiedziałem, czego chcę."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Amsterdam czy Kraków? Kariera czy życie? A może jedno i drugie?"
            }
        ],
        next: "scene_rynek_intro"
    },

    // Scena 1: Pierwsze spotkanie z Kingą na Rynku
    "scene_rynek_intro": {
        background: BACKGROUNDS.RYNEK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Rynek Główny. Złote popołudniowe słońce odbija się w oknach kamienic. Turyści robią zdjęcia Sukiennicom."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "(Myśli) Umówiłem się z Kingą na kawę. Dawno nie gadaliśmy na spokojnie, odkąd skończyliśmy licencjat."
            }
        ],
        next: "scene_rynek_kinga_appears"
    },

    "scene_rynek_kinga_appears": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Maciek! Tutaj jesteś! Szukałam cię wszędzie!"
            }
        ],
        effects: {
            playSound: "kinga-voice-hello.mp3"
        },
        next: "scene_rynek_dialogue_1"
    },

    "scene_rynek_dialogue_1": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Cześć, King. Przepraszam, zapomniałem o czasie..."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Typowe."
            }
        ],
        next: "scene_rynek_dialogue_2"
    },

    "scene_rynek_dialogue_2": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "No nic, najważniejsze że jesteś. Słuchaj, mam dla ciebie świetne wieści!"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Tak? Co się stało?"
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Nasz startup dostał grant od miasta! 50 tysięcy złotych na rozwój!"
            }
        ],
        next: "scene_rynek_dialogue_3"
    },

    "scene_rynek_dialogue_3": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Wow, to super! Gratuluję, King!"
            }
        ],
        next: "scene_rynek_kinga_proposal"
    },

    "scene_rynek_kinga_proposal": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_BLUSH },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "No właśnie... chciałam zapytać..."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Czy nie chciałbyś dołączyć? Jako tech lead? Moglibyśmy razem..."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Kinga spuszcza wzrok, lekko się rumieniona. To nie jest tylko propozycja biznesowa..."
            }
        ],
        next: "choice_rynek_kinga_1"
    },

    // PIERWSZY WYBÓR - wpływa na relację z Kingą
    "choice_rynek_kinga_1": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_BLUSH },
        type: "choice",
        choices: [
            {
                text: "\"To brzmi świetnie, ale muszę pomyśleć. Mam ofertę z Amsterdamu...\"",
                effects: {
                    stats: { honesty: +2 },
                    relationship: { kinga: 0 }
                },
                next: "choice_1_honest"
            },
            {
                text: "\"King, to dla mnie za duże zobowiązanie. Sorry...\"",
                effects: {
                    stats: { independence: +1 },
                    relationship: { kinga: -1 }
                },
                next: "choice_1_distant"
            },
            {
                text: "\"Czemu nie? Zawsze chciałem pracować z Tobą!\"",
                effects: {
                    relationship: { kinga: +3, julia: -1 }
                },
                next: "choice_1_enthusiastic"
            },
            {
                text: "[Milczenie, patrzenie w oczy]",
                effects: {
                    relationship: { kinga: +1 },
                    flags: { romantic_tension_kinga: true }
                },
                next: "choice_1_silent"
            }
        ]
    },

    // Reakcje na wybór 1A - Szczerość
    "choice_1_honest": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Amsterdam? Wow... nie wiedziałam, że masz taką ofertę."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "To... to naprawdę duża rzecz, Maciek."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Dlatego właśnie muszę to przemyśleć. Nie chcę podejmować pochopnych decyzji."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Rozumiem. Daj znać, jak się zdecydujesz, okej?"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "W jej głosie słychać rozczarowanie, ale też akceptację."
            }
        ],
        next: "scene_rynek_end"
    },

    // Reakcje na wybór 1B - Dystans
    "choice_1_distant": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_SAD },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Och... rozumiem."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Kinga próbuje ukryć rozczarowanie, ale widać, że ją to zabolało."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "No cóż, myślałam że... nieważne."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Muszę lecieć. Pogadamy później, Maciek."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Odchodzi szybkim krokiem, nie oglądając się za siebie."
            }
        ],
        effects: {
            flags: { kinga_hurt: true }
        },
        next: "scene_rynek_end"
    },

    // Reakcje na wybór 1C - Entuzjazm
    "choice_1_enthusiastic": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Naprawdę?! Maciek, to byłoby niesamowite!"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Kinga aż podskakuje z radości. Jej oczy błyszczą."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Wiesz, zawsze myślałam, że świetnie byśmy się uzupełniali. Ty z twoim tech background, ja z designem..."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Dokładnie! To może być naprawdę coś wielkiego."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Spotkajmy się jutro i wszystko omówmy! Mam tyle pomysłów!"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Uścisk, który mi daje, trwa chwilę dłużej niż zwykle."
            }
        ],
        effects: {
            flags: { kinga_route_open: true, amsterdam_less_likely: true }
        },
        next: "scene_rynek_end"
    },

    // Reakcje na wybór 1D - Milczenie (romantic)
    "choice_1_silent": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_BLUSH },
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Patrzymy na siebie w milczeniu. Czas jakby się zatrzymał."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Wokół szum turystów, gołębie, uliczni muzykanci... ale my jesteśmy w naszym własnym świecie."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Maciek, ja..."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Nie kończy zdania. Ale nie musi. Oboje wiemy, że dzieje się coś więcej niż tylko propozycja biznesowa."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Daj mi trochę czasu. To wszystko dzieje się tak szybko."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Masz tyle czasu, ile potrzebujesz."
            }
        ],
        effects: {
            flags: { kinga_romantic_scene_1: true }
        },
        next: "scene_rynek_end"
    },

    // Zakończenie sceny na Rynku
    "scene_rynek_end": {
        background: BACKGROUNDS.RYNEK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Słońce powoli zaczyna zachodzić za kamienicami. Czerwcowy wieczór w Krakowie."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "To dopiero początek lata. I dopiero początek moich wyborów..."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "[To będzie koniec demo. Pełna gra wkrótce!]"
            }
        ],
        next: "demo_end"
    },

    // Demo End
    "demo_end": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Dziękujemy za zagranie w demo \"Ostatniego Lata w Krakowie\"!"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Pełna gra będzie zawierać 3 akty, 6 zakończeń i ponad 15 godzin rozgrywki."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Dodaj do wishlisty na Steam, aby otrzymać powiadomienie o premierze!"
            }
        ],
        next: null // Koniec demo
    }
};

// Initial game state
const INITIAL_STATE = {
    currentScene: "start",
    stats: {
        honesty: 0,
        independence: 0,
        ambition: 0
    },
    relationships: {
        kinga: 0,
        julia: 0,
        zosia: 0
    },
    amsterdamChance: 50, // Procent szansy na wyjazd
    flags: {},
    chapter: 1,
    visitedScenes: []
};
