"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const t = useTranslations()

  return (
    <main>
      {/* About Hero */}
      <section className="relative min-h-96 bg-gradient-to-br from-[#29a5b7] to-[#29a5b7] flex items-center overflow-hidden py-20">
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("about.title")}</h1>
            <p className="text-xl text-teal-50">{t("about.intro")}</p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <Image
                src="/images/Daniandrafael.jpg"
                alt="Rafa Allservice team - Daniella and Rafael"
                width={288}
                height={288}
                className="h-64 w-64 md:h-72 md:w-72 object-cover rounded-xl shadow-lg border border-slate-200 ring-4 ring-[#29a5b7]/10 mx-auto"
                priority
              />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">{t("about.description")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-[#29a5b7]"
            >
              <h3 className="text-2xl font-bold text-[#29a5b7] mb-4">Rafael Arellano</h3>
              <p className="text-slate-700 leading-relaxed">{t("about.rafael")}</p>
            </motion.div>
            

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-[#29a5b7]"
            >
              <h3 className="text-2xl font-bold text-[#29a5b7] mb-4">Daniella Ruz Ramos</h3>
              <p className="text-slate-700 leading-relaxed">{t("about.daniella")}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-[#29a5b7] p-8 rounded-lg"
          >
            <p className=" text-lg text-slate-700 leading-relaxed">{t("about.closing")}</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
