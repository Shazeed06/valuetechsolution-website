import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section min-h-[60vh]">
      <div className="container-x text-center">
        <p className="font-display text-8xl text-carbon-950">404</p>
        <h1 className="heading-md mt-4">This page wandered off.</h1>
        <p className="mx-auto mt-3 max-w-md text-carbon-400">
          The link you followed may be broken, or the page may have been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Home size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}
