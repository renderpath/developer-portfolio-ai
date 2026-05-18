import styles from './hero.module.scss';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <p className={styles.label}>Frontend Developer</p>

                <h1>
                    Building modern web applications
                    with AI-powered workflows
                </h1>

                <p className={styles.description}>
                    React / TypeScript / Node.js developer
                    focused on clean architecture,
                    UX and AI integration.
                </p>
            </div>
        </section>
    );
};