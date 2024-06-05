export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2 style={{color: 'purple'}}>Product Features (specific layout)</h2>
    </>
  );
}

// this specific layout applies to the route .../products/5 
// and sube-routes like .../products/5/reviews/22
