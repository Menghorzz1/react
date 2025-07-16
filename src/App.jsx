// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import React, { useEffect } from "react";
import ReactDom from "react-dom";
import Heading from "./Components/Heading/Heading";
import Orderlist from "./Components/Unorder/Orderlist";
import Current from "./Components/TIme/Current";
import CurrentTime from "./Components/TIme/Current";
import Card from "./Components/Card/card-products";
import CardProduct from "./Components/Card/card-products";
import NavBar from "./Components/Layout/Navbar";
import Navbar from "./Components/Layout/Navbar";
import FooterProduct from "./Components/Layout/footer";

function App() {
  // const [count, setCount] = useState(0);
  const [products, setProucts] = React.useState([]);

  let getProucts = async () => {
    let result = await fetch("https://dummyjson.com/products").then(
      (response) => response.json()
    );
    setProucts(result.products);
  };

  useEffect(() => {
    getProucts();
  }, []);
  // console.log(Products);
  return (
    <>
      {/* <div>
        <Heading />
        <Orderlist />
      </div>
      <div>
        <CurrentTime />
      </div> */}
      {/*Header*/}
      {/* <Navbar /> */}
      {/*main*/}
      <main className="max-w-screen-lg mx-auto ">
        {/*product section*/}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <CardProduct
              title={product.title}
              description={product.description}
              thumbnail={product.thumbnail}
              price={product.price}
              category={product.category}
              rating={product.rating}
              stock={product.stock}
            />
          ))}
        </section>
      </main>
      {/*Footer*/}
      <FooterProduct />
    </>
  );
}

export default App;
