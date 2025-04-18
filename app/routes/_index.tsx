import {LoaderFunctionArgs, redirect} from '@remix-run/node'
import {Link, NavLink, useLoaderData} from '@remix-run/react'
import Drawings from '~/routes/Drawings'
import Stories from '~/routes/Stories'

export async function loader({request}: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const tab = url.searchParams.get("tab")
  if (!tab || !['drawings', 'stories'].includes(tab)) return redirect("/?tab=drawings")
  return tab
}

export default function MainPage() {
  const tab = useLoaderData() as string
  
  return (
    <>
      <h1>Love Letter to My Childhood Imagination</h1>
      <h2>Things I've drawn, stories I've written in preteens or older</h2>
      <nav>
        <Tab label='Drawings' param='drawings' current={tab} />
        <Tab label='Stories' param='stories' current={tab} />
      </nav>
      {tab === 'drawings' ? <Drawings /> : <Stories />}
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
