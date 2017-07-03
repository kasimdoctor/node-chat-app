const {Users} = require('./users');
const expect = require('expect');

describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Kasim',
            room: 'Node course'
        }, {
            id: '2',
            name: 'Mike',
            room: 'React course'
        }, {
            id: '3',
            name: 'Alex',
            room: 'Node course'
        }];
    });

    it('Should add new user', () => {
        let users = new Users();

        var user = {
            id: 123,
            name: 'Kasim',
            room: 'Wizards'
        };

        var responseUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
        
    });

    it('Should return name for Node course', () => {
        var userList = users.getUsersList('Node course');

        expect(userList).toEqual(['Kasim', 'Alex']);
    });

    it('Should return name for React course', () => {
        var userList = users.getUsersList('React course');

        expect(userList).toEqual(['Mike']);
    });

    it('Should remove a user', () => {
        var removedUser = users.removeUser('1');

        expect(removedUser.id).toEqual('1');
        expect(users.users.length).toBe(2);
    });

    it('Should not remove a user', () => {
        var removedUser = users.removeUser('99');

        expect(removedUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('Should find a user', () => {
        var foundUser = users.getUser('1');

        expect(foundUser).toEqual(users.users[0]);
    });

    it('Should not find a user', () => {
        var notFoundUser = users.getUser('dummy');

        expect(notFoundUser).toNotExist();
    });
});
