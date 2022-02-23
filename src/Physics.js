import { BaseGame } from "./BaseGame.js";
import { Tile } from "./Tile.js";
import { Entity } from "./Entity.js";

export class Physics {
	gravity = 0.08;
	airFriction = 0.003;
	groundFriction = 0.03;
	verticalFriction = 0.01;
	checksPerCollision = 6;
	slideFriction = 0.05;
	maxSpeed = 2;
	terminalVelocity = 3;

	/** @type {BaseGame} */
	game;

	/**
	 *
	 * @param {BaseGame} game
	 */
	constructor(game) {
		this.game = game;
	}

	getTileAt(x, y) {
		return this.game.tiles.find(
			(tile) =>
				tile.x <= x &&
				tile.x + tile.width >= x &&
				tile.y <= y &&
				tile.y + tile.height >= y
		);
	}

	/**
	 * @param {Entity} box1
	 * @param {Tile} box2
	 * @param {number} deltaX
	 * @param {number} deltaY
	 * @returns {boolean}
	 */
	isInside(box1, box2, deltaX, deltaY) {
		return (
			box1.position.current.x + box1.width + deltaX >= box2.x &&
			box1.position.current.x + deltaX <= box2.x + box2.width &&
			box1.position.current.y + box1.height + deltaY >= box2.y &&
			box1.position.current.y + deltaY <= box2.y + box2.height
		);
	}

	/**
	 *
	 * @param {Entity} box1
	 * @param {Tile} box2
	 * @returns {[string, Tile]}
	 */
	collide(box1, box2) {
		let A = [
			box1.position.current.x,
			box1.position.current.y,
			box1.width,
			box1.height,
		];
		let B = [box2.x, box2.y, box2.width, box2.height];

		let deltaX = box1.position.current.x - box1.position.old.x;
		let deltaY = box1.position.current.y - box1.position.old.y;

		if (this.isInside(box1, box2, deltaX, deltaY)) {
			if (
				Math.abs(A[0] - B[0]) - A[2] - B[2] >
					Math.abs(A[1] - B[1] + deltaX) - A[3] - B[3] &&
				(A[0] + A[2] - 10 <= B[0] || A[0] >= B[0] + B[2] + 10)
			) {
				return ["right", box2];
			} else {
				if (A[1] < B[1]) return ["top", box2];

				return ["bottom", box2];
			}
		}

		return ["none", box2];
	}
}
