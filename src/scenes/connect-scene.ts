const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Connect'
}

export class ConnectScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    private gamePinText: Phaser.GameObjects.Text;
    private loader: Phaser.GameObjects.Text;

    public create() {
        this.add.text(this.game.scale.width / 2, 50, 'Waiting for players')
            .setFontSize(34)
            .setFontStyle('bold')
            .setFontFamily('Monospace')
            .setColor('#F0C808')
            .setAlign('center')
            .setShadow(1, 1, '#06AED5', 1)
            .setOrigin(0.5);

        let gamePingText = this.add.text(this.game.scale.width / 2, 100, 'Game Pin:')
            .setFontSize(34)
            .setFontStyle('bold')
            .setFontFamily('Monospace')
            .setColor('#F0C808')
            .setAlign('center')
            .setShadow(1, 1, '#06AED5', 1)
            .setOrigin(0.5);

        this.gamePinText = this.add.text(gamePingText.x + gamePingText.width + 20, 100, '34562')
            .setFontSize(34)
            .setFontStyle('bold')
            .setFontFamily('Monospace')
            .setColor('#F0C808')
            .setBackgroundColor('#06AED5')
            .setPadding(10, 10, 10, 10)
            .setAlign('center')
            .setShadow(1, 1, '#06AED5', 1)
            .setOrigin(0.5);

        this.loader = this.add.text(this.game.scale.width / 2, this.game.scale.height / 2, '🟢🟡🟢')
            .setFontSize(44);
        this.physics.world.enable(this.loader);
        (<Phaser.Physics.Arcade.Body>this.loader.body).setVelocity(300, 300);
        (<Phaser.Physics.Arcade.Body>this.loader.body).setCollideWorldBounds(true);
        (<Phaser.Physics.Arcade.Body>this.loader.body).setBounce(1, 1);
    }

    public update() {
    }
}