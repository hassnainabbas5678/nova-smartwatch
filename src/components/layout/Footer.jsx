import { product } from "../../data/product";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10">
      <div className="container py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-tight">{product.name}</div>
            <div className="text-sm text-ice-200/75 mt-1 max-w-xl">
              Template-ready single-product landing page. Frontend deploys on Netlify;
              backend plugs in later for production orders.
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-ice-200/75">
            <a className="hover:text-ice-100 transition-colors" href="#features">
              Features
            </a>
            <a className="hover:text-ice-100 transition-colors" href="#specs">
              Specs
            </a>
            <a className="hover:text-ice-100 transition-colors" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-ice-100 transition-colors" href="#reviews">
              Reviews
            </a>
            <a className="hover:text-ice-100 transition-colors" href="#faq">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ice-200/70 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {product.name}. All rights reserved.</div>
          <div className="text-ice-200/60">
            Demo template • Replace assets + connect API to sell in production.
          </div>
        </div>
      </div>
    </footer>
  );
}
