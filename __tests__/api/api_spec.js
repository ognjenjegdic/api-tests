const frisby = require('frisby');

it('ApiStatus', function () {
    return frisby.get('https://simple-books-api.glitch.me/status')
      .expect('status', 200);
  });

it('ListOfBooks', function () {
    return frisby.get('https://simple-books-api.glitch.me/books')
      .expect('status', 200);
  });

it('OrderBook', function () {
    return frisby.get('https://simple-books-api.glitch.me/orders')
      .expect('status', 201);
  });

it('ReqNameApiClient', function () {
    return frisby.get('https://simple-books-api.glitch.me/api-client')
      .expect('status', 404);
  });