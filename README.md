# 2D Engine
2D Engine is a JavaScript Game Engine able to be run in modern browsers through modular systems or plain JS (see [/min/2DEngine.min.js](https://github.com/xJustJqy/2D-Game-Engine/blob/main/min/2DEngine.min.js))

### Setup
To setup the game for your browser, you will need to create an instance of the `BaseGame` class. Ex.:
```js
const game = new BaseGame(Entity[],Tile[]);
```
Once you have initialized the game instance, call the the `BaseGame.start()` function.
```js
game.start();
```
Now your game has started ticking! To capture each tick and create a game loop, simply use the `BaseGame.onTick(function(BaseGame): void)` function.
```js
game.onTick(function(gameInstance) {
  /*
  - Work your magical code here!
  - Each tick is one millisecond
  - Note that this function is called every tick, so be careful what variables are stored and set here
  */
});
```
That's it! You've successfully created an in-browser tickable Game Engine with an accurate 2D Axis Aligned Border Box Physics Engine!

<hr>

[**API Docs**](https://github.com/xJustJqy/2D-Game-Engine/tree/docs#readme)
