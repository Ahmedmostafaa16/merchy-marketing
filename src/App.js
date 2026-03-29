import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Check,
  Clock,
  Database,
  FileText,
  Mail,
  Package,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import logo from './assets/logo.png';
import screen from './assets/screen.png';
import screen1 from './assets/screen1.png';

const featureItems = [
  {
    title: 'Inventory Coverage Insights',
    description: 'See exactly how many days your stock will last for every SKU so you can plan ahead with confidence.',
    icon: BarChart3,
  },
  {
    title: 'Smart Restock Recommendations',
    description: 'Get precise reorder quantities based on real sales velocity — no more guesswork.',
    icon: Package,
  },
  {
    title: 'Stockout & Risk Alerts',
    description: 'Instantly identify products at risk of running out before it impacts your sales.',
    icon: AlertTriangle,
  },
  {
    title: 'Automated Email Notifications',
    description: 'Receive weekly reports with critical stock insights and restock needs directly in your inbox.',
    icon: Mail,
  },
  {
    title: 'Purchase Order (PO) Creation',
    description: 'Generate supplier-ready purchase orders with exact quantities in seconds.',
    icon: FileText,
  },
  {
    title: 'SKU-Level Performance Insights',
    description: 'Understand which products drive revenue and which ones drain your cash.',
    icon: Target,
  },
];

const howItWorksCards = [
  {
    title: 'Connect Your Store',
    description: 'Sync your Shopify data instantly with one click',
    icon: Database,
  },
  {
    title: 'Analyze Your Data',
    description: 'Track sales velocity, coverage, and product performance',
    icon: BarChart3,
  },
  {
    title: 'Get Smart Recommendations',
    description: 'Receive accurate restock suggestions and avoid stockouts',
    icon: Zap,
  },
];

const kpiItems = [
  { value: '95%', label: 'Forecast Accuracy', icon: TrendingUp },
  { value: '10+ Hours', label: 'Saved per month', icon: Clock },
  { value: '30%', label: 'Fewer stockouts', icon: AlertTriangle },
];

const offerHighlights = [
  'Coverage days per SKU',
  'Exact restock recommendations',
  'Stockout & slow-mover alerts',
  'Works instantly with your Shopify data',
];

const comparisonRows = [
  {
    challenge: 'Spending hours planning inventory in spreadsheets',
    solution: 'Turn sales data into instant restock suggestions',
  },
  {
    challenge: 'Frequently going out of stock on best-sellers',
    solution: 'Forecast demand before products run low',
  },
  {
    challenge: 'Reordering based on guesswork',
    solution: 'Use data-backed inventory recommendations',
  },
  {
    challenge: 'Not knowing which items drive revenue',
    solution: 'See item-level breakdowns and performance clearly',
  },
];

const merchyTableRows = [
  {
    feature: 'Forecasting',
    value: 'Forecast demand based on real sales velocity',
  },
  {
    feature: 'Forecast Specific Items',
    value: 'Forecast individual products or selected SKUs',
  },
  {
    feature: 'Restock Suggestions',
    value: 'Get recommended reorder quantities automatically',
  },
  {
    feature: 'Item-Level Analytics',
    value: 'Track sales velocity, inventory, and product performance',
  },
  {
    feature: 'Inventory Health Status',
    value: 'Detect fast movers, slow movers, and never sold items',
  },
  {
    feature: 'CSV Export',
    value: 'Export inventory insights instantly',
  },
  {
    feature: 'Low Learning Curve',
    value: 'Built for Shopify brands, no complex setup',
  },
  {
    feature: 'Fast Setup',
    value: 'Start forecasting in minutes',
  },
];

const faqItems = [
  {
    question: 'What does Merchy do?',
    answer:
      'Merchy analyzes your Shopify sales and inventory data to forecast product demand and recommend when and how much to restock.',
  },
  {
    question: 'Can I forecast specific products?',
    answer:
      "Yes. One of Merchy's key advantages is the ability to forecast individual products or selected SKUs instead of only global inventory predictions.",
  },
  {
    question: 'Do my products need SKUs to use Merchy?',
    answer:
      'Yes. Merchy analyzes inventory at the SKU level, so each product variant should have a SKU. Most Shopify stores already use SKUs for product variants like sizes or colors. If some products do not have SKUs yet, you can easily add them in Shopify before syncing your inventory.',
    helper:
      'Merchy works best when each product variant (size, color, etc.) has its own SKU so forecasting and restock recommendations remain accurate.',
  },
  {
    question: 'How does Merchy detect fast or slow moving products?',
    answer:
      'Merchy analyzes historical sales velocity to automatically classify items as fast movers, moderate sellers, slow movers, or never sold.',
  },
  {
    question: 'Do I need technical knowledge to use Merchy?',
    answer:
      'No. Merchy is designed for Shopify brands with a simple interface and a low learning curve so you can start forecasting inventory in minutes.',
  },
  {
    question: 'Can I export my data?',
    answer:
      'Yes. You can export forecasting data and inventory insights as CSV files directly from the dashboard.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most Shopify stores can connect their data and start generating forecasts in just a few minutes.',
  },
];

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-base text-white">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-base/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Merchy" className="h-8 w-auto origin-left scale-[4]" />
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how-it-works" className="transition hover:text-white">How it Works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <button className="btn-glow rounded-full border border-accent/50 bg-accent px-5 py-2 text-sm font-semibold text-white shadow-glow">
            Install App
          </button>
        </nav>
      </header>

      <main id="top" className="bg-grid overflow-hidden">
        <section className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:pt-24">
          <div className="hero-glow left-[-8rem] top-[-6rem]" />
          <div className="reveal">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Stop guessing inventory.
              <br />
              <span className="text-muted">Start forecasting it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Merchy analyzes your Shopify sales and predicts exactly what you should restock before you run out.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="btn-glow rounded-full border border-accent/50 bg-accent px-7 py-3 text-sm font-semibold shadow-glow">
                Install on Shopify
              </button>
              <button className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:text-white">
                See how it works
              </button>
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.25),transparent_65%)] blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-card sm:p-4">
              <img
                src={screen}
                alt="Merchy dashboard preview"
                className="h-full w-full rounded-2xl border border-border object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <p className="reveal text-center text-sm text-muted">Trusted by modern Shopify brands.</p>
          <div className="reveal mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {kpiItems.map(({ value, label, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="rounded-xl bg-purple-500/10 p-3">
                    <Icon
                      aria-hidden="true"
                      className="h-7 w-7 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                    />
                  </div>
                </div>
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-2 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-sm text-accent">Challenges vs Solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for growing Shopify brands
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Merchy helps brands replace spreadsheet guesswork with clear inventory forecasting and smarter
              restocking decisions.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-border bg-card/80 p-4 sm:p-6">
            <div className="mb-4 hidden grid-cols-[1fr_auto_1fr] gap-3 px-2 text-sm text-muted md:grid">
              <p>Challenges you face</p>
              <div />
              <p>How Merchy solves them</p>
            </div>
            <div className="space-y-3">
              {comparisonRows.map((row) => (
                <article
                  key={row.challenge}
                  className="reveal glow-hover grid grid-cols-1 items-center gap-3 rounded-2xl border border-border bg-secondary/60 p-3 md:grid-cols-[1fr_auto_1fr] md:p-4"
                >
                  <div className="rounded-xl border border-rose-500/20 bg-gradient-to-r from-rose-950/45 to-transparent px-4 py-5">
                    <p className="mb-2 text-xs uppercase tracking-wide text-rose-300/75 md:hidden">Challenge</p>
                    <p className="text-base font-medium leading-relaxed text-rose-100/95">{row.challenge}</p>
                  </div>
                  <div className="mx-auto hidden h-5 w-12 items-center justify-center md:flex">
                    <div className="relative h-px w-full bg-white/20">
                      <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-accent/80" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-accent/30 bg-gradient-to-r from-accent/20 to-glow/10 px-4 py-5">
                    <p className="mb-2 text-xs uppercase tracking-wide text-accent/80 md:hidden">Solution</p>
                    <p className="text-base font-medium leading-relaxed text-white">{row.solution}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="reveal mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="btn-glow rounded-full border border-accent/50 bg-accent px-7 py-3 text-sm font-semibold shadow-glow">
                Install on Shopify
              </button>
              <button className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:text-white">
                See how it works
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <div className="reveal text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-red-500/10 px-4 py-1 text-sm text-red-400">
              Reality Check
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              The mistake that costs brands thousands
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Most Shopify brands run out of stock or overstock — not because of bad products, but because of bad
              decisions.
            </p>
            <p className="mt-5 text-lg font-medium text-purple-400 sm:text-xl">
              Merchy fixes this with data-driven inventory decisions.
            </p>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="reveal mx-auto max-w-5xl">
            <p className="text-sm text-accent">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What You Actually Get
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              The essentials your team actually needs to know what is running low, how much to reorder, and which
              products deserve attention first.
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-4">
            {featureItems.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="reveal flex items-start gap-4 rounded-xl border border-white/10 bg-[#0f172a] p-5 transition hover:translate-y-[-2px] hover:border-accent/40 hover:shadow-[0_12px_34px_rgba(124,92,255,0.16)]"
              >
                <div className="flex items-center justify-center rounded-xl bg-purple-500/10 p-3">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 py-[120px]">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/85">POWERFUL BUT SIMPLE</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to forecast inventory
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Merchy gives Shopify brands powerful forecasting tools without the complexity of traditional inventory
              systems.
            </p>
          </div>

          <div className="reveal mt-12 overflow-hidden rounded-2xl border border-[#1f2937] bg-[#0b1220]">
            <div className="hidden grid-cols-2 border-b border-[#1f2937] bg-[#111a2b] md:grid">
              <div className="flex h-16 items-center px-6 text-sm font-semibold text-white">Feature</div>
              <div className="flex h-16 items-center px-6 text-sm font-semibold text-white">Available in Merchy</div>
            </div>

            <div className="hidden md:block">
              {merchyTableRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-2 border-b border-[#1f2937] transition duration-300 hover:bg-white/[0.03] last:border-b-0"
                >
                  <div className="flex h-16 items-center px-6 text-sm font-medium text-white">{row.feature}</div>
                  <div className="flex h-16 items-center gap-3 px-6 text-sm text-slate-200">
                    <svg
                      aria-hidden="true"
                      className="h-[18px] w-[18px] shrink-0 text-[#22c55e]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0L3.29 9.11a1 1 0 111.414-1.414l4.093 4.093 6.493-6.5a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{row.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 p-4 md:hidden">
              {merchyTableRows.map((row) => (
                <div
                  key={row.feature}
                  className="rounded-xl border border-[#1f2937] bg-[#111a2b] p-4 transition duration-300 hover:bg-[#162137]"
                >
                  <p className="text-sm font-semibold text-white">{row.feature}</p>
                  <div className="mt-2 flex items-start gap-3 text-sm text-slate-200">
                    <svg
                      aria-hidden="true"
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#22c55e]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0L3.29 9.11a1 1 0 111.414-1.414l4.093 4.093 6.493-6.5a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{row.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="reveal mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Merchy focuses on the features that actually help brands restock smarter - without the complexity of
            enterprise inventory systems.
          </p>

          <div className="reveal mt-8 flex justify-center">
            <button className="btn-glow rounded-full border border-accent/50 bg-gradient-to-r from-accent to-glow px-8 py-3 text-sm font-semibold text-white shadow-glow">
              Install Merchy on Shopify
            </button>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="reveal">
              <p className="text-sm text-accent">How It Works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for <span className="text-purple-400">smarter</span> inventory decisions
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Merchy helps Shopify brands move from guesswork to data-driven decisions with a simple 3-step workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {howItWorksCards.map(({ title, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className={`reveal flex h-full flex-col bg-[#0f172a] border border-white/10 rounded-2xl p-6 transition hover:translate-y-[-4px] ${
                    index === howItWorksCards.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="mb-4 w-fit rounded-xl bg-purple-500/10 p-3">
                    <Icon aria-hidden="true" className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-2 text-sm text-purple-400">Product Overview</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Clear insights. Zero guesswork.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
                Merchy gives you a complete view of your inventory performance — from stock levels and sales velocity
                to exact restock actions.
              </p>
              <div className="mt-4">
                {[
                  'Know exactly when items will run out',
                  'See which products drive revenue',
                  'Get instant restock recommendations',
                ].map((item) => (
                  <div key={item} className="mt-3 flex items-center gap-2">
                    <Check className="text-green-400" size={16} />
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-4 shadow-[0_0_40px_rgba(168,85,247,0.15)] transition hover:scale-[1.01]">
                <div className="absolute inset-x-0 -top-6 -z-10 h-24 bg-[radial-gradient(circle,rgba(124,92,255,0.25),transparent_70%)] blur-2xl" />
                <img src={screen1} alt="Merchy Dashboard" className="w-full rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="reveal relative overflow-hidden rounded-[32px] border border-accent/20 bg-[linear-gradient(135deg,rgba(31,12,51,0.92),rgba(10,10,18,0.96))] px-6 py-8 shadow-[0_24px_90px_rgba(124,92,255,0.16)] sm:px-8 lg:px-14 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(124,92,255,0.12),transparent_30%)]" />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-purple-200">
                  Limited Offer
                </div>
                <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Start Forecasting for 999 EGP
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                  Most brands lose thousands due to poor inventory decisions. Merchy helps you predict exactly what to
                  restock before you run out.
                </p>
                <div className="mt-8 space-y-4">
                  {offerHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-base text-white sm:text-lg">
                      <CheckCircle aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <article className="relative rounded-2xl border border-accent/25 bg-[#0a0a0f] p-6 text-center shadow-[0_22px_80px_rgba(0,0,0,0.55)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_18px_rgba(236,72,153,0.45)]">
                  Limited Offer
                </div>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-purple-200/80">LIMITED OFFER</p>
                <p className="mt-5 text-6xl font-semibold tracking-tight text-purple-400 drop-shadow-[0_0_16px_rgba(168,85,247,0.45)]">
                  999 EGP
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Merchy Starter Access</h3>
                <p className="mt-3 text-base text-muted">One-time access. No subscription.</p>
                <button className="btn-glow mt-8 w-full rounded-full border border-accent/50 bg-gradient-to-r from-accent to-glow px-6 py-3 text-base font-semibold text-white shadow-glow">
                  Start Forecasting →
                </button>
                <p className="mt-4 text-sm text-muted">Instant access • No hidden fees</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 py-[120px]">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Everything you need to know before installing Merchy.
            </p>
          </div>

          <div className="reveal mt-10 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-[#1f2937] bg-transparent transition duration-200 hover:bg-white/[0.03]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="flex h-16 w-full items-center justify-between gap-4 px-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[18px] font-medium text-white">{item.question}</span>
                    <svg
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#1f2937] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                        <p className="text-[15px] leading-[1.6] text-slate-400">{item.answer}</p>
                        {item.helper ? (
                          <p className="mt-3 text-sm leading-[1.6] text-slate-500">{item.helper}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reveal mt-12 text-center">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start forecasting inventory today</h3>
            <button className="btn-glow mt-6 rounded-full border border-accent/50 bg-gradient-to-r from-accent to-glow px-8 py-3 text-sm font-semibold text-white shadow-glow">
              Install Merchy on Shopify
            </button>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="absolute inset-x-0 top-8 -z-10 h-52 bg-[radial-gradient(circle,rgba(124,92,255,0.25),transparent_70%)] blur-3xl" />
          <div className="reveal rounded-3xl border border-border bg-card/80 px-6 py-14 text-center backdrop-blur-sm sm:px-10">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Never run out of your best-selling products again.
            </h2>
            <button className="btn-glow mt-8 rounded-full border border-accent/50 bg-accent px-8 py-3 text-sm font-semibold shadow-glow">
              Install Merchy on Shopify
            </button>
            <div className="mt-8 text-center">
              <p className="mb-2 text-sm text-gray-400">Support Email</p>
              <div className="flex items-center justify-center gap-2">
                <Mail size={16} className="text-purple-400" />
                <a
                  href="mailto:support@merchyapp.online"
                  className="font-medium text-purple-400 transition hover:text-purple-300"
                >
                  support@merchyapp.online
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-base">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-1">
            <img src={logo} alt="Merchy" className="h-8 w-auto origin-left scale-[4]" />
            <p className="mt-4 text-sm text-muted">AI inventory forecasting for Shopify brands.</p>
          </div>
          {[
            { title: 'Product', links: ['Features', 'Pricing'] },
            { title: 'Company', links: ['About', 'Contact'] },
            { title: 'Legal', links: ['Privacy', 'Terms'] },
          ].map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-white">{column.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
