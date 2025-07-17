import { cn } from '@/lib/utils';

type PageDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageDescription = ({ children, className }: PageDescriptionProps) => {
  return (
    <p className={cn("text-gray-600 text-center mb-8", className)}>
      {children}
    </p>
  );
};