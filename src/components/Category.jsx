import { BiCategory } from "react-icons/bi"
import cat1 from "../assets/category__1.webp";
import cat2 from "../assets/category__2.webp";
import cat3 from "../assets/category__3.webp";
import cat4 from "../assets/category__4.webp";
import cat5 from "../assets/category__5.webp";
import cat6 from "../assets/category__6.webp";
import cat7 from "../assets/category__7.webp";
import CategoryCard from "./CategoryCard";


const data = [
    {
        id:0,
        name:"Fresh fruit",
        count:"9 products",
        img: cat1,
    },
    {
        id:1,
        name:"Fresh vegs",
        count:"8 products",
        img: cat2,
    },
    {
        id:2,
        name:"Canned Goods",
        count:"10 products",
        img: cat3,
    },
    {
        id:3,
        name:"Bread & Bakery",
        count:"12 products",
        img: cat4,
    },
    {
        id:4,
        name:"Fishes",
        count:"10 products",
        img: cat5,
    },
    {
        id:5,
        name:"Eggs & Diary",
        count:"7 products",
        img:  cat6,
    },
     {
        id:6,
        name:"Soft Drink",
        count:"5 products",
        img: cat6,
    },
     {
        id:7,
        name:"Eggs & Diary",
        count:"7 products",
        img: cat7,
    },
]


const Category = () => {
  return (
   <div className="container pt-16">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {data.map((el) => (
      <CategoryCard
        key={el.id}
        img={el.img}
        name={el.name}
        count={el.count}
      />
    ))}
  </div>
</div>

  )
}

export default Category