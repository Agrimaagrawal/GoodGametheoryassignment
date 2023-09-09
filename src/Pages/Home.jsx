import Search from "../Components/Search";
import Data from "../Components/Data";
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center">
      
      <Search/>
      <Data/>
    </div>
    </>
  )
}

export default Home
