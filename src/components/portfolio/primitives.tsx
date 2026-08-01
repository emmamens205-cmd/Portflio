export function SectionHeading({
  id,
  title,
  eyebrow,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
}) {
  return (
    <div id={id} className="mb-10 text-center">
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
