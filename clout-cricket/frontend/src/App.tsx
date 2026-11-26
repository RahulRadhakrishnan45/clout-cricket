import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import FindUs from './components/FindUs/FindUs'
import ShopByCategory from './components/ShopByCategory/ShopByCategory'
import Brands from './components/Brands/Brands'
import BatRepair from './components/BatRepair/BatRepair'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <FindUs />
      <ShopByCategory />
      <Brands />
      <BatRepair />
      <Footer />
    </>
  )
}

export default App