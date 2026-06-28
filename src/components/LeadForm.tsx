"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

const fields = ["name", "company", "email", "country", "type", "volume"] as const;

export function LeadForm({ dict }: { dict: Dictionary }) {
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await fetch("/api/lead", { method: "POST", body: JSON.stringify(Object.fromEntries(form)), headers: { "Content-Type": "application/json" } });
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-charcoal/10 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label className="grid gap-2 text-sm font-bold" key={field}>
            {dict.form[field]}
            <input className="focus-ring rounded-md border border-charcoal/15 px-4 py-3 font-normal" name={field} required={field !== "volume"} type={field === "email" ? "email" : "text"} />
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-bold">
        {dict.form.message}
        <textarea className="focus-ring min-h-32 rounded-md border border-charcoal/15 px-4 py-3 font-normal" name="message" required />
      </label>
      <button className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 font-black text-white transition hover:bg-braise" type="submit">
        <Send size={18} />
        {dict.form.send}
      </button>
      {sent && <p className="rounded-md bg-agro/10 px-4 py-3 text-sm font-bold text-agro">{dict.form.success}</p>}
    </form>
  );
}
