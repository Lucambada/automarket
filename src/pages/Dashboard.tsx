import { motion } from "motion/react";
import {
  LayoutDashboard,
  Car,
  Users,
  BadgeCheck,
  Wallet,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  Plus,
  TrendingUp,
  Activity,
  AlertCircle,
  MoreVertical
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col p-4 space-y-2 h-screen w-64 fixed left-0 top-0 border-r bg-slate-50 tonal-shift z-40">
        <div className="mb-8 px-2 py-4">
          <span className="text-xl font-bold text-primary tracking-tighter">AutoMarket</span>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              A
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary">Admin Console</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Acesso Verificado</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { name: "Dashboard", icon: <LayoutDashboard size={20} />, active: true },
            { name: "Gestão de Viaturas", icon: <Car size={20} /> },
            { name: "Gestão de Utilizadores", icon: <Users size={20} /> },
            { name: "Gestão de Colaboradores", icon: <BadgeCheck size={20} /> },
            { name: "KPL Auditoria", icon: <Wallet size={20} /> }
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? "bg-white text-primary shadow-sm"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              {item.icon}
              <span className="text-sm font-semibold tracking-wide">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-slate-200 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-900 transition-all">
            <HelpCircle size={20} />
            <span className="text-sm font-semibold">Support</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-red-600 transition-all">
            <LogOut size={20} />
            <span className="text-sm font-semibold">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 flex-1 flex flex-col">
        {/* Header */}
        <header className="fixed top-0 right-0 left-0 md:left-64 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-16 px-6 flex justify-between items-center">
          <h1 className="text-xl font-extrabold tracking-tight text-on-surface">Painel Administrativo - Visão Geral</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-slate-50 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium blue-shadow active:scale-95 transition-all">
              <Plus size={16} />
              <span>Novo Registro</span>
            </button>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="mt-16 p-8 space-y-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Viaturas", value: "1,284", trend: "+12.5%", icon: <Car />, color: "text-primary" },
              { label: "Vendas do Mês", value: "€450.2k", trend: "+8.2%", icon: <Wallet />, color: "text-tertiary" },
              { label: "Utilizadores Ativos", value: "3,902", trend: "Estável", icon: <Users />, color: "text-slate-600" },
              { label: "Alertas de Sistema", value: "3", trend: "Ação Requerida", icon: <Activity />, color: "text-red-500", alert: true }
            ].map((metric, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl blue-shadow flex flex-col justify-between group hover:bg-white transition-colors ${
                  metric.alert ? "bg-red-50 border border-red-100" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-lg ${metric.color} bg-opacity-10`}>{metric.icon}</div>
                  <span
                    className={`text-xs font-bold flex items-center gap-1 ${
                      metric.alert ? "text-red-500 animate-pulse" : "text-tertiary"
                    }`}
                  >
                    {!metric.alert && <TrendingUp size={12} />}
                    {metric.trend}
                  </span>
                </div>
                <div className="mt-4">
                  <span className={`block text-4xl font-black tracking-tighter ${metric.color}`}>{metric.value}</span>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Sales */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-on-surface">Vendas Recentes</h2>
                <a className="text-xs font-bold text-primary hover:underline" href="#">
                  Ver Todos
                </a>
              </div>
              <div className="overflow-hidden bg-white rounded-xl blue-shadow">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      {["ID Viatura", "Preço", "Data", "Estado", ""].map((th) => (
                        <th key={th} className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-500">
                          {th}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: "#AM-7721", price: "€32,500", date: "Out 24, 2023", status: "Concluído", statusColor: "bg-tertiary" },
                      { id: "#AM-8104", price: "€18,900", date: "Out 24, 2023", status: "Pendente", statusColor: "bg-primary" },
                      { id: "#AM-5592", price: "€44,000", date: "Out 23, 2023", status: "Concluído", statusColor: "bg-tertiary" },
                      { id: "#AM-1029", price: "€12,250", date: "Out 22, 2023", status: "Concluído", statusColor: "bg-tertiary" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-sm text-primary">{row.id}</td>
                        <td className="px-6 py-4 font-semibold">{row.price}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{row.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 ${row.statusColor} bg-opacity-10 ${row.statusColor.replace(
                              "bg-",
                              "text-"
                            )} text-[10px] font-bold uppercase rounded`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${row.statusColor}`}></span> {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-on-surface">Atividade do Sistema</h2>
                <span className="text-[10px] font-black bg-primary text-white px-2 py-0.5 rounded uppercase">Live</span>
              </div>
              <div className="bg-white p-6 rounded-xl blue-shadow relative overflow-hidden">
                <div className="absolute left-9 top-8 bottom-8 w-[1px] bg-slate-100"></div>
                <ul className="space-y-6 relative">
                  {[
                    {
                      user: "A",
                      title: "Admin adicionou BMW 320d",
                      time: "Agora mesmo",
                      color: "bg-primary"
                    },
                    {
                      user: "U",
                      title: "Utilizador 123 comprou Toyota",
                      time: "Há 12 minutos",
                      color: "bg-tertiary"
                    },
                    {
                      user: <Activity size={12} />,
                      title: "Configuração de Sistema Atualizada",
                      time: "Há 2 horas",
                      color: "bg-slate-200",
                      isIcon: true
                    },
                    {
                      user: <AlertCircle size={12} />,
                      title: "Tentativa de Acesso Não Autorizado",
                      hash: "IP: 192.168.1.XX",
                      time: "Há 4 horas",
                      color: "bg-red-100",
                      isIcon: true,
                      isError: true
                    }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div
                        className={`z-10 h-6 w-6 rounded-full ${item.color} flex items-center justify-center text-[10px] font-bold ${
                          item.isIcon ? "text-slate-500" : "text-white"
                        } ${item.isError ? "text-red-500" : ""}`}
                      >
                        {item.user}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${item.isError ? "text-red-600" : "text-on-surface"}`}>
                          {item.title}
                        </p>
                        {item.hash && (
                          <p className={`text-[10px] font-mono mt-1 uppercase ${item.isError ? "text-red-400" : "text-slate-400"}`}>
                            {item.hash}
                          </p>
                        )}
                        <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full py-2 bg-slate-50 text-[11px] font-bold uppercase tracking-widest text-slate-500 rounded-lg hover:bg-slate-100 transition-colors">
                  Carregar Mais Auditoria
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
