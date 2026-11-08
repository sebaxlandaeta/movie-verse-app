import { useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  onIntersect: () => void;
  hasNextPage?: boolean;
  isLoading?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export const useInfiniteScroll = ({
  onIntersect,
  hasNextPage = true,
  isLoading = false,
  rootMargin = '0px 300px 0px 0px',
  threshold = 0.1,
}: UseInfiniteScrollOptions) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sentinelRef = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (!node || !hasNextPage || isLoading) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            onIntersect();
          }
        },
        { root: null, rootMargin, threshold }
      );

      observerRef.current.observe(node);
    },
    [onIntersect, hasNextPage, isLoading, rootMargin, threshold]
  );

  return { sentinelRef };
};