import { motion } from "motion/react";
import { ShieldCheck, Search, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { VEHICLES, fetchVehicles, Vehicle } from "../data/vehicles";

export default function Marketplace() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES);
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState("Todas as Marcas");
  const [maxPrice, setMaxPrice] = useState<number | "">(150000);
  const [minYear, setMinYear] = useState<number | "">(2010);
  const [maxKm, setMaxKm] = useState<number | "">(200000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  useEffect(() => {
    const loadVehicles = async () => {
      setLoading(true);
      const data = await fetchVehicles();
      setVehicles(data);
      setLoading(false);
    };
    loadVehicles();
  }, []);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const brandMatch = brand === "Todas as Marcas" || v.brand === brand;
      const priceMatch = v.price <= (maxPrice || 150000);
      const yearMatch = v.year >= (minYear || 0);
      const kmMatch = v.km <= (maxKm || 1000000);
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(v.type);
      return brandMatch && priceMatch && yearMatch && kmMatch && typeMatch;
    });
  }, [vehicles, brand, maxPrice, minYear, maxKm, selectedTypes]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setBrand("Todas as Marcas");
    setMaxPrice(150000);
    setMinYear(2010);
    setMaxKm(200000);
    setSelectedTypes([]);
  };

  return (
    <div className="flex pt-16 min-h-screen">
      {/* Sidebar Filters */}
      <aside className="hidden md:flex flex-col w-72 h-[calc(100vh-64px)] fixed left-0 bg-slate-50 border-r border-slate-100 p-6 overflow-y-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Filtros de Pesquisa</h2>
            <button
              onClick={clearFilters}
              className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"
            >
              <X size={10} /> Limpar
            </button>
          </div>

          {/* Brand Filter */}
          <div className="space-y-4 mb-8">
            <label className="block text-sm font-semibold text-on-surface-variant">Marca</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 p-3 shadow-sm cursor-pointer"
            >
              <option>Todas as Marcas</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Toyota</option>
              <option>Audi</option>
              <option>Porsche</option>
              <option>Tesla</option>
            </select>
          </div>

          {/* Price Slider */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-on-surface-variant">Preço Máximo</label>
              <span className="text-xs font-bold text-primary">€{(maxPrice || 0).toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="150000"
              step="5000"
              value={maxPrice || 150000}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Year and Mileage */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase">Ano Min.</label>
              <input
                type="number"
                value={minYear}
                onChange={(e) => setMinYear(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full bg-white border-none rounded-lg text-sm p-2 shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase">KM Max.</label>
              <input
                type="number"
                value={maxKm}
                onChange={(e) => setMaxKm(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full bg-white border-none rounded-lg text-sm p-2 shadow-sm"
              />
            </div>
          </div>

          {/* Type Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-on-surface-variant">Tipo de Viatura</label>
            <div className="flex flex-col gap-2">
              {["Ligeiro", "Carrinha", "SUV / 4x4"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-8 lg:p-12">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-primary mb-2 block">
                Seleção Exclusiva
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-on-surface">Marketplace Premium</h1>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-sm text-on-surface-variant max-w-xs">
                Explora a nossa frota curada de veículos com histórico de manutenção verificado e garantia de qualidade.
              </p>
              <p className="text-xs font-bold text-slate-400 mt-2">
                {filteredVehicles.length} veículos encontrados
              </p>
            </div>
          </div>
        </header>

        {/* Vehicle Grid */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-100 animate-pulse h-[450px] rounded-xl"></div>
            ))}
          </div>
        ) : filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredVehicles.map((car, i) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={car.img}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm">
                      <ShieldCheck size={14} className="text-tertiary" fill="currentColor" fillOpacity={0.2} />
                      <span className="text-[10px] font-black uppercase tracking-wider text-tertiary">
                        Viatura Verificada
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-on-surface mb-1">{car.name}</h3>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ref: #AM-{car.id}-{car.brand.substring(0,2).toUpperCase()}</p>
                    </div>
                    <span className="text-2xl font-black text-primary">€{car.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-4 py-4 mb-6 border-y border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Ano</span>
                      <span className="text-sm font-bold">{car.year}</span>
                    </div>
                    <div className="w-px h-8 bg-slate-100"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Quilometragem</span>
                      <span className="text-sm font-bold">{car.km.toLocaleString()} km</span>
                    </div>
                    <div className="w-px h-8 bg-slate-100"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Motor</span>
                      <span className="text-sm font-bold">{car.fuel}</span>
                    </div>
                  </div>
                  <Link
                    to={`/vehicle/${car.id}`}
                    className="block w-full py-4 bg-slate-100 hover:bg-primary hover:text-white rounded-full font-bold text-xs text-center uppercase tracking-widest transition-all"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <Filter size={48} className="text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhum veículo encontrado</h3>
            <p className="text-slate-500 mb-6">Tente ajustar os seus filtros para encontrar o que procura.</p>
            <button
              onClick={clearFilters}
              className="px-8 py-3 bg-primary text-white rounded-full font-bold text-sm"
            >
              Limpar Todos os Filtros
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

