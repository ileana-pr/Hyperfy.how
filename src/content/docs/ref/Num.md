---
title: Num
description: Global num method, to generate random numbers replace Math.random()
---

This is a global method that can be used to generate random numbers, since `Math.random()` is not allowed inside the app script runtime.

```sh frame="none"
/**
 * function num(min, max, dp=0)
 */

// random integer between 0 and 10
num(0, 10)

// random float between 100 and 1000 with 2 decimal places
num(100, 1000, 2)
```

