// Welcome.tsx
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { getString } from "../../utils/language";

export const Welcome = () => {
  const { language } = useContext(AppContext);
  const skills = ["React", "TypeScript", "Node.js"];

  return (
    <div className="flex flex-col items-center gap-0 text-center max-w-[480px] w-full px-4">

      {/* Avatar */}
      <div className="relative mb-7">
        <div className="p-[2px] rounded-full ">
          <div className="w-[118px] h-[118px] rounded-full overflow-hidden bg-indigo-50/50">
            <img
              src="/avatar_real.png"
              alt="Gerardo Lerma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Nombre */}
      <h1
        className="text-[44px] leading-none tracking-tight mb-3.5"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
      >
        <span className="text-gray-900">Gerardo </span>
        <span className="text-indigo-500">Lerma</span>
      </h1>

      {/* Grado con líneas decorativas */}
      <div className="flex items-center justify-center gap-2.5 mb-7">
        
        <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-black/55">
          {getString(language, "degree")}
        </p>
       
      </div>

      {/* Bio */}
      <p className="text-[14.5px] text-gray-500 leading-[1.75] max-w-[360px] mb-7">
        {getString(language, "bio")}
      </p>

      {/* Skills chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium text-gray-700 border border-black/[0.09] rounded-md px-3 py-1 tracking-wide"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
};

export default Welcome;