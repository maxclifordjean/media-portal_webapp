"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Edit,
  Share2,
  MoreVertical,
  Users,
  Calendar,
  FileText,
  VideoIcon,
  Settings,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const projectDetails = {
  id: 1,
  name: "Campagne Printemps 2026",
  status: "En cours",
  progress: 65,
  team: 5,
  dueDate: "15 Nov 2026",
  description:
    "Campagne média-commerce complète pour la saison printemps avec intégration vidéo shoppable sur tous les canaux.",
  createdDate: "01 Oct 2026",
  lastModified: "10 Nov 2026",
  teamMembers: [
    { id: 1, name: "Alice Dupont", role: "Productrice" },
    { id: 2, name: "Bob Martin", role: "Développeur" },
    { id: 3, name: "Carol Johnson", role: "Designer" },
    { id: 4, name: "David Smith", role: "Marketing" },
    { id: 5, name: "Eva Williams", role: "Analyste" },
  ],
};

const tabs = [
  { id: "overview", label: "Aperçu", icon: FileText },
  { id: "content", label: "Contenu", icon: VideoIcon },
  { id: "team", label: "Équipe", icon: Users },
  { id: "settings", label: "Paramètres", icon: Settings },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [showMenu, setShowMenu] = useState(false);

  const TabIcon = tabs.find((t) => t.id === activeTab)?.icon;

  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="border-b border-black/10 bg-white px-6 py-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8f1724] transition hover:gap-3 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  {projectDetails.name}
                </h1>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    projectDetails.status === "En cours"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {projectDetails.status}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                {projectDetails.description}
              </p>
            </div>

            <div className="flex gap-3 relative">
              <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Partager</span>
              </button>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-2.5 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                <MoreVertical className="h-4 w-4" />
              </button>

              {showMenu && (
                <div className="absolute right-0 top-12 z-10 w-48 rounded-lg border border-black/10 bg-white shadow-lg">
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#181716] transition hover:bg-gray-50"
                  >
                    <Edit className="h-4 w-4" />
                    Éditer
                  </Link>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50">
                    <Trash2 className="h-4 w-4" />
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-black/10 bg-gray-50 p-4">
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                Progression
              </p>
              <p className="mt-2 text-3xl font-black text-[#8f1724]">
                {projectDetails.progress}%
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-gray-50 p-4">
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                Équipe
              </p>
              <p className="mt-2 text-3xl font-black">{projectDetails.team}</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-gray-50 p-4">
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                Créé
              </p>
              <p className="mt-2 text-sm font-bold">{projectDetails.createdDate}</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-gray-50 p-4">
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                Modifié
              </p>
              <p className="mt-2 text-sm font-bold">
                {projectDetails.lastModified}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 border-b-2 px-4 py-4 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "border-[#8f1724] text-[#8f1724]"
                      : "border-transparent text-gray-600 hover:text-[#181716]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="rounded-[1.5rem] border border-black/10 bg-white p-6">
                <h2 className="text-xl font-black mb-4">Progression</h2>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-[#8f1724] transition-all"
                    style={{ width: `${projectDetails.progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-white p-6">
                <h2 className="text-xl font-black mb-4">Informations</h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-black/5">
                    <span className="text-sm text-gray-600">Date d'échéance</span>
                    <span className="text-sm font-medium">{projectDetails.dueDate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-black/5">
                    <span className="text-sm text-gray-600">Créé le</span>
                    <span className="text-sm font-medium">
                      {projectDetails.createdDate}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">Dernière modification</span>
                    <span className="text-sm font-medium">
                      {projectDetails.lastModified}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-6">
              <h2 className="text-xl font-black mb-6">Membres de l'équipe</h2>
              <div className="space-y-3">
                {projectDetails.teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between py-3 border-b border-black/5"
                  >
                    <div>
                      <p className="text-sm font-bold">{member.name}</p>
                      <p className="text-xs text-gray-600">{member.role}</p>
                    </div>
                    <button className="text-xs font-medium text-[#8f1724] transition hover:text-[#6f0f19]">
                      Gérer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-6">
              <h2 className="text-xl font-black mb-6">Paramètres du projet</h2>
              <p className="text-sm text-gray-600">
                Les paramètres du projet sont en cours de développement.
              </p>
            </div>
          )}

          {activeTab === "content" && (
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-6">
              <h2 className="text-xl font-black mb-6">Contenu du projet</h2>
              <p className="text-sm text-gray-600">
                Le contenu du projet sera géré via BaseCamp ou directement ici.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
