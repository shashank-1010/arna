import type { ReactNode } from "react";
import { DoodleLayer } from "./DoodleLayer";
import { AmbientSparkles } from "./AmbientSparkles";

export function GinghamFrame({
  children,
  withDoodles = true,
}: {
  children: ReactNode;
  withDoodles?: boolean;
}) {
  return (
    <div className="stage">
      <AmbientSparkles />
      <div className="gingham-side left" aria-hidden="true" />
      <div className="gingham-side right" aria-hidden="true" />
      <div className="card">
        {withDoodles && <DoodleLayer />}
        {children}
      </div>
    </div>
  );
}
