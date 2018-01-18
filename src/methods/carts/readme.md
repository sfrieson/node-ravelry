# carts

## [add](https://www.ravelry.com/api#carts_add)

`rav.carts.add(id, params, cb)`

**Parameters:**
- id (required): `number`
- params (required): `{ item_code: string }`
- cb: `() => mixed`

## [create](https://www.ravelry.com/api#carts_create)

`rav.carts.create(params, cb)`

**Parameters:**
- params (required): `{ store_id: string }`
- cb: `() => mixed`

## [external_checkout](https://www.ravelry.com/api#carts_external_checkout)

`rav.carts.externalCheckout(id, params, cb)`

**Parameters:**
- id (required): `number`
- params: `{ payment_reference: string }`
- cb: `() => mixed`

## [loveknitting/external_checkout](https://www.ravelry.com/api#carts_loveknitting/external_checkout)

`rav.carts.loveknitting.externalCheckout(id, params, cb)`

**Parameters:**
- id (required): `number`
- params: `{ payment_reference: string,product_id_list: string }`
- cb: `() => mixed`

