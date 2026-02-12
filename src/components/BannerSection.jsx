import b2 from "../assets/banner__2.webp";
import b1 from "../assets/banner__1.webp";

const BannerSection = () => {
  return (
    <div className='container pt-16'>
      <div className='grid sm:grid-cols-2 gap-8'>
        <div className='overflow-hidden rounded-lg'>
          <img 
          className='hover:scale-105 transition-transform'
        src= {b1}
          alt='banner'
          />
        </div>
        <div className='overflow-hidden rounded-lg'>
          <img 
          className='hover:scale-105 transition-transform'
          src={b2}
          alt='banner'
          />

      </div>
     </div>
    </div>
  )
}

export default BannerSection