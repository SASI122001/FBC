import { useEffect, useRef } from 'react';

/**
 * Reveal - wraps children with a scroll-triggered fade+slide animation.
 * direction: 'up' (default) | 'left' | 'right' | 'none'
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0) translateX(0) scale(1)';
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const initialTransform =
        direction === 'left'
            ? 'translateX(-40px)'
            : direction === 'right'
                ? 'translateX(40px)'
                : direction === 'none'
                    ? 'none'
                    : 'translateY(30px) scale(0.98)';

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: initialTransform,
                transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
