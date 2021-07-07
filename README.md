# p5-td

A tower defense made in p5.js

## Map

Users can create their own maps, the game comes with some premade maps.

A map is just a json file, with the following fields:

- `width`: amount of tiles in a row as a `number`
- `height`: amount of rows as a `number`
- `tiles`: `array` of _tile_

### Tile

A tile is a square on the map. Any tile not mentioned in `tiles` will get the normal bush texture.

A tile, in turn, consists of the following fields:

- x: x position of the tile as a number (its place in the row)
- y: y position of the tile as a number (its row)
- type: the type of the tile as a tiletype (its function)

**keep in mind that x=0 means the left of the map, and y=0 means the top of the map**

#### Tiletypes

Tiles can have many different functions. These are the different tiletypes:

##### function

Tiles that fulfill a certain job have a tiletype that starts with the letter `f`.

- `spawner`: spawns enimies, if there are more than one spawner tiles, enimies will be split between them.
- `finish`: this is where enemies will try to move onto, when an enemy reaches this tile the player loses health.
- `tower`: a tile where the player is able to put towers.

An example would be `ftower`.

##### movement

Tiles that move entities will have a tiletype that starts with the letter `m`.

The second letter is the movement direction.

- `left`: move any entity to the left
- `right`: move any entity to the right
- `up`: move any entity up
- `down`: move any entity down

The third letter is the movement speed. The exact speed is different per implementation, but there are three speeds.

- `fast`: move entity at a fast speed
- `normal`: move entity at a normal speed
- `slow`: move entity at a slow speed

An example would be `mleftfast`, which would move any entity on that tile to the left, at a fast speed.
