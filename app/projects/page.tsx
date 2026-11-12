"use client";

import Link from "next/link";
import { ArrowRight, Plus, Search, Filter, Users, Calendar } from "lucide-react";

const allProjects = [
  {
    id: 1,
    name: "Campagne Printemps 2026",
    status: "En cours",
    progress: 65,
    team: 5,
    dueDate: "15 Nov 2026",
    description: "Campagne média-commerce complète pour la saison printemps",
  },
  {
    id: 2,
    name: "Grille Programmation Q4",
    status: "Brouillon",
    progress: 30,
    team: 3,
    dueDate: "20 Nov 2026",
    description: "Planification de la programmation Q4 avec vidéos shoppables",
  },
  {
    id: 3,
    name: "Streaming Shoppable Festival",
    status: "En cours",
    progress: 85,
    team: 8,
    dueDate: "08 Nov 2026",
    description: "Expérience live streaming intégrée avec commerce",
  },
  {
    id: 4,
    name: "Webinaire Produit Nouveau",
    status: "Planifié",
    progress: 10,
    team: 2,
    dueDate: "25 Nov 2026",
    description: "Présentation interactive du nouveau produit phare",
  },
  {
    id: 5,
    name: "Catalogue Numérique Interactif",
    status: "En cours",
    progress: 55,
    team: 4,
    dueDate: "12 Nov 2026",
    description: "Catalogue produit avec expérience vidéo enrichie",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="border-b border-black/10 bg-white px-6 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
                Gestion de projets
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Mes projets
              </h1>
              <p className="mt-2 text-sm text-neutral-600">
                {allProjects.length} projets trouvés
              </p>
            </div>
            <Link
              href="/projects/new"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8f1724] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6f0f19]"
            >
              <Plus className="h-4 w-4" />
              Nouveau projet
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-black/10 bg-white px-6 py-4 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                className="w-full rounded-lg border border-black/10 bg-white pl-10 pr-4 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Filtrer
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-2">
            {allProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(35,20,12,0.08)]"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#181716]">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm leading-5 text-neutral-600">
                        {project.description}
                      </p>
                    </div>
                    <span
                      className={`ml-4 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "En cours"
                          ? "bg-blue-100 text-blue-700"
                          : project.status === "Brouillon"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-6 mb-4 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-[#8f1724] transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <p className="text-xs text-gray-500 mb-4">
                    {project.progress}% complété
                  </p>

                  <div className="flex items-center gap-4 border-t border-black/10 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Users className="h-3.5 w-3.5" />
                      {project.team} équipe{project.team > 1 ? "s" : ""}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.dueDate}
                    </span>
                    <div className="ml-auto">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8f1724] text-white transition group-hover:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
