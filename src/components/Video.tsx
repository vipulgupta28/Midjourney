import video from "../assets/videoplayback.mp4";

const Video = () => {
    return (
        <div className="flex justify-center rounded-xl border w-full items-center h-screen bg-black">
            <video 
                src={video}
             
                className="rounded-[20px] border w-[1900px] h-[800px] shadow-lg"
            />
        </div>
    );
};

export default Video;
