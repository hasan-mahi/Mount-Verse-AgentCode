import PageLayout from "./layouts/PageLayout"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Article from "./components/Article"
import Footer from "./components/Footer"
import Stats from "./sections/Stats"
import Newsletter from "./sections/Newsletter"
import { articles } from "./lib/data"

export default function App() {
  return (
    <PageLayout>
      <Header />
      <main>
        <Hero />
        <Stats />
        <section id="journal" className="relative" aria-label="Hiking journal articles">
          {articles.map((article, idx) => (
            <Article key={article.number} {...article} reverse={idx % 2 === 1} />
          ))}
        </section>
        <Newsletter />
      </main>
      <Footer />
    </PageLayout>
  )
}
