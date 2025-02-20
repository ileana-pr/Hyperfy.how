---
title: Developer FAQs
description: Frequently Asked Questions for Developers in Hyperfy v2.
---

## Is Hyperfy free?

Yes it's free and open source.  Once you are ready to share your v2 world with others that can join, the world will need to be [self-hosted](/hosting/self) or[provider-hosted](/hosting/provider).  This is the only cost associated, but you can find many ways to do this.  Some even free.



---

## What's the difference between v1 and v2?

v1 was hosted by Hyperfy via a one-time world purchase as NFT on Ethereum. The code was closed mostly.

v2 is open-source and hosted by you or a chosen provider.  The only cost is the hosting you choose.

---

## Is there a Sandbox?  I want to first see what v2 world is like.

Yes! There is a running sandbox of current `dev branch` of Hyperfy v2.

For inspiration, head over to [v2 Sandbox](https://play.hyperfy.xyz/)


---


## When I drag and drop a model into a world nothing happens?

One of the following issues is likely occuring:

1. If this is not a world you own or one you are running locally, you likely do not have admin privledges.

2. If you own the world and have assigned an `ADMIN_CODE` in your `.env` you will need to give yourself priviledges with `/admin <admin-key>`. By default if you do not assign an `<admin-key>` all users have admin privledges.

```sh frame="none"
cp .env.example .env

```

3. There is currently an error involving some models with draco textures. Please try with the model included in this repo at: [hyperduck.glb](https://github.com/Innkeeping/Hyperfy.how/blob/main/public/assets/hyperduck.glb)


---


## I need a random number.  Math.random() has security issues.  What should I do?

Use our [global `num` method](/docs/num-method) created just for that.

---