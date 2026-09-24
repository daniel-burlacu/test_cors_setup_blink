import { AppHero } from '../ui/ui-layout'
import { useLanguage } from '@/contexts/LanguageContext'

export const ArchitectureProvider: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div>
      <AppHero
        title={t.architecture.title}
        subtitle={t.architecture.subtitle}
      />

    </div>
  )
}
