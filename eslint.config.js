import typescript_parser from "@typescript-eslint/parser";
import eslint from "@eslint/js";
import typescript_eslint_plugin from "@typescript-eslint/eslint-plugin";
import react_plugin_recommended from "eslint-plugin-react/configs/recommended.js";
import react_plugin_jsx_runtime from "eslint-plugin-react/configs/jsx-runtime.js";
import react_plugin_hooks from "eslint-plugin-react-hooks";
import unicorn_plugin from "eslint-plugin-unicorn";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    // global ignores
    ignores: ["node_modules/*", "eslint.config.js", "/src/vite-env.d.ts", "vite.config.ts"],
  },

  // applies rules and languageOptions
  react_plugin_recommended,
  react_plugin_jsx_runtime,
  {
    // react hooks plugin
    plugins: {
      "react-hooks": react_plugin_hooks,
    },
    rules: {
      ...react_plugin_hooks.configs.recommended.rules,
    },
  },

  // unicorn plugin
  unicorn_plugin.configs["flat/recommended"],
  {
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/better-regex": "warn",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/prefer-spread": "off",
      "unicorn/no-array-reduce": "off",
    },
  },

  {
    // main config
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],

    languageOptions: {
      parser: typescript_parser,
      parserOptions: {
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },
        ecmaVersion: 2022,
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      "@typescript-eslint": typescript_eslint_plugin,
    },

    rules: {
      ...eslint.configs.recommended.rules,
      ...typescript_eslint_plugin.configs["eslint-recommended"].rules,
      ...typescript_eslint_plugin.configs["recommended"].rules,
    },
  },
];
