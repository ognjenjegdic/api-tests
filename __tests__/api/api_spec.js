const frisby = require('frisby');
const Joi = frisby.Joi;
const url = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

it('Valid response status', function () {
  return frisby.get(url)
    .expect('status', 200);
});

//validate using body contains which checks whole body for the string value
it('Validate that response body have id', function () {
  return frisby.get(url)
    .expect('bodyContains', 'id');
});

//same but with different parameter
it('Validate that response body have imageUrl', function () {
  return frisby.get(url)
    .expect('bodyContains', 'imageUrl');
});

//using json types fo assertion. Second argument '*' is path to an array (because response of this request is array of objects)
it ('Validate that every item has reqired properties', function () {
  return frisby.get(url)
    .expect('status', 200)
    .expect('jsonTypes', '*',{ // Assert *each* object in an array
      'id': Joi.number().required(),
      'imageUrl': Joi.string().required(),
      'firstName': Joi.string().required(),
      'lastName': Joi.string().required(),
      'email': Joi.string().required(),
      'contactNumber': Joi.string().required(),
      'age': Joi.number().required(),
      'dob': Joi.string().required(),
      'salary': Joi.number().required(),
      'address': Joi.string().required(),
    });
});

