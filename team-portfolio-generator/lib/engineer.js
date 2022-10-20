const createEmployee = require('./employee.js');
class engineer extends createEmployee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getOfficeNumber() {
        return this.github;
    }
}
module.exports = engineer;