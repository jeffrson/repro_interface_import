module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        //        'import'
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    rules: {
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'import/order': 'off',
    }
}
