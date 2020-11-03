module.exports = {
  // 环境
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
  },    
  // 使用的扩展库
  "extends":['airbnb'],
  
  // 解析器用于解析代码
  "parser": "babel-eslint",
 
  // 第三方插件
  "plugins": [
      "react",
      "react-hooks"
  ],
  // 规则
  "rules": {
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    "linebreak-style": [0 ,"error", "windows"], 
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "global-require":"off",
    "react/require-default-props":"off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export":"off",
    "react/button-has-type": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
    "max-len":"off",
    "react/jsx-props-no-spreading":"off"
  }
};