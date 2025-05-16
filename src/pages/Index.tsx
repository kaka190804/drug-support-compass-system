
import { Suspense } from "react";
import Home from "./Home";

const Index = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <Home />
    </Suspense>
  );
};

export default Index;
