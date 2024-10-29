import pluginJs from '@eslint/js';
import plugAutofix from 'eslint-plugin-autofix';
import pluginImport from 'eslint-plugin-import';
import pluginPreferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const eslintConfig = [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,

	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			globals: { ...globals.node }
		}
	},

	{
		plugins: {
			import: pluginImport,
			'prefer-arrow-functions': pluginPreferArrowFunctions,
			autofix: plugAutofix
		},

		rules: {
			// autofix
			'autofix/no-unused-vars': 'error',
			'autofix/arrow-body-style': ['error', 'always'],

			// @typescript-eslint
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',

			// eslint-plugin-prefer-arrow-functions
			'prefer-arrow-functions/prefer-arrow-functions': 'error',

			// eslint-plugin-import
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': ['error', { 'prefer-inline': true }],
			'import/no-anonymous-default-export': 'error',
			'import/no-namespace': 'error',
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
					pathGroups: [
						{
							pattern: '~/**',
							group: 'internal'
						}
					],

					groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'object', 'type']
				}
			]
		},

		ignores: ['**/node_modules', '**/dist']
	}
];

export default eslintConfig;
