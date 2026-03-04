import { siteData } from '../../config/siteData';

/**
 * PageHeader - reusable dark hero banner for inner pages.
 * Props: eyebrow (string), title (string), subtitle (string)
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
    return (
        <div className="page-header-bg pt-40 pb-20 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                {eyebrow && (
                    <span className="text-church-accent tracking-widest uppercase text-sm font-medium mb-4 block">
                        {eyebrow}
                    </span>
                )}
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">{title}</h1>
                {subtitle && (
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">{subtitle}</p>
                )}
            </div>
        </div>
    );
}
