"use client";

import Link from "next/link";
import {
  Settings as SettingsIcon,
  Bell,
  Lock,
  Eye,
  Sliders,
  ChevronRight,
  Toggle2,
  Mail,
} from "lucide-react";
import { useState } from "react";

interface SettingGroup {
  title: string;
  description: string;
  settings: Setting[];
}

interface Setting {
  id: string;
  label: string;
  description: string;
  type: "toggle" | "select" | "input";
  value?: boolean | string;
}

const settingsGroups: SettingGroup[] = [
  {
    title: "Notifications",
    description: "Gérez vos préférences de notifications",
    settings: [
      {
        id: "email-updates",
        label: "Mises à jour par email",
        description: "Recevoir les mises à jour des projets par email",
        type: "toggle",
        value: true,
      },
      {
        id: "email-digest",
        label: "Digest hebdomadaire",
        description: "Un résumé de vos activités chaque semaine",
        type: "toggle",
        value: true,
      },
      {
        id: "push-notifications",
        label: "Notifications push",
        description: "Recevoir les notifications importantes en temps réel",
        type: "toggle",
        value: false,
      },
    ],
  },
  {
    title: "Confidentialité & Sécurité",
    description: "Contrôlez votre sécurité et votre confidentialité",
    settings: [
      {
        id: "profile-visibility",
        label: "Visibilité du profil",
        description: "Qui peut voir votre profil",
        type: "select",
        value: "Team",
      },
      {
        id: "two-factor",
        label: "Authentification à deux facteurs",
        description: "Sécuriser votre compte avec une authentification 2FA",
        type: "toggle",
        value: false,
      },
    ],
  },
  {
    title: "Préférences",
    description: "Personnalisez votre expérience",
    settings: [
      {
        id: "theme",
        label: "Thème",
        description: "Choisir votre thème préféré",
        type: "select",
        value: "Auto",
      },
      {
        id: "language",
        label: "Langue",
        description: "Sélectionner votre langue",
        type: "select",
        value: "Français",
      },
      {
        id: "timezone",
        label: "Fuseau horaire",
        description: "Votre fuseau horaire",
        type: "select",
        value: "Europe/Paris",
      },
    ],
  },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState(settingsGroups);

  const handleToggle = (groupIdx: number, settingIdx: number) => {
    const newSettings = [...settings];
    const setting = newSettings[groupIdx].settings[settingIdx];
    if (setting.type === "toggle") {
      setting.value = !setting.value;
      setSettings(newSettings);
    }
  };

  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="border-b border-black/10 bg-white px-6 py-8 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
            Configuration
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Paramètres
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Gérez vos préférences et paramètres de compte
          </p>
        </div>
      </section>

      {/* Settings Content */}
      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          {settings.map((group, groupIdx) => (
            <div
              key={group.title}
              className="rounded-[1.5rem] border border-black/10 bg-white overflow-hidden"
            >
              {/* Header */}
              <div className="border-b border-black/10 px-6 py-4">
                <h2 className="text-lg font-bold text-[#181716]">
                  {group.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {group.description}
                </p>
              </div>

              {/* Settings List */}
              <div className="divide-y divide-black/5">
                {group.settings.map((setting, settingIdx) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between p-6 transition hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-[#181716]">
                        {setting.label}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {setting.description}
                      </p>
                    </div>

                    {setting.type === "toggle" && (
                      <button
                        onClick={() =>
                          handleToggle(groupIdx, settingIdx)
                        }
                        className={`ml-4 flex-shrink-0 rounded-full w-12 h-7 flex items-center transition ${
                          setting.value
                            ? "bg-[#8f1724]"
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`h-5 w-5 rounded-full bg-white transition-transform ${
                            setting.value
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    )}

                    {setting.type === "select" && (
                      <select
                        value={setting.value as string}
                        onChange={(e) => {
                          const newSettings = [...settings];
                          newSettings[groupIdx].settings[settingIdx].value =
                            e.target.value;
                          setSettings(newSettings);
                        }}
                        className="ml-4 flex-shrink-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
                      >
                        <option>{setting.value}</option>
                      </select>
                    )}

                    {setting.type === "input" && (
                      <input
                        type="text"
                        value={setting.value as string}
                        className="ml-4 flex-shrink-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Danger Zone */}
          <div className="rounded-[1.5rem] border border-red-200 bg-red-50 overflow-hidden">
            <div className="border-b border-red-200 px-6 py-4">
              <h2 className="text-lg font-bold text-red-900">Zone de danger</h2>
              <p className="mt-1 text-sm text-red-700">
                Actions irréversibles
              </p>
            </div>

            <div className="divide-y divide-red-200 px-6 py-4">
              <button className="w-full text-left py-4 font-bold text-red-600 hover:text-red-700 transition flex items-center justify-between">
                <span>Supprimer le compte</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-3">
            <button className="flex-1 rounded-full bg-[#8f1724] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6f0f19]">
              Enregistrer les modifications
            </button>
            <button className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-[#181716] transition hover:bg-gray-50">
              Réinitialiser
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
