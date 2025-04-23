import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {story1, story2} from './storyContent'

const intro = "On trips in the family van to and from Texas, when visiting family in Utah for the summer, ages 8 to 12, I dabbled in some writing to pass the time (at least this is true regarding the 1st story). Below I include some tooltips for modern day me to roast child me 😄. But to be fair, I did write all this by hand on paper, so should be given the benefit of the doubt in that regards. You'll find it apparent, as things were written this way, that all kinds of things happen out of the blue that could use set up before hand."

export default function Stories() {
  return (
    <>
      <p className="intro">{intro}</p>
      <h3>Unknown Title: Space Sci Fi Adventure</h3>
      <Story story={story1} />
      <h3>Warp Striker</h3>
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
