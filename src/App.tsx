import { useState } from 'react'
import './App.css'
import { AnyLink } from './components/AnyLink'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Form, type ILinkInfo } from './components/Form'
import { Header } from './components/Header'

function App() {
  const [links, setLinks] = useState<ILinkInfo[]>([]);

  return (
    <div className="min-h-screen bg-blue-50 px-4">
      <div className="max-w-3xl mx-auto py-5">
        <Header />
        <Form links={links} setLinks={setLinks} />
        {links.length > 0 ? (
          <div className='my-10'>
            <h2 className='font-bold text-2xl'>Seus Links ({links.length})</h2>
            <div className="space-y-4 mt-6">
              {links.map((link) => (
                <Card links={links} setLinks={setLinks} key={crypto.randomUUID()} title={link.title} url={link.url} description={link.description} />
              ))}
            </div>
          </div>
        ) : <AnyLink />}
        <Footer />
      </div>
    </div>
  )
}

export default App
