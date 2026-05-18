import styles from './experience.module.scss';

const projects = [
    {
        title: 'AI Portfolio Platform',
        description:
            'Developer portfolio with AI integration, contact API and responsive UI.',
    },
    {
        title: 'Washing Repair Landing',
        description:
            'Responsive landing page with admin panel and заявки management.',
    },
    {
        title: 'E-commerce Frontend',
        description:
            'Catalog interface with routing, filters and API integration.',
    },
];

export const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className={styles.container}>
                <p className={styles.label}>Projects & Experience</p>

                <h2>Selected projects</h2>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={styles.card}
                        >
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};