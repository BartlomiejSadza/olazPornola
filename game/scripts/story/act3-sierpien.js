// AKT III: SIERPIEŃ - Kulminacja i zakończenia
// 6 możliwych zakończeń w zależności od wyborów gracza

const ACT3_SCENES = {
  // === POCZĄTEK AKTU III ===

  act3_start: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== AKT III: SIERPIEŃ ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ostatni miesiąc lata. Upał nie odpuszcza, ale wieczory są już chłodniejsze.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czas decyzji dobiegł końca. Teraz muszę wybierać.",
      },
    ],
    next: "act3_decision_check",
  },

  // System sprawdza poprzednie wybory i kieruje do odpowiedniej ścieżki
  act3_decision_check: {
    background: BACKGROUNDS.AKADEMIK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "31 sierpnia. Ostatni dzień lata.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Jutro zaczynam nowy rozdział mojego życia. Ale który?",
      },
    ],
    next: "act3_final_choice_setup",
  },

  act3_final_choice_setup: {
    background: BACKGROUNDS.AKADEMIK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Trzy wiadomości na telefonie. Trzy różne przyszłości.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Kinga: 'Maciek, potrzebuję odpowiedzi. Jutro spotykamy się z inwestorami.'",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Julia: 'Lot do Amsterdamu za 3 dni. Lecisz ze mną czy zostaję sama?'",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Zosia: 'Pociąg do Berlina jutro rano. Chcesz ze mną odwiedzić kolektyw? Last chance.'",
      },
    ],
    next: "act3_final_choice",
  },

  // FINALNY WYBÓR - determinuje zakończenie
  act3_final_choice: {
    background: BACKGROUNDS.AKADEMIK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    type: "choice",
    choices: [
      {
        text: "Zadzwoń do Kingi - czas budować startup w Krakowie",
        next: "act3_route_kinga_ending",
      },
      {
        text: "Zadzwoń do Julii - Amsterdam i kariera czekają",
        next: "act3_route_julia_ending",
      },
      {
        text: "Zadzwoń do Zosi - Berlin i sztuka to nowe życie",
        next: "act3_route_zosia_ending",
      },
      {
        text: "Nie dzwoń do nikogo - zostań sam w Krakowie",
        next: "act3_route_solo_krakow",
      },
      {
        text: "Zadzwoń do Julii - ale powiedz że zostajesz",
        next: "act3_route_solo_career",
      },
      {
        text: "Wyjedź sam do Amsterdamu (bez Julii)",
        next: "act3_route_amsterdam_solo",
      },
    ],
  },

  // ========================================
  // ZAKOŃCZENIE 1: Z KINGĄ W KRAKOWIE (HAPPY ROMANTIC)
  // ========================================

  act3_route_kinga_ending: {
    background: BACKGROUNDS.RYNEK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Dzwonię do Kingi. Sekundy ciszy po drugiej stronie czują się jak wieczność.",
      },
    ],
    next: "act3_kinga_call",
  },

  act3_kinga_call: {
    background: BACKGROUNDS.RYNEK,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.KINGA_HAPPY,
    },
    dialogue: [
      {
        speaker: CHARACTERS.KINGA,
        text: "Maciek? Słucham?",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "King... jestem. Zostaję w Krakowie. Z tobą.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Cisza. Potem słyszę jak płacze.",
      },
      {
        speaker: CHARACTERS.KINGA,
        text: "Naprawdę? Nie żartujesz?",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Nie żartuję. Zbudujmy to razem.",
      },
      {
        speaker: CHARACTERS.KINGA,
        text: "Przyjdź na Rynek. Teraz. Musimy to uczcić!",
      },
    ],
    next: "act3_kinga_meeting",
  },

  act3_kinga_meeting: {
    background: BACKGROUNDS.RYNEK,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.KINGA_HAPPY,
    },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Spotykamy się pod Sukiennicami. Jest zachód słońca, Rynek jest złoty.",
      },
      {
        speaker: CHARACTERS.KINGA,
        text: "Wiedziałam że wrócisz. Wiedziałam że nie zostawisz tego wszystkiego.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Nie zostawiam. Nie zostawiam Ciebie.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Całujemy się. Turyści robią nam zdjęcia, myśląc że to jakaś akcja artystyczna.",
      },
      {
        speaker: CHARACTERS.KINGA,
        text: "Mam tyle planów! Aplikacja do event managementu, potem rozszerzenie na cały polski rynek...",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "King, spokojnie. Mamy czas.",
      },
      {
        speaker: CHARACTERS.KINGA,
        text: "Mamy całe życie. W Krakowie. Razem.",
      },
    ],
    next: "act3_kinga_epilogue",
  },

  act3_kinga_epilogue: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "--- EPILOG: ROK PÓŹNIEJ ---",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Startup rozwija się powoli ale stabilnie. 15 klientów, 5-osobowy team, drobny zysk.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Mieszkam z Kingą w małym mieszkanku w Podgórzu. Każdego ranka budzę się widząc Wawel w oknie.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Amsterdam? Czasem myślę 'co by było gdyby'. Ale patrząc na Kingę przy kawie...",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Wiem że wybrałem właściwie.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "To nie było ostatnie lato w Krakowie.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "To był pierwszy rozdział naszego życia tutaj.",
      },
    ],
    next: "ending_kinga_happy",
  },

  ending_kinga_happy: {
    background: BACKGROUNDS.RYNEK,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.KINGA_HAPPY,
    },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== ZAKOŃCZENIE 1: DOM JEST TAM GDZIE SERCE ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Wybrałeś Kingę i Kraków. Czasem największa przygoda to budowanie życia w miejscu które znasz.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Relationship: Kinga ♥♥♥♥♥",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Achievement unlocked: Childhood Friend Romance",
      },
    ],
    next: "credits_roll",
  },

  // ========================================
  // ZAKOŃCZENIE 2: Z JULIĄ W AMSTERDAMIE (AMBITIOUS)
  // ========================================

  act3_route_julia_ending: {
    background: BACKGROUNDS.BIURO,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Dzwonię do Julii. Odbiera po pierwszym sygnale.",
      },
    ],
    next: "act3_julia_call",
  },

  act3_julia_call: {
    background: BACKGROUNDS.BIURO,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.JULIA_CONFIDENT,
    },
    dialogue: [
      {
        speaker: CHARACTERS.JULIA,
        text: "Maciek. Mów mi że lecisz.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Lecę. Rezerwuj bilet obok siebie.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Wiedziałam. Wiedziałam że jesteś za sprytny żeby utknąć w Krakowie.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "To nie o inteligencję chodzi...",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "O ambicję. I o to że oboje chcemy więcej niż to co jest tu dostępne.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Spotykamy się na lotnisku. Mamy sporo do zaplanowania.",
      },
    ],
    next: "act3_julia_airport",
  },

  act3_julia_airport: {
    background: BACKGROUNDS.BLACK,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.JULIA_CONFIDENT,
    },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Lotnisko Balice. Walizka, boarding pass, nowe życie.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Gotowy?",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Przerażony.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Dobrze. Przerażenie znaczy że idziesz w dobrą stronę.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Całuje mnie. Krótko, intensywnie. Promise i zapowiedź jednocześnie.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Amsterdam nie będzie łatwy. Ale będzie tego wart.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "I będziemy mieli siebie.",
      },
    ],
    next: "act3_julia_epilogue",
  },

  act3_julia_epilogue: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "--- EPILOG: ROK PÓŹNIEJ ---",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Amsterdam jest brutalne. 60-godzinne tygodnie, deadline'y, pressure, politics.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ale team który zbudowałem jest świetny. Produkt którystworzył jest innowacyjny.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Julia została VP of Engineering w całej firmie. Mieszkamy razem w apartamencie na kanałach.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czasem tęsknię za Krakowem. Za spokojem. Za tym prostszym życiem.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ale potem patrzę na to co osiągnęliśmy i wiem - to był właściwy wybór.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Nie dla wszystkich. Ale dla nas - idealny.",
      },
    ],
    next: "ending_julia_ambitious",
  },

  ending_julia_ambitious: {
    background: BACKGROUNDS.BLACK,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.JULIA_CONFIDENT,
    },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== ZAKOŃCZENIE 2: POWER COUPLE ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Wybrałeś Julię i Amsterdam. Ambicja i miłość mogą iść w parze - jeśli oboje chcą tego samego.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Relationship: Julia ♥♥♥♥♥",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Achievement unlocked: International Career",
      },
    ],
    next: "credits_roll",
  },

  // ========================================
  // ZAKOŃCZENIE 3: Z ZOSIĄ W BERLINIE (ARTISTIC/BOHEMIAN)
  // ========================================

  act3_route_zosia_ending: {
    background: BACKGROUNDS.KAZIMIERZ,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Dzwonię do Zosi. Słyszę muzykę w tle - pewnie jakiś koncert w Kazimierzu.",
      },
    ],
    next: "act3_zosia_call",
  },

  act3_zosia_call: {
    background: BACKGROUNDS.KAZIMIERZ,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.ZOSIA_HAPPY,
    },
    dialogue: [
      {
        speaker: CHARACTERS.ZOSIA,
        text: "Nie spodziewałam się że zadzwonisz.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Ja też nie. Ale... chcę jechać z tobą.",
      },
      {
        speaker: CHARACTERS.ZOSIA,
        text: "Do Berlina? Na weekend?",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Na ile się uda. Może to głupie, może zbyt spontaniczne, ale...",
      },
      {
        speaker: CHARACTERS.ZOSIA,
        text: "Ale czasem głupie i spontaniczne jest najlepsze?",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Dokładnie.",
      },
      {
        speaker: CHARACTERS.ZOSIA,
        text: "Pociąg odjeżdża z Dworca Głównego o 7:32. Nie spóźnij się, bo nie będę czekać!",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Śmieje się. Znam ten śmiech - obiecuje przygodę.",
      },
    ],
    next: "act3_zosia_train",
  },

  act3_zosia_train: {
    background: BACKGROUNDS.BLACK,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.ZOSIA_HAPPY,
    },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Pociąg do Berlina. 10 godzin podróży. Zosia rysuje w sketchbooku, ja patrzę przez okno.",
      },
      {
        speaker: CHARACTERS.ZOSIA,
        text: "Nie żałujesz?",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Amsterdam miał sens. Kraków miał sens. Berlin... nie ma sensu.",
      },
      {
        speaker: CHARACTERS.ZOSIA,
        text: "I właśnie dlatego jest idealny.",
      },
      {
        speaker: CHARACTERS.ZOSIA,
        text: "Życie nie musi mieć sensu, Maciek. Musi być żywe.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Kładzie głowę na moim ramieniu. Pachnie farbą i latem.",
      },
      {
        speaker: CHARACTERS.ZOSIA,
        text: "Nie obiecuję że będzie łatwo. Kolektyw to chaos. Berlin to chaos. Ja jestem chaos.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Może potrzebuję trochę chaosu w życiu.",
      },
    ],
    next: "act3_zosia_epilogue",
  },

  act3_zosia_epilogue: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "--- EPILOG: ROK PÓŹNIEJ ---",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Berlin jest... inny. Sztuka wszędzie, ludzie z całego świata, nieustający ruch.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Dorabiam jako freelance developer. Wystarczy na czynsz w kolektywie i piwo.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Zosia ma wystawę w galerii w Kreuzbergu. Jej prace sprzedają się. Nie za dużo, ale sprzedają.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Nie wiem co będzie za rok. Za miesiąc. Może wrócimy do Krakowa, może polecimy do Lizbony.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "I wiesz co? To uczucie jest uzależniające.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Życie w tymczasowości z osobą, która sprawia że czujesz się permanentny.",
      },
    ],
    next: "ending_zosia_bohemian",
  },

  ending_zosia_bohemian: {
    background: BACKGROUNDS.KAZIMIERZ,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.ZOSIA_HAPPY,
    },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== ZAKOŃCZENIE 3: ŻYCIE JAK DZIEŁO SZTUKI ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Wybrałeś Zosię i Berlin. Czasem najlepsze decyzje są te, których nie da się racjonalnie wytłumaczyć.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Relationship: Zosia ♥♥♥♥♥",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Achievement unlocked: Free Spirit",
      },
    ],
    next: "credits_roll",
  },

  // ========================================
  // ZAKOŃCZENIE 4: SAM W KRAKOWIE (BITTERSWEET)
  // ========================================

  act3_route_solo_krakow: {
    background: BACKGROUNDS.AKADEMIK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Patrzę na telefon. Trzy wiadomości. Trzy możliwości.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "I wybieram żadną.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "(Myśli) Może nie muszę nikogo wybierać? Może mogę po prostu... zostać sobą?",
      },
    ],
    next: "act3_solo_krakow_decision",
  },

  act3_solo_krakow_decision: {
    background: BACKGROUNDS.RYNEK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Nie odpisuję nikomu. Wyłączam telefon. Wychodzę na Rynek.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Kraków we wrześniu jest piękny. Turyści wyjechali, zostali tylko lokalni.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "(Myśli) Kinga znajdzie kogoś innego. Julia ma swoją karierę. Zosia... Zosia zawsze będzie wolna.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "(Myśli) A ja? Ja zostaję tutaj. Buduję swoje życie. Powoli, spokojnie, samodzielnie.",
      },
    ],
    next: "act3_solo_krakow_epilogue",
  },

  act3_solo_krakow_epilogue: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "--- EPILOG: ROK PÓŹNIEJ ---",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Pracuję w małym software housie. Pensja okej, work-life balance świetny.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czasem widzę Kingę na branżowych eventach. Pogadamy, wypijemy piwo, rozejdziemy się.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Julia czasem dzwoni z Amsterdamu. Opowiada o sukcesach. Brzmi szczęśliwie.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Zosia wysłała kartkę z Tokio. Najwyraźniej kolektyw podbija Azję.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czy żałuję? Czasem. Zwłaszcza zimowymi wieczorami, samemu w mieszkaniu.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ale potem wychodzę na Rynek, piję kawę, patrzę na Sukiennice...",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "I czuję spokój. To może nie jest najbardziej ekscytujące życie.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ale jest moje.",
      },
    ],
    next: "ending_solo_krakow",
  },

  ending_solo_krakow: {
    background: BACKGROUNDS.RYNEK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== ZAKOŃCZENIE 4: SPOKÓJ SAMOTNOŚCI ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Nie wybrałeś nikogo. Czasem najważniejszy wybór to wybór siebie.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Achievement unlocked: Independence",
      },
    ],
    next: "credits_roll",
  },

  // ========================================
  // ZAKOŃCZENIE 5: KARIERA W KRAKOWIE - SAM (SUCCESS)
  // ========================================

  act3_route_solo_career: {
    background: BACKGROUNDS.BIURO,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Dzwonię do Julii.",
      },
    ],
    next: "act3_solo_career_call",
  },

  act3_solo_career_call: {
    background: BACKGROUNDS.BIURO,
    character: {
      left: CHARACTER_SPRITES.MACIEJ,
      right: CHARACTER_SPRITES.JULIA_NEUTRAL,
    },
    dialogue: [
      {
        speaker: CHARACTERS.JULIA,
        text: "Lecisz?",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Nie. Zostaję.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Cisza.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Rozumiem.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "Julia, to nie o ciebie. To o mnie. Nie jestem gotowy na Amsterdam.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Maciek, nie musisz tłumaczyć. Każdy ma swoją ścieżkę.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Ale powiem ci jedno - zasługujesz na więcej niż to co masz teraz.",
      },
      {
        speaker: CHARACTERS.JULIA,
        text: "Znajdź to. W Krakowie czy gdziekolwiek indziej.",
      },
    ],
    next: "act3_solo_career_path",
  },

  act3_solo_career_path: {
    background: BACKGROUNDS.BIURO,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Słowa Julii tkwią we mnie. 'Zasługujesz na więcej'.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Następnego dnia daję wypowiedzenie. Zaczynam szukać czegoś lepszego.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Nie startup jak Kinga. Nie korporacja jak Julia. Coś swojego.",
      },
    ],
    next: "act3_solo_career_epilogue",
  },

  act3_solo_career_epilogue: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "--- EPILOG: ROK PÓŹNIEJ ---",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Mój własny software consultancy. 3 klientów, ale dobrze płacących.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Pracuję z domu, z kafejek, czasem z co-workingu. Moje zasady, mój czas.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "To nie jest Power Couple z Julią. To nie jest bezpieczeństwo startupu Kingi.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ale to jest moje. Zbudowane własnymi rękami, na własnych warunkach.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Randkuję, spotykam ludzi, żyję życiem. Bez dramatów, bez wielkich decyzji.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czasem to jest wystarczająco dobre.",
      },
    ],
    next: "ending_solo_career",
  },

  ending_solo_career: {
    background: BACKGROUNDS.BIURO,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== ZAKOŃCZENIE 5: WŁASNA DROGA ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Odrzuciłeś wszystkie propozycje i znalazłeś własną ścieżkę. Sukces nie musi oznaczać związku ani wielkiej korporacji.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Achievement unlocked: Self-Made",
      },
    ],
    next: "credits_roll",
  },

  // ========================================
  // ZAKOŃCZENIE 6: AMSTERDAM SAM (MELANCHOLIC)
  // ========================================

  act3_route_amsterdam_solo: {
    background: BACKGROUNDS.AKADEMIK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Nie dzwonię do nikogo. Ale rezerwuję lot do Amsterdamu.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "(Myśli) Nie potrzebuję Julii żeby wyjechać. Nie potrzebuję Kingi żeby zostać.",
      },
      {
        speaker: CHARACTERS.MACIEJ,
        text: "(Myśli) Mogę sam. Znajdę pracę, znajdę mieszkanie, znajdę życie.",
      },
    ],
    next: "act3_amsterdam_solo_departure",
  },

  act3_amsterdam_solo_departure: {
    background: BACKGROUNDS.BLACK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Lotnisko. Walizka. Boarding pass na nazwisko 'Maciej Kowalski'.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Żadnej Julii obok. Żadnego pożegnania. Tylko ja i decyzja.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Samolot startuje. Przez okno widzę Kraków - ostatni raz tego lata.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Może ostatni raz w ogóle.",
      },
    ],
    next: "act3_amsterdam_solo_epilogue",
  },

  act3_amsterdam_solo_epilogue: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "--- EPILOG: ROK PÓŹNIEJ ---",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Amsterdam jest trudne. Bez Julii, bez koneksji, bez znajomych.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Znalazłem pracę - mid-level developer w holenderskim startupie. Pensja okej.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Mieszkam sam w kawalerce na obrzeżach. Jadę do pracy rowerem przez kanały.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Jest samotnie. Jest ciężko. Ale jest też wolność.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Nikt nie oczekuje ode mnie związku. Nikt nie przypomina o przeszłości.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "To świeży start. Może samotny. Ale autentyczny.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czasem widzę Julię na LinkedIn. Ma już lepszą pozycję. Nie piszemy.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Kinga wyszła za kogoś innego. Widziałem zdjęcia. Wyglądają na szczęśliwych.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czy to było warte tego? Nie wiem.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ale przynajmniej wiem że zrobiłem to sam.",
      },
    ],
    next: "ending_amsterdam_solo",
  },

  ending_amsterdam_solo: {
    background: BACKGROUNDS.BLACK,
    character: { center: CHARACTER_SPRITES.MACIEJ },
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== ZAKOŃCZENIE 6: SAMOTNY WYJAZD ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Pojechałeś sam do Amsterdamu. Czasem odwaga to nie romantyczny gest, ale cicha decyzja.",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Achievement unlocked: Lone Wolf",
      },
    ],
    next: "credits_roll",
  },

  // ========================================
  // CREDITS
  // ========================================

  credits_roll: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== DZIĘKUJEMY ZA GRĘ ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Ostatnie Lato w Krakowie",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Design & Scenariusz: Aleksandra Czaja & Aleksandra Tyniec & Bartłomiej Sadza",
      },
      {
        speaker: CHARACTERS.NARRATOR,1
        text: "Programowanie: Bartłomiej Sadza",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Czy zagrasz ponownie i wybierzesz inaczej?",
      },
    ],
    next: "final_stats",
  },

  final_stats: {
    background: BACKGROUNDS.BLACK,
    character: null,
    dialogue: [
      {
        speaker: CHARACTERS.NARRATOR,
        text: "=== TWOJE STATYSTYKI ===",
      },
      {
        speaker: CHARACTERS.NARRATOR,
        text: "Sprawdź swoje relacje i odkryte zakończenia w menu głównym!",
      },
    ],
    next: null,
  },
};

// Merge Act 3 scenes into main STORY object
Object.assign(STORY, ACT3_SCENES);
