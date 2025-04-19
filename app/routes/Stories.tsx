import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const intro = "On trips in the family van to and from Texas, when visiting family in Utah for the summer, ages 8 to 12, I dabbled in some writing to pass the time. Below I include some tooltips for modern day me to roast child me 😄. But to be fair, I did write all this by hand on paper, so should be given the benefit of the doubt in that regards. You'll find it apparent, as things were written this way, that all kinds of things happen out of the blue that could use set up before hand."
const story1 = `It came to pass that **as \`opposed\` to this** the stars aligned, and the universe opened its arms to the brave souls who dared to venture into the unknown. The crew of the starship *Odyssey* was ready for anything, or so they thought. As they traveled through the vastness of space, they encountered strange phenomena and alien civilizations that challenged their understanding of reality. But nothing could prepare them for what lay ahead... stuff happened`
const story2 = `This came to pass too, but it was different. The crew of the *Odyssey* faced new challenges and made new allies as they navigated the treacherous waters of intergalactic politics. They discovered ancient artifacts and unlocked secrets that had been hidden for millennia. But with great power came great responsibility, and the crew had to make difficult choices that would shape the future of the galaxy. Nothing laying ahead could prepare them for the final showdown with the forces of darkness that threatened to consume everything they held dear.`

export default function Stories() {
  return (
    <>
      <p className="intro">{intro}</p>
      <h3>Unknown Title: Space Sci Fi Adventure</h3>
      <Story story={story1} />
      <h3>Story 2</h3>
      <Story story={story2} />
    </>
  )
}

function Story({story}: {story: string}) {
  return (
    <div className="story">
      <Markdown remarkPlugins={[remarkGfm]}>{story}</Markdown>
    </div>
  )
}
