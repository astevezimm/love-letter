import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import {LinksFunction, MetaFunction} from '@remix-run/node'
import styles from "./index.css?url"

export const meta: MetaFunction = () => {
  const title = "Andrew Zimmerman | Childhood Tribute"
  const description = "This is a love letter to my childhood imagination. It contains things I've drawn and stories I've written in preteens or older."
  
  return [
    { title },
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: "/images/i05.jpg?v=2" },
    { name: "twitter:card", content: "summary" },
  ]
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
