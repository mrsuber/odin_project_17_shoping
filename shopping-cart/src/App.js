
import './App.css';
import NavBar from "./component/NavBar"
import MainSection from './component/MainSection'
import SideBar from "./component/SideBar"
import Footer from "./component/Footer"

function App() {
  return (
    <div className="App grid-container">
    <NavBar/>
    <SideBar />
    <MainSection />
    <Footer />


    </div>
  );
}

export default App;
