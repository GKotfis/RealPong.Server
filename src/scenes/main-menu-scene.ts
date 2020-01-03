import { MenuButton } from "../ui/menu-button";

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
        this.add.text(this.game.scale.width / 2, 50, 'Welcome in Real Pong')
            .setFontSize(44)
            .setFontStyle('bold')
            .setFontFamily('Monospace')
            .setColor('#F0C808')
            .setAlign('center')
            .setShadow(1, 1, '#06AED5', 1)
            .setOrigin(0.5);

        let button = new MenuButton(this, this.game.scale.width / 2, 150, 'New Game', () => {
            this.scene.start('Game');
        });
    }
}