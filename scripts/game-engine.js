// Game Engine for "Ostatnie Lato w Krakowie"
// Obsługuje: rendering dialogów, system wyborów, zapisywanie stanu, animacje

class VisualNovelEngine {
    constructor() {
        // Game state
        this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
        this.currentDialogueIndex = 0;
        this.isAutoMode = false;
        this.isSkipMode = false;
        this.textSpeed = 50; // ms per character
        this.isTextAnimating = false;

        // Settings
        this.settings = {
            textSpeed: 5,
            musicVolume: 70,
            sfxVolume: 80,
            voiceVolume: 90
        };

        // DOM elements
        this.elements = {
            background: document.getElementById('background'),
            characterLeft: document.getElementById('character-left'),
            characterCenter: document.getElementById('character-center'),
            characterRight: document.getElementById('character-right'),
            speakerName: document.getElementById('speaker-name'),
            dialogueText: document.getElementById('dialogue-text'),
            continueIndicator: document.getElementById('continue-indicator'),
            choiceMenu: document.getElementById('choice-menu'),
            choicesContainer: document.getElementById('choices-container'),
            kingaStat: document.getElementById('kinga-stat'),
            juliaStat: document.getElementById('julia-stat'),
            zosiaStat: document.getElementById('zosia-stat'),
            amsterdamStat: document.getElementById('amsterdam-stat')
        };
    }

    // Initialize the engine
    init() {
        this.loadSettings();
        this.updateStats();
    }

    // Start new game
    startNewGame() {
        this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
        this.currentDialogueIndex = 0;
        this.loadScene(this.state.currentScene);
    }

    // Load a scene
    loadScene(sceneId) {
        const scene = STORY[sceneId];
        if (!scene) {
            console.error(`Scene ${sceneId} not found!`);
            return;
        }

        this.state.currentScene = sceneId;
        this.state.visitedScenes.push(sceneId);
        this.currentDialogueIndex = 0;

        // Set background
        this.setBackground(scene.background);

        // Set character sprite
        this.setCharacter(scene.character);

        // Apply effects if any
        if (scene.effects) {
            this.applyEffects(scene.effects);
        }

        // Handle scene type
        if (scene.type === 'choice') {
            this.showChoices(scene.choices);
        } else {
            this.showDialogue(scene.dialogue[0]);
        }
    }

    // Set background image
    setBackground(background) {
        if (background) {
            this.elements.background.style.backgroundImage = `url('assets/images/backgrounds/${background}')`;
            this.elements.background.style.backgroundColor = '#2c3e50';
        } else {
            this.elements.background.style.backgroundImage = 'none';
            this.elements.background.style.backgroundColor = '#000';
        }
    }

    // Set character sprite(s) - supports single character or object with positions
    setCharacter(characters) {
        if (!characters) {
            // Hide all characters
            [this.elements.characterLeft, this.elements.characterCenter, this.elements.characterRight].forEach(el => {
                el.style.opacity = '0';
                setTimeout(() => { el.style.display = 'none'; }, 500);
            });
            return;
        }

        // Determine which positions should be shown
        let showLeft = false, showCenter = false, showRight = false;
        let leftSrc = '', centerSrc = '', rightSrc = '';

        if (typeof characters === 'string') {
            showCenter = true;
            centerSrc = characters;
        } else if (typeof characters === 'object') {
            if (characters.left) {
                showLeft = true;
                leftSrc = characters.left;
            }
            if (characters.center) {
                showCenter = true;
                centerSrc = characters.center;
            }
            if (characters.right) {
                showRight = true;
                rightSrc = characters.right;
            }
        }

        // Handle left character
        if (showLeft) {
            this.elements.characterLeft.src = `assets/images/characters/${leftSrc}`;
            this.elements.characterLeft.style.display = 'block';
            this.elements.characterLeft.style.opacity = '1';
        } else {
            this.elements.characterLeft.style.opacity = '0';
            setTimeout(() => { this.elements.characterLeft.style.display = 'none'; }, 500);
        }

        // Handle center character
        if (showCenter) {
            this.elements.characterCenter.src = `assets/images/characters/${centerSrc}`;
            this.elements.characterCenter.style.display = 'block';
            this.elements.characterCenter.style.opacity = '1';
        } else {
            this.elements.characterCenter.style.opacity = '0';
            setTimeout(() => { this.elements.characterCenter.style.display = 'none'; }, 500);
        }

        // Handle right character
        if (showRight) {
            this.elements.characterRight.src = `assets/images/characters/${rightSrc}`;
            this.elements.characterRight.style.display = 'block';
            this.elements.characterRight.style.opacity = '1';
        } else {
            this.elements.characterRight.style.opacity = '0';
            setTimeout(() => { this.elements.characterRight.style.display = 'none'; }, 500);
        }
    }

    // Show dialogue
    showDialogue(dialogue) {
        if (!dialogue) return;

        // Set speaker name
        this.elements.speakerName.textContent = dialogue.speaker.name;
        this.elements.speakerName.style.color = dialogue.speaker.color;

        // Animate text
        this.animateText(dialogue.text);

        // Hide choice menu
        this.elements.choiceMenu.style.display = 'none';
    }

    // Animate text (typewriter effect)
    animateText(text) {
        this.isTextAnimating = true;
        this.elements.continueIndicator.style.display = 'none';
        this.elements.dialogueText.textContent = '';

        // Convert to array to properly handle Unicode characters (Polish letters)
        const chars = Array.from(text);
        let index = 0;
        const speed = this.textSpeed / this.settings.textSpeed;

        const typeWriter = () => {
            if (index < chars.length) {
                this.elements.dialogueText.textContent += chars[index];
                index++;
                setTimeout(typeWriter, speed);
            } else {
                this.isTextAnimating = false;
                this.elements.continueIndicator.style.display = 'block';
            }
        };

        typeWriter();
    }

    // Skip text animation
    skipTextAnimation() {
        const scene = STORY[this.state.currentScene];
        const dialogue = scene.dialogue[this.currentDialogueIndex];
        this.elements.dialogueText.textContent = dialogue.text;
        this.isTextAnimating = false;
        this.elements.continueIndicator.style.display = 'block';
    }

    // Advance to next dialogue
    nextDialogue() {
        // If text is still animating, complete it first
        if (this.isTextAnimating) {
            this.skipTextAnimation();
            return;
        }

        const scene = STORY[this.state.currentScene];

        // If it's a choice scene, don't advance
        if (scene.type === 'choice') {
            return;
        }

        this.currentDialogueIndex++;

        // Check if there are more dialogues in this scene
        if (this.currentDialogueIndex < scene.dialogue.length) {
            this.showDialogue(scene.dialogue[this.currentDialogueIndex]);
        } else {
            // Move to next scene
            if (scene.next) {
                this.loadScene(scene.next);
            } else {
                // End of story
                this.endGame();
            }
        }
    }

    // Show choices
    showChoices(choices) {
        this.elements.choiceMenu.style.display = 'block';
        this.elements.choicesContainer.innerHTML = '';
        this.elements.continueIndicator.style.display = 'none';

        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.onclick = () => this.selectChoice(choice);
            this.elements.choicesContainer.appendChild(button);
        });
    }

    // Handle choice selection
    selectChoice(choice) {
        // Apply effects
        if (choice.effects) {
            this.applyEffects(choice.effects);
        }

        // Load next scene
        if (choice.next) {
            this.loadScene(choice.next);
        }
    }

    // Apply effects (stats, relationships, flags)
    applyEffects(effects) {
        // Update stats
        if (effects.stats) {
            for (const [stat, value] of Object.entries(effects.stats)) {
                this.state.stats[stat] = (this.state.stats[stat] || 0) + value;
            }
        }

        // Update relationships
        if (effects.relationship) {
            for (const [character, value] of Object.entries(effects.relationship)) {
                this.state.relationships[character] += value;
            }
            this.updateStats();
        }

        // Set flags
        if (effects.flags) {
            for (const [flag, value] of Object.entries(effects.flags)) {
                this.state.flags[flag] = value;
            }
        }

        // Play sound
        if (effects.playSound) {
            this.playSound(effects.playSound);
        }
    }

    // Update stats display
    updateStats() {
        this.elements.kingaStat.textContent = this.state.relationships.kinga;
        this.elements.juliaStat.textContent = this.state.relationships.julia;
        this.elements.zosiaStat.textContent = this.state.relationships.zosia;

        // Calculate Amsterdam chance based on relationships and choices
        const stayBonus = this.state.flags.amsterdam_less_likely ? -20 : 0;
        const relationshipInfluence = (this.state.relationships.kinga * 2) - (this.state.relationships.julia * 2);
        this.state.amsterdamChance = Math.max(0, Math.min(100, 50 + stayBonus - relationshipInfluence));

        this.elements.amsterdamStat.textContent = `${100 - this.state.amsterdamChance}% stay / ${this.state.amsterdamChance}% go`;
    }

    // Save game
    saveGame(slotId) {
        const saveData = {
            state: this.state,
            currentDialogueIndex: this.currentDialogueIndex,
            timestamp: new Date().toISOString(),
            sceneName: this.state.currentScene
        };

        localStorage.setItem(`save_slot_${slotId}`, JSON.stringify(saveData));
        return true;
    }

    // Load game
    loadGame(slotId) {
        const saveData = localStorage.getItem(`save_slot_${slotId}`);
        if (saveData) {
            const parsed = JSON.parse(saveData);
            this.state = parsed.state;
            this.currentDialogueIndex = parsed.currentDialogueIndex;
            this.loadScene(this.state.currentScene);
            return true;
        }
        return false;
    }

    // Get all saves
    getAllSaves() {
        const saves = [];
        for (let i = 1; i <= 10; i++) {
            const saveData = localStorage.getItem(`save_slot_${i}`);
            if (saveData) {
                saves.push({
                    slotId: i,
                    data: JSON.parse(saveData)
                });
            } else {
                saves.push({
                    slotId: i,
                    data: null
                });
            }
        }
        return saves;
    }

    // Settings
    loadSettings() {
        const settings = localStorage.getItem('game_settings');
        if (settings) {
            this.settings = JSON.parse(settings);
        }
    }

    saveSettings() {
        localStorage.setItem('game_settings', JSON.stringify(this.settings));
    }

    updateSetting(setting, value) {
        this.settings[setting] = value;
        this.saveSettings();

        // Apply setting
        if (setting === 'textSpeed') {
            this.textSpeed = 100 - (value * 8);
        }
    }

    // Audio
    playSound(soundFile) {
        // Placeholder for audio playback
        console.log(`Playing sound: ${soundFile}`);
        // const audio = new Audio(`assets/audio/sfx/${soundFile}`);
        // audio.volume = this.settings.sfxVolume / 100;
        // audio.play();
    }

    playMusic(musicFile) {
        console.log(`Playing music: ${musicFile}`);
        // Placeholder for music playback
    }

    // End game
    endGame() {
        console.log('Game ended. Final state:', this.state);
        // Could show end credits, stats summary, etc.
    }

    // Toggle auto mode
    toggleAutoMode() {
        this.isAutoMode = !this.isAutoMode;
        if (this.isAutoMode) {
            this.autoAdvance();
        }
    }

    autoAdvance() {
        if (!this.isAutoMode) return;

        setTimeout(() => {
            if (!this.isTextAnimating) {
                this.nextDialogue();
            }
            this.autoAdvance();
        }, 3000);
    }

    // Toggle skip mode
    toggleSkipMode() {
        this.isSkipMode = !this.isSkipMode;
        if (this.isSkipMode) {
            this.skipAdvance();
        }
    }

    skipAdvance() {
        if (!this.isSkipMode) return;

        if (this.isTextAnimating) {
            this.skipTextAnimation();
        }

        setTimeout(() => {
            this.nextDialogue();
            this.skipAdvance();
        }, 100);
    }
}
