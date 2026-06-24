import { categories } from '../../data/homeData'
import { SectionHeading } from '../ui/SectionHeading'

export function ScrapCategories() {
  return (
    <section className="section white-section" id="categories">
      <div className="container">
        <SectionHeading
          kicker="Common categories"
          title="What you can list"
          body="Browse supported scrap categories and their rates inside the app."
          centered
        />
        <div className="categories-grid">
          {categories.map((category, index) => (
            <article className={`category-card reveal delay-${(index % 3) + 1}`} key={category.label}>
              <category.icon size={29} />
              <span>{category.label}</span>
            </article>
          ))}
        </div>
        <p className="category-note reveal">Available categories may vary by location.</p>
      </div>
    </section>
  )
}
