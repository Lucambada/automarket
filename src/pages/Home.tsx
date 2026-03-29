import { motion } from "motion/react";
import { ShieldCheck, History, Eye, Shield, ArrowRight, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 text-tertiary mb-6">
              <ShieldCheck size={14} fill="currentColor" fillOpacity={0.2} />
              <span className="text-[11px] uppercase tracking-widest font-bold">Certificação Premium</span>
            </div>
            <h1 className="text-[3.5rem] font-black leading-[1.1] tracking-tighter text-on-surface mb-6">
              O Futuro da Compra e Venda de <span className="text-primary">Automóveis</span> em Portugal
            </h1>
            <p className="text-xl text-on-surface-variant font-medium mb-10 leading-relaxed max-w-xl">
              Segurança, Transparência e Confiança. O marketplace que protege o seu investimento com rigor e qualidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/marketplace"
                className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-[0px_24px_48px_rgba(0,78,159,0.15)] hover:bg-primary-container transition-all active:scale-95"
              >
                Explorar Viaturas
              </Link>
              <button className="px-8 py-4 bg-surface-container-low text-on-surface rounded-full font-bold text-lg hover:bg-slate-200 transition-all active:scale-95">
                Login / Registo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                alt="Luxury electric car"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Status Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[280px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</p>
                  <p className="text-sm font-bold text-on-surface">Viatura Verificada</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary/20"></div>
                </div>
                <div className="h-1.5 w-3/4 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full w-1/2 bg-primary/20"></div>
                </div>
                <p className="text-[9px] text-primary mt-2 font-bold uppercase tracking-widest">Garantia AutoMarket</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">Compromisso AutoMarket</span>
            <h2 className="text-4xl font-black text-on-surface mt-2">A Nossa Garantia de Qualidade</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rigor",
                desc: "O histórico de manutenção, quilometragem e sinistros é verificado minuciosamente. Transparência total em cada detalhe.",
                icon: <History className="text-primary" />,
                bg: "bg-blue-50"
              },
              {
                title: "Transparência",
                desc: "Acesso imediato a toda a genealogia do veículo. Sem letras pequenas, sem segredos. Confiança total em cada transação.",
                icon: <Eye className="text-tertiary" />,
                bg: "bg-cyan-50"
              },
              {
                title: "Segurança",
                desc: "Processos certificados garantem que a transferência de propriedade e o pagamento ocorram de forma segura e profissional.",
                icon: <Shield className="text-slate-600" />,
                bg: "bg-slate-100"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-8`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">Inventário Certificado</span>
              <h2 className="text-4xl font-black text-on-surface mt-2">Viaturas em Destaque</h2>
            </div>
            <Link to="/marketplace" className="text-primary font-bold flex items-center gap-2 hover:underline">
              Ver Todos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Porsche 911 Carrera",
                year: "2023",
                km: "12,400",
                price: "145.000€",
                ref: "#AM-992-PX",
                img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "BMW M4 Competition",
                year: "2022",
                km: "28,000",
                price: "89.500€",
                ref: "#AM-M4-022",
                img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Tesla Model S Plaid",
                year: "2024",
                km: "2,100",
                price: "112.900€",
                ref: "#AM-TS-PLAID",
                img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800"
              }
            ].map((car, i) => (
              <Link to="/vehicle/1" key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 relative">
                  <img
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={car.img}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-md flex items-center gap-1">
                    <ShieldCheck size={12} className="text-tertiary" fill="currentColor" fillOpacity={0.2} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Verificado</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold">{car.name}</h4>
                    <p className="text-sm text-on-surface-variant">{car.year} • {car.km} km</p>
                  </div>
                  <p className="text-xl font-black text-primary">{car.price}</p>
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ref: {car.ref}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.03] skew-x-[-20deg] translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-[3rem] font-black text-white leading-tight mb-8">
            A sua viatura merece a confiança do AutoMarket.
          </h2>
          <p className="text-xl text-blue-100 mb-12 opacity-90 max-w-2xl mx-auto">
            Junte-se à rede líder em gestão de ativos automóveis em Portugal. Certifique o seu veículo e aumente o seu valor de revenda.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl active:scale-95">
              Começar Agora
            </button>
            <button className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
