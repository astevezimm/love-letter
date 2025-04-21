import {LoaderFunctionArgs, redirect} from '@remix-run/node'
import {Link, NavLink, useLoaderData} from '@remix-run/react'
import Drawings, {generateRandomArray} from '~/routes/Drawings'
import Stories from '~/routes/Stories'
import {useEffect, useRef, useState} from 'react'

export async function loader({request}: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const tab = url.searchParams.get("tab")
  if (!tab || !['drawings', 'stories'].includes(tab)) return redirect("/?tab=drawings")
  return tab
}

export default function MainPage() {
  const tab = useLoaderData() as string
  const [drawings, setDrawings] = useState<number[]>([])
  const scrollPositions = useRef<{ [key: string]: number }>({ drawings: 0, stories: 0 })
  
  useEffect(() => {
    if (drawings.length === 0) setDrawings(generateRandomArray())
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      console.log('scroll', scrollPositions)
      scrollPositions.current[tab] = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [tab])
  
  useEffect(() => {
    const scrollY = scrollPositions.current[tab] || 0
    window.scrollTo(0, scrollY)
  }, [tab])
  
  return (
    <>
      <h1>Love Letter to My Childhood Imagination</h1>
      <h2>Things I've drawn, stories I've written in preteens or older</h2>
      <nav>
        <Tab label='Drawings' param='drawings' current={tab} />
        <Tab label='Stories' param='stories' current={tab} />
      </nav>
      {tab === 'drawings' ? <Drawings drawings={drawings} /> : <Stories />}
    </>
  )
}

function Tab({label, param, current} :{label: string, param: string, current: string}) {
  return (
    <Link to={`/?tab=${param}`} className={current===param ? "active" : ""}>
      {label}
    </Link>
  )
}
