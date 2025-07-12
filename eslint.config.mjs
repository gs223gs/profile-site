import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // useEffect の使用を禁止
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["useEffect"],
              message: "useEffect is not allowed. Use alternative patterns."
            }
          ]
        }
      ],
      
      // any の使用を禁止
      "@typescript-eslint/no-explicit-any": "error",
      
      // unknown, let, var の使用を制限
      "no-restricted-syntax": [
        "error",
        {
          "selector": "TSUnknownKeyword",
          "message": "Use a more specific type instead of unknown"
        },
        {
          "selector": "VariableDeclaration[kind='let']",
          "message": "Use 'const' instead of 'let'. Variables should be immutable."
        }
      ],
      
      // let と var の使用を禁止 (const を推奨)
      "prefer-const": "error",
      "no-var": "error"
    }
  }
];

export default eslintConfig;
