"use client";
import { useTRPC } from '../trpc/client';
const page=() => {
  const trpc = useTRPC();

  return (
    <div> 
      <button> click me</button>
      </div>
  );
};

export default page;