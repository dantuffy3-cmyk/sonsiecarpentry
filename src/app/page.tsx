export default function SonsieCarpentryWebsite() {
  const services = [
    {
      title: "Architectural Renovations",
      text: "Detailed renovation carpentry for homeowners, designers, and architects who care about finish quality, flow, and getting the job done properly.",
    },
    {
      title: "Extensions & Structural Carpentry",
      text: "Experienced framing and structural renovation work delivered with clear communication, sound planning, and a high standard of workmanship.",
    },
    {
      title: "Decks & Outdoor Living",
      text: "Premium decks, pergolas, and outdoor spaces built for everyday use, long-term durability, and a clean, polished result.",
    },
    {
      title: "Custom Timber Work",
      text: "Bespoke timber features and fine carpentry details that bring warmth, character, and precision into the finished home.",
    },
  ];

  const points = [
    "Clear quoting and straight communication",
    "Reliable site presence and professional delivery",
    "High standards in finish quality and detail",
    "Respect for budgets, timelines, and the home",
  ];

  const process = [
    {
      step: "01",
      title: "Site Visit & Scope",
      text: "We take the time to understand the project, the level of finish required, and what matters most to you before pricing begins.",
    },
    {
      step: "02",
      title: "Quote & Planning",
      text: "You receive a clear proposal with practical advice, realistic expectations, and a straightforward path forward.",
    },
    {
      step: "03",
      title: "Build & Deliver",
      text: "The work is carried out with care, precision, and strong communication from start to finish.",
    },
  ];

  const faqs = [
    {
      question: "What type of projects do you take on?",
      answer:
        "Sonsie Carpentry focuses on residential renovations, extensions, decks, outdoor living areas, and detail-driven carpentry projects where quality matters.",
    },
    {
      question: "Do you work with architects and designers?",
      answer:
        "Yes. We are well suited to projects that require close attention to drawings, design intent, finish details, and professional communication.",
    },
    {
      question: "Do you quote before construction starts?",
      answer:
        "Yes. Every project begins with a clear understanding of the scope, site conditions, and expected result so the quote reflects the real job, not guesswork.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden bg-[#f7f4ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,37,36,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(120,113,108,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <header className="flex items-center justify-between gap-6 pb-10">
            <div>
              <p className="text-2xl font-semibold tracking-tight">Sonsie Carpentry</p>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Pty Ltd</p>
            </div>
            <a
              href="#contact"
              className="rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
          </header>

          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-stone-300 bg-white/80 px-4 py-1.5 text-sm tracking-wide text-stone-700 shadow-sm">
                Premium Residential Renovations • Victoria
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                High-end renovation carpentry built with precision, care, and old-school pride in the finish.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
                Sonsie Carpentry delivers quality residential renovations, extensions, decks, and fine carpentry for clients who want a reliable builder, strong communication, and work that genuinely holds its standard.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
                <a
                  href="#about"
                  className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  Why Choose Sonsie
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm sm:translate-y-8">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Specialising in</p>
                <p className="mt-3 text-2xl font-semibold">Renovations & extensions</p>
                <p className="mt-3 text-stone-600">Built for clients who want a polished result without the usual stress and mess.</p>
              </div>
              <div className="rounded-[2rem] border border-stone-200 bg-stone-900 p-7 text-white shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-300">Known for</p>
                <p className="mt-3 text-2xl font-semibold">Detail that lasts</p>
                <p className="mt-3 text-stone-300">Because premium work is not about rushing. It is about getting the details right.</p>
              </div>
              <div className="rounded-[2rem] border border-stone-200 bg-stone-100 p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Working with</p>
                <p className="mt-3 text-2xl font-semibold">Homeowners & architects</p>
                <p className="mt-3 text-stone-600">A strong fit for projects where design intent and clean execution both matter.</p>
              </div>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Approach</p>
                <p className="mt-3 text-2xl font-semibold">Straight, calm, capable</p>
                <p className="mt-3 text-stone-600">The kind of communication and site presence that makes clients feel they are in safe hands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Carpentry for renovation projects where quality is the brief.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            We focus on work that rewards craftsmanship, thoughtful problem-solving, and a sharp eye for detail — not cut corners.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold leading-7">{service.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Why Clients Choose Us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Premium results come from standards, not slogans.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              At Sonsie Carpentry, the goal is simple: do the job properly, communicate clearly, and deliver work that still looks right years later. That is how strong reputations are built.
            </p>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Whether the project is a renovation, extension, deck, or custom timber detail, the same principles apply — quality workmanship, strong site conduct, and pride in the finish.
            </p>
          </div>

          <div className="grid gap-4">
            {points.map((point) => (
              <div key={point} className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-base shadow-sm">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Our Process</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              A smoother build starts with a better process.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Good projects are not just built well. They are planned well, quoted honestly, and communicated clearly from the start.
            </p>
          </div>

          <div className="grid gap-5">
            {process.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-300">For Homeowners</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">You want confidence before the build even starts.</h3>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                We understand that inviting someone into your home is a big decision. You deserve a builder who turns up, communicates properly, and takes genuine pride in the outcome.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-300">For Architects & Designers</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">You want a trade partner who respects the detail.</h3>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                Sonsie Carpentry is built for projects where workmanship, finish quality, and strong communication matter just as much as speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Frequently Asked</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">A few common questions.</h2>
        </div>

        <div className="mt-12 grid gap-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-stone-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-stone-200 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Planning a renovation or premium carpentry project?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                Get in touch to discuss your plans, request a quote, or start a conversation about your next project.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <div className="space-y-5 text-stone-700">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Business</p>
                  <p className="mt-1 text-lg font-medium">Sonsie Carpentry Pty Ltd</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Service Area</p>
                  <p className="mt-1 text-lg">Yarra Valley, Victoria — Based in Healesville 3777</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Email</p>
                  <p className="mt-1 text-lg">admin@sonsiecarpentry.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Phone</p>
                  <p className="mt-1 text-lg">0449 738 233</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:admin@sonsiecarpentry.com"
                  className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Email Now
                </a>
                <a
                  href="tel:0449738233"
                  className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-stone-200 pt-6 text-sm text-stone-500">
            © {new Date().getFullYear()} Sonsie Carpentry Pty Ltd. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
