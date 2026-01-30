import Header from './components/blocks/Header'
import Hero from './components/blocks/Hero'
import Clients from './components/blocks/Clients'
import Community from './components/blocks/Community'
import Unlock from './components/blocks/Unlock'
import Achievements from './components/blocks/Achievements'
import Calendar from './components/blocks/Calendar'
import Testimonial from './components/blocks/Testimonial'
import CommunityUpdates from './components/blocks/CommunityUpdates'
import CTA from './components/blocks/CTA'
import Footer from './components/blocks/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Community />
        <Unlock />
        <Achievements />
        <Calendar />
        <Testimonial />
        <CommunityUpdates />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
