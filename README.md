# React Performance Optimization

This project demonstrates practical React performance optimization techniques.

## Assignment requirements covered

1. **Code splitting**  
   `PerformancePanel` is loaded with `React.lazy()` and `Suspense`.

2. **React.memo**  
   `ProductList` and `ProductCard` are memoized to avoid unnecessary renders.

3. **useMemo**  
   Filtering a 1000-item dataset is memoized and runs only when `search` or `category` changes.

4. **useCallback**  
   The product selection handler has a stable function reference.

5. **Performance profiling**  
   The project includes a performance notes panel. For profiling, run the project and use React Developer Tools → Profiler to record interactions and compare render durations.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```
