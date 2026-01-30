import ComponentCard from "./glosserycard";
import Component3D from "./glossery3d";
import ComponentTheory from "./glosserythoery";
import ComponentWorking from "./glosseryworking";

export default function ComponentSection({
  title,
  category,
  theory,
  working,
  model,
  scale, 
}) {
  return (
    <ComponentCard title={title} category={category}>
      {/* Render 3D ONLY if model exists */}
      {model && <Component3D model={model} scale={scale}/>}

      <ComponentTheory text={theory} />
      <ComponentWorking points={working} />
    </ComponentCard>
  );
}
