var path = require('path')
export default {
    input: 'src/main.js',
    output: {
        file: 'dist/flyer.js',
        paths: [path.resolve(__dirname, 'dist')],
        format: 'iife'
    }
}