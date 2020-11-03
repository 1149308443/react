import React, { useContext } from 'react';
import PropTyoes from 'prop-types';

// 创建Context组件
const wrapContext = React.createContext();

// 运行APP
const Father = () => (
  <wrapContext.Provider value="this is provider">
    <Child />
  </wrapContext.Provider>
);

// export default Father;

// 接收组件
const getProviderValue = () => <wrapContext.Consumer>{(value) => <span>{value}</span>}</wrapContext.Consumer>;

const Child = () => (
  getProviderValue()
);


// 1. 在组件树中，如果中间某一个组件 ShouldComponentUpdate returning false 了，会阻碍 context 的正常传值，导致子组件无法获取更新。
// 2. 组件本身 extends React.PureComponent 也会阻碍 context 的更新。

// 注意点：

// 1. Context 应该是唯一不可变的
// 2. 组件只在初始化的时候去获取 Context


/**
 * 动态Context,传入默认的context内容和修改context的方法作为context
 */
const themes = {
  light: {
    foreground: '#000000',
    background: '#ffffff'
  },
  dark: {
    foreground: '#ffffff',
    background: '#0000ff'
  }
};

const ThemeContext = React.createContext(
  {
    theme: themes.dark,
    toggleTheme: () => {}
  }
);

const ThemedButton = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const xxx = useContext(ThemeContext);
  // console.log(xxx);
  return (
    <button
      {...props}
      onClick={toggleTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Change Theme
    </button>
  );
};

// const Toolbar = (props) => {
//   const { changeTheme } = props;
//   return (
//     <ThemedButton onClick={changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// };
// Toolbar.propTypes = {
//   changeTheme: PropTyoes.func
// };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleThemes = () => {
      this.setState((state) => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleThemes
    };
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    const { theme, toggleTheme } = this.state;
    return (
      <>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {/* <Toolbar changeTheme={this.toggleTheme} /> */}
          <ThemedButton />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
