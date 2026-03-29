import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="flex justify-between items-center h-16 px-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary">
            AutoChain
          </Link>
          {!isAdmin && (
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/marketplace"
                className={`text-sm font-bold tracking-tight pb-1 border-b-2 transition-colors ${
                  location.pathname === "/marketplace"
                    ? "text-primary border-primary"
                    : "text-slate-500 border-transparent hover:text-primary"
                }`}
              >
                Marketplace
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-slate-600 hover:text-primary text-sm font-medium transition-colors">
            Login
          </button>
          <Link
            to="/admin"
            className="px-5 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-sm hover:bg-primary-container transition-all active:scale-95 flex items-center gap-2"
          >
            <User size={16} />
            {isAdmin ? "Admin Console" : "Profile"}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-12 border-t bg-white/50 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-black tracking-tighter text-primary mb-2">AutoChain</span>
          <p className="text-[11px] uppercase tracking-widest font-bold text-slate-400 text-center md:text-left">
            © 2024 AutoChain Ledger. Secure Blockchain Vehicle Management.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Security Architecture", "Privacy Policy", "Node Status", "API Documentation"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[11px] uppercase tracking-widest font-bold text-slate-500 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
