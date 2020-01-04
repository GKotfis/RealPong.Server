import * as Phaser from 'phaser';

export class Wall extends Phaser.GameObjects.Rectangle {
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, color: number) {
        super(scene, x, y, width, height, color);
        scene.add.existing(this);

        this.scene.physics.add.existing(this, false);
        (<Phaser.Physics.Arcade.Body>this.body).setImmovable(true);
        (<Phaser.Physics.Arcade.Body>this.body).setBounce(1, 1);
    }
}