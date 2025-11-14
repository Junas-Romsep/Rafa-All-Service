"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  const t = useTranslations("home")

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1200&width=1920&query=modern office cleaning workspace)",
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#29a5b7] mb-6 leading-tight">
              Rafa Allservice AB
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              {t("tagline")}
            </p>
            <motion.a
              href="mailto:info.rafaallservice@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#29a5b7] hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              {t("cta")}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10 hidden md:block"
          >
            <img
              src="/professional-cleaning-team.png"
              alt="Cleaning service"
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("whyUs")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("experience")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "10+ År",
                desc: "Lång och gedigen erfarenhet inom branschen",
              },
              {
                icon: "⚡",
                title: "Flexibel",
                desc: "Korta eller långsiktiga uppdrag",
              },
              {
                icon: "✨",
                title: "Kvalitet",
                desc: "Anpassat efter era behov",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border-2 border-[#29a5b7] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#29a5b7] text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300"
              >
                {t("learnMore")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
