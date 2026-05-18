import { Hero } from './widgets/hero';
import { About } from './widgets/about';
import { Experience } from './widgets/experience';
import { AISection } from './widgets/ai-section';

function App() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <AISection />
        </main>
    );
}

export default App;