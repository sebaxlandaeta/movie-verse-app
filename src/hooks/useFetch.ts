import { useState, useEffect } from 'react';

export function useFetch<T>(funct: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
        try {
            setLoading(true);
            setError(null);
            const result = await funct();
            setData(result);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message: 'Ocurrió un error desconocido');
        } finally {
            setLoading(false);
        }
        }
        loadData();
    }, []); 

    return { data, loading, error };
}