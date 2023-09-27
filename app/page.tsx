
export default function Home() {
  return (
      <div className="relative w-full z-0">
          <video autoPlay loop muted className="object-cover w-full h-screen">
              <source src="../assets/sky.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className="absolute w-full top-0 left-0 flex justify-center items-center">
              <p className="text-blue-300 text-2xl font-bold mt-40 text-center">Welcome to our Astronomy Blog, <br/> where the mysteries of the cosmos come to life! <br/> At Nebula Dreamers, we are more than just stargazers;
                  <br /> We are a passionate team of space enthusiasts <br /> dedicated to sharing the wonders of the universe with you.</p>
          </div>
      </div>
  )
}
