import { Footer } from "./components/footer/footer";
import { Input } from "./components/input/Input";
import { Task } from "./components/task/task";
import "./app.scss"

function App() {
  return (
    <div className="App">
      <header className="App__header">todos</header>
      <Input />
      <Task />
      <Footer />
    </div>
  );
}

export default App;
