import { Hero } from './widgets/hero';
import { About } from './widgets/about';
import { Experience } from './widgets/experience';
import { AISection } from './widgets/ai-section';
import { ContactForm } from './widgets/contact-form';

function App() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <AISection />
            <ContactForm />
        </main>
    );
}

export default App;