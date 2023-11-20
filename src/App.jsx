import NavBar from './components/NavBar'
import TabContent from './components/TabContent'
import { data } from "./data/data.js"

function App() {


  return (
    <div className='tab-container'>
      <NavBar />
      <TabContent title={data[0].title} pargraph={data[0].lorem} />
    </div>
  )
}

export default App
