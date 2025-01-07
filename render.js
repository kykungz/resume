export const render = (data) => {
  const headers = document.querySelectorAll('.header-data')
  const educationEl = document.getElementById('education-data')
  const experienceEl = document.getElementById('experience-data')
  const awardsEl = document.getElementById('awards-data')
  const speakerEl = document.getElementById('speaker-data')
  const extraEl = document.getElementById('extra-data')

  const createItem = ({ date, title, location, description, list }) => {
    const listEl = list
      ? /* html */ `
      <ul>${list.map((item) => /* html */ `<li>${item}</li>`).join('')}</ul>
    `
      : ''

    const locationEl = location
      ? /* html */ `<div class="experience__title-location">${location}</div>`
      : ''

    return /* html */ `
    <div class="experience__item">
      <div class="experience__date">${date}</div>
      <div class="experience__info">
        <div class="experience__title">
          <div class="experience__title-text">${title}</div>
          ${locationEl}
        </div>
        <div class="experience__text">
          <p>${description}</p>
          ${listEl}
        </div>
      </div>
    </div>
  `
  }

  const createHeader = () => {
    return /* html */ `
      <div class="top-block">
        <div class="top-block__name">Kongpon Charanwattanakit</div>
        <div class="top-block__address">
          <div class="top-block__address-center">
            Bangkok, Thailand
            <span class="top-block__address-spacer"></span>
            <a href="tel:0942545936">+669 2995 9151</a>
            <span class="top-block__address-spacer"></span>
            <a href="mailto:jackykongpon@gmail.com">jackykongpon@gmail.com</a>
          </div>
          <div class="top-block__address-center">
            <!--
              <a href="https://kykungz.github.io" target="__blank">kykungz.github.io</a>
              <span class="top-block__address-spacer"></span>
            -->
            <a href="https://github.com/kykungz" target="__blank">github.com/kykungz</a>
            <span class="top-block__address-spacer"></span>
            <a href="https://linkedin.com/in/kykungz" target="__blank">linkedin.com/in/kykungz</a>
          </div>
        </div>
      </div>
    `
  }

  headers.forEach((headerEl) => {
    headerEl.innerHTML = createHeader()
  })

  educationEl.innerHTML = data.education.map(createItem).join('')
  experienceEl.innerHTML = data.experience.map(createItem).join('')
  awardsEl.innerHTML = data.awards.map(createItem).join('')
  speakerEl.innerHTML = data.speaker.map(createItem).join('')
  extraEl.innerHTML = data.extra.map(createItem).join('')
}
