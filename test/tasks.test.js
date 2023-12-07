// test/tasks.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Update the path based on your project structure

chai.use(chaiHttp);
const expect = chai.expect;

describe('Tasks API', () => {
  it('should list all tasks', (done) => {
    chai.request(app)
      .get('/tasks')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
