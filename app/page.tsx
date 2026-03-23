"use client";

import { useMemo, useState, type FormEvent } from "react";

type SubmitState = "idle" | "error" | "success";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const isEmailValid = useMemo(() => {
    return /^\S+@\S+\.\S+$/.test(email.trim());
  }, [email]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isEmailValid) {
      setSubmitState("error");
      return;
    }
    // UI-only waitlist capture (no backend wired yet).
    setSubmitState("success");
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#070211] text-zinc-100">
      {/* Purple glow background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-56 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#5B00FF]/25 blur-3xl" />
        <div className="absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#FF00C8]/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#5B00FF]/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070211]/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-purple-500 bg-clip-text">
              Fempay
            </span>
          </div>
          <a
            href="#join"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-14 pt-14 sm:grid-cols-2 sm:pb-20 sm:pt-20 lg:gap-10">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF00C8]" />
              Early access for students + families
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Student financing, <span className="text-[#FF00C8]">empowered</span>
              <br />
              by you.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
              Fempay helps students take control of educational finances—securely,
              transparently, and with the right support when you need it.
            </p>

            <div id="join" className="mt-7">
              <form onSubmit={onSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm font-medium text-zinc-200"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSubmitState("idle");
                    }}
                    className={[
                      "w-full rounded-2xl mb-3 border bg-white/5 px-4 py-3 text-zinc-100 shadow-sm outline-none transition",
                      submitState === "error"
                        ? "border-rose-400/70 focus:border-rose-300/70 focus:ring-2 focus:ring-rose-400/20"
                        : "border-white/10 focus:border-fuchsia-400/70 focus:ring-2 focus:ring-fuchsia-400/20",
                    ].join(" ")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitState === "success"}
                  className="text-left w-full rounded-2xl cursor-pointer bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(91,0,255,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto sm:min-w-[210px]"
                >
                  {submitState === "success" ? "You're in!" : "Join the waitlist"}
                </button>

                {submitState === "error" ? (
                  <p className="text-sm text-rose-300">
                    Please enter a valid email to join.
                  </p>
                ) : null}
              </form>

              <p className="mt-3 text-xs text-zinc-400">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(91,0,255,0.18)]">
              <h2 className="text-lg font-semibold text-zinc-100">
                What you get first
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    💳
                  </span>
                  Spending controls designed for students
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    🔒
                  </span>
                  Secure transactions with clear visibility
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    🤝
                  </span>
                  Parent + family collaboration where it matters
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    🪪
                  </span>
                  Fast student verification
                </li>
              </ul>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-zinc-400">
                  Tip
                </p>
                <p className="mt-1 text-sm text-zinc-200">
                  The waitlist helps us prioritize features for real student needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 pt-4">
          <div className="flex items-end justify-between gap-6">
            <h3 className="text-2xl font-semibold text-purple-200">
              Built for students, trusted by families
            </h3>
           
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "💳",
                title: "Managed Spending",
                desc: "Track spending and set limits with clear approvals.",
              },
              {
                icon: "🔒",
                title: "Secure Transactions",
                desc: "Industry-grade security with transparent activity.",
              },
              {
                icon: "🤝",
                title: "Parent Partnerships",
                desc: "Invite families to fund and monitor together.",
              },
              {
                icon: "🪪",
                title: "Student Verification",
                desc: "Fast, focused verification so the product stays right.",
              }
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border cursor-pointer border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="flex items-start gap-3">
                  {/* <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
                    {f.icon}
                  </div> */}
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">
                      {f.title}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
                  </div>
                </div>
                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-[#070211]/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Fempay. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a className="text-sm text-zinc-300 hover:text-zinc-100" href="#join">
              Join
            </a>
            <span className="text-zinc-600">•</span>
            <a className="text-sm text-zinc-300 hover:text-zinc-100" href="#">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
