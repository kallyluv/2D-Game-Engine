import { Collideable } from "./Collideable.js";
import { Vector2 } from "./Vector2.js";
import { EntityInfo } from "./EntityInfo.js";

export class Entity extends Collideable {
	/** @type {number} */
	id;

	/** @type {{current: Vector2, old: Vector2}} */
	position;

	/** @type {Vector2} */
	motion;

	/** @type {boolean} */
	onGround = false;

	entityTickBase() {}

	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {EntityInfo} entityData
	 */
	constructor(x, y, width, height, entityData) {
		super(x, y, width, height);
		this.id = entityData.id;
		this.position = {
			current: entityData.position,
			old: entityData.position,
		};
		this.motion = entityData.motion;
	}
}
