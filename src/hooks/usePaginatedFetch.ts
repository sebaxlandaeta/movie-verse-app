import { useState, useEffect, useCallback } from 'react';

interface UsePaginatedFetchProps<T> {
  fetchService: (page: number) => Promise<T[]>;
  maxPages?: number;
}

export function usePaginatedFetch<T>({ fetchService, maxPages = 100 }: UsePaginatedFetchProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setIsLoading(true);
        const newData = await fetchService(page);

        if (isMounted && newData) {
          setItems((prev) => (page === 1 ? newData : [...prev, ...newData]));
          if (newData.length === 0 || page >= maxPages) {
            setHasMore(false);
          }
        }
      } catch (error) {
        console.error("Error al cargar más elementos:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [page, fetchService, maxPages]);

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [isLoading, hasMore]);

  return { movies: items, loadMore, isLoading, hasMore };
}