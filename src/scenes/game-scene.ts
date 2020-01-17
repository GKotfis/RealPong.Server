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

    private socket = io({ port: process.env.PORT || '3000', transports: ['polling', 'websocket'] });

    private topWall: Wall
    private bottomWall: Wall;
    private ball: Ball;
    private player_one: Paddle;
    private player_two: Paddle;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    public create() {
        this.socket.compress(false);
        this.socket.on('move_player', (data) => {
            this.controlPlayer(data);
        });
        // top, bottom walls
        this.topWall = new Wall(this, this.game.scale.width / 2, 20, this.game.scale.width, 20, 0x0DDEE6);
        this.bottomWall = new Wall(this, this.game.scale.width / 2, this.game.scale.height - 20, this.game.scale.width, 20, 0x0DDEE6);
        this.ball = new Ball(this, this.game.scale.width / 2, this.game.scale.height / 2)
        this.player_one = new Paddle(this, 40, this.game.scale.height / 2, 20, 120, 0xFFFFFF);
        this.player_two = new Paddle(this, this.game.scale.width - 40, this.game.scale.height / 2, 20, 120, 0xFFFFFF);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    public update() {

        this.physics.world.collide(this.ball, this.topWall, null, null, this);
        this.physics.world.collide(this.ball, this.bottomWall, null, null, this);
        this.physics.world.collide(this.ball, this.player_one);
        this.physics.world.collide(this.ball, this.player_two);

        if ((<Phaser.Physics.Arcade.Body>this.ball.body).blocked.right) {
            console.log('Player One scores');
        }
    }

    private controlPlayer(data) {
        let factor = this.game.scale.height / 90;
        let newY = this.game.scale.height / 2 + data.beta * factor;
        this.player_one.y = newY;
        this.player_two.y = newY;

        console.table({ height: this.game.scale.height, factor: factor, beta: data.beta, y: this.player_one.y });

        // if (!this.physics.world.collide(this.player_one, this.topWall)) {

        // }
        // else if (!this.physics.world.collide(this.player_one, this.topWall)) {
        //     this.player_one.y 
        // }
    }
}
