const frisby = require('frisby');

it('Valid response status', function () {
  return frisby.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
    .expect('status', 200);
});