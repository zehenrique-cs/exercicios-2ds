import Footer from "./components/Footer"
import Header from "./components/Header"
import Contato from "./Pages/Contato"
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"

export default function App(){
  return(
    <div>
  <Header />

    <main>
       <Home />
       <Sobre />
       <Contato />
    </main>

    <Footer />

    </div>
  )
}