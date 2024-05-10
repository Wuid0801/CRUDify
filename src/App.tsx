import { ThemeProvider } from "@/components/theme-provider";
import { Routes } from "./route/Routes";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
