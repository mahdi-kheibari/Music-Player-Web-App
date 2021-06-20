import AllMusicList from "./AllSongsList";
import SongListItem from "./songlist/SongListItem";
import ScrollContainer from "react-indiana-drag-scroll";
import { Card } from "react-bootstrap";
import { FaPauseCircle, FaStepBackward, FaStepForward } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../context";
const CurrentSongMobile = () => {
    const {currentSong} = useContext(MyContext);
    return (
        <div className="currentSongMobile" style={{background:"linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url("+currentSong[0].cover+")"}}>
            <Card className="currentSongMobile_box">
                <div className="currentSongMobile_box-icon mx-auto">
                    <FaStepBackward size="3rem" className="m-2 currentSong_caption-icon" />
                    <FaPauseCircle size="3.5rem" className="m-2 currentSong_caption-icon" />
                    <FaStepForward size="3rem" className="m-2 currentSong_caption-icon" />
                </div>
                <Card.Img className="currentSong_box-img mx-2" src={currentSong[0].cover} />
                <Card.Body className="">
                    <Card.Title className="font-weight-bold">{currentSong[0].name}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Text>{currentSong[0].singer}</Card.Text>
                        <div className="visualizer d-flex align-items-baseline">
                            <div className="visualizer_icon"></div>
                            <div className="visualizer_icon2"></div>
                            <div className="visualizer_icon3"></div>
                        </div>
                    </div>
                    <div className="currentSongMobile_time d-flex justify-content-between font-weight-bold">
                        <span>0:00</span>
                        <span>3:00</span>
                    </div>
                    <input type="range" className="currentSongMobile_slider" />
                </Card.Body>
            </Card>
            <ScrollContainer className="songList mt-2 d-flex">
                {AllMusicList().map((item) => (
                    <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} />
                ))}
            </ScrollContainer>
        </div>
    );
}

export default CurrentSongMobile;