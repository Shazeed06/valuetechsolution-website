type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="page-header">
      <div className="container-x">
        {eyebrow && (
          <span className="eyebrow">
            <span className="h-px w-8 bg-carbon-500" />
            {eyebrow}
          </span>
        )}
        <h1 className="heading-xl gap-eyebrow-heading max-w-5xl">{title}</h1>
        {description && (
          <p className="lede mt-6 sm:mt-8 max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
