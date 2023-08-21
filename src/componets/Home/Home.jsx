// home.jsx
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/itemListContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="product-card-container">
        <Products />
      </div>
    </>
  );
};

export default Home;
