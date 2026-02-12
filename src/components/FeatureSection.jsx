import { FiPhoneCall } from "react-icons/fi"
import { LiaGiftSolid, LiaMoneyBillWaveSolid, LiaShippingFastSolid } from "react-icons/lia"
import FeatureCard from "./FeatureCard";

const data = [
    {
        title:"Free Shipping",
        icon:<LiaShippingFastSolid/>
    },
     {
        title:"Best Price and Guarantee",
        icon:<LiaMoneyBillWaveSolid/>
    },
     {
        title:"Free curbles Pickup",
        icon:<LiaGiftSolid/>
    },
     {
        title:"Support 24",
        icon:<FiPhoneCall/>
    },
]

const FeatureSection = () => {
  return (
    <div className='container pt-16'>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  {data.map((e1) => (
    <FeatureCard
      key={e1.title}
      icon={e1.icon}
      title={e1.title}
    />
  ))}
</div>

    </div>
  )
}

export default FeatureSection