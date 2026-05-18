import { useState } from 'react';

import { api } from '../../../shared/api/base';

import styles from './contact-form.module.scss';

export const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        comment: '',
    });

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setSuccess('');
        setError('');

        try {
            setLoading(true);

            await api.post('/contact', form);

            setSuccess('Message sent successfully');

            setForm({
                name: '',
                phone: '',
                email: '',
                comment: '',
            });
        } catch {
            setError('Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <p className={styles.label}>
                    Contact
                </p>

                <h2>Let’s work together</h2>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                phone: e.target.value,
                            })
                        }
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email: e.target.value,
                            })
                        }
                        required
                    />

                    <textarea
                        placeholder="Comment"
                        rows={6}
                        value={form.comment}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                comment: e.target.value,
                            })
                        }
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? 'Sending...'
                            : 'Send message'}
                    </button>

                    {success && (
                        <p className={styles.success}>
                            {success}
                        </p>
                    )}

                    {error && (
                        <p className={styles.error}>
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};