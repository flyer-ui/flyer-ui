export default function add(num1, num2) {
    if (typeof num1 === 'undefined') {
        num1 = 0
    }
    if (typeof num2 === 'undefined') {
        num2 = 0
    }
    return num1 + num2
}