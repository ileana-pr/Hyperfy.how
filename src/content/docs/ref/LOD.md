---
title: LOD
description: A LOD can hold multiple child nodes and automatically activate/deactivate them based on their distance from the camera.
---

A LOD can hold multiple child nodes and automatically activate/deactivate them based on their distance from the camera.

## Properties

### `.{...Node}`

Inherits all [Node](/ref/Node) properties

## Methods

### `.insert(node, maxDistance)`

Adds `node` as a child of this node and also registers it to be activated/deactivated based on the `maxDistance` value.

