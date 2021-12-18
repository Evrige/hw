const capitalize = require('../capitalize');

describe('capitalize()', () => {
    const string = 'test tset ttest test';
    it(`с аргументом ${string} возвращает Test Tset Ttest Test`, () => {
        expect(capitalize(string)).toStrictEqual('Test Tset Ttest Test');
    });
});
