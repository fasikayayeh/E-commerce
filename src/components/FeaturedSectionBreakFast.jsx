import p1 from "../assets/product__1.webp";
import p2 from "../assets/product__2.webp";
import p3 from "../assets/product__3.webp";
import p4 from "../assets/product__4.webp";
import ProductCard from "./ProductCard";
import ftr2 from "../assets/feature__2.webp";

const data = [
  {
    id: 0,
    name: "Dried Mango",
    price: 500,
    img: p1,
  },
  {
    id: 1,
    name: "Crunchy Crisps",
    price: 300,
    img: p2,
  },
  {
    id: 2,
    name: "Canned Goods",
    price: 200,
    img: p3,
  },
  {
    id: 3,
    name: "Bread & Bakery",
    price: 100,
    img: p4,
  },
];

const FeaturedSectionBreakFast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">
           Breakfast and Diary
          </h3>
          <p className="text-gray-500 mt-2"></p>
            Buy best quality breakfast online from big-basket stop near you
        </div>



        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Egges and diary</button>
          <button className="text-gray-600 hover:text-green-900">
           Pizza
          </button>
          <button className="text-gray-600 hover:text-green-900">
            Snacks
          </button>
        </div>
      </div>




      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        
        <div>
          <img
            className="w-full h-full object-cover"
            src={ftr2}
            alt="banner"
          />
        </div>

        {data.map((item) => (
          <ProductCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSectionBreakFast;
