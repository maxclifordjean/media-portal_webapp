"use client";

import Link from "next/link";
import {
  ArrowLeft,
  HelpCircle,
  FileText,
  MessageSquare,
  BookOpen,
  Search,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "Démarrage",
    items: [
      {
        question: "Comment créer un nouveau projet ?",
        answer:
          "Pour créer un nouveau projet, cliquez sur 'Nouveau projet' sur la homepage ou dans le menu latéral. Remplissez les informations demandées et choisissez un modèle de démarrage.",
      },
      {
        question: "Quels modèles sont disponibles ?",
        answer:
          "Nous proposons 4 modèles : Projet vide, E-commerce TV, Contenu média et Événement. Chacun est prédéfini pour un cas d'usage spécifique.",
      },
      {
        question: "Comment inviter des membres d'équipe ?",
        answer:
          "Dans les paramètres du projet, allez à l'onglet Équipe et entrez les adresses email de vos collaborateurs.",
      },
    ],
  },
  {
    category: "Suites",
    items: [
      {
        question: "Quelle est la différence entre BaseCamp, Momentum et Summit ?",
        answer:
          "BaseCamp est pour la préproduction, Momentum pour la diffusion live/à la demande, et Summit pour créer des parcours média spécialisés.",
      },
      {
        question: "Puis-je utiliser plusieurs suites pour un même projet ?",
        answer:
          "Oui, les suites sont intégrées et se complètent. Vous pouvez utiliser BaseCamp pour la préproduction, puis Momentum pour la diffusion.",
      },
    ],
  },
];

const resources = [
  {
    title: "Centre de documentation",
    description: "Accédez à la documentation complète et aux tutoriels",
    icon: BookOpen,
    href: "https://docs.smedia.tv",
  },
  {
    title: "Blog & Actualités",
    description: "Restez informé des dernières fonctionnalités",
    icon: FileText,
    href: "#",
  },
  {
    title: "Nous contacter",
    description: "Parlez directement avec notre équipe support",
    icon: MessageSquare,
    href: "/messages",
  },
];

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="border-b border-black/10 bg-white px-6 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
            Aide
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Centre d'aide
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Trouvez des réponses à vos questions
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="border-b border-black/10 bg-white px-6 py-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une réponse..."
              className="w-full rounded-lg border border-black/10 bg-white pl-12 pr-4 py-3 text-sm transition focus:border-[#8f1724] focus:outline-none focus:ring-2 focus:ring-[#8f1724]/10"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-black tracking-[-0.04em]">
              Ressources
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-6 transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff5f3]">
                    <Icon className="h-6 w-6 text-[#8f1724]" />
                  </div>
                  <h3 className="font-bold text-[#181716]">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#8f1724] font-medium text-sm">
                    En savoir plus
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-black/10 bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h2 className="text-2xl font-black tracking-[-0.04em]">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faqGroup) => (
              <div key={faqGroup.category}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29] mb-3">
                  {faqGroup.category}
                </h3>
                <div className="space-y-2 mb-6">
                  {faqGroup.items.map((faq, idx) => {
                    const faqId = `${faqGroup.category}-${idx}`;
                    const isExpanded = expandedFaq === faqId;

                    return (
                      <div
                        key={faqId}
                        className="rounded-lg border border-black/10 bg-white overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedFaq(isExpanded ? null : faqId)
                          }
                          className="w-full flex items-center justify-between p-4 transition hover:bg-gray-50"
                        >
                          <h4 className="text-sm font-bold text-left text-[#181716]">
                            {faq.question}
                          </h4>
                          <ChevronRight
                            className={`h-5 w-5 text-[#8f1724] transition-transform flex-shrink-0 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="border-t border-black/10 p-4 bg-gray-50">
                            <p className="text-sm text-gray-700">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-3xl rounded-[1.5rem] bg-[#8f1724] p-8 text-white md:p-12">
          <div className="flex flex-col items-center text-center gap-6">
            <HelpCircle className="h-12 w-12" />
            <div>
              <h2 className="text-2xl font-black tracking-[-0.04em]">
                Vous n'avez pas trouvé la réponse ?
              </h2>
              <p className="mt-2 text-white/80">
                Contactez notre équipe support pour obtenir une aide personnalisée
              </p>
            </div>
            <Link
              href="/messages"
              className="inline-flex items-center gap-2 rounded-full bg-[#f3c928] px-6 py-3 text-sm font-bold text-[#2c2400] transition hover:bg-[#ffe36d]"
            >
              <MessageSquare className="h-4 w-4" />
              Contacter le support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
