import axios from 'axios';
import { GitHubRelease } from '../types/github';

const GITHUB_API_BASE_URL = 'https://api.github.com';

class GitHubApiService {
    private baseUrl: string;
    private token: string;
    private repoOwner: string;
    private repoName: string;

    constructor() {
        this.baseUrl = GITHUB_API_BASE_URL;
        this.token = process.env.REACT_APP_GITHUB_TOKEN || '';
        this.repoOwner = process.env.REACT_APP_GITHUB_REPO_OWNER || '';
        this.repoName = process.env.REACT_APP_GITHUB_REPO_NAME || '';
    }

    private getHeaders() {
        return {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${this.token}`,
            'X-GitHub-Api-Version': '2022-11-28',
        };
    }

    async fetchReleases(): Promise<GitHubRelease[]> {
        try {
            const response = await axios.get(
                `${this.baseUrl}/repos/${this.repoOwner}/${this.repoName}/releases`,
                { headers: this.getHeaders() }
            );
            return response.data;
        } catch (error) {
            console.error('Error fetching releases:', error);
            throw new Error('Failed to fetch releases from GitHub API');
        }
    }

    async fetchReleaseById(releaseId: number): Promise<GitHubRelease> {
        try {
            const response = await axios.get(
                `${this.baseUrl}/repos/${this.repoOwner}/${this.repoName}/releases/${releaseId}`,
                { headers: this.getHeaders() }
            );
            return response.data;
        } catch (error) {
            console.error('Error fetching release:', error);
            throw new Error('Failed to fetch release from GitHub API');
        }
    }
}

export const githubApiService = new GitHubApiService();
