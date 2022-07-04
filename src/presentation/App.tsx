import { ApiServiceFactory } from "@/adaptor/api/ApiServiceFactory";

import { LoginForm } from "./components/LoginForm";
import { UseCaseProvider } from "./contexts/UseCaseContext";
import { UseCaseFactory } from "./UseCaseFactory";

function App() {
  const factory = new UseCaseFactory(ApiServiceFactory.create("axios"));
  return (
    <UseCaseProvider factory={factory}>
      <LoginForm />
    </UseCaseProvider>
  );
}

export default App;
