"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Zap,
  Play,
  ShoppingCart,
  Activity,
} from "lucide-react";

const BACKOFFICE_URL =
  process.env.NEXT_PUBLIC_BACKOFFICE_URL || "http://localhost:5173";

const quickLinks = [
  {
    title: "Créer une campagne",
    description: "Lancez une nouvelle expérience vidéo et commerce",
    icon: Plus,
    href: `${BACKOFFICE_URL}/campaigns`,
  },
  {
    title: "Mes campagnes actives",
    description: "Gérez vos campagnes en cours",
    icon: Activity,
    href: `${BACKOFFICE_URL}/campaigns`,
  },
  {
    title: "Statistiques",
    description: "Analysez les performances",
    icon: ShoppingCart,
    href: `${BACKOFFICE_URL}/campaigns`,
  },
];

export default function MomentumPage() {
  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#f3c928] to-[#ffe36d]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#765c00]/80 transition hover:text-[#765c00] hover:gap-3 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>

          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/30 backdrop-blur">
              <Zap className="h-8 w-8 text-[#765c00]" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#765c00]/70">
                Suite Smedia
              </p>
              <h1 className="mt-2 text-5xl font-black tracking-[-0.04em] text-[#2c2400]">
                Momentum
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[#765c00]/80">
                Diffusez des expériences vidéo et commerce synchronisées, en
                live ou à la demande, sur tous vos canaux.
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
              Activer les moments
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff9df]">
                    <Icon className="h-6 w-6 text-[#765c00]" />
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
                title: "Streaming Live Shoppable",
                description:
                  "Diffusez en direct avec intégration commerciale en temps réel",
              },
              {
                title: "Multi-canal",
                description:
                  "Diffusez simultanément sur TV, web, mobile et réseaux sociaux",
              },
              {
                title: "Interactive & Shoppable",
                description:
                  "Laissez vos spectateurs acheter directement pendant la diffusion",
              },
              {
                title: "Analytics en temps réel",
                description:
                  "Suivez les performances et l'engagement pendant la diffusion",
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
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#f3c928] p-8 text-[#2c2400] md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em]">
                Prêt à activer vos moments ?
              </h2>
              <p className="mt-2 text-[#765c00]/80">
                Créez votre première campagne avec Momentum
              </p>
            </div>
            <Link
              href="/projects/new"
              className="inline-flex items-center gap-2 rounded-full bg-[#8f1724] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6f0f19]"
            >
              <Zap className="h-4 w-4" />
              Nouvelle campagne
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
