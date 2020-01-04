import * as Phaser from 'phaser';

export class Ball extends Phaser.GameObjects.Text {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, '🥎', {});
        scene.add.existing(this);
        this.setFontSize(34);

        this.scene.physics.add.existing(this, false);
        (<Phaser.Physics.Arcade.Body>this.body).setVelocity(300, 300);
        (<Phaser.Physics.Arcade.Body>this.body).setBounce(1, 1);
        (<Phaser.Physics.Arcade.Body>this.body).setGravity(0, 0);
    }
}