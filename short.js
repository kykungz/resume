import { awards, education, experience, extra } from './data.js'
import { render } from './render.js'

const full = {
  education: [education.ku],
  experience: [
    experience.apeboard,
    experience.scb10x,
    experience.cleverse,
    experience.omnivirt,
    experience.wongnai,
  ],
  awards: [awards.thairath, awards.siriventure, awards.tesco, awards.ywc],
  extra: [extra.kuBlockchain, extra.msp, extra.devsSpeak, extra.firebase],
}

render(full)
