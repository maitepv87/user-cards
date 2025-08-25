import { AppLayout } from "./components";
import { AsyncProvider } from "./context/AsyncContext";

function App() {
  return (
    <AsyncProvider>
      <AppLayout />
    </AsyncProvider>
  );
}

export default App;
