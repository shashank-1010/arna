import { BirthdayExperience } from "./BirthdayExperience";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BirthdayExperience />
    </ErrorBoundary>
  );
}

export default App;
