const frisby = require('frisby');
const url = 'https://simple-books-api.glitch.me';

it('Valid response status', function () {
  return frisby.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
    .expect('status', 200);
});

it('should be a teapot', function () {
  return frisby.get('http://httpbin.org/status/418')
    .expect('status', 418);
});

it('my first request', function () {
  return frisby.get(url + '/status')
    .expect('status', 400);
});

it('my first request', function () {
  return frisby.get('https://simple-books-api.glitch.me/status')
    .expect('status', 400);
});

it('order book', function (){
return frisby.post ('{{baseUrl}}/orders')
.expect('status', 201)

});

it('order book', function () {
  return frisby.post ('{{baseUrl}}/orders')
  .expect('created', 201)
});
it('Register Api Client', function () {
  return frisby.get ('{{baseUrl}}/api-clients')
  .expect('status', 409)
});
it('Register Api Clients', function () {
  return frisby.get ('{{baseUrl}}/api-clients')
  .expect('status', 409)
});

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });

});
it('Get an Order', function () {
  return frisby.get ('https://simple-books-api.glitch.me/orders')
  .expect('status', 200)
});
it('Register Api Clients', function () {
  return frisby.post ('/https://simple-books-api.glitch.me/api-clients')
  .expect('status', 409)
});