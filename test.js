const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Users', function(){
//activate server
	before(function(){
		return runServer();
	});
//close server
	after(function(){
		return closeServer();
	});
//make request to /users, inspect response
	it('should list users of GET', function() {
		//return promise
		return chai.request(app)
		.get('/api/users/login')
		.then(function(res){
 		expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        const expectedKeys = ['email', 'name', 'password'];
        res.body.forEach(function(item) {
          expect(item).to.be.a('object');
				expect(item).to.have.all.keys(expectedKeys);
			});
		})
	});
	//POST w data for new user, inspect response
	it('should add user on POST', function() {
		const newUser = {email: 'tester@gmail.com', name: 'Jane', password: 'demo'};
		return chai.request(app)
		.post('api/users/register')
		.send(newUser)
		.then(function(res) {
			expect(res).to.have.status(200);
			expect(res.body).to.be.a('object');
			expect(res.body.id).to.not.equal(null);
			expect(res.body).to.deep.equal(Object.assign(newUser));
		});
	});
});