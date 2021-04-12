import { education, experience, awards, extra } from './data.js'
import { render } from './render.js'

const full = {
  education: Object.values(education),
  experience: Object.values(experience),
  awards: Object.values(awards),
  extra: Object.values(extra),
}

render(full)

const headers = document
  .querySelectorAll('.header-data')
  .forEach((headerEl) => {
    headerEl.style.marginBottom = '2rem'
  })
