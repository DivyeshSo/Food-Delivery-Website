import React,{ useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExpolreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Services from '../../components/Services/Services'
import AboutUs from '../../components/AboutUs/AboutUs'
import Feedback from '../../components/Feedback/Feedback'


const Home = () => {

    const [category,setcategory] = useState("All");
  
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setcategory={setcategory} />
        <FoodDisplay category={category}/>
        <Services/>
        <AboutUs/>
       <Feedback/>
    </div>
  )
}

export default Home