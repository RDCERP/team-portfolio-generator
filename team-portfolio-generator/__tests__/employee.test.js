const createEmployee = require('../lib/employee.js');

Test(
    'Can instantiate createEmployee instance',
    () => {
        const e = new createEmployee();
        expect(typeof(e)).toBe('object');
    }
);

Test('Can set name via constructor arguments', () => {
    const name = 'Alice';
    const e = new createEmployee(name);
    expect(e.name).toBe(name);
}
);

Test('Can set id via constructor argument', () => {
    const testValue = 100;
    const e = new createEmployee('Foo', testValue);
    expect(e.id).toBe(testValue);
}
);

Test('Can set email via constructor argument', () => {
    const testValue = 'rdcerp@wm.com';
    const e = new createEmployee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
}
);

Test('Can get name via getName()', () => {
    const testValue = 'Alice';
    const e = new createEmployee(testValue);
    expect(e.getName()).toBe(testValue);
}
);

Test('Can get id via getId()', () => {
    const testValue = 100;
    const e = new createEmployee('Foo', testValue);
    expect(e.getId()).toBe(testValue);
}
);

