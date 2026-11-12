import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Boxes,
  Braces,
  Check,
  Clapperboard,
  Layers3,
  MonitorPlay,
  Play,
  Radio,
  Sparkles,
  UsersRound,
} from "lucide-react";

const suites = [
  {
    number: "01",
    name: "BaseCamp",
    label: "Créer le média",
    description:
      "Le point de départ de vos projets média. Structurez les idées, les scénarios, les scènes et toute la préproduction dans un espace partagé.",
    features: [
      "Pilotage de campagne 360°",
      "Préproduction intelligente",
      "Médiathèque & MAM",
      "Catalogue produits",
    ],
    icon: Clapperboard,
    accent: "bg-[#8f1724]",
    soft: "bg-[#fff5f3]",
    text: "text-[#8f1724]",
  },
  {
    number: "02",
    name: "Momentum",
    label: "Activer les moments",
    description:
      "Diffusez des expériences vidéo et commerce synchronisées, en live ou à la demande, sur tous vos canaux et au plus près de l’audience.",
    features: [
      "Régie & synchronisation live",
      "Expériences shoppable",
      "Distribution multicanale",
      "Personnalisation temps réel",
    ],
    icon: Radio,
    accent: "bg-[#f3c928]",
    soft: "bg-[#fff9df]",
    text: "text-[#765c00]",
  },
  {
    number: "03",
    name: "Summit",
    label: "Verticaliser l’expérience",
    description:
      "Composez des parcours média spécialisés pour informer, vendre, éduquer et engager dans la santé, le food, le sport et le divertissement.",
    features: [
      "Santé & wellness",
      "Food & cooking shows",
      "Coaching personnalisé",
      "Expériences sectorielles",
    ],
    icon: MonitorPlay,
    accent: "bg-[#171717]",
    soft: "bg-[#f3f3f1]",
    text: "text-[#171717]",
  },
];

const integrations = [
  {
    title: "API & MCP",
    eyebrow: "Connecter",
    description:
      "Exposez vos données, catalogues et workflows à vos outils existants avec une couche d’intégration documentée et sécurisée.",
    icon: Braces,
  },
  {
    title: "UI composable",
    eyebrow: "Expérimenter",
    description:
      "Intégrez nos briques média et commerce dans vos interfaces grâce à des composants prêts à personnaliser.",
    icon: Layers3,
  },
  {
    title: "Agents IA",
    eyebrow: "Orchestrer",
    description:
      "Confiez la préparation, l’analyse et l’activation à des agents spécialisés, gouvernés par vos équipes et vos règles métier.",
    icon: Bot,
  },
];

export default function AppsPage() {
  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      <section className="relative isolate overflow-hidden bg-[#7f1420] text-white">
        <div className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(circle_at_78%_20%,rgba(247,209,57,0.34),transparent_22%),radial-gradient(circle_at_9%_82%,rgba(255,255,255,0.12),transparent_25%)]" />
        <div className="absolute -right-20 top-16 -z-10 h-72 w-72 rotate-12 rounded-[4rem] border border-white/10" />
        <div className="absolute right-24 top-44 -z-10 h-28 w-28 rotate-45 bg-[#f3c928]/90" />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
          <div className="mb-16 flex items-center justify-between gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#f7d139]" />
              Smedia.tv — suite entreprise
            </div>
            <Link
              href="https://smedia.tv"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white sm:flex"
            >
              Visiter smedia.tv
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d139]">
                Média × Commerce × Vidéo
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem]">
                De la création
                <span className="block text-[#f7d139]">à l’activation.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                Concevez, produisez et déployez des expériences média-commerce
                intelligentes, de la préproduction au streaming shoppable.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#suites"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7d139] px-6 py-3.5 text-sm font-bold text-[#2c2400] transition hover:-translate-y-0.5 hover:bg-[#ffe36d]"
                >
                  Explorer les suites
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#integrations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Voir les intégrations
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 lg:grid-cols-1">
              {[
                ["3", "Suites connectées"],
                ["360°", "Création → activation"],
                ["1", "Espace collaboratif"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="bg-[#76111d]/70 p-5 backdrop-blur-sm sm:p-6"
                >
                  <div className="text-2xl font-black text-[#f7d139] sm:text-3xl">
                    {value}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-white/65 sm:text-sm">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="suites" className="scroll-mt-8 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
                Notre plateforme
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Trois temps.
                <br />
                Une seule chaîne.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
              BaseCamp, Momentum et Summit travaillent ensemble pour relier la
              stratégie, la production, la diffusion et l’expérience finale.
              Chaque suite peut aussi s’intégrer indépendamment à votre
              écosystème.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {suites.map((suite) => {
              const Icon = suite.icon;

              return (
                <article
                  key={suite.name}
                  className="group flex min-h-[34rem] flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_55px_rgba(35,20,12,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(35,20,12,0.12)]"
                >
                  <div className={`${suite.soft} flex items-center justify-between p-6`}>
                    <div
                      className={`${suite.accent} flex h-14 w-14 items-center justify-center rounded-2xl`}
                    >
                      <Icon
                        className={`h-7 w-7 ${
                          suite.name === "Momentum" ? "text-[#2c2400]" : "text-white"
                        }`}
                      />
                    </div>
                    <span className="text-5xl font-black tracking-[-0.06em] text-black/10">
                      {suite.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className={`text-xs font-bold uppercase tracking-[0.2em] ${suite.text}`}>
                      {suite.label}
                    </p>
                    <h3 className="mt-3 text-3xl font-black tracking-[-0.035em]">
                      {suite.name}
                    </h3>
                    <p className="mt-4 min-h-[6.5rem] leading-7 text-neutral-600">
                      {suite.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-black/10 pt-6">
                      {suite.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm font-medium text-neutral-700"
                        >
                          <span
                            className={`${suite.accent} flex h-5 w-5 shrink-0 items-center justify-center rounded-full`}
                          >
                            <Check
                              className={`h-3 w-3 ${
                                suite.name === "Momentum"
                                  ? "text-[#2c2400]"
                                  : "text-white"
                              }`}
                            />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={suite.name === "BaseCamp" ? "/apps/basecamp" : suite.name === "Momentum" ? "/apps/momentum" : "/apps/summit"}
                      className="mt-auto flex items-center justify-between border-t border-black/10 pt-6 text-sm font-bold"
                    >
                      Découvrir {suite.name}
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="integrations"
        className="scroll-mt-8 bg-[#171716] px-6 py-20 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7d139] text-black">
                <Boxes className="h-6 w-6" />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#f7d139]">
                Modules d’intégration
              </p>
              <h2 className="mt-3 max-w-md text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Votre stack.
                <br />
                Nos capacités.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-white/60">
                Adoptez la suite complète ou connectez seulement les briques qui
                accélèrent vos équipes. Notre architecture s’adapte à votre
                gouvernance, vos outils et vos données.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10">
              {integrations.map((integration, index) => {
                const Icon = integration.icon;

                return (
                  <article
                    key={integration.title}
                    className="group grid gap-5 bg-[#1d1d1b] p-6 transition hover:bg-[#242421] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className="h-6 w-6 text-[#f7d139]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                        0{index + 1} · {integration.eyebrow}
                      </p>
                      <h3 className="mt-1 text-xl font-bold">{integration.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                        {integration.description}
                      </p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-white/30 transition group-hover:translate-x-1 group-hover:text-[#f7d139] sm:block" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f3c928]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6e170f]">
                Collaborative core
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                Vos équipes, étendues vers les nôtres.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
                Un espace commun pour réunir les équipes de vos projets tout au
                long de la chaîne média, mieux arbitrer et garder chaque partie
                prenante alignée.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  "Annonceurs",
                  "Agences",
                  "Équipes internes",
                  "Experts externes",
                  "Acteurs média",
                ].map((team) => (
                  <span
                    key={team}
                    className="rounded-full border border-black/15 bg-white/45 px-4 py-2 text-sm font-semibold"
                  >
                    {team}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden bg-[#8f1724] p-8 text-white sm:p-12">
              <div className="absolute h-72 w-72 rounded-full border border-white/10" />
              <div className="absolute h-52 w-52 rounded-full border border-white/15" />
              <div className="absolute h-32 w-32 rounded-full bg-[#f7d139]" />
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#8f1724] shadow-2xl">
                <UsersRound className="h-10 w-10" />
              </div>
              <div className="absolute bottom-8 left-8 flex items-center gap-2 text-sm font-semibold text-white/70">
                <Play className="h-4 w-4 fill-current" />
                Une vision partagée
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
              Construisons votre parcours
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
              Quelle expérience voulez-vous activer ?
            </h2>
          </div>
          <Link
            href="https://smedia.tv"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#8f1724] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6f0f19]"
          >
            Découvrir smedia.tv
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
