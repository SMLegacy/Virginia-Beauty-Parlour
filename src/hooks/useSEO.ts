/**
 * Custom React hook to update document title and meta description
 * on a per-page basis for on-page SEO optimization.
 */
import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    canonicalPath?: string;
}

export function useSEO({ title, description, canonicalPath }: SEOProps) {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update / create meta description
        let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }

        // Update OG title + description
        const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        // Update canonical link
        if (canonicalPath) {
            let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
            if (canonicalEl) {
                canonicalEl.setAttribute('href', `https://virginiabeautyparlour.co.za${canonicalPath}`);
            }
        }
    }, [title, description, canonicalPath]);
}
