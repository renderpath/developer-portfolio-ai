import styles from './ai-section.module.scss';

export const AISection = () => {
    return (
        <section className={styles.ai}>
            <div className={styles.container}>
                <p className={styles.label}>AI workflow</p>

                <h2>How I use AI in development</h2>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Code generation</h3>

                        <p>
                            Using AI tools for boilerplate generation,
                            architecture ideas and rapid prototyping.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Refactoring</h3>

                        <p>
                            Improving code quality, readability
                            and component structure with AI assistance.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>API integration</h3>

                        <p>
                            Working with OpenAI API and AI-powered
                            workflows for modern applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};