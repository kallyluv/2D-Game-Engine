import { Vector2 } from "./Vector2.js";

export class EntityInfo {
	position;
	motion;
	id;

	/**
	 *
	 * @param {Vector2} position
	 * @param {Vector2} motion
	 * @param {number} id
	 */
	constructor(position, motion, id) {
		this.position = position;
		this.motion = motion;
		this.id = id;
	}
}
