import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from "./page/home"
import Aboutpage from './page/about'
import Achievementpage from './page/achievements'
import Contactpage from './page/contact'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/achievement" element={<Achievementpage />}/>
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </Router>
  )
}

export default App
