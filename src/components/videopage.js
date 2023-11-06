import "./homepage.css";
import logo from "./YouTubelogo.jpg";
const VideoPage=()=>{
    return( 
        <div className="wrapper">
            <div className="header">
                <div className="logo" ><div class="h1b"><img src={logo} className="ytphoto"/></div></div>
                <div className="search"><div class="h2a"><input type="text" className="setext"></input></div><div class="h2b"><button className="sebu">Search</button></div></div>
                <div className="signin"><button className="sign">SignIn</button></div>
            </div>
            <div className=""></div>
        </div>


     );
}
export default VideoPage;