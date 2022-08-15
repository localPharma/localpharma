import "./App.css";
import AppRouter from "./AppRouter";

// Context
import AppContext from "./ContextAPI/AppContext";

function App() {
  return (
    <div className='App'>
      <AppContext>
        <AppRouter />
      </AppContext>
    </div>
  );
}

export default App;
