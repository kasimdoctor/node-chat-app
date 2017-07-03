const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string values', () => {
        var result = isRealString(23);

        expect(result).toBe(false);
    });

    it('Should reject string with only spaces', () => {
        var result = isRealString('   ');

        expect(result).toBe(false);
    });

    it('Should aloow string with non-space characters', () => {
        var result = isRealString('kasim');

        expect(result).toBe(true);
    });
});
