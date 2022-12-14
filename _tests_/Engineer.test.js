//tests for the Engineer class. tests object creation and each of the class methods.
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Karen', 3, 'karen@hotmail.com', 'karenK');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets an engineer's github", () => {
    const engineer = new Engineer('Karen', 3, 'karen@hotmail.com', 'karenK');

    expect(engineer.getGithub()).toEqual(engineer.github);
});

test("gets an engineer's role", () => {
    const engineer = new Engineer('Karen', 3, 'karen@hotmail.com', 'karenK');

    expect(engineer.getRole()).toEqual('Engineer');
});