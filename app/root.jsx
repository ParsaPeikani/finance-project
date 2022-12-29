import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script>{`
          (function() {
            var info = console.info
            console.info = function (message) {
              if (!/Download the React DevTools/.test(message)) info.apply(console, arguments) 
            }
          })()
      `}</script>
        <LiveReload />
      </body>
    </html>
  );
}
