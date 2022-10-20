const intern = require('../lib/intern.js');

test('getRole() should return "Intern"', () => {  
    const testValue = 'Intern';
    const e = new intern('Foo', 1, 'rdcerp', 'UW');
    expect(e.getRole()).toBe(testValue);
}
);

test('Can get school via getSchool()', () => {
    const testValue = 'UW';
    const e = new intern('Foo', 1, 'rdcerp', testValue);
    expect(e.getSchool()).toBe(testValue);
}
);
