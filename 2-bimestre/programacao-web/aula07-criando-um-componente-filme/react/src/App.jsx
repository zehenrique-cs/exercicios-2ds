import Filme from "./components/Filme" 

export default function App(){
  return(
    <div>
      <Filme 
        filme="matrix"
        ano={1999}
      />

      <Filme 
        filme="velozes e furiosos"
        ano={2009}
      />

      <Filme 
        filme="rambo"
        ano={1989}
      />      
    </div>
  )
}