"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

export default function Services() {
  const t = useTranslations()

  const cleaningServices = [
    { title: t("services.offices"), icon: "🏢" },
    { title: t("services.schools"), icon: "📚" },
    { title: t("services.preschools"), icon: "👶" },
  ]

  const restaurantServices = [
    { title: t("services.dishwashing"), icon: "🍽️" },
    { title: t("services.bartending"), icon: "🍹" },
    { title: t("services.restaurantCleaning"), icon: "🧹" },
  ]

  const uniqueQualities = [t("services.experience10"), t("services.flexible"), t("services.customized")]

  return (
    <main>
      {/* Services Hero */}
      <section className="relative min-h-96 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center overflow-hidden py-20">
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("services.title")}</h1>
            <p className="text-xl text-gray-300">Helhetslösningar för era affärsbehov.</p>
          </motion.div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6" >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 brand-underline"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Städ tjänster</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Från kontorsstädning till förskolestädning, vi har erfarenhet för alla miljöer.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cleaningServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#d3d3d3] from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 brand-underline"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Restaurang tjänster</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Professionella bemanningstjänster inom restaurang, café och event.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {restaurantServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className=" bg-[#d3d3d3] p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Qualities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 brand-underline"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t("services.unique")}</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            {uniqueQualities.map((quality, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-100"
              >
                <FaCheckCircle className="text-[#29a5b7] text-2xl flex-shrink-0" />
                <p className="text-lg text-slate-700">{quality}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Section */}
      <section className="py-16 md:py-24 bg-[#29a5b7] from-teal-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("services.unique")}</h2>
            <p className="text-xl text-teal-50 leading-relaxed">{t("services.satisfaction")}</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
