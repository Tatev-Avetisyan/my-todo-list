import Main from "./components/Main/Main";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Main />
    </TodoProvider>
  );
}

export default App;
