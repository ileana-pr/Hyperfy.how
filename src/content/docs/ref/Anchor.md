---
title: Anchor
description: An anchor can be used to attach players to them, eg for seating or vehicles.
---


For the most part, an anchor acts just like a group node.
But more importantly they can be used to attach players to them, eg for seating or vehicles.

When creating an anchor, be sure to give it a unique ID within your app to ensure that every client has the same ID for the player to be anchored to:

```jsx
const seat = app.create('anchor', { id: 'seat' })
car.add(seat)

// later...
player.setEffect({ anchor: seat })
```

For more information about effects, see [Player.setEffect](/ref/player).

## Properties

### `.{...Node}`

Inherits all [Node](/ref/node) properties

