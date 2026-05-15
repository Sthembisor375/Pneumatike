"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-neutral-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-950 outline-none ring-neutral-950/10 transition placeholder:text-neutral-400 focus:border-neutral-500 focus:ring-2"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-950 outline-none ring-neutral-950/10 transition placeholder:text-neutral-400 focus:border-neutral-500 focus:ring-2"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-neutral-700">
          Subject <span className="font-normal text-neutral-500">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          autoComplete="off"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-950 outline-none ring-neutral-950/10 transition placeholder:text-neutral-400 focus:border-neutral-500 focus:ring-2"
          placeholder="How can we help?"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="resize-y rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-950 outline-none ring-neutral-950/10 transition placeholder:text-neutral-400 focus:border-neutral-500 focus:ring-2"
          placeholder="Tell us a little about what you are looking for."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sent"}
        className="inline-flex w-full justify-center rounded-full bg-neutral-950 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sent" ? "Message recorded" : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-neutral-600" role="status">
          Thanks for reaching out. This demo form does not send email yet—connect
          your own endpoint or form provider when you are ready.
        </p>
      )}
    </form>
  );
}
