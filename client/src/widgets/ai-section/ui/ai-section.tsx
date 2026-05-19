import { useState } from 'react';

import { getAISummary } from '../../../shared/api/ai';

import styles from './ai-section.module.scss';

export const AISection = () => {
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateSummary = async () => {
        setError('');
        setSummary('');

        try {
            setLoading(true);

            const data = await getAISummary();

            setSummary(data.summary);
        } catch {
            setError('Failed to generate AI summary');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.ai}>
            <div className={styles.container}>
                <p className={styles.label}>AI workflow</p>

                <h2>How I use AI in development</h2>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Code generation</h3>
                        <p>
                            I use AI tools for boilerplate generation,
                            architecture ideas and rapid prototyping.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Refactoring</h3>
                        <p>
                            AI helps me improve code readability,
                            component structure and documentation.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>AI Summary Helper</h3>
                        <p>
                            This project includes a backend API endpoint
                            that returns an AI-style developer summary.
                        </p>

                        <button
                            className={styles.button}
                            type="button"
                            onClick={handleGenerateSummary}
                            disabled={loading}
                        >
                            {loading ? 'Generating...' : 'Generate AI summary'}
                        </button>

                        {summary && (
                            <p className={styles.summary}>
                                {summary}
                            </p>
                        )}

                        {error && (
                            <p className={styles.error}>
                                {error}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};