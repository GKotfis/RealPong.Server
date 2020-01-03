
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'MainMenu'
}

export class MainMenuScene extends Phaser.Scene {

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.add.text(100, 50, 'Welcome in Real Pong', {}).setFontSize(24).setFontFamily('Monospace');
    }
}