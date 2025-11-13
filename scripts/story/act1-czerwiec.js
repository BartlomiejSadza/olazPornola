// ACT I: CZERWIEC - "Ostatnie Lato w Krakowie"
// Pierwsze spotkania z wszystkimi trzema postaciami romansowymi

const ACT1_SCENES = {
    // === PROLOG ===

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

    // === DZIEŃ 1: RYNEK - SPOTKANIE Z KINGĄ ===

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

    // Reakcje na wybór z Kingą
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
            }
        ],
        next: "scene_transition_work"
    },

    // === DZIEŃ 2: BIURO - SPOTKANIE Z JULIĄ ===

    "scene_transition_work": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Następnego dnia. Biuro w centrum Krakowa."
            }
        ],
        next: "scene_office_intro"
    },

    "scene_office_intro": {
        background: BACKGROUNDS.BIURO,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Open space. Szum klimatyzacji. Dźwięk mechanicznych klawiatur. Typowy poniedziałek w software housie."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "(Myśli) Jeszcze tylko ten sprint, a potem... Amsterdam? Albo startup z Kingą? Kurczę, życie było prostsze jak miałem tylko zadania na JIRA..."
            }
        ],
        next: "scene_julia_appears"
    },

    "scene_julia_appears": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Maciek, masz chwilę? Musimy pogadać o tym Amsterdamie."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Julia. Project manager, z którym pracuję od roku. Zawsze profesjonalna, zawsze dwa kroki do przodu."
            }
        ],
        next: "scene_julia_dialogue_1"
    },

    "scene_julia_dialogue_1": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Cześć Julia. Skąd wiesz o Amsterdamie?"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "HR wspomniał. Plus, widziałam Cię na LinkedInie - zmieniłeś lokację na 'Open to relocation'."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Ah, faktycznie..."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Słuchaj, nie będę owijać w bawełnę. Jeśli planujesz ten wyjazd - muszę zacząć szukać zastępstwa. Ale mam lepszą propozycję."
            }
        ],
        next: "scene_julia_proposal"
    },

    "scene_julia_proposal": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_CONFIDENT },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Nasza firma otwiera oddział w Amsterdamie. Szukamy tech leada. Płaca gdzieś 30% wyższa niż tutaj, relokacja opłacona."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "I ja też jadę. Będę tam head of delivery. Moglibyśmy pracować razem, ale na zupełnie innym poziomie."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Wow, to... to brzmi świetnie. Ale..."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Ale masz wątpliwości. Wiem. Kraków, przyjaciele, comfort zone. Rozumiem to."
            }
        ],
        next: "choice_julia_1"
    },

    // DRUGI WYBÓR - relacja z Julią
    "choice_julia_1": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_CONFIDENT },
        type: "choice",
        choices: [
            {
                text: "\"Interesuje mnie to. Opowiedz więcej.\"",
                effects: {
                    relationship: { julia: +3 },
                    flags: { amsterdam_more_likely: true }
                },
                next: "choice_julia_interested"
            },
            {
                text: "\"Nie wiem, mam już inną propozycję tutaj w Krakowie...\"",
                effects: {
                    relationship: { julia: -1, kinga: +1 }
                },
                next: "choice_julia_hesitant"
            },
            {
                text: "\"A co ty tak naprawdę o tym myślisz? Nie jako PM, ale jako osoba?\"",
                effects: {
                    relationship: { julia: +2 },
                    flags: { julia_personal_connection: true }
                },
                next: "choice_julia_personal"
            },
            {
                text: "\"Potrzebuję czasu do namysłu.\"",
                effects: {
                    stats: { independence: +1 }
                },
                next: "choice_julia_time"
            }
        ]
    },

    // Reakcje Julia
    "choice_julia_interested": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_CONFIDENT },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Wiedziałam, że jesteś rozsądny. Dobrze, to posłuchaj..."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Tech lead w naszym amsterdamskim oddziale to nie jest pozycja 'developer z plusem'. To budowanie zespołu od zera."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Będziesz mieć wpływ na tech stack, hiring, architekturę. To jest twoja szansa, żeby przestać być tylko wykonawcą."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Brzmi ambitnie. I stresująco."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Bo jest. Ale wiem, że dasz radę. Widziałam jak pracujesz. Jesteś za dobry, żeby zostać junior developerem na zawsze."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Jej pewność siebie jest zaraźliwa. Może faktycznie powinienem spróbować?"
            }
        ],
        effects: {
            relationship: { julia: +1 }
        },
        next: "scene_julia_end"
    },

    "choice_julia_hesitant": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Ah, startup z Kingą? Słyszałam o tym."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Znasz Kingę?"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Kraków to małe miasto, a branż tech jest jeszcze mniejsza. Wiem, że dostali grant."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "To dobra opcja, jeśli chcesz pozostać w strefie komfortu. Ale pytanie - czy to jest to, czego naprawdę chcesz?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Co masz na myśli?"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Startup w Polsce vs międzynarodowa kariera. Praca z przyjaciółką vs wyjście poza swój krąg. Bezpieczeństwo vs rozwój."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Nie mówię, że jedno jest lepsze od drugiego. Ale to są fundamentalnie różne ścieżki życiowe."
            }
        ],
        next: "scene_julia_end"
    },

    "choice_julia_personal": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Hmm... nikt mnie nigdy o to nie pytał."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Julia przez moment wygląda na zaskoczoną. Jej profesjonalna maska lekko pęka."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Szczerze? Boję się. Amsterdam to ogromna zmiana. Nowy kraj, nowy język, nikt znajomy."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Ale właśnie dlatego chcę jechać. Mam 26 lat. Jeśli nie teraz, to kiedy?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "To jest... zaskakująco szczere."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Powiedziałeś, żebym odpowiedziała jako osoba, nie jako PM."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "No i... byłoby łatwiej, gdyby ktoś znajomy też tam był. Nie musi być romantycznie czy nic. Po prostu... partner w crime, wiesz?"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Po raz pierwszy widzę Julię tak... ludzką. Nie tylko ambitną PM, ale kogoś z wątpliwościami i nadziejami."
            }
        ],
        effects: {
            flags: { julia_vulnerability_shown: true }
        },
        next: "scene_julia_end"
    },

    "choice_julia_time": {
        background: BACKGROUNDS.BIURO,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_CONFIDENT },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Oczywiście. Nie oczekuję odpowiedzi teraz."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Ale zastanów się szybko. Rekrutacja startuje za dwa tygodnie."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Jasne, zrozumię."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "I Maciek? Niezależnie od twojej decyzji - doceniam, że pracujemy razem. Jesteś świetnym developerem."
            }
        ],
        next: "scene_julia_end"
    },

    "scene_julia_end": {
        background: BACKGROUNDS.BIURO,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Julia wraca do swojego desk'a. Ja wpatruję się w monitor, ale nie widzę kodu."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Dwie propozycje. Dwie zupełnie różne przyszłości. I trzeci dzień tygodnia dopiero się zaczął..."
            }
        ],
        next: "scene_transition_kazimierz"
    },

    // === DZIEŃ 3: KAZIMIERZ - SPOTKANIE Z ZOSIĄ ===

    "scene_transition_kazimierz": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Środa wieczór. Kazimierz - żydowska dzielnica Krakowa."
            }
        ],
        next: "scene_kazimierz_intro"
    },

    "scene_kazimierz_intro": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Ulica Szeroka. Kafejki, galerie, uliczni muzykanci. Tutaj Kraków jest najbardziej artystyczny."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "(Myśli) Potrzebowałem się przewietrzyć. W głowie mam chaos - Kinga, Julia, Amsterdam..."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Zauważam małą galerię z napisem 'Wystawa: Metamorfozy Miasta'. Wchodzę z ciekawości."
            }
        ],
        next: "scene_zosia_appears"
    },

    "scene_zosia_appears": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Widzę, że przyciągnęła Cię praca numer 7. 'Tymczasowość'. Moja ulubiona."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Odwracam się. Dziewczyna około mojego wieku, farbowane włosy, paint splashes na ubraniu."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Ah, przepraszam, nie wiedziałem że to twoja wystawa."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Nie moja. Po prostu tu pracuję. Ale lubię obserwować ludzi - co ich przyciąga, przy czym się zatrzymują."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Przy 'Tymczasowości' zatrzymują się ci, którzy właśnie o czymś myślą. O zmianie. O przyszłości."
            }
        ],
        next: "scene_zosia_dialogue_1"
    },

    "scene_zosia_dialogue_1": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Skąd wiesz?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Bo sam tak miałam pół roku temu. Stałam przed obrazem i myślałam - wyjazd do Berlina czy zostać w Krakowie?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "I co wybrałaś?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Zostałam. Na razie. Ale 'na razie' to najlepsza odpowiedź, jaką możesz dać życiu."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Czyli nie wiesz, czy to była dobra decyzja?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Nie ma 'dobrych' decyzji. Są tylko decyzje, które podejmujemy, i historie, które z nich wynikają."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Dziwne, ale jej słowa mają sens. Albo jestem już totalnie zmęczony myśleniem o przyszłości."
            }
        ],
        next: "scene_zosia_invite"
    },

    "scene_zosia_invite": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Słuchaj, kończy mi się shift za 20 minut. Chcesz iść na wino? Znam świetne miejsce na Szerokiej."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Nawet nie znam twojego imienia."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Zosia. A ty?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Maciek."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "No to cześć Maciek. Wino? Czy wolisz wrócić do domu i dalej rozmyślać o tej swojej wielkiej decyzji?"
            }
        ],
        next: "choice_zosia_1"
    },

    // TRZECI WYBÓR - relacja z Zosią
    "choice_zosia_1": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        type: "choice",
        choices: [
            {
                text: "\"Dobra, dlaczego nie. Poczekam.\"",
                effects: {
                    relationship: { zosia: +3 },
                    stats: { spontaneity: +2 }
                },
                next: "choice_zosia_accept"
            },
            {
                text: "\"Dzięki za propozycję, ale mam jutro pracę...\"",
                effects: {
                    relationship: { zosia: -1 }
                },
                next: "choice_zosia_decline"
            },
            {
                text: "\"Skąd ta pewność, że rozmyślam o jakiejś decyzji?\"",
                effects: {
                    relationship: { zosia: +1 },
                    flags: { zosia_intrigued: true }
                },
                next: "choice_zosia_curious"
            },
            {
                text: "\"Czy ty zawsze zapraszasz nieznajomych na wino?\"",
                effects: {
                    relationship: { zosia: +2 },
                    flags: { zosia_flirt: true }
                },
                next: "choice_zosia_flirty"
            }
        ]
    },

    // Reakcje Zosia
    "choice_zosia_accept": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Świetnie! Wiedziałam, że nie jesteś typem który planuje wszystko na trzy miesiące do przodu."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Właściwie to jestem..."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Sssh. Dziś nie jesteś. Dziś jesteś facetem, który spontanicznie idzie na wino z dziewczyną poznaną w galerii."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "20 minut później siedzimy w Alchemii. Ona pije czerwone wino, ja piwo."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Opowiedz mi o tej decyzji, która Cię gryzie."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "To skomplikowane..."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Wszystkie dobre rzeczy są skomplikowane. To właśnie je czyni interesującymi."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Opowiadam jej o wszystkim - Kinga, Julia, Amsterdam, startup. Słucha bez osądzania."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Wiesz co jest fajne? Za tydzień możesz być zupełnie inną osobą. Za miesiąc - w zupełnie innym mieście. Za rok - prowadzić zupełnie inne życie."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Albo możesz być tutaj, dokładnie tym samym Maćkiem. I to też jest okej. Jeśli to wybór, a nie strach."
            }
        ],
        effects: {
            flags: { zosia_deep_talk: true }
        },
        next: "scene_zosia_end"
    },

    "choice_zosia_decline": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Jasne, rozumiem. Praca i takie tam."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Przez moment wygląda na rozczarowaną, ale szybko wraca do swojego luźnego uśmiechu."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Jeśli kiedyś zmienisz zdanie - pracuję tu w środy i piątki. Galeria 'Metamorfozy'."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Jasne, dzięki."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Wychodzę z galerii. Może powinienem był zostać?"
            }
        ],
        next: "scene_zosia_end"
    },

    "choice_zosia_curious": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Czytam ludzi. To rodzaj supermocy artystów - widzimy to, czego inni nie chcą pokazać."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "I co widzisz?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Kogoś stojącego na rozdrożu. Kogoś, kto przyszedł tu szukać odpowiedzi, ale boi się jej znaleźć."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "To aż tak widoczne?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Dla mnie - tak. Ale to nie jest złe. Wszyscy tam jesteśmy. Niektórzy tylko lepiej to ukrywają."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "No więc? Wino?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Dobra, przekonałaś mnie."
            }
        ],
        next: "choice_zosia_accept"
    },

    "choice_zosia_flirty": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Tylko tych, którzy wyglądają interesująco. I którzy patrzą na 'Tymczasowość' dłużej niż 30 sekund."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "To bardzo specyficzny screening process."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Działa lepiej niż Tinder. Zaufaj mi."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Uśmiecha się szelmowsko. Jest w tym coś... odświeżającego."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Poza tym, życie jest za krótkie, żeby nie zapraszać ciekawych ludzi na wino. Więc?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Okej, you got me. Idźmy."
            }
        ],
        effects: {
            flags: { zosia_romantic_interest: true }
        },
        next: "choice_zosia_accept"
    },

    "scene_zosia_end": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Wracam do domu późnym wieczorem. Kraków jest piękny w nocy - stare kamienice, pustе ulice, zapach lata."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Trzy kobiety. Trzy zupełnie różne przyszłości. I ja pośrodku, próbujący zrozumieć, czego tak naprawdę chcę."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Czerwiec dopiero się zaczął. Mam jeszcze całe lato, żeby się zdecydować."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Pytanie - czy to wystarczy?"
            }
        ],
        next: "act1_end"
    },

    // === KONIEC AKTU I ===

    "act1_end": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "=== KONIEC AKTU I: CZERWIEC ==="
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Poznałeś Kingę, Julię i Zosię."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Twoje wybory zaważą na tym, jak rozwinie się reszta lata..."
            }
        ],
        next: "act2_start"
    }
};

// Merge Act 1 scenes into main STORY object
Object.assign(STORY, ACT1_SCENES);
