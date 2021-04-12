import { education, experience, awards, extra } from './data.js'
import { render } from './render.js'

const full = {
  education: [education.ku],
  experience: [
    experience.scb10x,
    experience.cleverse,
    experience.omnivirt,
    experience.wongnai,
    experience.sellsuki,
  ],
  awards: [
    awards.thairath,
    awards.siriventure,
    awards.tesco,
    awards.ywc,
    awards.localhackday,
  ],
  extra: [extra.msp, extra.devsSpeak, extra.firebase, extra.ta],
}

render(full)
