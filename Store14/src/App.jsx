import { useState } from 'react'
import { Search, User, ShoppingCart, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Import images
import blohshLogo from './assets/blohsh_logo.png'
import mainBanner from './assets/main_banner.png'
import hangingBlohshWhiteHoodie from './assets/hanging_blohsh_white_hoodie.png'
import repeatBlohshGreenHoodie from './assets/repeat_blohsh_green_hoodie.png'
import blohshWhiteBeanie from './assets/blohsh_white_beanie.png'
import blohshGreenBeanie from './assets/blohsh_green_beanie.png'
import billieRepeatBlueTshirt from './assets/billie_repeat_blue_tshirt.png'
import hangingBlohshWhiteSweatpant from './assets/hanging_blohsh_white_sweatpant.png'
import repeatBlohshGreenSweatpant from './assets/repeat_blohsh_green_sweatpant.png'
import theGreatestToddlerYouthWhiteTshirt from './assets/the_greatest_toddler_youth_white_tshirt.png'
import billieCamoBillHat from './assets/billie_camo_bill_hat.png'
import hitMeHardAndSoftTourTee from './assets/hit_me_hard_and_soft_tour_tee.png'
import hitMeHardAndSoftAdmatPosterTee from './assets/hit_me_hard_and_soft_admat_poster_tee.png'
import hitMeHardAndSoftTourLyricBoxerBriefSet from './assets/hit_me_hard_and_soft_tour_lyric_boxer_brief_set.png'
import silverBlohshNecklace from './assets/silver_blohsh_necklace.png'
import blohshBlueBandana from './assets/blohsh_blue_bandana.png'
import blohshDieCutDogtag from './assets/blohsh_die_cut_dogtag.png'
import redBlohshNecklace from './assets/red_blohsh_necklace.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const newArrivals = [
    { id: 1, name: 'Hanging Blohsh White Hoodie', price: '$100.00', image: hangingBlohshWhiteHoodie, status: 'PRE-ORDER' },
    { id: 2, name: 'Repeat Blohsh Green Hoodie', price: '$100.00', image: repeatBlohshGreenHoodie, status: 'PRE-ORDER' },
    { id: 3, name: 'Blohsh White Beanie', price: '$35.00', image: blohshWhiteBeanie, status: 'PRE-ORDER' },
    { id: 4, name: 'Blohsh Green Beanie', price: '$35.00', image: blohshGreenBeanie, status: 'PRE-ORDER' },
    { id: 5, name: 'Billie Repeat Blue T-Shirt', price: '$45.00', image: billieRepeatBlueTshirt, status: 'PRE-ORDER' },
    { id: 6, name: 'Hanging Blohsh White Sweatpant', price: '$100.00', image: hangingBlohshWhiteSweatpant, status: 'PRE-ORDER' },
    { id: 7, name: 'Repeat Blohsh Green Sweatpant', price: '$100.00', image: repeatBlohshGreenSweatpant, status: 'PRE-ORDER' },
    { id: 8, name: 'The Greatest Toddler/Youth White T-Shirt', price: '$35.00', image: theGreatestToddlerYouthWhiteTshirt, status: 'PRE-ORDER' }
  ]

  const tourCollection = [
    { id: 9, name: 'Billie Camo Bill Hat', price: '$30.00', image: billieCamoBillHat },
    { id: 10, name: 'HIT ME HARD AND SOFT Tour Tee', price: '$45.00', image: hitMeHardAndSoftTourTee },
    { id: 11, name: 'HIT ME HARD AND SOFT Admat Poster Tee', price: '$45.00', image: hitMeHardAndSoftAdmatPosterTee },
    { id: 12, name: 'HIT ME HARD AND SOFT Tour Lyric Boxer Brief Set of 3', price: '$50.00', image: hitMeHardAndSoftTourLyricBoxerBriefSet }
  ]

  const blohshItems = [
    { id: 13, name: 'Silver Blohsh Necklace', price: '$60.00', image: silverBlohshNecklace },
    { id: 14, name: 'Blohsh Blue Bandana', price: '$10.00', image: blohshBlueBandana },
    { id: 15, name: 'Blohsh Die Cut Dogtag', price: '$75.00', image: blohshDieCutDogtag },
    { id: 16, name: 'Red Blohsh Necklace', price: '$60.00', image: redBlohshNecklace }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-orange-500/20">
        <div className="container mx-auto px-4">
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">MERCH POLL</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-orange-400">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-orange-400">
                <User className="w-4 h-4" />
                <span className="ml-1">Account</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-orange-400">
                <ShoppingCart className="w-4 h-4" />
                <span className="ml-1">Cart</span>
              </Button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            <img src={blohshLogo} alt="BLOHSH LOGO" className="h-8" />
            
            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" className="text-white hover:text-orange-400 font-bold">Merch</Button>
              <Button variant="ghost" className="text-white hover:text-orange-400 font-bold">Music</Button>
              <Button variant="ghost" className="text-white hover:text-orange-400 font-bold">Collections</Button>
              <a href="#" className="text-orange-400 hover:text-orange-300 font-bold">BILLIE x NIKE</a>
              <a href="#" className="text-orange-400 hover:text-orange-300 font-bold">SUSTAINABILITY</a>
              <a href="#" className="text-orange-400 hover:text-orange-300 font-bold">TOUR</a>
              <a href="#" className="text-orange-400 hover:text-orange-300 font-bold">Billie's Kitchen</a>
              <Button variant="ghost" className="text-white hover:text-orange-400 font-bold">MORE</Button>
            </nav>

            <Button 
              variant="ghost" 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
          <img 
            src={mainBanner} 
            alt="HIT ME HARD AND SOFT" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-orange-400 tracking-wider">
            HIT ME HARD
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-orange-400 tracking-wider">
            AND SOFT
          </h1>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">NEW ARRIVALS</h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full">
              SHOP ALL
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.status && (
                    <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-bold mt-3 text-sm">{item.name}</h3>
                <p className="text-orange-400 font-bold">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {newArrivals.slice(4, 8).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.status && (
                    <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-bold mt-3 text-sm">{item.name}</h3>
                <p className="text-orange-400 font-bold">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-white mb-4">Showing 8 of 11 total</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full">
              View More
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Collection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">TOUR COLLECTION</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tourCollection.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-bold mt-3 text-sm">{item.name}</h3>
                <p className="text-orange-400 font-bold">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full">
              SHOP ALL
            </Button>
          </div>
        </div>
      </section>

      {/* Blohsh Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Blohsh</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {blohshItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-bold mt-3 text-sm">{item.name}</h3>
                <p className="text-orange-400 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Album */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">SHOP BY ALBUM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-center cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white">HIT ME HARD AND SOFT</h3>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg p-8 text-center cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white">HAPPIER THAN EVER</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-8 text-center cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white">WWAFAWDWG?</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-orange-500/20">
        <div className="container mx-auto text-center">
          <p className="text-white/60">© 2024 Billie Eilish Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

