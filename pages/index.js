import Header from "@/components/layout/header";
import ProductTile from "@/components/product-tile";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {loading ? (
          <div className="min-h-screen w-full flex justify-center items-center">
            <Circles
              visible={true}
              height={"120"}
              width={"120"}
              color="rgb(196,196,196)"
            />
          </div>
        ) : (
          <div className="min-h-[80vh] grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {
            products && products.length ? products.map((productItem, index) => {
              return (
                <ProductTile key={index} product={productItem}/>
              )
            }) : null
          }
          </div>
        )}
      </div>
    </div>
  );
}
