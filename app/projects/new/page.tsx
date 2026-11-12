"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Upload } from "lucide-react";
import { useState } from "react";

export default function NewProjectPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dueDate: "",
    team: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implémenter la création du projet via API
  };

  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="border-b border-black/10 bg-white px-6 py-8 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8f1724] transition hover:gap-3 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
              Créer un projet
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Nouveau projet
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Lancez votre projet média-commerce avec nos outils intégrés
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Name */}
              <div>
                <label className="block text-sm font-bold text-[#181716] mb-2">
                  Nom du projet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ex. Campagne Printemps 2026"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm transition focus:border-[#8f1724] focus:outline-none focus:ring-2 focus:ring-[#8f1724]/10"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-[#181716] mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  rows={4}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm transition focus:border-[#8f1724] focus:outline-none focus:ring-2 focus:ring-[#8f1724]/10"
                />
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-bold text-[#181716] mb-2">
                  Date limite
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm transition focus:border-[#8f1724] focus:outline-none focus:ring-2 focus:ring-[#8f1724]/10"
                />
              </div>

              {/* Team */}
              <div>
                <label className="block text-sm font-bold text-[#181716] mb-2">
                  Équipe
                </label>
                <input
                  type="text"
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                  placeholder="Inviter des membres de l'équipe (emails séparés par des virgules)"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm transition focus:border-[#8f1724] focus:outline-none focus:ring-2 focus:ring-[#8f1724]/10"
                />
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-sm font-bold text-[#181716] mb-3">
                  Modèle de démarrage
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      id: "blank",
                      name: "Projet vide",
                      description: "Commencer de zéro",
                    },
                    {
                      id: "ecommerce",
                      name: "E-commerce TV",
                      description: "Prédéfini pour la vente en direct",
                    },
                    {
                      id: "content",
                      name: "Contenu média",
                      description: "Optimisé pour le contenu",
                    },
                    {
                      id: "event",
                      name: "Événement",
                      description: "Pour les événements live",
                    },
                  ].map((template) => (
                    <label
                      key={template.id}
                      className="flex items-center gap-3 rounded-lg border border-black/10 bg-gray-50 p-4 cursor-pointer transition hover:border-[#8f1724] hover:bg-white"
                    >
                      <input
                        type="radio"
                        name="template"
                        value={template.id}
                        defaultChecked={template.id === "blank"}
                        className="h-4 w-4 text-[#8f1724]"
                      />
                      <div>
                        <p className="text-sm font-bold text-[#181716]">
                          {template.name}
                        </p>
                        <p className="text-xs text-neutral-600">
                          {template.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Upload Media */}
              <div>
                <label className="block text-sm font-bold text-[#181716] mb-3">
                  Fichiers médias (optionnel)
                </label>
                <div className="rounded-lg border-2 border-dashed border-black/20 bg-gray-50 p-8 text-center transition hover:border-[#8f1724] hover:bg-white cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#181716]">
                    Glisser-déposer vos fichiers ici
                  </p>
                  <p className="text-xs text-neutral-600 mt-1">
                    ou cliquer pour parcourir
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#8f1724] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6f0f19]"
                >
                  <Plus className="h-4 w-4" />
                  Créer le projet
                </button>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold text-[#181716] transition hover:bg-gray-50"
                >
                  Annuler
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
