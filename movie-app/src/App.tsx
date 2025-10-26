import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useGuestSession } from "./hooks/useGuessSessionId";

function App() {
  useGuestSession();

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
