import { BlinksSAF } from '../blink/blink'
import { AppHero } from '../ui/ui-layout'

export const DonateProvider: React.FC = () => {

  return (
    <div>
         <AppHero title="Donate" subtitle='"The time to act is now! ... before their silence becomes our legacy."' />
         <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
         <div className="space-y-0"> {/* Remove extra vertical spacing */}
      <BlinksSAF />
    </div>
         </div>
    </div>
  );
};
