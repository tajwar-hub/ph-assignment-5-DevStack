import Nav from "./components/Nav"
import Banner from "./components/Banner"
import type { ITechnologyTypes } from './types/Type'
import { Suspense, use } from "react"
import Technologies from "./components/technologies/Technologies"
import Footer from "./components/Footer"

const technologiesFetch = async (): Promise<ITechnologyTypes[]> => {
  const res = await fetch('/public/data.json')
  const data = await res.json()
  return data;
}

const technologiesPromise = technologiesFetch();

function App() {
  const technologies = use(technologiesPromise);
  // const [technologies] = useState(() => technologiesFetch())

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>

      <Suspense fallback={`Loading... `}>
        <Technologies technologiesPromise={technologies} />
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App