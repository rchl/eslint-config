// @ts-expect-error Missing type definitions
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...pluginVue.configs['flat/vue2-recommended'],
    {
        name: 'eslint-config-rchl-vue',
        files: ['**/*.vue'],
        rules: {
            'vue/arrow-spacing': 'error',
            'vue/block-spacing': 'error',
            'vue/brace-style': 'error',
            'vue/comma-dangle': ['error', 'always-multiline'],
            'vue/component-name-in-template-casing': ['error', 'kebab-case', {
                registeredComponentsOnly: false,
            }],
            'vue/custom-event-name-casing': ['error', 'kebab-case'],
            'vue/eqeqeq': 'error',
            'vue/html-button-has-type': 'error',
            'vue/html-closing-bracket-newline': 'off',
            'vue/html-indent': ['error', 4],
            'vue/html-self-closing': [
                'error', {
                    html: { normal: 'never' },
                },
            ],
            'vue/key-spacing': 'error',
            'vue/keyword-spacing': 'error',
            'vue/max-attributes-per-line': ['error', {
                singleline: {
                    max: 100,
                },
                multiline: {
                    max: 1,
                },
            }],
            'vue/multi-word-component-names': 'off',
            'vue/multiline-html-element-content-newline': ['error', {
                ignores: ['pre', 'textarea', 'a', 'nuxt-link'],
            }],
            'vue/no-deprecated-scope-attribute': 'error',
            'vue/no-dupe-keys': 'off',
            'vue/no-v-html': 'off',
            'vue/object-curly-newline': ['error', { consistent: true }],
            'vue/object-curly-spacing': ['error', 'always'],
            'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            'vue/script-indent': ['error', 4, { switchCase: 1 }],
            'vue/singleline-html-element-content-newline': 'off',
            'vue/space-infix-ops': 'error',
            'vue/valid-v-slot': 'error',
            'vue/v-slot-style': 'error',
        },
    },
];
