import * as Phaser from 'phaser'
import Scenes from './scenes'

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Real Pong',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    scene: Scenes,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    parent: 'game',
    backgroundColor: '#000000'
}

export const game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
    game.scale.refresh();
})