import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Video from "../components/Video"
import Updates from "../components/Updates"
import Action from "../components/Action"
import QNA from "../components/QandA"
import Adhoc from "../components/Adhoc"
import Join from "../components/join"

const Landing = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Video/>
        <Updates/>
        <Action/>
        <QNA/>
         <Adhoc/>
        <Join/>
       
       
        </>
    )
}

export default Landing