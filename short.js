import { awards, education, experience, extra, speaker } from './data.js'
import { render } from './render.js'

const short = {
  education: [education.ku],
  experience: [experience.nansen, experience.apeboard, experience.scb10x],
  speaker: [
    speaker.riseRethink,
    speaker.blockchainThailand,
    speaker.thaiProgrammer,
    speaker.kuBlockchain,
    speaker.devsSpeak,
  ],
  awards: [awards.thairath, awards.siriventure, awards.tesco, awards.ywc],
  extra: [extra.msp, extra.yeah],
}

render(short)
