import add from './add'

describe('第一个测试套件', function () {
    it('第一个测试用例:1+1===2', function () {
        expect(1 + 1).toBe(2)
    })
})
describe('第二个测试套件', () => {
    it('第一个测试用例:1+2===2', () => {
        expect(add(1, 1)).toBe(2)
    })
})
describe('第二个测试套件', () => {
    it('第二个测试用例:1+2===2', () => {
        expect(add(1, undefined)).toBe(2)
    })
})
describe('第二个测试套件', () => {
    it('第三个测试用例:1+2===2', () => {
        expect(add(undefined, 1)).toBe(2)
    })
})