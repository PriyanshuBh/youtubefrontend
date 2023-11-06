import "./homepage.css";
import VideoComponent from "./videocomponent";
import logo from "./YouTubelogo.jpg";



const HomePage=()=>{
    return(
        
            <div className="wrapper">
                <div className="header">
                    <div className="logo" ><div class="h1b"><img src={logo} className="ytphoto"/></div></div>
                    <div className="search"><div class="h2a"><input type="text" className="setext"></input></div><div class="h2b"><button className="sebu">Search</button></div></div>
                    <div className="signin"><button className="sign">SignIn</button></div>
                </div>
                <div className="containers">
                    <div className="side">
                        <div className="sidetitle">HOME</div>
                        <div className="sidetitle">CHANNEL</div>
                        <div className="sidetitle">VIDEO</div>
                        <div className="sidetitle">LIKED VIDEO</div>
                        
                    </div>
                    <div className="mains" >
                        <VideoComponent/>
                        <VideoComponent />
                        <VideoComponent />
                        <VideoComponent />
                        <VideoComponent />
                        <VideoComponent />
                        <VideoComponent />
                        <VideoComponent />
                        <VideoComponent />
                        <VideoComponent />

                    </div>

                    
                </div>
            </div>
        
        
    );
}
export default HomePage;