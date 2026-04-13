import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './components/Welcome.jsx' 
import Counter from './components/Counter.jsx'
import Nameinput from './components/Nameinput.jsx'
import CounterApp from './components/CounterApp.jsx'
import BasicList from './components/BasicList.jsx'
import TailwindCSSTest from './components/TailwindCSSTest.jsx'
import FriendCards from './components/FriendsCard.jsx'
import IsSubscribed from './components/IsSubscribed.jsx'
import ReportCard from './components/ReportCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App/>
    <Welcome name="Ekansh"/>
    <Counter/>
    <Nameinput/>
    <CounterApp/>
    <BasicList/>
    <TailwindCSSTest/>
    
    <ReportCard/>
    <IsSubscribed status = {true}/>*/}
    <FriendCards/>

  </StrictMode>,
)
