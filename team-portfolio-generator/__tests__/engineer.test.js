const engineer= require('../lib/engineer.js');

test('getRole() should return "Engineer"', () => {  
    const testValue = 'Engineer';
    const e = new engineer('Foo', 1, 'rdcerp', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
}
);

test('Can get GitHub username via getGithub()', () => {
    const testValue = 'GitHubUser';
    const e = new engineer('Foo', 1, 'rdcerp', testValue);
    expect(e.getGithub()).toBe(testValue);
}
);

