import { ReactNode } from "react";

export default function SectionContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section
      className="
        max-w-6xl
        mx-auto
        px-6
        py-16
      "
    >
      {children}
    </section>
  );
}
