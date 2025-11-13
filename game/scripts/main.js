// Main controller for "Ostatnie Lato w Krakowie"
// Handles UI interactions and screen management

// Global game engine instance
let game;

// Screen management
const screens = {
    title: document.getElementById('title-screen'),
    game: document.getElementById('game-screen'),
    saveLoad: document.getElementById('save-load-screen'),
    options: document.getElementById('options-screen'),
    credits: document.getElementById('credits-screen')
};

let currentScreen = 'title';
let saveLoadMode = 'save'; // 'save' or 'load'

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    game = new VisualNovelEngine();
    game.init();
    setupEventListeners();
    showScreen('title');
});

// Setup all event listeners
function setupEventListeners() {
    // Title screen buttons
    document.getElementById('start-game').addEventListener('click', () => {
        game.startNewGame();
        showScreen('game');
    });

    document.getElementById('load-game').addEventListener('click', () => {
        saveLoadMode = 'load';
        showSaveLoadScreen();
    });

    document.getElementById('options').addEventListener('click', () => {
        showScreen('options');
    });

    document.getElementById('credits').addEventListener('click', () => {
        showScreen('credits');
    });

    // Game screen - dialogue advancement
    document.getElementById('dialogue-box').addEventListener('click', (e) => {
        // Don't advance if clicking on continue indicator or if choices are shown
        if (e.target.id === 'continue-indicator') return;
        if (document.getElementById('choice-menu').style.display !== 'none') return;

        game.nextDialogue();
    });

    // Quick menu buttons
    document.getElementById('save-btn').addEventListener('click', () => {
        saveLoadMode = 'save';
        showSaveLoadScreen();
    });

    document.getElementById('load-btn').addEventListener('click', () => {
        saveLoadMode = 'load';
        showSaveLoadScreen();
    });

    document.getElementById('auto-btn').addEventListener('click', (e) => {
        game.toggleAutoMode();
        e.target.classList.toggle('active');
    });

    document.getElementById('skip-btn').addEventListener('click', (e) => {
        game.toggleSkipMode();
        e.target.classList.toggle('active');
    });

    document.getElementById('menu-btn').addEventListener('click', () => {
        showScreen('title');
    });

    // Options screen
    document.getElementById('text-speed').addEventListener('input', (e) => {
        game.updateSetting('textSpeed', parseInt(e.target.value));
    });

    document.getElementById('music-volume').addEventListener('input', (e) => {
        game.updateSetting('musicVolume', parseInt(e.target.value));
    });

    document.getElementById('sfx-volume').addEventListener('input', (e) => {
        game.updateSetting('sfxVolume', parseInt(e.target.value));
    });

    document.getElementById('voice-volume').addEventListener('input', (e) => {
        game.updateSetting('voiceVolume', parseInt(e.target.value));
    });

    document.getElementById('options-back').addEventListener('click', () => {
        showScreen(currentScreen === 'options' ? 'title' : 'game');
    });

    // Credits screen
    document.getElementById('credits-back').addEventListener('click', () => {
        showScreen('title');
    });

    // Save/Load screen
    document.getElementById('save-load-back').addEventListener('click', () => {
        showScreen('game');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (currentScreen === 'game') {
            switch(e.key) {
                case ' ':
                case 'Enter':
                    game.nextDialogue();
                    break;
                case 'Escape':
                    showScreen('title');
                    break;
                case 's':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        saveLoadMode = 'save';
                        showSaveLoadScreen();
                    }
                    break;
                case 'l':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        saveLoadMode = 'load';
                        showSaveLoadScreen();
                    }
                    break;
            }
        }
    });
}

// Screen management functions
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });

    // Show selected screen
    screens[screenName].classList.add('active');
    currentScreen = screenName;
}

// Save/Load screen
function showSaveLoadScreen() {
    const title = document.getElementById('save-load-title');
    title.textContent = saveLoadMode === 'save' ? 'Zapisz Grę' : 'Wczytaj Grę';

    const saveSlotsContainer = document.getElementById('save-slots');
    saveSlotsContainer.innerHTML = '';

    const saves = game.getAllSaves();

    saves.forEach(save => {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'save-slot' + (save.data ? '' : ' empty');

        if (save.data) {
            const date = new Date(save.data.timestamp);
            const dateStr = date.toLocaleString('pl-PL', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });

            slotDiv.innerHTML = `
                <div class="save-slot-info">
                    <strong>Slot ${save.slotId}</strong><br>
                    Scena: ${save.data.sceneName}<br>
                    Kinga: ${save.data.state.relationships.kinga} |
                    Julia: ${save.data.state.relationships.julia} |
                    Zosia: ${save.data.state.relationships.zosia}
                </div>
                <div class="save-slot-date">${dateStr}</div>
            `;
        } else {
            slotDiv.innerHTML = `
                <div class="save-slot-info">
                    <strong>Slot ${save.slotId}</strong><br>
                    [Pusty]
                </div>
            `;
        }

        slotDiv.addEventListener('click', () => {
            if (saveLoadMode === 'save') {
                game.saveGame(save.slotId);
                alert('Gra zapisana!');
                showSaveLoadScreen(); // Refresh
            } else {
                if (save.data) {
                    game.loadGame(save.slotId);
                    showScreen('game');
                } else {
                    alert('Ten slot jest pusty!');
                }
            }
        });

        saveSlotsContainer.appendChild(slotDiv);
    });

    showScreen('saveLoad');
}

// Utility functions
function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
        return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds % 60}s`;
    } else {
        return `${seconds}s`;
    }
}

// Preload assets (optional)
function preloadAssets() {
    // Preload critical images
    const imagesToPreload = [
        'assets/images/backgrounds/rynek-glowny.jpg',
        'assets/images/characters/kinga-neutral.png',
        // Add more as needed
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on init if needed
// preloadAssets();

console.log('Ostatnie Lato w Krakowie - Visual Novel Engine initialized');
console.log('Powered by Bartłomiej Sadza');
