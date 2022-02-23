export class Collideable {
	/** @type {number} */
	x;
	/** @type {number} */
	y;
	/** @type {number} */
	width;
	/** @type {number} */
	height;

	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 */
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}