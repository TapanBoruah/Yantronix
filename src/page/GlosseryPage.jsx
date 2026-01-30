import ComponentSection from "@/components/glossery/glosserysection";
import { roboticsComponents } from "@/components/glossery/data";
import React from "react";

export default function RoboticsPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-6 py-30">
      <section className="mx-auto max-w-7xl space-y-16">

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Robotics Components
          </h1>
          <p className="mx-auto max-w-2xl text-slate-400">
            Learn robotics digitally with interactive components,
            theory, and working principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {roboticsComponents.map((item) => (
            <ComponentSection
              key={item.id}
              title={item.title}
              category={item.category}  
              theory={item.theory}
              working={item.working}
              model={item.model}
              scale={item.scale}
            />
          ))}
        </div>

      </section>
    </main>
  );
}
