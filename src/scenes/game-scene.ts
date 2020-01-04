import { Wall } from "../ui/wall";
import { Ball } from "../ui/ball";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
}

export class GameScene extends Phaser.Scene {

    constructor() {
        super(sceneConfig);
    }

    private topWall;
    private bottomWall;
    private ball;

    public create() {

        // top, bottom walls
        this.topWall = new Wall(this, this.game.scale.width / 2, 20, this.game.scale.width, 20, 0x0DDEE6);
        this.bottomWall = new Wall(this, this.game.scale.width / 2, this.game.scale.height - 20, this.game.scale.width, 20, 0x0DDEE6);
        this.ball = new Ball(this, this.game.scale.width / 2, this.game.scale.height / 2)
    }

    public update() {
        this.physics.world.collide(this.ball, this.topWall, null, null, this);
        this.physics.world.collide(this.ball, this.bottomWall, null, null, this);
    }
}

