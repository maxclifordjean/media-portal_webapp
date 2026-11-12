"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  BarChart3,
  Target,
  Users,
  Zap,
} from "lucide-react";

const quickLinks = [
  {
    title: "Créer un parcours",
    description: "Composez une nouvelle expérience média spécialisée",
    icon: Plus,
    href: "#",
  },
  {
    title: "Mes parcours",
    description: "Consultez vos parcours existants",
    icon: Target,
    href: "#",
  },
  {
    title: "Performance",
    description: "Analysez les résultats",
    icon: BarChart3,
    href: "#",
  },
];

export default function SummitPage() {
  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#171716] to-[#3a3a37]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white hover:gap-3 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>

          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Suite Smedia
              </p>
              <h1 className="mt-2 text-5xl font-black tracking-[-0.04em] text-white">
                Summit
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80">
                Composez des parcours média spécialisés pour informer, vendre,
                éduquer et engager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
              Accès rapide
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
              Verticaliser l'expérience
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-6 transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3f3f1]">
                    <Icon className="h-6 w-6 text-[#171716]" />
                  </div>
                  <h3 className="font-bold text-[#181716]">{link.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {link.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-black/10 bg-white px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-[-0.04em]">
              Fonctionnalités principales
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Parcours personnalisés",
                description:
                  "Créez des expériences adaptées à votre objectif commercial",
              },
              {
                title: "Segmentation audience",
                description:
                  "Adaptez les parcours en fonction de votre audience",
              },
              {
                title: "Intégration verticale",
                description:
                  "Information, vente, éducation et engagement intégrés",
              },
              {
                title: "Optimisation des conversions",
                description:
                  "Outils pour maximiser l'engagement et les ventes",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-black/10 bg-gray-50 p-6"
              >
                <h3 className="font-bold text-[#181716]">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#171716] p-8 text-white md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em]">
                Prêt à composer votre expérience ?
              </h2>
              <p className="mt-2 text-white/80">
                Créez votre premier parcours avec Summit
              </p>
            </div>
            <Link
              href="/projects/new"
              className="inline-flex items-center gap-2 rounded-full bg-[#f3c928] px-6 py-3 text-sm font-bold text-[#2c2400] transition hover:bg-[#ffe36d]"
            >
              <Zap className="h-4 w-4" />
              Nouveau parcours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
