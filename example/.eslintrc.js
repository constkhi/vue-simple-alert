module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
