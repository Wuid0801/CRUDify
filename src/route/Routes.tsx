import Layout from "@/components/Layout";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";

const SignIn = lazy(() => import("@/pages/Login"));

export const Routes = () => {
  return (
    <Router>
      <Suspense fallback="..loading">
        <ReactRouterRoutes>
            
          <Route element={<Layout />}>
            <Route path="/" element={<SignIn />} />
          </Route>
        </ReactRouterRoutes>
      </Suspense>
    </Router>
  );
};
