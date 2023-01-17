import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from '~/styles/main.css'
import MainNavigation, { links as mainNavLinks } from "./components/main-navigation";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <p>Back to <Link to='/'>Safety</Link></p>
        <Scripts />
      </body>
    </html>
  );
};

export const links = () => {
  return [
    { rel: "stylesheet", href: styles },
    ...mainNavLinks(),
  ];

}