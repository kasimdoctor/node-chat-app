const expect = require('expect');
const {generateMessage} =require('./message');

describe('generateMessage', () => {
    it('Should generate correct message', () => {
        let from = 'Kasim';
        let text = 'Test message from me';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    });
});
