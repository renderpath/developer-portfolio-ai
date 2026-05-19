import { api } from './base';

export const getAISummary = async () => {
    const response = await api.get('/ai-summary');

    return response.data;
};