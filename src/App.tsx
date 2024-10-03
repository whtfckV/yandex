import './styles/App.scss'
import {MySlider} from './components/Slider'
import { Card } from './components/Card'

function App() {

  const createSlides = (amount: number) => {
    return Array.from({ length: amount }, () => (
      <Card />
    ));
  }

  return (
    <>
    <main className='main'>
    <MySlider>
      {createSlides(15)}
    </MySlider>
    </main>
    </>
  )
}

export default App
