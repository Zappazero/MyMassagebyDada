import { useState } from 'react'
import Home from './components/Home'
import Booking from './components/Booking'
import CustomerProfile from './components/CustomerProfile'
import Confirmation from './components/Confirmation'

export default function App() {
  const [page, setPage] = useState('home')
  const [booking, setBooking] = useState({})
  const [profile, setProfile] = useState({})

  const goTo = (p) => { setPage(p); window.scrollTo(0, 0) }

  if (page === 'home')    return <Home onBook={() => goTo('booking')} />
  if (page === 'booking') return <Booking onNext={(b) => { setBooking(b); goTo('profile') }} onBack={() => goTo('home')} />
  if (page === 'profile') return <CustomerProfile booking={booking} onNext={(p) => { setProfile(p); goTo('confirmation') }} onBack={() => goTo('booking')} />
  if (page === 'confirmation') return <Confirmation booking={booking} profile={profile} onHome={() => goTo('home')} />
}
