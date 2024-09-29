import "@styles/globals.css";
import Nav from "@components/Nav";
import Processor from "postcss/lib/processor";

export const metadata = {
  title: 'PromptGen',
  description: 'Discover and share AI prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />

          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout