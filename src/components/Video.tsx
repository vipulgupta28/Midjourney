import video from "../assets/videoplayback.mp4";

const Video = () => {
    return (
        <div className="flex justify-center border w-full items-center h-screen bg-black">
            <video 
                src={video}
             
                className="rounded-[20px] border w-[1200px] h-[700px] shadow-lg"
            />
        </div>
    );
};

export default Video;
