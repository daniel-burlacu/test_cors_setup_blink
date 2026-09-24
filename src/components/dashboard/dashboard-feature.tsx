'use client';
import { motion } from 'framer-motion';
import logo from '../../../public/SAFLogo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const ENTITIES = [
  { src: '/entities/shelters.png', key: 'entityShelters' as const },
  { src: '/entities/vets.png', key: 'entityVets' as const },
  { src: '/entities/hospitals.png', key: 'entityHospitals' as const },
  { src: '/entities/owners.png', key: 'entityOwners' as const },
  { src: '/entities/pharma.png', key: 'entityPharma' as const },
  { src: '/entities/food.png', key: 'entityFood' as const },
  { src: '/entities/insurance.png', key: 'entityInsurance' as const },
];

export default function DashboardFeature() {
  const { t } = useLanguage();

  return (
    <div className="universe-page relative overflow-hidden flex flex-col px-3 sm:px-6 py-6 sm:py-10">
      <div className="universe-stars" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        <motion.p
          className="ai-pill mb-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.general.aiUniverseLabel}
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-green-300 to-teal-200 mb-2"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t.general.brandName}
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-2xl font-medium text-emerald-100/90 max-w-3xl px-2 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {t.general.tagline}
        </motion.p>

        <div className="universe" role="img" aria-label={t.general.universeAria}>
          <div className="universe-glow" />
          <div className="universe-ring universe-ring-outer" />
          <div className="universe-ring universe-ring-inner" />

          <div className="universe-core">
            <motion.img
              alt="ANIVERA"
              src={logo.src}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="universe-orbit">
            {ENTITIES.map((entity, index) => (
              <div
                key={entity.key}
                className="satellite"
                style={{ ['--i' as string]: index }}
              >
                <div className="satellite-face">
                  <div className="satellite-bob" style={{ animationDelay: `${index * 0.35}s` }}>
                    <img src={entity.src} alt="" />
                    <span className="satellite-label">{t.general[entity.key]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="satellite-legend">
          {ENTITIES.map((entity) => (
            <li key={entity.key}>
              <img src={entity.src} alt="" />
              <span>{t.general[entity.key]}</span>
            </li>
          ))}
        </ul>

        <motion.p
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-emerald-50/85 max-w-3xl leading-relaxed px-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.general.universeIntro}
        </motion.p>
      </div>
    </div>
  );
}
