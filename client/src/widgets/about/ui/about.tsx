import styles from './about.module.scss';

const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Express',
    'SCSS',
    'REST API',
    'Git',
    'AI Tools',
];

export const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div>
                    <p className={styles.label}>About me</p>

                    <h2>
                        Frontend developer focused on
                        scalable and user-friendly interfaces
                    </h2>
                </div>

                <div className={styles.content}>
                    <p>
                        I build modern web applications using React,
                        TypeScript and Node.js. I enjoy creating clean UI,
                        working with APIs and improving development workflows
                        with AI tools.
                    </p>

                    <div className={styles.skills}>
                        {skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};