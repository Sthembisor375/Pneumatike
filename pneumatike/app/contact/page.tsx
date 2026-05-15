import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — Pneumatike",
  description:
    "Get in touch about pastoral mentorship, training, and guidance for individuals and families.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-neutral-50 px-4 py-16 text-neutral-950 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Contact
          </p>
          <h1 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Share a short note about what you are navigating and how we might
            walk alongside you. You will hear back as soon as possible.
          </p>
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
          <p className="mt-10 text-center text-sm text-neutral-500">
            <Link href="/" className="font-medium text-neutral-800 underline-offset-4 hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
