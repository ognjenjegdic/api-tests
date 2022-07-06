const frisby = require('frisby');
const url =  'https://simple-books-api.glitch.me';

it('ApiStatus', function() {
    return frisby.get(url + '/status') 
      .expect('status', 200);
  });
  
it('ListOfBooks', function() {
    return frisby.get(url + '/books')
      .expect('status', 200);
  });

  it('Valid response status', function () {
    return frisby.post(url + '/orders' , {
      headers: {
        'Authorization' : 'd79e77fcf5d1563fe03512aa1d3376e667f0c737781e50fe449ae1a5cc4561d2'
      },
      body: {
        "bookId": 1,
        "customerName": "Ms. Christie Rempel"
      }
    })
      .expect('status', 201);
  });

it('ReqNameApiClient', function() {
    return frisby.get(url + '/api-client')
      .expect('status', 404);
  });
