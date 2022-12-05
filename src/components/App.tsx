import Container from "./Container"
import Header from "./Header"
import Live from "./Live"
import Seguindo from "./Seguindo"


function App() {
  
  return (
  <div id="app" style={appStyle}>
    <Header/>
    <Container/>
  </div>
  )
}

const appStyle = {
  margin: '0px',
  backgroudColor: 'red'
}

export default App
