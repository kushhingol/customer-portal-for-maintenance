import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Home } from "./components/home/home";
import { ServerSentEvent } from "./components/server-sent-event/server-sent-event";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <div className="App">
        <ServerSentEvent />
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
