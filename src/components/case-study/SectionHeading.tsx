interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => {
  return (
    <h2 className={`font-display text-2xl md:text-3xl font-semibold text-foreground mb-6 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
