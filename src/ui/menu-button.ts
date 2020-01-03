import * as Phaser from 'phaser';

const padding = 10;
const minimumWidth = 200;
const minimumHeight = 50;

export class MenuButton extends Phaser.GameObjects.Rectangle {
    private label: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number, text: string, onClick?: () => void) {
        super(scene, x, y);
        scene.add.existing(this);
        this.setOrigin(0, 0);

        this.label = scene.add.text(x, y, text)
            .setFontFamily('Monospace')
            .setFontSize(18)
            .setAlign('center');

        const labelWidth = this.label.width + padding;
        const labelHeight = this.label.height + padding;

        this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;

        // center button and label
        this.x = this.x - this.width / 2;
        this.label.x = this.label.x - this.label.width / 2;
        this.label.y = this.label.y + this.height / 2 - this.label.height / 2;

        this.setInteractive({ useHandCursor: true })
            .on('pointerover', this.enterMenuButtonHoverState)
            .on('pointerout', this.enterMenuButtonRestState)
            .on('pointerdown', this.enterMenuButtonActiveState)
            .on('pointerup', this.enterMenuButtonHoverState);

        if (onClick) {
            this.on('pointerup', onClick);
        }

        this.enterMenuButtonRestState();
    }

    private enterMenuButtonHoverState() {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x6D118E);
    }

    private enterMenuButtonRestState() {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x540D6E);
    }

    private enterMenuButtonActiveState() {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x6D118E);
    }
}