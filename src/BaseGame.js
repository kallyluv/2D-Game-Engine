import { Physics } from "./Physics.js";
import { Entity } from "./Entity.js";
import { Tile } from "./Tile.js";
import { AIEntity } from "../AIEntity.js";

export class BaseGame {
	task;
	/** @type {Physics} */
	physics;

	/** @type {Entity[]} */
	entities = [];
	/** @type {Tile[]} */
	tiles = [];

	/**
	 * @private
	 * @type {function(BaseGame)}
	 */
	tickListener;

	/**
	 * @private
	 * @type {number}
	 */
	tickBase;

	/**
	 *
	 * @param {Entity[]} entities
	 * @param {Tile[]} tiles
	 */
	constructor(entities, tiles) {
		this.physics = new Physics(this);
		this.entities = entities;
		this.tiles = tiles;
		this.tickListener = () => {};
	}

	start() {
		this.tickBase = setInterval(() => {
			this.tickListener(this);
		}, 1);
	}

	/**
	 *
	 * @param {function(BaseGame)} callback
	 */
	onTick(callback) {
		this.tickListener = callback;
	}

	end() {
		clearInterval(this.tickBase);
	}
}
