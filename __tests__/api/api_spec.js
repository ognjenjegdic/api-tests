const frisby = require('frisby');
//const Joi = frisby.Joi;
const url = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

it('Valid response status', function () {
  return frisby.get(url)
    .expect('status', 200);
});

//this is just example