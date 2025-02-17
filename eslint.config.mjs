import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
})
export default [
	...compat.config({
		ignorePatterns: [
			'/node_modules/*',
			'dist/*',
			'build/*',
			'coverage/*',
			'vite-env.d.ts',
			'.env.*',
		],
		env: {
			browser: true,
			es2021: true,
			jest: true,
		},
		globals: {
			JSX: true,
		},
		extends: [
			'plugin:react/recommended',
			'airbnb',
			'plugin:import/errors',
			'plugin:import/warnings',
			'plugin:import/typescript',
			'prettier',
			'plugin:prettier/recommended',
			'next',
		],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: ['react', '@typescript-eslint'],
		rules: {
			'jsx-a11y/click-events-have-key-events': 1,
			'jsx-a11y/no-static-element-interactions': 1,
			'react/require-default-props': 'off',
			'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
			'prettier/prettier': 'error',
			'no-console': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error'],
			'react/jsx-no-useless-fragment': 'off',
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],
			'react/function-component-definition': [
				'error',
				{
					namedComponents: ['function-declaration', 'arrow-function'],
					unnamedComponents: 'arrow-function',
				},
			],
		},
		settings: {
			'import/resolver': {
				alias: {
					extensions: ['.js', '.jsx'],
					map: [['@', '.']],
				},
			},
		},
	}),
]
