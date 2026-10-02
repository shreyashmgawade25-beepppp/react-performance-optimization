import React, { useEffect, useState } from "react";

export default function PerformancePanel() {
  const [renders, setRenders] = useState(0);

  useEffect(() => {
    setRenders((value) => value + 1);
  }, []);

  return (
    <section className="card performance-panel">
      <div className="section-title">
        <h2>Performance Notes</h2>
        <span>Lazy loaded component</span>
      </div>
      <ul>
        <li><b>Code splitting:</b> this panel is loaded with React.lazy and Suspense.</li>
        <li><b>React.memo:</b> product components avoid unnecessary re-renders.</li>
        <li><b>useMemo:</b> expensive product filtering is recalculated only when its dependencies change.</li>
        <li><b>useCallback:</b> the selection handler keeps a stable reference.</li>
        <li><b>Profiling:</b> use React DevTools Profiler to compare render times before and after optimization.</li>
      </ul>
      <p className="render-count">Panel mounted: {renders} time</p>
    </section>
  );
}