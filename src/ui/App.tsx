import { ThemeProvider } from "@emotion/react";

import { UseCaseProvider } from "@/presentation/UseCaseContext";
import { UseCaseFactory } from "@/presentation/UseCaseFactory";

import { LoginProvider } from "./LoginContext";
import { Login } from "./organisms";

function App() {
  const factory = new UseCaseFactory();
  return (
    <ThemeProvider theme={{}}>
      <UseCaseProvider factory={factory}>
        <LoginProvider>
          <Login />
        </LoginProvider>
      </UseCaseProvider>
    </ThemeProvider>
  );
}

export default App;
