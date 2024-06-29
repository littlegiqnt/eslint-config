import antfu from "@antfu/eslint-config";
import promisePlugin from "eslint-plugin-promise";

export default antfu(
    {
        isInEditor: false,
        rules: {
            "curly": ["error", "multi-line"],
            "func-style": ["error", "expression"],
            "no-console": ["warn", { allow: ["debug"] }],
            "require-await": "error",
            "antfu/if-newline": "off",
            "antfu/top-level-function": "off",
            "jsonc/sort-keys": "off",
            "node/prefer-global/buffer": "off",
            "node/prefer-global/process": "off",
        },
        typescript: {
            tsconfigPath: "tsconfig.json",
            overrides: {
                "ts/no-misused-promises": ["error", { checksVoidReturn: { arguments: false } }],
                "ts/no-use-before-define": "off",
                "ts/strict-boolean-expressions": ["error", { allowNullableBoolean: true }],
            },
        },
        stylistic: {
            // indent: 4,
            quotes: "double",
            semi: true,
            overrides: {
                "style/arrow-parens": ["error", "always"],
                "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
                "style/indent": ["error", 4, {
                    ignoredNodes: [
                        "TemplateLiteral *",
                        "ConditionalExpression",
                    ],
                    SwitchCase: 1,
                }],
                "style/max-statements-per-line": "off",
                "style/multiline-ternary": "off",
            },
        },
    },
    {
        plugins: {
            promise: promisePlugin,
        },
        rules: {
            ...promisePlugin.configs.recommended.rules,
            "promise/always-return": "off",
        },
    },
);