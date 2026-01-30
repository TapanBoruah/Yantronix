import ComponentCard from "./glosserycard";
import Component3D from "./glossery3d";
import ComponentTheory from "./glosserythoery";
import ComponentWorking from "./glosseryworking";

export default function ComponentSection({
  title,
  category,
  theory,
  working,
}) {
  return (
    <ComponentCard title={title} category={category}>
      <Component3D label={title} />
      <ComponentTheory text={theory} />
      <ComponentWorking points={working} />
    </ComponentCard>
  );
}
