import { supabase } from "../lib/supabase";

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  km: number;
  fuel: string;
  type: string;
  img: string;
  description: string;
  specs: { label: string; value: string }[];
  history: { date: string; title: string; desc: string; color: string }[];
  gallery: string[];
}

export const VEHICLES: Vehicle[] = [
  // ... (keep static data as fallback)
  {
    id: "1",
    name: "BMW 320d Touring",
    brand: "BMW",
    price: 42500,
    year: 2021,
    km: 45200,
    fuel: "Diesel",
    type: "Carrinha",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    description: "Este BMW 320d Touring combina a versatilidade de uma carrinha com a dinâmica de condução lendária da marca bávara. Equipado com o pack M-Sport e sistema de navegação profissional.",
    specs: [
      { label: "Motorização", value: "2.0 Diesel 4 Cil." },
      { label: "Potência", value: "190 HP" },
      { label: "Transmissão", value: "Automática Steptronic" },
      { label: "Consumo", value: "4.8 L/100km" },
      { label: "Emissões CO2", value: "125 g/km" },
      { label: "Aceleração", value: "7.1s (0-100)" }
    ],
    history: [
      { date: "10 MAR 2024", title: "Revisão Oficial", desc: "Manutenção BMW Service - 45,000 km", color: "bg-primary" },
      { date: "15 JAN 2023", title: "Inspeção Periódica", desc: "Aprovado sem anotações", color: "bg-tertiary" },
      { date: "20 MAI 2021", title: "Primeiro Registo", desc: "Matrícula Inicial e Ativação de Garantia", color: "bg-slate-300" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1556122071-e404be7457ed?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1556122071-e404be7457ed?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1556122071-e404be7457ed?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "2",
    name: "Mercedes C220d",
    brand: "Mercedes-Benz",
    price: 48900,
    year: 2022,
    km: 28500,
    fuel: "Híbrido",
    type: "Ligeiro",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600",
    description: "O novo Classe C redefine o luxo no seu segmento. Com tecnologia híbrida suave de 48V, oferece um equilíbrio perfeito entre performance e eficiência ambiental.",
    specs: [
      { label: "Motorização", value: "2.0 Diesel Hybrid" },
      { label: "Potência", value: "200 HP + 20 HP EQ" },
      { label: "Transmissão", value: "9G-TRONIC" },
      { label: "Consumo", value: "4.4 L/100km" },
      { label: "Emissões CO2", value: "116 g/km" },
      { label: "Aceleração", value: "7.3s (0-100)" }
    ],
    history: [
      { date: "05 FEV 2024", title: "Atualização Software", desc: "Update Sistema MBUX v2.4", color: "bg-primary" },
      { date: "12 OUT 2022", title: "Primeiro Registo", desc: "Matrícula Inicial e Entrega ao Cliente", color: "bg-slate-300" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "3",
    name: "Toyota RAV4 Hybrid",
    brand: "Toyota",
    price: 39200,
    year: 2021,
    km: 52100,
    fuel: "Híbrido",
    type: "SUV / 4x4",
    img: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&q=80&w=600",
    description: "O Toyota RAV4 Hybrid é o SUV ideal para famílias que procuram fiabilidade e baixos consumos. Sistema de tração integral inteligente e amplo espaço interior.",
    specs: [
      { label: "Motorização", value: "2.5 Híbrido" },
      { label: "Potência", value: "218 HP" },
      { label: "Transmissão", value: "e-CVT" },
      { label: "Consumo", value: "5.3 L/100km" },
      { label: "Emissões CO2", value: "120 g/km" },
      { label: "Aceleração", value: "8.4s (0-100)" }
    ],
    history: [
      { date: "20 JAN 2024", title: "Revisão Híbrida", desc: "Check-up Bateria e Sistema Elétrico", color: "bg-primary" },
      { date: "15 MAR 2021", title: "Primeiro Registo", desc: "Matrícula Inicial e Entrega", color: "bg-slate-300" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "4",
    name: "Audi A4 Avant S-Line",
    brand: "Audi",
    price: 45100,
    year: 2022,
    km: 12800,
    fuel: "Gasolina",
    type: "Carrinha",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600",
    description: "A Audi A4 Avant combina elegância desportiva com funcionalidade premium. Versão S-Line com suspensão desportiva e cockpit virtual da Audi.",
    specs: [
      { label: "Motorização", value: "2.0 TFSI" },
      { label: "Potência", value: "150 HP" },
      { label: "Transmissão", value: "S-tronic 7 vel." },
      { label: "Consumo", value: "6.2 L/100km" },
      { label: "Emissões CO2", value: "141 g/km" },
      { label: "Aceleração", value: "9.2s (0-100)" }
    ],
    history: [
      { date: "12 MAI 2022", title: "Primeiro Registo", desc: "Matrícula Inicial e Preparação", color: "bg-slate-300" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: "5",
    name: "Porsche 911 Carrera S",
    brand: "Porsche",
    price: 129500,
    year: 2019,
    km: 34000,
    fuel: "Gasolina",
    type: "Ligeiro",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
    description: "O ícone dos desportivos. Este 911 Carrera S (992) oferece uma experiência de condução inigualável, com performance de pista e conforto para o dia-a-dia.",
    specs: [
      { label: "Motorização", value: "3.0 Boxer 6 Cil. Turbo" },
      { label: "Potência", value: "450 HP" },
      { label: "Transmissão", value: "PDK 8 vel." },
      { label: "Consumo", value: "10.1 L/100km" },
      { label: "Emissões CO2", value: "227 g/km" },
      { label: "Aceleração", value: "3.7s (0-100)" }
    ],
    history: [
      { date: "15 NOV 2023", title: "Revisão Porsche", desc: "Manutenção Porsche Center - 30,000 km", color: "bg-primary" },
      { date: "10 JUN 2019", title: "Primeiro Registo", desc: "Matrícula Inicial e Entrega", color: "bg-slate-300" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: "6",
    name: "Tesla Model 3 LR",
    brand: "Tesla",
    price: 38500,
    year: 2020,
    km: 62000,
    fuel: "Elétrico",
    type: "Ligeiro",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600",
    description: "O Tesla Model 3 Long Range oferece uma autonomia líder na classe e performance eletrizante. Equipado com Autopilot e interior minimalista premium.",
    specs: [
      { label: "Motorização", value: "Dual Motor AWD" },
      { label: "Potência", value: "498 HP" },
      { label: "Transmissão", value: "Direta" },
      { label: "Consumo", value: "14.7 kWh/100km" },
      { label: "Emissões CO2", value: "0 g/km" },
      { label: "Aceleração", value: "4.4s (0-100)" }
    ],
    history: [
      { date: "12 JAN 2024", title: "Check-up Bateria", desc: "Saúde da Bateria: 94%", color: "bg-primary" },
      { date: "15 SET 2020", title: "Primeiro Registo", desc: "Matrícula Inicial e Entrega", color: "bg-slate-300" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=400"
    ]
  }
];

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    if (!data || data.length === 0) return VEHICLES;

    return data.map((v: any) => ({
      ...v,
      id: v.id.toString(),
    }));
  } catch (error) {
    console.error('Error fetching vehicles from Supabase:', error);
    return VEHICLES;
  }
};

export const fetchVehicleById = async (id: string): Promise<Vehicle | null> => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      // Fallback to static data if not found in Supabase
      return VEHICLES.find(v => v.id === id) || null;
    }

    return {
      ...data,
      id: data.id.toString(),
    };
  } catch (error) {
    console.error(`Error fetching vehicle ${id} from Supabase:`, error);
    return VEHICLES.find(v => v.id === id) || null;
  }
};
