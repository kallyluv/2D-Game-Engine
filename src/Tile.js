import { Collideable } from "./Collideable.js";

export class Tile extends Collideable {
	/**
	 * @type {string}
	 * @private
	 */
	color;

	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {?string} color
	 */
	constructor(x, y, width, height, color = "#000000") {
		super(x, y, width, height);
		this.color = color;
	}

	getColor() {
		return this.color;
	}

	/**
	 * @param {string} hex
	 */
	setColor(hex) {
		if (hex.match(/\#(\d{6}|\d{3})/gim)) this.color = hex;
	}
}
