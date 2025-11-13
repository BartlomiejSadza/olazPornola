// Story Data for "Ostatnie Lato w Krakowie"
// Struktura: sceny, dialogi, wybory, postacie

const CHARACTERS = {
  NARRATOR: {
    name: "Narrator",
    color: "#ffffff",
  },
  MACIEJ: {
    name: "Maciej",
    color: "#4a90e2",
  },
  KINGA: {
    name: "Kinga",
    color: "#ff69b4",
  },
  JULIA: {
    name: "Julia",
    color: "#9b59b6",
  },
  ZOSIA: {
    name: "Zosia",
    color: "#1abc9c",
  },
};

const BACKGROUNDS = {
  RYNEK: "rynek-glowny.png",
  KAZIMIERZ: "kazimierz.png",
  BIURO: "biuro.png",
  WISLA: "rynek-glowny.png", // TODO: dodać tło Wisły
  WAWEL: "rynek-glowny.png", // TODO: dodać tło Wawelu
  AKADEMIK: "akademik.png", // TODO: dodać tło akademika
  BLACK: null,
};

const CHARACTER_SPRITES = {
  KINGA_NEUTRAL: "KINGA.png",
  KINGA_HAPPY: "KINGA.png",
  KINGA_SAD: "KINGA.png",
  KINGA_BLUSH: "KINGA.png",
  JULIA_NEUTRAL: "julia.png",
  JULIA_CONFIDENT: "julia.png",
  ZOSIA_NEUTRAL: "zosia.png",
  ZOSIA_HAPPY: "zosia.png",
  MACIEJ: "MACIEJ.png",
};

// Main Story Structure - sceny ładowane z osobnych plików w folderze story/
const STORY = {};

// Initial game state
const INITIAL_STATE = {
  currentScene: "start",
  stats: {
    honesty: 0,
    independence: 0,
    ambition: 0,
  },
  relationships: {
    kinga: 0,
    julia: 0,
    zosia: 0,
  },
  amsterdamChance: 50, // Procent szansy na wyjazd
  flags: {},
  chapter: 1,
  visitedScenes: [],
};
