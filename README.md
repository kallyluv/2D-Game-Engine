# 2D Engine API Documentation

### BaseGame
The Engine's tickable base!
```js
constructor(entities: Entity[], tiles: Tile[])
```
`BaseGame.entities: Entity[]` - Array of all entities registered into the BaseGame instance<br>
`BaseGame.physics: Physics` - Physics class, allows for detecting collisions accurately. It's up to you to implement it!<br>
`BaseGame.tiles: Tile[]` - Array of all registered tiles into the BaseGame instance<br>
`BaseGame.start(): void` - Starts the game, this starts the ticking of the Engine<br>
`BaseGame.onTick(function(gameInstance: BaseGame): void): void` - Allows for the listening of the tickbase. This function is called every tick (1 tick = 1 millisecond)<br>
`BaseGame.end(): void` - Ends the game, kills the ticking of the Engine

### Entity
```js
constructor(x: float, y: float, width: float, height: float, entityInfo: EntityInfo)
```
`Entity.id: int` - The Entities id within the Game Engine, duplicate Entity IDs may cause issues and is strongly unadvised<br>
`Entity.position: Object` - An object containing current and previous locations of the Entity should the developer set them<br>
  `Entity.position.old: Vector2` - A Vector2 containing the X & Y of the previous location of the Entity<br>
  `Entity.position.current: Vector2` - A Vector2 containing the X & Y of the current location of the Entity<br>
`Entity.motion: Vector2` - A Vector2 containing the X & Y motion/acceleration of the Entity<br>
`Entity.onGround: boolean` - A boolean telling whether the Entity is on the ground should the developer set it<br>
`Entity.entityTickBase(): void` - A function designed to be called every tick to control an Entity, can be useful for Non-Player-Characters (NPCs)<br>

### EntityInfo
```js
constructor(position: Vector2, motion: Vector2, id: int)
```

### Tile
```js
constructor(x: float, y: float, width: float, height: float, ?color: hexString = "#000000")
```

### Vector2
```js
constructor(x: float, y: float)
```

### Physics
```js
constructor(game: BaseGame)
```
`Physics.gravity` - Value representing the game's gravity `(default: 0.08)`<br>
`Physics.airFriction` - Value representing air friction/resistance `(default: 0.003)`<br>
`Physics.groundFriction` - Value representing ground friction/resistance `(default: 0.03)`<br>
`Physics.maxSpeed` - Value representing the maximum speed of Entities `(default: 2)`, useful for development<br>
`Physics.terminalVelocity` - Value representing terminal velocity for Entities `(default: 3)`, useful for development<br>
`Physics.getTileAt(x: float, y: float): ?Tile` - Gets the tile at the given coordinates, returning `undefined` if not found<br>
`Physics.collide(box1: Entity, box2: Tile): string` - Checks if the Entity and a Tile are colliding/going to collide, returning the side if so and returning `"none"` if not.<br>
