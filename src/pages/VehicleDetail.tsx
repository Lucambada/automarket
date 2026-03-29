import { motion } from "motion/react";
import { ShieldCheck, ShoppingCart, Calendar, History, Wrench, FileText, Link as LinkIcon, Shield, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { VEHICLES, fetchVehicleById, Vehicle, fetchVehicles } from "../data/vehicles";

export default function VehicleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      if (id) {
        const [v, all] = await Promise.all([
          fetchVehicleById(id),
          fetchVehicles()
        ]);
        setVehicle(v);
        setVehicles(all);
      }
      setLoading(false);
    };
    loadData();
  }, [id]);

  const vehicleIndex = useMemo(() => vehicles.findIndex(v => v.id === id), [vehicles, id]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 px-6 text-center animate-pulse">
        <div className="h-12 w-64 bg-slate-100 mx-auto mb-8 rounded-xl"></div>
        <div className="h-96 w-full max-w-4xl bg-slate-100 mx-auto rounded-xl"></div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Veículo não encontrado</h1>
        <Link to="/marketplace" className="text-primary font-bold hover:underline">
          Voltar ao Marketplace
        </Link>
      </div>
    );
  }

  const prevVehicle = vehicles[vehicleIndex - 1];
  const nextVehicle = vehicles[vehicleIndex + 1];

  return (
    <div className="pt-24 pb-20 px-6 max-w-screen-2xl mx-auto">
      {/* Navigation & Breadcrumb */}
      <div className="mb-8 flex justify-between items-center">
        <Link to="/marketplace" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} />
          Marketplace
        </Link>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/vehicle/${prevVehicle.id}`)}
            disabled={!prevVehicle}
            className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => navigate(`/vehicle/${nextVehicle.id}`)}
            disabled={!nextVehicle}
            className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Header Section */}
      <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-tertiary text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">
              Viatura Verificada
            </span>
            <span className="text-slate-400 text-sm font-medium">Ref: AM-{vehicle.id}-{vehicle.brand.substring(0, 2).toUpperCase()}</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-2">{vehicle.name}</h1>
          <p className="text-xl text-on-surface-variant font-medium">Model Year {vehicle.year} • {vehicle.km.toLocaleString()} km • {vehicle.fuel}</p>
        </div>
        <div className="text-right">
          <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-1">Current Valuation</div>
          <div className="text-5xl font-black tracking-tight text-primary">€{vehicle.price.toLocaleString()}</div>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Gallery & Description */}
        <div className="lg:col-span-7 space-y-12">
          {/* Gallery */}
          <section>
            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[16/9] mb-4">
              <img
                className="w-full h-full object-cover"
                src={vehicle.img}
                alt={vehicle.name}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {vehicle.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-lg overflow-hidden bg-slate-100 aspect-video cursor-pointer hover:opacity-80 transition-all ${
                    i === 0 ? "border-2 border-primary" : ""
                  } relative`}
                >
                  <img className="w-full h-full object-cover" src={img} alt={`Gallery ${i}`} referrerPolicy="no-referrer" />
                  {i === 3 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg">
                      +12
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Description */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Descrição Detalhada</h2>
            <div className="text-on-surface-variant leading-relaxed space-y-4 max-w-2xl">
              <p>{vehicle.description}</p>
              <p>
                Esta viatura foi integralmente inspecionada pela nossa equipa técnica,
                garantindo que cada quilómetro percorrido e cada intervenção técnica são registos verificados e fidedignos.
              </p>
            </div>
          </section>

          {/* Specifications */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Especificações Técnicas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 p-8 rounded-xl bg-surface-container-low">
              {vehicle.specs.map((spec, i) => (
                <div key={i}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {spec.label}
                  </span>
                  <span className="text-lg font-semibold text-on-surface">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Actions & Blockchain */}
        <div className="lg:col-span-5 space-y-8">
          {/* Purchase Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <button className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg active:scale-95 transition-all mb-4 flex items-center justify-center gap-3">
              <ShoppingCart size={20} />
              Comprar Agora
            </button>
            <button className="w-full bg-slate-100 text-on-surface py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-3 hover:bg-slate-200">
              <Calendar size={20} />
              Agendar Test Drive
            </button>
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
              <Shield size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Transação Segura e Protegida</span>
            </div>
          </div>

          {/* Certification Badge */}
          <section className="bg-blue-50 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-primary/10 transition-transform group-hover:scale-110">
              <ShieldCheck size={120} fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
              <ShieldCheck size={20} />
              Garantia de Qualidade
            </h3>
            <div className="space-y-4 relative z-10">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60 block mb-1">
                  Estado da Viatura
                </span>
                <span className="bg-white/50 px-3 py-1 rounded text-xs font-bold text-primary uppercase block w-fit">
                  Excelente / Verificado
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60 block mb-1">
                  Certificado de Inspeção
                </span>
                <span className="bg-white/50 px-3 py-1 rounded text-xs font-bold text-primary block w-fit">#AM-CERT-2024-001</span>
              </div>
              <div className="pt-4 border-t border-primary/10">
                <p className="text-xs text-primary/80 leading-relaxed font-medium">
                  Esta viatura possui um relatório técnico completo que assegura a integridade de todos os dados técnicos e
                  históricos.
                </p>
              </div>
            </div>
          </section>

          {/* History Timeline */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-on-surface">Histórico de Manutenção</h3>
            <div className="space-y-0">
              {vehicle.history.map((item, i) => (
                <div key={i} className="relative pl-8 pb-8 border-l-2 border-slate-100 last:border-0 last:pb-0">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${item.color} ring-4 ring-white`}></div>
                  <div>
                    <span className={`text-[10px] font-extrabold block ${item.color.replace("bg-", "text-")}`}>
                      {item.date}
                    </span>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant mb-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

