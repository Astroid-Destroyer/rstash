import { useState, useEffect } from 'react';
import { GitHubRelease } from '../types/github';
import { githubApiService } from '../services/githubApi';

export const useGitHubReleases = () => {
    const [releases, setReleases] = useState<GitHubRelease[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await githubApiService.fetchReleases();
                setReleases(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchReleases();
    }, []);

    const refetch = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await githubApiService.fetchReleases();
            setReleases(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { releases, loading, error, refetch };
};