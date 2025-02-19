---
title: Developer FAQs
description: Frequently Asked Questions for Developers in Hyperfy v2.
---

### When I drag and drop a model into a world nothing happens?

One of the following issues is likely occuring:

1. If this is not a world you own or one you are running locally, you likely do not have admin privledges.

2. If you own the world and have assigned an `ADMIN_CODE` in your `.env` you will need to give yourself priviledges with `/admin <admin-key>`. By default if you do not assign an `<admin-key>` all users have admin privledges.

```sh frame="none"
cp .env.example .env

```

3. There is currently an error involving some models with draco textures. Please try with the model included in this repo at: [hyperduck.glb](https://github.com/Innkeeping/Hyperfy.how/blob/main/public/assets/hyperduck.glb)

---

### I need a random number.  Math.random() has security issues.  What should I do?

Use our [global `num` method](/docs/num-method) created just for that.

---