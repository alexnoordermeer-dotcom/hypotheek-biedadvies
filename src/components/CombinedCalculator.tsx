import { useState, useMemo } from "react";
import { Calculator, Gavel, TrendingUp, ArrowRight, CheckCircle, Info, Link, Home } from "lucide-react";

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatEuro(n: number) {
  return "€ " + Math.round(n).toLocaleString("nl-NL");
}

function calcMaxMortgage(income: number, partnerIncome: number, debts: number, isStarter: boolean): {
  maxMortgage: number;
  maxMortgageNHG: number;
  monthlyGross: number;
  monthlyNet: number;
  nhgApplicable: boolean;
  starterExemption: number;
  scenarios: { period: string; rate: number; gross: number; net: number; totalInterest: number }[];
} {
  // Nibud 2026 simplified: ~4.5x gross annual income minus debts
  const totalIncome = income + partnerIncome;
  const baseMax = totalIncome * 4.5 - debts;
  const nhgLimit = 470000;
  const nhgApplicable = baseMax <= nhgLimit;

  const scenarios = [
    { period: "1 jaar vast", rate: 3.55 },
    { period: "5 jaar vast", rate: 3.65 },
    { period: "10 jaar vast", rate: 3.85 },
    { period: "15 jaar vast", rate: 4.00 },
    { period: "20 jaar vast", rate: 4.10 },
    { period: "30 jaar vast", rate: 4.35 },
  ].map((s) => {
    const gross = (baseMax * (s.rate / 100)) / 12;
    const net = gross * 0.72; // simplified: ~28% tax benefit
    const totalInterest = baseMax * (s.rate / 100) * 30;
    return { ...s, gross: Math.round(gross), net: Math.round(net), totalInterest: Math.round(totalInterest) };
  });

  const defaultScenario = scenarios.find((s) => s.period === "10 jaar vast")!;
  const starterExemption = isStarter ? Math.min(baseMax, 525000) * 0.02 : 0; // 2% startersvrijstelling until 525k

  return {
    maxMortgage: Math.round(Math.max(0, baseMax)),
    maxMortgageNHG: Math.round(Math.min(baseMax, nhgLimit)),
    monthlyGross: defaultScenario.gross,
    monthlyNet: defaultScenario.net,
    nhgApplicable,
    starterExemption: Math.round(starterExemption),
    scenarios,
  };
}

function calcBidAdvice(
  askingPrice: number,
  woz: number,
  maxMortgage: number,
  overwaarde: number,
): {
  maxBid: number;
  recommendedBid: number;
  strategy: "onderbieden" | "gelijk" | "overbieden";
  overbiedenPct: number;
  marketHeat: string;
  monthlyExtra: number;
} {
  const totalBudget = maxMortgage + overwaarde;
  const ratio = askingPrice / woz;

  let strategy: "onderbieden" | "gelijk" | "overbieden";
  let overbiedenPct: number;
  let marketHeat: string;

  if (ratio > 1.12) {
    strategy = "overbieden";
    overbiedenPct = 5;
    marketHeat = "🔥 Heet — veel concurrentie";
  } else if (ratio > 1.05) {
    strategy = "overbieden";
    overbiedenPct = 3;
    marketHeat = "Warm — gematigde vraag";
  } else if (ratio > 0.98) {
    strategy = "gelijk";
    overbiedenPct = 0;
    marketHeat = "Gemiddeld — reële prijs";
  } else {
    strategy = "onderbieden";
    overbiedenPct = -3;
    marketHeat = "Koel — minder vraag";
  }

  const recommendedBid = Math.round(askingPrice * (1 + overbiedenPct / 100));
  const maxBid = Math.round(Math.min(totalBudget, askingPrice * 1.1));
  const monthlyExtra = Math.round(((recommendedBid - Math.min(maxMortgage, recommendedBid)) * 0.04) / 12);

  return { maxBid, recommendedBid, strategy, overbiedenPct, marketHeat, monthlyExtra };
}

// ─── Badge ───────────────────────────────────────────────────────────────────

function Badge({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-bold"
      style={{ color, backgroundColor: bg }}
    >
      {label}
    </span>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function CombinedCalculator() {
  // Tab state
  const [activeTab, setActiveTab] = useState<"hypotheek" | "biedadvies">("hypotheek");

  // Hypotheek inputs
  const [income, setIncome] = useState(65000);
  const [hasPartner, setHasPartner] = useState(false);
  const [partnerIncome, setPartnerIncome] = useState(35000);
  const [debts, setDebts] = useState(0);
  const [isStarter, setIsStarter] = useState(true);
  const [nhgWanted, setNhgWanted] = useState(true);

  // Biedadvies inputs
  const [fundaUrl, setFundaUrl] = useState("");
  const [askingPrice, setAskingPrice] = useState(385000);
  const [woz, setWoz] = useState(360000);
  const [overwaarde, setOverwaarde] = useState(0);
  const [address, setAddress] = useState("");

  // Results
  const mortgage = useMemo(() => calcMaxMortgage(income, hasPartner ? partnerIncome : 0, debts, isStarter), [income, hasPartner, partnerIncome, debts, isStarter]);
  const effectiveMax = nhgWanted && mortgage.nhgApplicable ? mortgage.maxMortgageNHG : mortgage.maxMortgage;
  const activeScenarios = mortgage.scenarios.filter((_, i) => i < 4);

  const bid = useMemo(() => calcBidAdvice(askingPrice, woz, effectiveMax, overwaarde), [askingPrice, woz, effectiveMax, overwaarde]);

  const totalBudget = effectiveMax + overwaarde;

  return (
    <section className="py-24 bg-white" id="calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#99248F" }}>
            Bereken & Vergelijk
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hypotheek berekenen{" "}
            <span style={{ color: "#3094C6" }}>+</span>{" "}
            <span style={{ color: "#619C30" }}>Biedadvies</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Vul je situatie in, plak een Funda-link en zie direct wat je kunt lenen én wat je kunt bieden.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("hypotheek")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-lg transition-all ${
              activeTab === "hypotheek"
                ? "text-white shadow-lg"
                : "text-gray-500 hover:text-gray-700 bg-gray-100"
            }`}
            style={activeTab === "hypotheek" ? { backgroundColor: "#99248F" } : {}}
          >
            <Calculator size={20} /> Hypotheek Berekenen
          </button>
          <button
            onClick={() => setActiveTab("biedadvies")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-lg transition-all ${
              activeTab === "biedadvies"
                ? "text-white shadow-lg"
                : "text-gray-500 hover:text-gray-700 bg-gray-100"
            }`}
            style={activeTab === "biedadvies" ? { backgroundColor: "#619C30" } : {}}
          >
            <Gavel size={20} /> Biedadvies
          </button>
        </div>

        {/* Main grid: input | result */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── LEFT: Input form ─────────────────────────────────────── */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8">
            {activeTab === "hypotheek" ? (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp size={22} style={{ color: "#99248F" }} />
                  Jouw financiële situatie
                </h3>

                {/* Income */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Bruto jaarinkomen
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(+e.target.value || 0)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
                    />
                  </div>
                </div>

                {/* Partner toggle */}
                <div className="mb-5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasPartner}
                      onChange={(e) => setHasPartner(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#99248F]"
                    />
                    <span className="text-sm font-medium text-gray-700">Ik heb een partner met inkomen</span>
                  </label>
                </div>

                {/* Partner income */}
                {hasPartner && (
                  <div className="mb-5 animate-in fade-in">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Bruto jaarinkomen partner
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
                      <input
                        type="number"
                        value={partnerIncome}
                        onChange={(e) => setPartnerIncome(+e.target.value || 0)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Debts */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Lopende schulden / leningen
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
                    <input
                      type="number"
                      value={debts}
                      onChange={(e) => setDebts(+e.target.value || 0)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
                    />
                  </div>
                </div>

                {/* Starter / Doorstromer */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ik ben een...</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setIsStarter(true)}
                      className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition-all ${
                        isStarter
                          ? "text-white border-transparent"
                          : "text-gray-600 border-gray-200 hover:border-purple-300"
                      }`}
                      style={isStarter ? { backgroundColor: "#99248F" } : {}}
                    >
                      🏠 Starter
                    </button>
                    <button
                      onClick={() => setIsStarter(false)}
                      className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition-all ${
                        !isStarter
                          ? "text-white border-transparent"
                          : "text-gray-600 border-gray-200 hover:border-purple-300"
                      }`}
                      style={!isStarter ? { backgroundColor: "#99248F" } : {}}
                    >
                      🔄 Doorstromer
                    </button>
                  </div>
                </div>

                {/* NHG toggle */}
                <div className="mb-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={nhgWanted}
                      onChange={(e) => setNhgWanted(e.target.checked)}
                      className="w-5 h-5 rounded accent-[#99248F]"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Nationale Hypotheek Garantie (NHG) — lagere rente
                    </span>
                  </label>
                </div>

                {/* Quick-fill Funda */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setActiveTab("biedadvies")}
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                    style={{ color: "#619C30" }}
                  >
                    <Link size={14} />
                    Ik heb al een woning op het oog → Biedadvies
                    <ArrowRight size={14} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Gavel size={22} style={{ color: "#619C30" }} />
                  Jouw droomwoning
                </h3>

                {/* Funda URL */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Funda-link (optioneel)
                  </label>
                  <input
                    type="text"
                    value={fundaUrl}
                    onChange={(e) => setFundaUrl(e.target.value)}
                    placeholder="https://www.funda.nl/..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all"
                  />
                </div>

                {/* Address */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Adres woning
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Straatnaam, postcode, plaats"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all"
                  />
                </div>

                {/* Asking price */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Vraagprijs
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
                    <input
                      type="number"
                      value={askingPrice}
                      onChange={(e) => setAskingPrice(+e.target.value || 0)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all"
                    />
                  </div>
                </div>

                {/* WOZ */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    WOZ-waarde
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
                    <input
                      type="number"
                      value={woz}
                      onChange={(e) => setWoz(+e.target.value || 0)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all"
                    />
                  </div>
                </div>

                {/* Overwaarde (doorstromer) */}
                {!isStarter && (
                  <div className="mb-5 animate-in fade-in">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Overwaarde huidige woning
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
                      <input
                        type="number"
                        value={overwaarde}
                        onChange={(e) => setOverwaarde(+e.target.value || 0)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setActiveTab("hypotheek")}
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                    style={{ color: "#99248F" }}
                  >
                    <Calculator size={14} />
                    Wat kan ik lenen? → Hypotheek Berekenen
                    <ArrowRight size={14} />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* ── RIGHT: Result cards ──────────────────────────────────── */}
          <div className="space-y-6">
            {/* Max Mortgage Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Maximale hypotheek</h3>
                {mortgage.nhgApplicable && nhgWanted && (
                  <Badge label="✓ NHG mogelijk" color="#fff" bg="#619C30" />
                )}
                {!mortgage.nhgApplicable && (
                  <Badge label="Boven NHG-grens" color="#fff" bg="#F59E0B" />
                )}
              </div>

              <div className="text-center py-4 rounded-2xl mb-4" style={{ backgroundColor: "#fdf5fd", border: "1px solid #e8d5e8" }}>
                <p className="text-sm text-gray-500 mb-1">Je kunt maximaal lenen:</p>
                <p className="text-5xl font-extrabold" style={{ color: "#99248F" }}>{formatEuro(effectiveMax)}</p>
                <p className="text-xs text-gray-400 mt-1">
                  op basis van {formatEuro(income + (hasPartner ? partnerIncome : 0))} bruto inkomen
                </p>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center rounded-xl p-3" style={{ backgroundColor: "#f0f7ff" }}>
                  <p className="text-xs text-gray-400 mb-0.5">Bruto maandlast</p>
                  <p className="text-lg font-bold" style={{ color: "#3094C6" }}>{formatEuro(mortgage.monthlyGross)}</p>
                </div>
                <div className="text-center rounded-xl p-3" style={{ backgroundColor: "#f0f7ff" }}>
                  <p className="text-xs text-gray-400 mb-0.5">Netto maandlast</p>
                  <p className="text-lg font-bold" style={{ color: "#3094C6" }}>{formatEuro(mortgage.monthlyNet)}</p>
                </div>
                <div className="text-center rounded-xl p-3" style={{ backgroundColor: "#f0f7ff" }}>
                  <p className="text-xs text-gray-400 mb-0.5">Startersvrijstelling</p>
                  <p className="text-lg font-bold" style={{ color: "#3094C6" }}>{isStarter ? formatEuro(mortgage.starterExemption) : "n.v.t."}</p>
                </div>
              </div>

              {/* Scenario mini-table */}
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Maandlasten per rentescenario</p>
              <div className="space-y-2">
                {activeScenarios.map((s) => (
                  <div key={s.period} className="flex items-center justify-between rounded-xl px-4 py-2.5 border" style={{ borderColor: "#efefef" }}>
                    <div>
                      <span className="font-semibold text-gray-800 text-sm">{s.period}</span>
                      <span className="text-xs text-gray-400 ml-2">{s.rate}%</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-sm" style={{ color: "#99248F" }}>{formatEuro(s.gross)} bruto</span>
                      <span className="text-xs text-gray-400 ml-1.5">{formatEuro(s.net)} netto</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bid Advice Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                  <Gavel size={20} style={{ color: "#619C30" }} />
                  Biedadvies
                </h3>
                <Badge label={bid.marketHeat} color="#fff" bg="#F59E0B" />
              </div>

              {/* Asking price */}
              <div className="flex items-center justify-between rounded-xl p-3 mb-3" style={{ backgroundColor: "#f8f8f8" }}>
                <span className="text-sm text-gray-500">Vraagprijs</span>
                <span className="font-bold text-gray-800">{formatEuro(askingPrice)}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl p-3 mb-3" style={{ backgroundColor: "#f8f8f8" }}>
                <span className="text-sm text-gray-500">WOZ-waarde</span>
                <span className="font-bold text-gray-800">{formatEuro(woz)}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl p-3 mb-3" style={{ backgroundColor: "#f8f8f8" }}>
                <span className="text-sm text-gray-500">Jouw budget</span>
                <span className="font-bold" style={{ color: "#99248F" }}>{formatEuro(totalBudget)}</span>
              </div>

              {/* Recommended bid */}
              <div className="text-center py-4 rounded-2xl mb-4" style={{ backgroundColor: "#f3faf0", border: "1px solid #c6e0b0" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#619C30" }}>
                  {bid.strategy === "overbieden" ? "🔥 Advies: overbieden" : bid.strategy === "gelijk" ? "📊 Advies: vraagprijs bieden" : "❄️ Advies: onderbieden"}
                </p>
                <p className="text-4xl font-extrabold" style={{ color: "#619C30" }}>
                  {formatEuro(bid.recommendedBid)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {bid.overbiedenPct > 0 ? `+${bid.overbiedenPct}% boven vraagprijs` : bid.overbiedenPct === 0 ? "gelijk aan vraagprijs" : `${bid.overbiedenPct}% onder vraagprijs`}
                </p>
              </div>

              {/* Compatibility check */}
              {bid.recommendedBid <= totalBudget ? (
                <div className="flex items-start gap-2 rounded-xl p-3" style={{ backgroundColor: "#f0f7ff" }}>
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#619C30" }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#3094C6" }}>✅ Haalbaar!</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Het aanbevolen bod van {formatEuro(bid.recommendedBid)} past binnen jouw maximale budget van {formatEuro(totalBudget)}.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-2 rounded-xl p-3" style={{ backgroundColor: "#fef9e7" }}>
                  <Info size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F59E0B" }}>⚠️ Let op</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Het aanbevolen bod van {formatEuro(bid.recommendedBid)} overschrijdt jouw maximale budget van {formatEuro(totalBudget)}. Overweeg extra eigen geld of lagere inzet.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <button
                className="w-full py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{ backgroundColor: "#99248F" }}
              >
                <Home size={20} />
                Volledig rapport downloaden (gratis) →
              </button>
              <a
                href="https://saldo.biz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl font-semibold text-sm transition-all hover:shadow-lg flex items-center justify-center gap-2 border"
                style={{ color: "#3094C6", borderColor: "#c3dff5", backgroundColor: "#f0f7ff" }}
              >
                Persoonlijk hypotheekadvies nodig? Ga naar Saldo.biz →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
