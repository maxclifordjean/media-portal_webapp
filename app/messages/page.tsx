"use client";

import Link from "next/link";
import { MessageSquare, Search, Send, MoreVertical, ArrowLeft } from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Support Smedia",
    message: "Bonjour, comment pouvons-nous vous aider ?",
    timestamp: "À l'instant",
    avatar: "S",
    unread: 2,
  },
  {
    id: 2,
    name: "Alice Dupont",
    message: "Merci pour les infos sur le projet",
    timestamp: "Il y a 2h",
    avatar: "A",
    unread: 0,
  },
  {
    id: 3,
    name: "Équipe Projet",
    message: "On se met d'accord sur les dates ?",
    timestamp: "Hier",
    avatar: "E",
    unread: 0,
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-full bg-[#faf9f6] text-[#181716]">
      {/* Header */}
      <section className="border-b border-black/10 bg-white px-6 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a1d29]">
            Communication
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Messages
          </h1>
        </div>
      </section>

      {/* Messages Container */}
      <section className="flex flex-1 gap-6 px-6 py-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex h-[calc(100vh-300px)] gap-6 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm">
            {/* Conversations List */}
            <div className="w-full flex-shrink-0 border-r border-black/10 md:w-80">
              <div className="flex h-16 items-center border-b border-black/10 px-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full rounded-lg border border-black/10 bg-gray-50 pl-10 pr-4 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
                  />
                </div>
              </div>

              <div className="overflow-y-auto h-[calc(100%-64px)]">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`w-full flex items-center gap-3 border-b border-black/5 px-6 py-4 text-left transition ${
                      selectedConversation.id === conv.id
                        ? "bg-[#fff5f3] border-l-4 border-l-[#8f1724]"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        selectedConversation.id === conv.id
                          ? "bg-[#8f1724] text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {conv.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#181716]">
                        {conv.name}
                      </p>
                      <p className="truncate text-xs text-gray-600">
                        {conv.message}
                      </p>
                    </div>
                    {conv.unread > 0 && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8f1724] text-xs font-bold text-white">
                        {conv.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="hidden flex-1 flex-col md:flex">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
                <div>
                  <h2 className="font-bold text-[#181716]">
                    {selectedConversation.name}
                  </h2>
                  <p className="text-xs text-gray-600">
                    {selectedConversation.timestamp}
                  </p>
                </div>
                <button className="rounded-lg border border-black/10 p-2 transition hover:bg-gray-50">
                  <MoreVertical className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 p-6">
                <div className="flex justify-start">
                  <div className="max-w-xs rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-900">
                    Bonjour! Comment allez-vous?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-xs rounded-lg bg-[#8f1724] px-4 py-2 text-sm text-white">
                    Très bien, merci! Comment puis-je vous aider?
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-black/10 px-6 py-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Votre message..."
                    className="flex-1 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm transition focus:border-[#8f1724] focus:outline-none"
                  />
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8f1724] text-white transition hover:bg-[#6f0f19]">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex-1 flex flex-col">
              <div className="border-b border-black/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Link href="#" className="text-[#8f1724]">
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                  <h2 className="font-bold">{selectedConversation.name}</h2>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <p className="text-center text-sm text-gray-600">
                  Sélectionnez une conversation pour continuer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
