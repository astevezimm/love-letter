import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const story1 = `It came to pass that the stars aligned, and the universe opened its arms to the brave souls who dared to venture into the unknown. The crew of the starship *Odyssey* was ready for anything, or so they thought. As they traveled through the vastness of space, they encountered strange phenomena and alien civilizations that challenged their understanding of reality. But nothing could prepare them for what lay ahead... stuff happened`
const story2 = `This came to pass too, but it was different. The crew of the *Odyssey* faced new challenges and made new allies as they navigated the treacherous waters of intergalactic politics. They discovered ancient artifacts and unlocked secrets that had been hidden for millennia. But with great power came great responsibility, and the crew had to make difficult choices that would shape the future of the galaxy. Nothing laying ahead could prepare them for the final showdown with the forces of darkness that threatened to consume everything they held dear.`

export default function Stories() {
  return (
    <>
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
