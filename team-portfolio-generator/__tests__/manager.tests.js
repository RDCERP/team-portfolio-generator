const manager = require('../lib/manager.js');

test('getRole() should return "Manager"', () => {
    const testValue = 'Manager';
    const e = new manager('Big Dog', 1, 'rdcerp', 100);
    expect(e.getRole()).toBe(testValue);
}
);

test('Can get office number via getOffice()', () => {
    const testValue = 18004342123;
    const e = new manager('Foo', 1, 'rdcerp', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
}
);
