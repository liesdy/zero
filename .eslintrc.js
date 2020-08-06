module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  // extends: ["plugin:vue/essential", "@vue/recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "none"
      }
    ]
    // "vue/html-end-tags": "warning",
    // "vue/html-indent": "warning",
    // "vue/no-multi-spaces": "warning"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
