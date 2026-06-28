"use client";

import { BarChart3, Bell, CheckCircle2, ClipboardList, Lock, MessageSquareText, Package, Send, Users } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { marketStudy, privateTasks, sharedFeed, teamMembers, type TeamRole } from "@/data/admin";

type AdminSection = "overview" | "feed" | "products" | "team" | "tasks";

const sections: Array<{ id: AdminSection; label: string; icon: typeof BarChart3 }> = [
  { id: "overview", label: "Vue d'ensemble", icon: BarChart3 },
  { id: "feed", label: "Feed commun", icon: MessageSquareText },
  { id: "products", label: "Produits", icon: Package },
  { id: "team", label: "Profils équipe", icon: Users },
  { id: "tasks", label: "Tâches privées", icon: ClipboardList }
];

const money = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function formatMoney(value: number) {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)} Md $`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)} M $`;
  return money.format(value);
}

function Bar({ value, max, tone = "ember" }: { value: number; max: number; tone?: "ember" | "agro" | "gold" }) {
  const colors = { ember: "bg-ember", agro: "bg-agro", gold: "bg-gold" };
  return (
    <div className="h-3 overflow-hidden rounded-full bg-charcoal/10">
      <div className={`h-full rounded-full ${colors[tone]}`} style={{ width: `${Math.max(4, (value / max) * 100)}%` }} />
    </div>
  );
}

export function AdminDashboard() {
  const [section, setSection] = useState<AdminSection>("overview");
  const [activeRole, setActiveRole] = useState<TeamRole>("pdg");
  const currentMember = teamMembers.find((member) => member.id === activeRole) ?? teamMembers[0];
  const myTasks = useMemo(() => privateTasks.filter((task) => task.owner === activeRole), [activeRole]);
  const maxFunnel = marketStudy.funnel[0].value;
  const maxRevenue = Math.max(...marketStudy.projections.map((item) => item.revenue));
  const maxScore = Math.max(...marketStudy.priorityProducts.map((item) => item.score));

  return (
    <section className="min-h-screen bg-[#f4efe7] px-3 pb-10 pt-24 text-charcoal sm:px-4 md:px-8 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[280px_1fr] lg:gap-6">
        <aside className="rounded-lg border border-charcoal/10 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)] lg:overflow-y-auto">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-ember">Admin Flam</p>
            <h1 className="mt-2 font-display text-2xl font-black sm:text-3xl">Espace équipe</h1>
          </div>
          <label className="grid gap-2 text-sm font-bold">
            Session active
            <select className="focus-ring rounded-md border border-charcoal/15 bg-cream px-3 py-3" value={activeRole} onChange={(event) => setActiveRole(event.target.value as TeamRole)}>
              {teamMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-4 rounded-md bg-cream p-4">
            <p className="text-sm font-black">{currentMember.role}</p>
            <p className="mt-2 text-xs leading-5 text-ash">{currentMember.mission}</p>
          </div>
          <nav className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" aria-label="Menu dashboard">
            {sections.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  className={`focus-ring flex min-h-12 items-center gap-2 rounded-md px-3 py-3 text-left text-xs font-black transition sm:text-sm ${
                    section === item.id ? "bg-charcoal text-cream" : "hover:bg-cream"
                  }`}
                  key={item.id}
                  onClick={() => setSection(item.id)}
                >
                  <Icon className="shrink-0" size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="grid gap-5 lg:gap-6">
          <header className="rounded-lg bg-charcoal p-5 text-cream shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-gold sm:text-sm">Prototype admin interne</p>
                <h2 className="mt-3 font-display text-[clamp(2rem,9vw,3.75rem)] font-black leading-tight">Gouligou Command Center</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-cream/72 sm:text-base">
                  Un espace commun pour la communication d&apos;équipe, les ressources partagées, les profils et les tâches visibles uniquement par membre sélectionné.
                </p>
              </div>
              <div className="rounded-md border border-gold/30 px-4 py-3 text-sm font-bold text-gold">
                Source produit : {marketStudy.source}
              </div>
            </div>
          </header>

          {section === "overview" && (
            <div className="grid gap-5 lg:gap-6">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {marketStudy.funnel.map((item) => (
                  <article className="rounded-lg bg-white p-4 shadow-sm sm:p-5" key={item.label}>
                    <p className="text-sm font-bold text-ash">{item.label}</p>
                    <p className="mt-2 font-display text-2xl font-black sm:text-3xl">{formatMoney(item.value)}</p>
                    <div className="mt-4">
                      <Bar value={item.value} max={maxFunnel} />
                    </div>
                  </article>
                ))}
              </div>
              <div className="grid gap-5 xl:grid-cols-[1.1fr_.9fr] xl:gap-6">
                <Panel title="Synthèse marché" icon={Bell}>
                  <div className="grid gap-3">
                    {marketStudy.summary.map((item) => (
                      <p className="rounded-md bg-cream p-4 text-sm font-semibold leading-6 text-charcoal/80" key={item}>
                        {item}
                      </p>
                    ))}
                  </div>
                </Panel>
                <Panel title="Projections 5 ans" icon={BarChart3}>
                  <div className="grid gap-4">
                    {marketStudy.projections.map((item) => (
                      <div key={item.year} className="grid gap-2">
                        <div className="flex flex-wrap justify-between gap-2 text-sm">
                          <span className="font-black">{item.year}</span>
                          <span>{money.format(item.revenue)} CA</span>
                        </div>
                        <Bar value={item.revenue} max={maxRevenue} tone="agro" />
                        <p className="text-xs font-bold text-ash">Résultat exploitation : {money.format(item.result)}</p>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
            </div>
          )}

          {section === "feed" && (
            <div className="grid gap-5 xl:grid-cols-[1fr_320px] xl:gap-6">
              <Panel title="Feed commun d'équipe" icon={MessageSquareText}>
                <div className="mb-5 rounded-lg border border-charcoal/10 bg-cream p-4">
                  <textarea className="focus-ring min-h-28 w-full rounded-md border border-charcoal/15 bg-white p-4" placeholder="Partager une annonce, une question ou une ressource à toute l'équipe..." />
                  <div className="mt-3 flex justify-end">
                    <button className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-black text-white sm:w-auto">
                      <Send size={16} /> Publier
                    </button>
                  </div>
                </div>
                <div className="grid gap-4">
                  {sharedFeed.map((post) => (
                    <article className="rounded-lg border border-charcoal/10 bg-white p-4 sm:p-5" key={`${post.author}-${post.time}`}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-display text-lg font-black sm:text-xl">{post.author}</p>
                        <span className="text-xs font-bold text-ash">{post.time}</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-ember">{post.channel}</p>
                      <p className="mt-3 text-sm leading-6 text-charcoal/78 sm:text-base sm:leading-7">{post.body}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span className="rounded-full bg-cream px-3 py-1 text-xs font-black text-ash" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </Panel>
              <Panel title="Ressources communes" icon={ClipboardList}>
                <div className="grid gap-3">
                  {["Étude de marché Gouligou", "Catalogue cible 40 produits", "Pipeline distributeurs", "Guide qualité & étiquettes"].map((resource) => (
                    <button className="focus-ring rounded-md border border-charcoal/10 bg-cream p-4 text-left text-sm font-black transition hover:border-ember" key={resource}>
                      {resource}
                    </button>
                  ))}
                </div>
              </Panel>
            </div>
          )}

          {section === "products" && (
            <div className="grid gap-5 lg:gap-6">
              <Panel title="Produits Gouligou depuis l'étude de marché" icon={Package}>
                <div className="grid gap-4 md:grid-cols-2">
                  {marketStudy.priorityProducts.map((product) => (
                    <article className="rounded-lg border border-charcoal/10 bg-cream p-4" key={product.product}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl font-black sm:text-2xl">{product.product}</h3>
                          <p className="text-sm font-bold text-ash">{product.material} • {product.phase}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-charcoal px-3 py-1 text-sm font-black text-cream">{product.score}</span>
                      </div>
                      <div className="mt-4">
                        <Bar value={product.score} max={maxScore} tone={product.phase === "Phase 2" ? "gold" : "ember"} />
                      </div>
                    </article>
                  ))}
                </div>
              </Panel>
              <div className="grid gap-5 xl:grid-cols-2 xl:gap-6">
                <Panel title="Segments clients" icon={Users}>
                  <div className="grid gap-4">
                    {marketStudy.segments.map((segment) => (
                      <div key={segment.name}>
                        <div className="mb-1 flex flex-wrap justify-between gap-2 text-sm">
                          <span className="font-black">{segment.name}</span>
                          <span>{segment.mix}% CA cible</span>
                        </div>
                        <Bar value={segment.mix} max={40} tone="agro" />
                        <p className="mt-1 text-xs text-ash">Attractivité {segment.attractiveness} • Accessibilité {segment.access}</p>
                      </div>
                    ))}
                  </div>
                </Panel>
                <Panel title="Concurrence & opportunités" icon={BarChart3}>
                  <div className="grid gap-3">
                    {marketStudy.competitors.map((item) => (
                      <div className="rounded-md bg-cream p-4" key={item.category}>
                        <div className="flex flex-wrap justify-between gap-2">
                          <p className="font-black">{item.category}</p>
                          <p className="text-sm font-bold text-ash">Intensité {item.intensity}/5</p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-charcoal/72">{item.opportunity}</p>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
            </div>
          )}

          {section === "team" && (
            <Panel title="Profils uniques" icon={Users}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {teamMembers.map((member) => (
                  <article className="rounded-lg border border-charcoal/10 bg-cream p-4 sm:p-5" key={member.id}>
                    <div className="mb-4 h-2 rounded-full" style={{ background: member.color }} />
                    <h3 className="font-display text-xl font-black sm:text-2xl">{member.name}</h3>
                    <p className="mt-1 text-sm font-black text-ember">{member.role}</p>
                    <p className="mt-3 text-sm leading-6 text-charcoal/72">{member.mission}</p>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black text-ash">
                      <Lock size={13} /> Tâches individuelles privées
                    </p>
                  </article>
                ))}
              </div>
            </Panel>
          )}

          {section === "tasks" && (
            <Panel title={`Tâches visibles par : ${currentMember.name}`} icon={Lock}>
              <div className="grid gap-4">
                {myTasks.map((task) => (
                  <article className="grid gap-3 rounded-lg border border-charcoal/10 bg-cream p-4 sm:p-5 md:grid-cols-[1fr_auto] md:items-center" key={task.title}>
                    <div>
                      <h3 className="font-display text-xl font-black sm:text-2xl">{task.title}</h3>
                      <p className="mt-1 text-sm text-ash">Échéance : {task.due}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-ash">{task.status}</span>
                      <span className="rounded-full bg-ember px-3 py-1 text-xs font-black text-white">{task.priority}</span>
                    </div>
                  </article>
                ))}
                <div className="rounded-lg border border-dashed border-charcoal/20 p-4 sm:p-5">
                  <h3 className="font-display text-xl font-black sm:text-2xl">Créer une tâche individuelle</h3>
                  <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_180px_auto]">
                    <input className="focus-ring rounded-md border border-charcoal/15 px-4 py-3" placeholder="Nouvelle tâche privée..." />
                    <select className="focus-ring rounded-md border border-charcoal/15 px-4 py-3" defaultValue={activeRole}>
                      {teamMembers.map((member) => (
                        <option value={member.id} key={member.id}>
                          {member.name}
                        </option>
                      ))}
                    </select>
                    <button className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 font-black text-cream">
                      <CheckCircle2 size={18} /> Assigner
                    </button>
                  </div>
                </div>
              </div>
            </Panel>
          )}
        </div>
      </div>
    </section>
  );
}

function Panel({ title, icon: Icon, children }: { title: string; icon: typeof BarChart3; children: ReactNode }) {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ember/10 text-ember">
          <Icon size={20} />
        </span>
        <h2 className="font-display text-2xl font-black sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
