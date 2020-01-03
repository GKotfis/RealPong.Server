const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
}

export class GameScene extends Phaser.Scene {

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.add.text(100, 50, 'GAME');

        // world bounds

        // game pin


        // player 1 & 2 info

        // points
    }
}

