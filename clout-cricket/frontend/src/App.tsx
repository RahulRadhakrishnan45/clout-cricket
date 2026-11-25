import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import FindUs from './components/FindUs/FindUs'
import ShopByCategory from './components/ShopByCategory/ShopByCategory'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <FindUs />
      <ShopByCategory />
    </>
  )
}

export default App