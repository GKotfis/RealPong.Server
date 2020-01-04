import { Wall } from "../ui/wall";
import { Ball } from "../ui/ball";
import { Paddle } from "../ui/paddle";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
}

export class GameScene extends Phaser.Scene {

    constructor() {
        super(sceneConfig);
    }

    private topWall: Wall
    private bottomWall: Wall;
    private ball: Ball;
    private player_one: Paddle;
    private player_two: Paddle;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    public create() {

        // top, bottom walls
        this.topWall = new Wall(this, this.game.scale.width / 2, 20, this.game.scale.width, 20, 0x0DDEE6);
        this.bottomWall = new Wall(this, this.game.scale.width / 2, this.game.scale.height - 20, this.game.scale.width, 20, 0x0DDEE6);
        this.ball = new Ball(this, this.game.scale.width / 2, this.game.scale.height / 2)
        this.player_one = new Paddle(this, 40, this.game.scale.height / 2, 20, 80, 0xFFFFFF);
        this.player_two = new Paddle(this, this.game.scale.width - 40, this.game.scale.height / 2, 20, 80, 0xFFFFFF);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    public update() {

        if (this.cursors.down.isDown) {
            this.player_one.y += 8;
            this.player_two.y += 8;
        }
        else if (this.cursors.up.isDown) {
            this.player_one.y -= 8;
            this.player_two.y -= 8;
        }

        this.physics.world.collide(this.ball, this.topWall, null, null, this);
        this.physics.world.collide(this.ball, this.bottomWall, null, null, this);
        this.physics.world.collide(this.ball, this.player_one);
        this.physics.world.collide(this.ball, this.player_two);
    }
}

