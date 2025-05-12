import React from "react";
import aboutus from "../../assets/aboutus.png";

const AboutUsComponent = () => {
  return (
    <div className="w-auto h-full">
      {/* top section */}
      <div className="flex items-center m-16 gap-8">
        {/* image div */}
        <div className="w-auto">
          <img src={aboutus} alt="about image" className="w-170 h-100" />
        </div>

        <div className="">
          <h1 className="font-bold text-2xl">ABOUT US</h1>

          <p className="font-bold uppercase mt-8">
            We are Peshawari Chappal & Peshawari Chaddar Shop since 1998. We are
            Peshawari Chappal & Peshawari Chaddar Shop since 1998
          </p>

          <p className="mt-8 uppercase text-sm">
            Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
            at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
            Dictumst dictumst laoreet sit viverra et. Et condimentum vivamus
            aliquet quis penatibus mauris pretium mauris.
          </p>

          <p className="mt-8 uppercase text-sm">
            Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
            at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
          </p>

          <button className="mt-16 bg-[#FFBF3D] rounded-4xl text-white text-xs font-bold px-15 py-2">
            MORE ABOUT US
          </button>
        </div>
      </div>

      {/* second section */}

      <div className="flex flex-col gap-8 m-28">
        <h1 className="font-bold text-2xl text-center mb-4">OUR GOAL</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat maecenas mus mollis quis
          in nullam scelerisque sagittis eleifend. Amet amet convallis in eu
          mollis. Enim malesuada neque habitant scelerisque ultrices id pharetra
          dui erat. Nec tempor ut imperdiet varius condimentum tristique urna
          velit. At eros id nec faucibus facilisi bibendum est sollicitudin.
          Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum.
          In dolor purus aliquam ac libero. Viverra velit purus condimentum
          lacus. Tristique dolor quisque eget fames senectus gravida non. Cursus
          amet tincidunt fames dictumst arcu aliquam commodo auctor. Tincidunt
          elementum nulla aliquam nunc eros ornare ornare dignissim. Lacus id
          pellentesque euismod arcu diam tortor lectus in neque.
        </p>
        <p className="text-center mt-4">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat mus mollis quis in nullam
          scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim
          malesuada neque scelerisque ultrices id pharetra dui erat. Nec tempor
          ut imperdiet varius condimentum tristique urna velit. At faucibus
          facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et.
          Facilisi sit blandit nisi non ipsum. In dolor purus aliquam ac libero.
          Viverra velit purus condimentum lacus.
        </p>
      </div>


      {/* third section */}
      <div className="flex flex-col gap-8 m-28">
        <h1 className="font-bold text-2xl text-center mb-4">OUR GOAL</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat maecenas mus mollis quis
          in nullam scelerisque sagittis eleifend. Amet amet convallis in eu
          mollis. Enim malesuada neque habitant scelerisque ultrices id pharetra
          dui erat. Nec tempor ut imperdiet varius condimentum tristique urna
          velit. At eros id nec faucibus facilisi bibendum est sollicitudin.
          Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum.
          In dolor purus aliquam ac libero. Viverra velit purus condimentum
          lacus. Tristique dolor quisque eget fames senectus gravida non. Cursus
          amet tincidunt fames dictumst arcu aliquam commodo auctor. Tincidunt
          elementum nulla aliquam nunc eros ornare ornare dignissim. Lacus id
          pellentesque euismod arcu diam tortor lectus in neque.
        </p>
        <p className="text-center mt-4">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat mus mollis quis in nullam
          scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim
          malesuada neque scelerisque ultrices id pharetra dui erat. Nec tempor
          ut imperdiet varius condimentum tristique urna velit. At faucibus
          facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et.
          Facilisi sit blandit nisi non ipsum. In dolor purus aliquam ac libero.
          Viverra velit purus condimentum lacus.
        </p>
      </div>

    </div>
  );
};

export default AboutUsComponent;
