const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Emma', 24);
        expect(spy).toHaveBeenCalledWith('Emma', 24);
    });

    it('should call saveUser with user object', () => {
        var email = 'q@q.com';
        var password = '123456';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});