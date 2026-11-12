import Link from "next/link";
import {
  ArrowRight,
  Plus,
  FolderOpen,
  MessageSquare,
  Zap,
  Users,
  Sparkles,
  Calendar,
  BarChart3,
  Briefcase,
} from "lucide-react";

const quickActions = [
  {
    title: "Nouveau Projet",
    description: "Créer un nouveau projet média-commerce",
    icon: Plus,
    href: "/projects/new",
    accent: "bg-[#f3c928]",
    soft: "bg-[#fff9df]",
    text: "text-[#765c00]",
  },
  {
    title: "Mes Projets",
    description: "Accéder à vos projets en cours et terminés",
    icon: FolderOpen,
    href: "/projects",
    accent: "bg-[#8f1724]",
    soft: "bg-[#fff5f3]",
    text: "text-[#8f1724]",
  },
  {
    title: "Messages",
    description: "Consulter vos messages et notifications",
    icon: MessageSquare,
    href: "/messages",
    accent: "bg-[#171717]",
    soft: "bg-[#f3f3f1]",
    text: "text-[#171717]",
  },
  {
    title: "Suites & Offres",
    description: "Explorer nos suites applicatives",
    icon: Zap,
    href: "/apps",
    accent: "bg-[#0ea5e9]",
    soft: "bg-[#f0f9ff]",
    text: "text-[#0369a1]",
  },
];

const suites = [
  {
    name: "BaseCamp",
    label: "Créer le média",
    description:
      "Le point de départ de vos projets média. Structurez les idées, les scénarios, les scènes et toute la préproduction dans un espace partagé.",
    icon: Briefcase,
    color: "bg-[#8f1724]",
    lightBg: "bg-[#fff5f3]",
    href: "/apps/basecamp",
  },
  {
    name: "Momentum",
    label: "Activer les moments",
    description:
      "Diffusez des expériences vidéo et commerce synchronisées, en live ou à la demande, sur tous vos canaux.",
    icon: Zap,
    color: "bg-[#f3c928]",
    lightBg: "bg-[#fff9df]",
    href: "/apps/momentum",
  },
  {
    name: "Summit",
    label: "Verticaliser l'expérience",
    description:
      "Composez des parcours média spécialisés pour informer, vendre, éduquer et engager.",
    icon: BarChart3,
    color: "bg-[#171717]",
    lightBg: "bg-[#f3f3f1]",
    href: "/apps/summit",
  },
];

const recentProjects = [
  {
    id: 1,
    name: "Campagne Printemps 2026",
    status: "En cours",
    progress: 65,
    team: 5,
    dueDate: "15 Nov 2026",
  },
  {
    id: 2,
    name: "Grille Programmation Q4",
    status: "Brouillon",
    progress: 30,
    team: 3,
    dueDate: "20 Nov 2026",
  },
  {
    id: 3,
    name: "Streaming Shoppable Festival",
    status: "En cours",
    progress: 85,
    team: 8,
    dueDate: "08 Nov 2026",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#7f1420] text-white">
        <div className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(circle_at_78%_20%,rgba(247,209,57,0.34),transparent_22%),radial-gradient(circle_at_9%_82%,rgba(255,255,255,0.12),transparent_25%)]" />
        <div className="absolute -right-20 top-16 -z-10 h-72 w-72 rotate-12 rounded-[4rem] border border-white/10" />
        <div className="absolute right-24 top-44 -z-10 h-28 w-28 rotate-45 bg-[#f3c928]/90" />

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
          <div className="mb-12 flex items-center justify-between gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#f7d139]" />
              Portail Smedia
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d139]">
              Bienvenue dans votre espace
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.5rem]">
              Créer, produire
              <span className="block text-[#f7d139]">et diffuser.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Orchestrez vos projets média-commerce de bout en bout avec nos
              suites intégrées. De la préproduction au streaming shoppable.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/new"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7d139] px-6 py-3.5 text-sm font-bold text-[#2c2400] transition hover:-translate-y-0.5 hover:bg-[#ffe36d]"
              >
                <Plus className="h-4 w-4" />
                Nouveau projet
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/apps"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explorer les suites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
              Accès rapide
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Vos actions principales
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_4px_12px_rgba(35,20,12,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(35,20,12,0.08)]"
                >
                  <div className={`${action.soft} flex items-center justify-between p-5`}>
                    <div
                      className={`${action.accent} flex h-12 w-12 items-center justify-center rounded-xl`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          action.title === "Suites & Offres"
                            ? "text-white"
                            : action.title === "Mes Projets"
                            ? "text-white"
                            : "text-[#2c2400]"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className={`text-lg font-bold ${action.text}`}>
                      {action.title}
                    </h3>
                    <p className="mt-2 text-sm leading-5 text-neutral-600">
                      {action.description}
                    </p>

                    <div className="mt-auto flex items-center justify-end pt-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-1">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="border-t border-black/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
                Tableau de bord
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Vos projets récents
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-2 text-sm font-bold text-[#8f1724] transition hover:gap-3 sm:flex"
            >
              Voir tous les projets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex items-center gap-6 rounded-xl border border-black/10 bg-white p-6 transition hover:border-black/20 hover:shadow-md"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-bold">{project.name}</h3>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        project.status === "En cours"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-[#8f1724] transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center gap-6 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.team} équipe{project.team > 1 ? "s" : ""}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.dueDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suites Preview Section */}
      <section className="bg-[#171716] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f7d139]">
              Nos suites
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Vos outils de création
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {suites.map((suite) => {
              const Icon = suite.icon;

              return (
                <Link
                  key={suite.name}
                  href={suite.href}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1d1d1b] transition hover:bg-[#242421]"
                >
                  <div className={`${suite.lightBg} flex items-center justify-between p-6`}>
                    <div className={`${suite.color} flex h-12 w-12 items-center justify-center rounded-xl`}>
                      <Icon
                        className={`h-6 w-6 ${
                          suite.name === "Momentum"
                            ? "text-[#2c2400]"
                            : "text-white"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className={`text-xs font-bold uppercase tracking-[0.2em] ${
                      suite.name === "Momentum"
                        ? "text-[#765c00]"
                        : "text-white/60"
                    }`}>
                      {suite.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-black">{suite.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-white/60">
                      {suite.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-xs font-semibold text-white/40">
                        Accéder →
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:translate-x-1 group-hover:bg-[#f7d139] group-hover:text-black">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-black/10 bg-white px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
              Besoin d'aide ?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
              Consultez notre documentation
            </h2>
          </div>
          <Link
            href="https://docs.smedia.tv"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#8f1724] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6f0f19]"
          >
            Accéder aux docs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}