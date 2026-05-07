import { Link } from 'react-router-dom';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  actionText?: string;
  actionLink?: string;
};

export default function SectionHeader({ title, subtitle, actionText, actionLink }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-4 px-4">
      <div className="flex flex-col gap-1">
        {subtitle && <span className="font-serif italic text-sm text-gray-500">{subtitle}</span>}
        <h2 className="font-serif text-2xl font-semibold text-primary">{title}</h2>
      </div>
      {actionText && actionLink && (
        <Link to={actionLink} className="text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
          {actionText}
        </Link>
      )}
    </div>
  );
}
