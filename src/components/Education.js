import utcc1 from "../assets/utcc1.png"
import ReactPlayer from "react-player";
function Education(){
    const imgURL = "https://www.utcc.ac.th/wp-content/uploads/2020/05/bg-14.jpeg";
    const vdoURL = "https://www.youtube.com/watch?v=2h1svqEyRaQ";
    return(
        <div>
        <h1>Below are my university pictures: </h1>
        <img src={utcc1} width={300} alt="univ pic1"/>
        <br/>
        <img src={require("../assets/utcc2.png")} 
            width={300} alt="univ pic2"/>
        <br/>
        <img src={imgURL} width={300} alt="univ pic3"/>
        <br/>
        <video width="300" controls>
            <source src={require("../assets/minions.mp4")} type="Video/mp4" />
            Sorry , your browser doens't support videos!
        </video>
        <br/>
        <center>
            <ReactPlayer url={vdoURL} controls width={400}
                height={300} />
        </center>
        </div>
    );
}
export default Education ;