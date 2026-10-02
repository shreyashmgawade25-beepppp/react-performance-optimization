import React, { Suspense, lazy, useCallback, useMemo, useState } from "react";
import ProductList from "./components/ProductList";

const PerformancePanel = lazy(() => import("./components/PerformancePanel"));

const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Technology", "Books", "Fitness", "Home"][i % 4],
  price: 100 + (i * 37) % 1900
}));

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showPanel, setShowPanel] = useState(false);

  // useMemo prevents filtering/sorting 1000 products on unrelated renders.
  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase();

    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(query);
      const matchesCategory =
        category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // useCallback keeps the handler reference stable for memoized children.
  const handleSelect = useCallback((product) => {
    alert(`${product.name} selected`);
  }, []);

  return (
    <div className="app">
      <header className="hero">
        <span className="badge">REACT PERFORMANCE</span>
        <h1>Performance Optimization</h1>
        <p>
          A practical React app demonstrating memoization, code splitting and
          render optimization.
        </p>
      </header>

      <main className="container">
        <section className="controls card">
          <div>
            <label htmlFor="search">Search products</label>
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Try Product 25..."
            />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Technology</option>
              <option>Books</option>
              <option>Fitness</option>
              <option>Home</option>
            </select>
          </div>

          <button onClick={() => setShowPanel((value) => !value)}>
            {showPanel ? "Hide" : "Load"} Performance Panel
          </button>
        </section>

        <section className="stats">
          <div className="stat card">
            <strong>{filteredProducts.length}</strong>
            <span>Matching products</span>
          </div>
          <div className="stat card">
            <strong>1000</strong>
            <span>Products in dataset</span>
          </div>
          <div className="stat card">
            <strong>3</strong>
            <span>Optimization techniques</span>
          </div>
        </section>

        <section className="card">
          <div className="section-title">
            <h2>Optimized Product List</h2>
            <span>React.memo + useMemo</span>
          </div>
          <ProductList products={filteredProducts} onSelect={handleSelect} />
        </section>

        {showPanel && (
          <Suspense fallback={<div className="card">Loading performance panel...</div>}>
            <PerformancePanel />
          </Suspense>
        )}
      </main>
    </div>
  );
}