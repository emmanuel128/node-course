const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    })

    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(3);

            expect(res).toBe(9).toBeA('number');
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(3, (square) => {
                expect(square).toBe(9).toBeA('number');
                done();
            });
        });
    })
});

it('should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({ name: 'Emma' }).toEqual({ name: 'Emma' });
    expect([2, 3, 4]).toExclude(5);
    expect({
        name: 'Emma',
        age: 24,
        location: 'Puerto Rico'
    }).toInclude({
        age: 24
    })
});

it('should verify first and last names are set', () => {
    var user = { location: 'Puerto Rico', age: 24 };
    user = utils.setName(user, 'Emmanuel Castro');

    expect(user).toInclude({
        firstName: 'Emmanuel',
        lastName: 'Castro'
    });
});