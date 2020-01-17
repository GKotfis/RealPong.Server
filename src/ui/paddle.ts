import * as Phaser from 'phaser';

export class Paddle extends Phaser.GameObjects.Rectangle {
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, color: number) {
        super(scene, x, y, width, height, color);
        scene.add.existing(this);

        this.scene.physics.add.existing(this, false);
        (<Phaser.Physics.Arcade.Body>this.body).setBounce(1, 1);
        (<Phaser.Physics.Arcade.Body>this.body).setImmovable(true);
        (<Phaser.Physics.Arcade.Body>this.body).collideWorldBounds = true;
        // (<Phaser.Physics.Arcade.Body>this.body).checkCollision.up = true;
        // (<Phaser.Physics.Arcade.Body>this.body).checkCollision.down = true;
    }

    public update() {
    }
};