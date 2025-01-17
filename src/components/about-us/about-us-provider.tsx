import { AppHero } from '../ui/ui-layout'

export const AboutUsProvider: React.FC = () => {

  return (
    <div>
         <AppHero title="About Us" subtitle='"The time to act is now! ... before their silence becomes our legacy."' />
         <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
         <div className="space-y-0"> {/* Remove extra vertical spacing */}
    </div>
         </div>
    </div>
  );
};
