import {
  AppNav,
  theme,
  ThemeProvider,
} from "../../../../../dist/solidjs-ui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNav>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </AppNav>
    </ThemeProvider>
  );
}

export default App;
