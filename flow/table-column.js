// @flow
function test(x: number): number {
    if (x) {
        return x * 2
    }
    return x
}

export default test