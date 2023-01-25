import Card from "../Card/Card";
import "./CardGrid.css";

export default function CardGrid({ products, loading }) {
  return (
    <div className="cardgrid">
      <div className="cardGridContainer">
        {loading && <span className="loading">loading...</span>}
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
