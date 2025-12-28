import { Check } from "lucide-react";

interface CheckItemProps {
  children: React.ReactNode;
  className?: string;
}

const CheckItem = ({ children, className = "" }: CheckItemProps) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check size={12} className="text-primary" />
      </div>
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
};

export default CheckItem;
