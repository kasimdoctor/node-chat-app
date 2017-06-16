const expect = require('expect');
const {generateMessage, generateLocationMessage} =require('./message');

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

describe('generateLocationMessage', () => {
    it('Should generate correct location message', () => {
        let from = 'Guddu';
        let latitude = 25.55;
        let longitude = 33.33;

        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(locationMessage.createdAt).toBeA('number');
    });
});
