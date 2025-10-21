import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Events from './components/Events'
import Competitions from './components/Competitions'
import Committees from './components/Committees'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <Hero />
      <Mission />
      <Events />
      <Competitions />
      <Committees />
      <Footer />
    </div>
  )
}

export default App
