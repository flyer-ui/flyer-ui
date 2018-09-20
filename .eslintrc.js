module.exports = {
    "env": {
        "browser": true,
        "node":true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        // "plugin:vue/recommended",
        "plugin:flowtype/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
        "parser":"babel-eslint"
    },
    "plugins":["flowtype","html"],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};