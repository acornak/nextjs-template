import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: [
            '**/node_modules/*',
            'dist/*',
            'build/*',
            'coverage/*',
            'vite-env.d.ts',
            '.env.*'
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                JSX: true
            }
        },
        plugins: {
            '@typescript-eslint': typescript,
            'react': react,
            'react-hooks': reactHooks,
            'import': importPlugin,
            'prettier': prettier,
            '@next/next': nextPlugin,
            'jsx-a11y': jsxA11y
        },
        settings: {
            'import/resolver': {
                alias: {
                    extensions: ['.js', '.jsx'],
                    map: [['@', '.']]
                }
            },
            react: {
                version: 'detect'
            }
        },
        rules: {
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
            'react/require-default-props': 'off',
            'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
            'prettier/prettier': 'error',
            'no-console': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            'react/jsx-no-useless-fragment': 'off',
            'import/extensions': 'warn',
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: ['function-declaration', 'arrow-function'],
                    unnamedComponents: 'arrow-function'
                }
            ]
        }
    }
]; 