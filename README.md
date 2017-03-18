# Falabella Frontend Test

- [Minimum requirements](#minimum-requirements)
- [Running the Application](#running-the-application)
- [Test description](#test-description)


## Minimum requirements

- [Node 6.9.1][nodejs]


## Running the Application

- Running Express Application

```shell
$ npm run dev
```

- Running frontend application with webpack

```shell
$ npm run webpack
```


## Test description

It is required to implement a simple shopping cart.

It must have two important sections:

- An Item list showing the product catalog
- Basket list, having all the items which are going to be purchased by the user.

These are the business rules:

- Each catalog item must have an action button to `add item to cart`.

- Each cart item must have an action button to `remove item from cart`.


Here is the demo showing how it behave like:

[demo video][demo]

### Bonus points

- Use redux as state manager.
- Favor using map, filter, reduce, forEach.
- Favor using functional components in your application.

[nodejs]: https://nodejs.org/en/download/
[demo]: https://www.dropbox.com/s/t6k4oypu2kg3h40/adessa-demo-video.mp4
