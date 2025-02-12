---
title: Global num Method
description: Global num method, replace Math.random()
---

Math.random() is not recommended normally for security, BUT we have a global `num` method you can use for exactly this

```sh frame="none"
// num(min, max, dp=0)
num(0, 10) // random integer between 0 and 10
num(100, 1000, 2) // random float between 100 and 1000 with 2 decimal places

```
