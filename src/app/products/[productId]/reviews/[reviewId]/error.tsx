"use client";

interface iErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: iErrorProps) {
  return (
    <div className="text-red-500">
      {error.message}
      <button onClick={reset} className="ml-3">Reset Error</button>
    </div>
  );
}
