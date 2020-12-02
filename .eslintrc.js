module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node" : true
    },
    "extends": [
	"eslint:recommended", 'prettier', 'prettier/standard'
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
	"indent": ["error", 2],
	"semi": 2
    }
};
