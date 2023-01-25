import { useEffect, useState } from "react";
import CardGrid from "../../components/CardGrid/CardGrid";
import ChartModel from "../../components/ChartModel/ChartModel";
import NavBar from "../../components/NavBar/NavBar";

import "./main.css";

const Main = () => {
  //application states-------
  const [products, setProducts] = useState([]);
  //current products are the products we want to display based on current selected category
  const [currentProducts, setCurrentProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  const [showMenu, setShowMenu] = useState(false);

  //local states-------------
  const [showChart, setShowChart] = useState(false);
  const [loading, setloading] = useState(false);

  //to fetch all products and categories
  useEffect(() => {
    setloading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCurrentProducts(data);
        setProducts(data);
        setloading(false);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //update current displayed products with change in selected category
  useEffect(() => {
    if (currentCategory === "all") {
      setCurrentProducts(products);
    } else {
      const newproducts = products.filter(
        (product) => product.category === currentCategory
      );
      setCurrentProducts(newproducts);
    }
  }, [currentCategory, products]);

  return (
    <div className="mainContainer">
      {showChart && (
        <ChartModel
          setChart={setShowChart}
          products={products}
          categories={categories}
        />
      )}
      <NavBar
        setcatagory={setCurrentCategory}
        categories={categories}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <CardGrid
        products={currentProducts}
        loading={loading}
        setShowMenu={setShowMenu}
      />
      <button className="floatingbtn" onClick={() => setShowChart(true)}>
        Analyse
      </button>
    </div>
  );
};

export default Main;
