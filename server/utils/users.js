[{
    id: 'kdsfkfd',
    name: 'Kasim',
    room: 'Hogwarts'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }

    addUser(id, name , room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var user =  this.users.find(user => user.id === id);

        if (user) {
            this.users = this.users.filter(user => user.id !== id);
        }

        return user;
    }

    getUser (id) {
        return this.users.find(user => user.id === id);
    }

    getUsersList (room) {
        var userList = this.users.filter((user) => user.room === room);
        var namesArray = userList.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {
    Users
};

// class Person {

//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
//  }

// var me = new Person('Kasim', 27);
// var desc = me.getUserDescription();

// console.log(desc);
