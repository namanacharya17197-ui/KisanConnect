// Google OR-Tools CVRPTW Cold-Chain Fleet Telemetry & Routing
const FLEET = [
  {
    id: "REEFER-OD-01",
    name: "Tata 709 Reefer Cold Van",
    driver: "Bikash Mohanty",
    phone: "+91 98612-88190",
    capacityKg: 3500,
    currentLoadKg: 2450,
    tempCelsius: 4.8,
    targetTemp: "4°C - 6°C",
    status: "En Route to Farm 2 (Pipili)",
    statusBadge: "En Route",
    batterySolarPct: 94,
    fuelSavedLiters: 18.4,
    eta: "14 mins",
    currentWaypoint: "Pipili Toll Junction",
    schedule: [
      { stop: "Sakhigopal Regional Depot", time: "05:30 AM", status: "Completed", action: "Reefer Pre-Cooling" },
      { stop: "Patra Orchards (Farm 1)", time: "06:30 AM", status: "Completed", action: "Loaded 1,200kg Mangoes" },
      { stop: "Sahoo Banana Groves (Farm 2)", time: "07:15 AM", status: "Approaching", action: "Pickup 1,250kg Robusta" },
      { stop: "Bhubaneswar Metro Fulfillment", time: "09:45 AM", status: "Scheduled", action: "Bulk Buyer Drop-off" }
    ]
  },
  {
    id: "SOLAR-OD-02",
    name: "Mahindra Furio Solar Reefer",
    driver: "Subhashree Jena",
    phone: "+91 94370-11245",
    capacityKg: 4200,
    currentLoadKg: 3900,
    tempCelsius: 6.2,
    targetTemp: "6°C - 8°C",
    status: "Rerouting Overflow to Ecofrost Buffer",
    statusBadge: "Dynamic Reroute",
    batterySolarPct: 88,
    fuelSavedLiters: 22.1,
    eta: "28 mins",
    currentWaypoint: "Khordha Bypass NH-16",
    schedule: [
      { stop: "Khordha Krishi Mandi Buffer", time: "05:00 AM", status: "Completed", action: "Loaded 2,100kg Tomatoes" },
      { stop: "Pradhan FPO Storage", time: "06:45 AM", status: "Completed", action: "Loaded 1,800kg Pulses" },
      { stop: "Ecofrost Solar Micro-Cold Room", time: "08:30 AM", status: "Approaching", action: "Offload 1,000kg Overflow" },
      { stop: "Cuttack Wholesale Link Hub", time: "11:00 AM", status: "Scheduled", action: "Final Distribution" }
    ]
  },
  {
    id: "EV-REEFER-03",
    name: "Ashok Leyland Bada Dost EV Cold",
    driver: "Debasish Rout",
    phone: "+91 97761-44902",
    capacityKg: 2800,
    currentLoadKg: 1600,
    tempCelsius: 3.5,
    targetTemp: "2°C - 4°C",
    status: "Optimizing Multi-drop Route",
    statusBadge: "Optimizing",
    batterySolarPct: 96,
    fuelSavedLiters: 28.0,
    eta: "8 mins",
    currentWaypoint: "Puri Marine Drive Link",
    schedule: [
      { stop: "Nimapada Cold Cluster", time: "06:00 AM", status: "Completed", action: "Loaded 1,600kg Grapes" },
      { stop: "Konark Agro Hub", time: "07:30 AM", status: "Approaching", action: "Scheduled Pickup" },
      { stop: "Bhubaneswar Airport Air-Cargo", time: "10:15 AM", status: "Scheduled", action: "Export Transfer" }
    ]
  }
];

window.FLEET = FLEET;
