export default function SectionHeader({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "text-center mx-auto max-w-3xl" : ""}`}>
      {eyebrow && (
        <p className={light ? "eyebrow text-brand-primary" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-brand-text"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
            light ? "text-white/75" : "text-neutral-mid"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
