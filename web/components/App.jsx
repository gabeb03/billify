import {
  Provider,
  SignedIn,
  SignedInOrRedirect,
  SignedOut,
  SignedOutOrRedirect,
  useSignOut,
} from "@gadgetinc/react";
import { AppProvider, Button, ButtonGroup } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import "@shopify/polaris/build/esm/styles.css";
import { Suspense, useEffect } from "react";
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import { api } from "../api";
import { AddHours } from "../routes/add-hours";
import ChangePassword from "../routes/change-password";
import ForgotPassword from "../routes/forgot-password";
import Index from "../routes/index";
import ResetPasswordPage from "../routes/reset-password";
import SignInPage from "../routes/sign-in";
import SignUpPage from "../routes/sign-up";
import SignedInPage from "../routes/signed-in";
import VerifyEmailPage from "../routes/verify-email";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = `${process.env.GADGET_APP}`;
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect>
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="signed-in"
          element={
            <SignedInOrRedirect>
              <SignedInPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="change-password"
          element={
            <SignedInOrRedirect>
              <ChangePassword />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="forgot-password"
          element={
            <SignedOutOrRedirect>
              <ForgotPassword />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-in"
          element={
            <SignedOutOrRedirect>
              <SignInPage />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-up"
          element={
            <SignedOutOrRedirect>
              <SignUpPage />
            </SignedOutOrRedirect>
          }
        />
        <Route path="add-hours" element={<AddHours />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();

  return (
    <AppProvider>
      <Provider
        api={api}
        navigate={navigate}
        auth={window.gadgetConfig.authentication}
      >
        <Header />
        <div className="app">
          <div className="app-content">
            <div className="main">
              <Outlet />
            </div>
          </div>
        </div>
      </Provider>
    </AppProvider>
  );
};

const Header = () => {
  const signOut = useSignOut();

  return (
    <div className="header">
      <a
        href="/"
        target="_self"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="logo">Billify 💸</div>
      </a>
      <div className="header-content">
        <SignedOut>
          <Link to="/sign-in" style={{ color: "black" }}>
            Sign in
          </Link>
          <Link to="/sign-up" style={{ color: "black" }}>
            Sign up
          </Link>
        </SignedOut>
        <SignedIn>
          <ButtonGroup>
            <Button variant="tertiary" onClick={signOut}>
              Sign out
            </Button>
            <Button icon={PlusIcon}>
              <Link
                to="/add-hours"
                style={{ textDecoration: "none", color: "black" }}
              >
                Log hours
              </Link>
            </Button>
          </ButtonGroup>
        </SignedIn>
      </div>
    </div>
  );
};

export default App;
