"use client";

import { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Name
        </label>
        <input
          required
          name="name"
          className="mt-2 w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Company
        </label>
        <input
          name="company"
          className="mt-2 w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryDark"
      >
        {isSubmitted ? "Message sent" : "Send request"}
      </button>
    </form>
  );
};
