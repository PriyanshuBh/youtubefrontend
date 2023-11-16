import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";
import HeaderComponent from "./Header";
import videos from "./videos.json";

function HomeComponent() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="main">
        <div className="sidebar">
          <div className="Home"></div>
          <div className="line"></div>

          <div className="You"></div>
          <div className="line"></div>

          <div className="Subs"></div>



          <div className="sidebarIteme">Made by  👑 <br/> PRIYANSHU BHARTI
</div>
         
        </div>
        <div className="videos">
          {videos.map(function (video) {
            return (
              <VideoPreviewComponent
                title={video.title}
                description={video.description}
                url={video.thumbnail.url}
                views={video.views}
                channel={video.channelName}
                uploadedAt={video.uploadedAt}
                id={video.id}
              />
            );
          })}
          <VideoPreviewComponent title="This is first video 1" />
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
