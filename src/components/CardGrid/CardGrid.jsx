import Card from "../Card/Card";
import "./CardGrid.css";

export default function CardGrid({ products, loading, setShowMenu }) {
  return (
    <div className="cardgrid" onClick={() => setShowMenu(false)}>
      <div className="cardGridContainer">
        {loading && <span className="loading">loading...</span>}
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
