import React from "react";

const ProductCard = React.memo(function ProductCard({ product, onSelect }) {
  return (
    <article className="product" onClick={() => onSelect(product)}>
      <div className="product-number">{product.id}</div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
      </div>
      <strong>₹{product.price}</strong>
    </article>
  );
});

function ProductList({ products, onSelect }) {
  return (
    <div className="product-list">
      {products.slice(0, 100).map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
      {products.length > 100 && (
        <p className="hint">Showing first 100 matching results for smooth rendering.</p>
      )}
      {products.length === 0 && <p className="hint">No products found.</p>}
    </div>
  );
}

export default React.memo(ProductList);