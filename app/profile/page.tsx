"use client";

import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Camera,
  LogOut,
  Copy,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const profileData = {
  name: "Jean Dupont",
  email: "jean.dupont@example.com",
  phone: "+33 1 23 45 67 89",
  location: "Paris, France",
  joinDate: "01 Octobre 2024",
  bio: "Producteur média passionné par l'innovation et le commerce interactif.",
  role: "Producteur",
  avatar: "JD",
  stats: [
    { label: "Projets créés", value: "12" },
    { label: "Équipes", value: "5" },
    { label: "Collaborateurs", value: "28" },
  ],
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const logout = async () => {
    // TODO: Implement logout
    console.log("Logging out...");
  };

  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="border-b border-black/10 bg-white px-6 py-8 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
            Compte
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Profil
          </h1>
        </div>
      </section>

      {/* Profile Content */}
      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-3xl">
          {/* Profile Card */}
          <div className="rounded-[1.5rem] border border-black/10 bg-white overflow-hidden mb-8">
            {/* Cover Background */}
            <div className="h-32 bg-gradient-to-r from-[#8f1724] to-[#a01d2e]" />

            {/* Profile Info */}
            <div className="relative px-6 pb-6">
              {/* Avatar */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-6 -mt-16 mb-6">
                <div className="relative">
                  <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-[#8f1724] to-[#a01d2e] flex items-center justify-center text-4xl font-black text-white border-4 border-white">
                    {profileData.avatar}
                  </div>
                  <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#8f1724] text-white transition hover:bg-[#6f0f19]">
                    <Camera className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-black text-[#181716]">
                      {profileData.name}
                    </h1>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5f3] px-3 py-1 text-xs font-bold text-[#8f1724]">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Vérifié
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{profileData.role}</p>
                </div>

                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-2.5 text-sm font-bold text-[#181716] transition hover:bg-gray-50"
                  >
                    <Edit className="h-4 w-4" />
                    Éditer
                  </button>
                )}
              </div>

              {/* Bio */}
              {isEditing ? (
                <textarea
                  defaultValue={profileData.bio}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm transition focus:border-[#8f1724] focus:outline-none"
                  rows={3}
                />
              ) : (
                <p className="text-sm text-gray-600 mb-6">{profileData.bio}</p>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            {profileData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-black/10 bg-white p-4 text-center"
              >
                <p className="text-2xl font-black text-[#8f1724]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Information */}
          <div className="rounded-[1.5rem] border border-black/10 bg-white overflow-hidden mb-8">
            <div className="border-b border-black/10 px-6 py-4">
              <h2 className="font-bold text-[#181716]">Informations personnelles</h2>
            </div>

            <div className="divide-y divide-black/5">
              {/* Email */}
              <div className="px-6 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-[#8f1724]" />
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Email
                  </label>
                </div>
                {isEditing ? (
                  <input
                    type="email"
                    defaultValue={profileData.email}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
                  />
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-[#181716]">
                      {profileData.email}
                    </p>
                    <button
                      onClick={handleCopy}
                      className="text-xs font-medium text-[#8f1724] transition hover:text-[#6f0f19]"
                    >
                      {isCopied ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div className="px-6 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 text-[#8f1724]" />
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Téléphone
                  </label>
                </div>
                {isEditing ? (
                  <input
                    type="tel"
                    defaultValue={profileData.phone}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
                  />
                ) : (
                  <p className="font-medium text-[#181716]">{profileData.phone}</p>
                )}
              </div>

              {/* Location */}
              <div className="px-6 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-[#8f1724]" />
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Localisation
                  </label>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={profileData.location}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
                  />
                ) : (
                  <p className="font-medium text-[#181716]">
                    {profileData.location}
                  </p>
                )}
              </div>

              {/* Join Date */}
              <div className="px-6 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-[#8f1724]" />
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Membre depuis
                  </label>
                </div>
                <p className="font-medium text-[#181716]">{profileData.joinDate}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 rounded-full bg-[#8f1724] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6f0f19]"
                >
                  Enregistrer les modifications
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-[#181716] transition hover:bg-gray-50"
                >
                  Annuler
                </button>
              </>
            ) : (
              <button
                onClick={logout}
                className="flex-1 rounded-full border border-red-200 bg-red-50 px-6 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100 flex items-center justify-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
