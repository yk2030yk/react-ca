import { UseCaseProvider } from "@/presentation/UseCaseContext";
import { UseCaseFactory } from "@/presentation/UseCaseFactory";
import { LoginForm } from "./LoginForm";

function App() {
  const factory = new UseCaseFactory();
  return (
    <UseCaseProvider factory={factory}>
      <LoginForm />
    </UseCaseProvider>
  );
}

export default App;
