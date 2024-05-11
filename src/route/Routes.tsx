import Layout from "@/components/Layout";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";

const Rain = lazy(() => import("@/pages/Rain"));
const Test = lazy(() => import("@/pages/test"));

export const Routes = () => {
  return (
    <Router>
      <Suspense fallback="..loading">
        <ReactRouterRoutes>
            
          <Route element={<Layout />}>
            <Route path="/" element={<Test/>}/>
            <Route path="/rain" element={<Rain />} />
          </Route>
        </ReactRouterRoutes>
      </Suspense>
    </Router>
  );
};
