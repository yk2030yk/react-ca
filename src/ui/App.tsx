import { UseCaseProvider } from "@/presentation/UseCaseContext";
import { UseCaseFactory } from "@/presentation/UseCaseFactory";

import { LoginProvider } from "./LoginContext";
import { LoginInfo } from "./LoginInfo";
import { LoginForm } from "./LoginForm";

function App() {
  const factory = new UseCaseFactory();
  return (
    <UseCaseProvider factory={factory}>
      <LoginProvider>
        <LoginInfo />
        <LoginForm />
      </LoginProvider>
    </UseCaseProvider>
  );
}

export default App;
