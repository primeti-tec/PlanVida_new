
import { Heart, TestTube, Bandage, Syringe, Stethoscope, Activity } from "lucide-react";

const MedicalBanner = () => {
  const icons = [
    { icon: Heart, position: "top-10 left-10", delay: "0s" },
    { icon: TestTube, position: "top-20 right-20", delay: "0.5s" },
    { icon: Bandage, position: "bottom-20 left-20", delay: "1s" },
    { icon: Syringe, position: "bottom-10 right-10", delay: "1.5s" },
    { icon: Stethoscope, position: "top-1/2 left-10", delay: "2s" },
    { icon: Activity, position: "top-1/3 right-10", delay: "2.5s" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} opacity-5`}
          style={{ animationDelay: item.delay }}
        >
          <item.icon className="h-16 w-16 md:h-24 md:w-24 text-blue-600 animate-pulse" />
        </div>
      ))}
      
      {/* Elementos decorativos extras */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default MedicalBanner;
