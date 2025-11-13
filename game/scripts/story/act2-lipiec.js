// AKT II: LIPIEC - Rozwijanie relacji
// Maciek musi podjąć pierwsze decyzje, relacje się pogłębiają

const ACT2_SCENES = {
    // === POCZĄTEK AKTU II ===

    "act2_start": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "=== AKT II: LIPIEC ==="
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Lipiec. Kraków pęka w szwach od turystów. Upał jest nie do wytrzymania."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Minął miesiąc od spotkań z Kingą, Julią i Zosią. Muszę wreszcie zacząć podejmować konkretne decyzje..."
            }
        ],
        next: "act2_decision_point"
    },

    // Punkt decyzyjny - kogo Maciek spotka najpierw w lipcu
    "act2_decision_point": {
        background: BACKGROUNDS.AKADEMIK,
        character: { center: CHARACTER_SPRITES.MACIEJ },
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Sobotni poranek w akademiku. Telefon wibruje non-stop."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "3 wiadomości. 3 propozycje na dzisiejszy wieczór."
            }
        ],
        next: "act2_choice_who_to_meet"
    },

    "act2_choice_who_to_meet": {
        background: BACKGROUNDS.AKADEMIK,
        character: { center: CHARACTER_SPRITES.MACIEJ },
        type: "choice",
        choices: [
            {
                text: "Odpisz Kindze - zaprasza na festiwal muzyczny na Błoniach",
                effects: {
                    relationship: { kinga: +2 },
                    flags: { act2_kinga_route: true }
                },
                next: "act2_kinga_festival_intro"
            },
            {
                text: "Odpisz Julii - biznesowy obiad, ale wspomniała 'i może coś więcej'",
                effects: {
                    relationship: { julia: +2 },
                    flags: { act2_julia_route: true }
                },
                next: "act2_julia_dinner_intro"
            },
            {
                text: "Odpisz Zosi - malowanie muralu w Kazimierzu, potrzebuje pomocy",
                effects: {
                    relationship: { zosia: +2 },
                    flags: { act2_zosia_route: true }
                },
                next: "act2_zosia_mural_intro"
            }
        ]
    },

    // ========================================
    // ŚCIEŻKA KINGI - FESTIWAL NA BŁONIACH
    // ========================================

    "act2_kinga_festival_intro": {
        background: BACKGROUNDS.WAWEL,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Błonia. Ogromna zielona przestrzeń u stóp Wawelu. Scena, tłumy ludzi, zapach street foodu."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Open'er Festival przeniesiony do Krakowa na jeden dzień."
            }
        ],
        next: "act2_kinga_festival_meeting"
    },

    "act2_kinga_festival_meeting": {
        background: BACKGROUNDS.WAWEL,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Maciek! Tutaj! Udało mi się załapać na miejsce blisko sceny!"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Kinga macha do mnie z tłumu. Ma na sobie letnią sukienkę i kwiatowy wianek. Wygląda... inaczej niż zazwyczaj."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Wow, King. Nie wiedziałem, że jesteś w tym całym festiwalowym vibe'ie."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Bo nie jestem! Ale pomyślałam... skoro ostatnie lato w Krakowie, to może czas robić rzeczy, których normalnie bym nie zrobiła."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "'Ostatnie lato w Krakowie' - brzmi to jak oskarżenie. Czy już się zdecydowałem?"
            }
        ],
        next: "act2_kinga_festival_talk"
    },

    "act2_kinga_festival_talk": {
        background: BACKGROUNDS.WAWEL,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Słuchaj Maciek... musimy pogadać o tym startupie. O nas."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Teraz? Tutaj?"
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Już miesiąc minął od mojej propozycji. Inwestorzy pytają o tech leada. A ja... muszę wiedzieć."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Jesteś ze mną, czy jedziesz do Amsterdamu?"
            }
        ],
        next: "act2_kinga_choice_1"
    },

    "act2_kinga_choice_1": {
        background: BACKGROUNDS.WAWEL,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_NEUTRAL },
        type: "choice",
        choices: [
            {
                text: "\"Wiesz co King... chcę spróbować z tobą. Jeśli to ma sens.\"",
                effects: {
                    relationship: { kinga: +5, julia: -3 },
                    flags: { kinga_commitment_early: true, amsterdam_less_likely: true }
                },
                next: "act2_kinga_commitment_yes"
            },
            {
                text: "\"Potrzebuję jeszcze trochę czasu. To ogromna decyzja...\"",
                effects: {
                    relationship: { kinga: -1 },
                    stats: { independence: +1 }
                },
                next: "act2_kinga_commitment_maybe"
            },
            {
                text: "\"King... myślę że jednak wybiorę Amsterdam. Przepraszam.\"",
                effects: {
                    relationship: { kinga: -5, julia: +2 },
                    flags: { kinga_rejected: true, amsterdam_more_likely: true }
                },
                next: "act2_kinga_commitment_no"
            },
            {
                text: "\"A co jeśli nie musi być albo-albo? Może znajdziemy kompromis?\"",
                effects: {
                    relationship: { kinga: +2 },
                    flags: { kinga_compromise_attempt: true }
                },
                next: "act2_kinga_commitment_compromise"
            }
        ]
    },

    "act2_kinga_commitment_yes": {
        background: BACKGROUNDS.WAWEL,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Naprawdę? Maciek, ty... naprawdę?!"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Jej oczy się rozświetlają. Nagle rzuca mi się na szyję, prawie przewracając nas oboje."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Nie masz pojęcia jak długo na to czekałam!"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Na startup?"
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Nie... na to, żebyś wybrał mnie. Nas. Kraków."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Stoimy w uścisku, wokół gra muzyka, ludzie tańczą. Ten moment czuje się... właściwy."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Zbudujemy coś niesamowitego. Razem. Obiecuję."
            }
        ],
        effects: {
            flags: { kinga_relationship_confirmed: true }
        },
        next: "act2_kinga_festival_end"
    },

    "act2_kinga_commitment_maybe": {
        background: BACKGROUNDS.WAWEL,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_SAD },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Znowu to samo..."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "King, to nie jest tak..."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Nie, rozumiem. Po prostu... myślałam że po tym miesiącu będziesz wiedział."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Ile czasu potrzebujesz Maciek? Bo ja nie mogę tak w nieskończoność."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Muzyka nagle brzmi zbyt głośno. Tłum zbyt ciasny."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Daj mi znać jak się zdecydujesz. Koniec lipca to mój deadline."
            }
        ],
        next: "act2_kinga_festival_end"
    },

    "act2_kinga_commitment_no": {
        background: BACKGROUNDS.WAWEL,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_SAD },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Och..."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Widzę jak coś w niej pęka. Próbuje się uśmiechnąć, ale nie wychodzi."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "No cóż... przynajmniej wiem."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "King, ja..."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Nie. To okej. Masz prawo wybierać swoją ścieżkę."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Tylko... chciałabym żebyś wiedział, że to nie była tylko propozycja biznesowa."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Odwraca się i znika w tłumie, zanim zdążę coś powiedzieć."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Festiwal nagle traci swój urok."
            }
        ],
        next: "act2_kinga_rejected_path"
    },

    "act2_kinga_commitment_compromise": {
        background: BACKGROUNDS.WAWEL,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.KINGA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.KINGA,
                text: "Kompromis? Jak wyobrażasz sobie kompromis pomiędzy Krakowem a Amsterdamem?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Remote work? Latam między miastami? Są opcje..."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Maciek, to startup. Potrzebuję kogoś tu, na miejscu. Nie ghost tech leada, który pojawia się co drugi tydzień."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "A co jeśli startup mógłby mieć oddział w Amsterdamie?"
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Z 50 tysiącami grantu? Śnisz."
            },
            {
                speaker: CHARACTERS.KINGA,
                text: "Ale... doceniam że próbujesz. Daj mi pomyśleć. Może faktycznie jest jakaś opcja."
            }
        ],
        effects: {
            flags: { kinga_compromise_considered: true }
        },
        next: "act2_kinga_festival_end"
    },

    "act2_kinga_festival_end": {
        background: BACKGROUNDS.WAWEL,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Reszta festiwalu jest rozmyta. Muzyka, światła, ludzie - wszystko zlewa się w jedno."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Wracam do akademika późnym wieczorem. Jedna decyzja podjęta. Wiele jeszcze przede mną."
            }
        ],
        next: "act2_universal_midpoint"
    },

    // ========================================
    // ŚCIEŻKA JULII - BIZNESOWY OBIAD
    // ========================================

    "act2_julia_dinner_intro": {
        background: BACKGROUNDS.RYNEK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Restauracja na rynku. Wysoki standard, ciche rozmowy biznesmenów, menu bez cen."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Julia wybrała miejsce. Oczywiście."
            }
        ],
        next: "act2_julia_dinner_meeting"
    },

    "act2_julia_dinner_meeting": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_CONFIDENT },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Punktualnie. Doceniam to."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Julia wygląda inaczej niż w biurze. Elegancka sukienka, makijaż, rozpuszczone włosy."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Ty też. I... wyglądasz świetnie."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Dziękuję. To nie jest biznesowy obiad, Maciek. Chociaż o biznesie też pogadamy."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "A o czym jeszcze?"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "O życiu. O wyborach. O tym, czego naprawdę chcemy."
            }
        ],
        next: "act2_julia_dinner_talk"
    },

    "act2_julia_dinner_talk": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Dostałam oficjalną ofertę z Amsterdamu. Head of Delivery. Podpisuję umowę w przyszłym tygodniu."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Wow, gratulacje!"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Pozycja tech leada wciąż jest otwarta. Czekają na moją rekomendację."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Maciek... chcę cię zarekomendować. Ale muszę wiedzieć czy to ma sens."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Co masz na myśli?"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Czy to tylko biznes dla ciebie? Bo jeśli tak - powiedzmy to wprost i nie komplikujmy."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Ale jeśli... jeśli to może być coś więcej... chciałabym to wiedzieć teraz."
            }
        ],
        next: "act2_julia_choice_1"
    },

    "act2_julia_choice_1": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        type: "choice",
        choices: [
            {
                text: "\"Julia... zainteresowałaś mnie. Jako osoba, nie tylko jako PM.\"",
                effects: {
                    relationship: { julia: +5, kinga: -3 },
                    flags: { julia_romantic_interest: true, amsterdam_more_likely: true }
                },
                next: "act2_julia_romantic_yes"
            },
            {
                text: "\"Wolę być szczery - widzę to jako biznesową okazję. Ale doceniam cię.\"",
                effects: {
                    relationship: { julia: -2 },
                    stats: { honesty: +2 }
                },
                next: "act2_julia_romantic_no"
            },
            {
                text: "\"Nie wiem jeszcze. Czy możemy się tego dowiedzieć... razem?\"",
                effects: {
                    relationship: { julia: +3 },
                    flags: { julia_relationship_exploring: true }
                },
                next: "act2_julia_romantic_maybe"
            },
            {
                text: "\"Mam wątpliwości co do Amsterdamu. Nie chcę cię zawieść.\"",
                effects: {
                    relationship: { julia: +1, kinga: +1 },
                    flags: { amsterdam_doubts: true }
                },
                next: "act2_julia_doubts"
            }
        ]
    },

    "act2_julia_romantic_yes": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "To... nie spodziewałam się, że to powiesz."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Po raz pierwszy widzę Julię niepewną. Jej pewność siebie pęka na chwilę."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Maciek, ja... też o tobie myślałam. Więcej niż powinnam."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Ale musisz wiedzieć - ja nie jestem typem dziewczyny która zwolni tempo dla związku."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Nie oczekuję tego."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Amsterdam to będzie ciężka praca. Długie godziny. Stres. Pressure."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Jeśli tam ze mną pojedziesz... chcę partnerstwa. Nie ratowania, nie zależności. Równości."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Tylko tak umiem."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Uśmiecha się. Po raz pierwszy tego wieczoru - szczerze."
            }
        ],
        effects: {
            flags: { julia_relationship_confirmed: true }
        },
        next: "act2_julia_dinner_end"
    },

    "act2_julia_romantic_no": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_CONFIDENT },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Okej. Doceniam szczerość."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Jej maska profesjonalizmu wraca natychmiast. Transition jest niemal niezauważalny."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "W takim razie traktujmy to czysto biznesowo. Czy zainteresowany jesteś pozycją tech leada?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Tak, ale potrzebuję czasu na decyzję."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Masz dwa tygodnie. Potem rekomendują kogoś innego."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Reszta obiadu jest profesjonalna, grzeczna, i dziwnie pusta."
            }
        ],
        next: "act2_julia_dinner_end"
    },

    "act2_julia_romantic_maybe": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Razem... lubię to słowo."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Maciek, ja zwykle mam plan na wszystko. Ale z tobą... nie wiem dokąd to zmierza."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "I trochę mnie to przeraża. Ale też... ekscytuje."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Czyli?"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Czyli dajmy sobie szansę. Bez obietnic, bez zobowiązań. Po prostu... zobaczmy."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Wyciąga rękę przez stół. Łapię ją."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Ale seriously - Amsterdam to dobra opcja dla ciebie. Niezależnie od nas."
            }
        ],
        next: "act2_julia_dinner_end"
    },

    "act2_julia_doubts": {
        background: BACKGROUNDS.RYNEK,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.JULIA_CONFIDENT },
        dialogue: [
            {
                speaker: CHARACTERS.JULIA,
                text: "Doceniam szczerość. Naprawdę."
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Ale Maciek... czasem największe błędy robimy nie wybierając źle, ale nie wybierając wcale."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Co przez to rozumiesz?"
            },
            {
                speaker: CHARACTERS.JULIA,
                text: "Że czasem trzeba skoczyć nie wiedząc czy dolecisz. Bo inaczej spędzisz życie na krawędzi, patrząc w dół."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Ma rację. I oboje to wiemy."
            }
        ],
        next: "act2_julia_dinner_end"
    },

    "act2_julia_dinner_end": {
        background: BACKGROUNDS.RYNEK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Odprowadzam Julię do hotelu. Noc jest ciepła, Rynek świeci lampami."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Amsterdam staje się coraz bardziej realny. I coraz bardziej przerażający."
            }
        ],
        next: "act2_universal_midpoint"
    },

    // ========================================
    // ŚCIEŻKA ZOSI - MURAL W KAZIMIERZU
    // ========================================

    "act2_zosia_mural_intro": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Kazimierz. Ulica Meiselsa. Gigantyczna ściana, rusztowania, puszki ze sprayem."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Zosia pracuje nad muralem - 'Tymczasowość w kolorze'."
            }
        ],
        next: "act2_zosia_mural_meeting"
    },

    "act2_zosia_mural_meeting": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "No nareszcie! Myślałam że się wycofasz!"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Ostrzegam - nie mam pojęcia o malowaniu."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Nie musisz. Ty będziesz mieszał kolory, podawał sprayi, i słuchał mojego pierdolenia."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Najważniejsza robota przy muralu to towarzystwo."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Uśmiecha się. Ma farbę na twarzy, w wlosach, na ubraniu. Wygląda... wolna."
            }
        ],
        next: "act2_zosia_mural_work"
    },

    "act2_zosia_mural_work": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Godziny mijają. Słońce zachodzi. Mural nabiera kształtów - abstrakcyjne postacie, płynące w kolorach."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "To jest metafora nas wszystkich, wiesz?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Nas? Czyli?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Ludzi w dwudziestym. Płyniemy między kolorami, nigdy do końca nie wiemy dokąd zmierzamy."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Ty płyniesz między Krakowem a Amsterdamem. Ja między Krakowem a Berlinem."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Myślałem że zdecydowałaś zostać?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "'Na razie', pamiętasz? 'Na razie' nigdy nie oznacza 'na zawsze'."
            }
        ],
        next: "act2_zosia_mural_deep_talk"
    },

    "act2_zosia_mural_deep_talk": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Dostałam ofertę z kolektywu w Berlinie. Wspólne studio, wystawy, rezydenсje artystyczne."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "I co z tym zrobisz?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Nie wiem. Dlatego pytam ciebie - co TY zrobisz z Amsterdamem?"
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "To nie jest ta sama sytuacja..."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Jest identyczna. Komfort vs ryzyko. Znajomi vs nieznane. Bezpieczeństwo vs rozwój."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "A może... moglibyśmy skoczyć razem?"
            }
        ],
        next: "act2_zosia_choice_1"
    },

    "act2_zosia_choice_1": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        type: "choice",
        choices: [
            {
                text: "\"Razem? Ty do Berlina, ja do Amsterdamu, i spotykamy się w weekendy?\"",
                effects: {
                    relationship: { zosia: +4 },
                    flags: { zosia_berlin_amsterdam_plan: true }
                },
                next: "act2_zosia_together_yes"
            },
            {
                text: "\"Zosia, ledwo się znamy... to trochę zbyt szybko?\"",
                effects: {
                    relationship: { zosia: -2 },
                    stats: { independence: +1 }
                },
                next: "act2_zosia_together_slow"
            },
            {
                text: "\"A gdybyśmy oboje zostali? Tutaj, w Krakowie?\"",
                effects: {
                    relationship: { zosia: +2, kinga: +1 },
                    flags: { stay_in_krakow_consideration: true }
                },
                next: "act2_zosia_together_stay"
            },
            {
                text: "\"Lubię spontaniczność, ale życie to nie improv. Potrzebuję planu.\"",
                effects: {
                    relationship: { zosia: -3 },
                    flags: { zosia_disappointed: true }
                },
                next: "act2_zosia_together_no"
            }
        ]
    },

    "act2_zosia_together_yes": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Amsterdam - Berlin to 4 godziny pociągiem. I tyle connections lotniczych!"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Moglibyśmy mieć dwa domy. Dwa życia. Dwa światy."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "To brzmi... trochę chaotycznie."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Najlepsze rzeczy zawsze są chaotyczne! Sztuka to chaos, miłość to chaos, życie to chaos!"
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Śmieje się i obrzuca mnie sprayowanymi kolorami. Zaczynam śmiać się też."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Maciek... z tobą nie czuję się tymczasowa. Czuję się realna."
            }
        ],
        effects: {
            flags: { zosia_relationship_confirmed: true }
        },
        next: "act2_zosia_mural_end"
    },

    "act2_zosia_together_slow": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Masz rację. To głupie. Ledwo się znamy."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Ale w jej głosie słychać rozczarowanie."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Czasem zapominam, że nie wszyscy myślą tak spontanicznie jak ja."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "To nie znaczy że..."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Nie, jasne. Rozumiem. Po prostu... myślałam że może jesteś inny."
            }
        ],
        next: "act2_zosia_mural_end"
    },

    "act2_zosia_together_stay": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_HAPPY },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Oboje zostać? W Krakowie?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Wiesz... nigdy tak o tym nie myślałam."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Zawsze było tylko 'zostać' albo 'jechać'. Nigdy 'zostać razem z kimś'."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Może nie musimy nikąd uciekać? Może tutaj jest wszystko czego potrzebujemy?"
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "To jest... dziwnie dojrzałe jak na ciebie."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Ale wiesz co? Może masz rację. Może tymczasowość nie polega na ciągłym ruchu."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Może polega na byciu otwartym na zmianę, nawet zostając w jednym miejscu."
            }
        ],
        effects: {
            flags: { zosia_stay_together: true, stay_in_krakow_strong: true }
        },
        next: "act2_zosia_mural_end"
    },

    "act2_zosia_together_no": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: { left: CHARACTER_SPRITES.MACIEJ, right: CHARACTER_SPRITES.ZOSIA_NEUTRAL },
        dialogue: [
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Plan... rozumiem."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Odwraca się z powrotem do muralu. Konwersacja wyraźnie skończona."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Chyba jednak jesteś zbyt tech bro dla mnie. Za dużo spreadsheetów w głowie."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "Zosia..."
            },
            {
                speaker: CHARACTERS.ZOSIA,
                text: "Możesz iść. Mural skończę sama."
            }
        ],
        next: "act2_zosia_rejected_path"
    },

    "act2_zosia_mural_end": {
        background: BACKGROUNDS.KAZIMIERZ,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Kończymy mural o 2 w nocy. Kazimierz jest cichy, pijany, piękny."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Patrzę na gotowe dzieło - rzeczywiście widzę nas. Płyniemy między kolorami."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Pytanie tylko - dokąd?"
            }
        ],
        next: "act2_universal_midpoint"
    },

    // ========================================
    // REJECTED PATHS - alternatywne ścieżki
    // ========================================

    "act2_kinga_rejected_path": {
        background: BACKGROUNDS.AKADEMIK,
        character: { center: CHARACTER_SPRITES.MACIEJ },
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Kilka dni po festiwalu. Kinga nie odpisuje na wiadomości."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Widzę na LinkedIn że szuka nowego tech leada. Ktoś już komentuje pod postem."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "(Myśli) Może to był błąd? Może powinienem był..."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Ale jest już za późno. Niektóre decyzje są nieodwracalne."
            }
        ],
        next: "act2_universal_midpoint"
    },

    "act2_zosia_rejected_path": {
        background: BACKGROUNDS.AKADEMIK,
        character: { center: CHARACTER_SPRITES.MACIEJ },
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Zosia przestaje odpisywać. Widzę jej mural każdego dnia przechodząc przez Kazimierz."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Przypomina mi o tym, co mogłoby być."
            },
            {
                speaker: CHARACTERS.MACIEJ,
                text: "(Myśli) Może byłem zbyt ostrożny? Może czasem trzeba ryzykować?"
            }
        ],
        next: "act2_universal_midpoint"
    },

    // ========================================
    // UNIVERSAL MIDPOINT - wszystkie ścieżki się łączą
    // ========================================

    "act2_universal_midpoint": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Koniec lipca. Za tydzień sierpień - ostatni miesiąc lata."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Niektóre decyzje podjąłem. Niektóre wciąż czekają."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Ale czas się kończy. Wkrótce będę musiał wybrać, raz na zawsze."
            }
        ],
        next: "act2_end"
    },

    "act2_end": {
        background: BACKGROUNDS.BLACK,
        character: null,
        dialogue: [
            {
                speaker: CHARACTERS.NARRATOR,
                text: "=== KONIEC AKTU II: LIPIEC ==="
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Relacje się pogłębiły. Niektóre mosty zostały spalone. Inne dopiero powstają."
            },
            {
                speaker: CHARACTERS.NARRATOR,
                text: "Sierpień zadecyduje o wszystkim..."
            }
        ],
        next: "act3_start"
    }
};

// Merge Act 2 scenes into main STORY object
Object.assign(STORY, ACT2_SCENES);
