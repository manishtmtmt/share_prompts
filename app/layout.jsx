import '@styles/globals.css'

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: 'Discover and Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className="main">
            <div className='gradient' />
        </body>

        <main className='app'>
            <Nav />
            {children}
        </main>
    </html>
  )
}

export default RootLayout