import video1 from "../assets/video1.mp4";
import video2 from "../assets/video1.mp4";
const Hero = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container flex flex-col items-center mt-6 lg:mt-12 max-w-7xl">
        <h1 className="tracking-wide text-4xl sm:text-6xl lg:text-7xl text-center">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="rounded-md px-3 py-2 mx-3 bg-gradient-to-r from-orange-600 to-orange-800"
          >
            Start for free
          </a>
          <a href="#" className="rounded-md px-3 py-2 mx-3 border">
            Documentation
          </a>
        </div>
        <div className="mt-10 flex justify-center ">
          <video
            autoPlay
            muted
            loop
            className="border-orange-600 my-3 mx-2 border rounded-lg shadow-orange-600 w-1/2"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            muted
            loop
            className="border-orange-600 my-3 mx-2 border rounded-lg shadow-orange-600 w-1/2"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
