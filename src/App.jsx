import './App.css'
import RaceListing from './components/RaceListing'
import bahrain from './assets/bahrain.png'
import saudi from './assets/saudi.png' 
import australia from './assets/australia.png'
import japan from './assets/japan.png'
import china from './assets/china.png'
import miami from './assets/miami.png'
import italy from './assets/italy.png'
import monaco from './assets/monaco.png'
import canada from './assets/canada.png'
import spain from './assets/spain.png'

function App() {
  return (
    <>
    <h1>F1 2024 Race Calendar</h1>
      <div className="cardContainer">
        <RaceListing image={bahrain} name="Bahrain" date="3/2/2024"></RaceListing>
        <RaceListing image={saudi} name="Saudia Arabia" date="3/9/2024"></RaceListing>
        <RaceListing image={australia} name="Australia" date="3/24/2024"></RaceListing>
        <RaceListing image={japan} name="Japan" date="4/7/2024"></RaceListing>
        <RaceListing image={china} name="China" date="4/21/2024"></RaceListing>
        <RaceListing image={miami} name="Miami" date="5/5/2024"></RaceListing>
        <RaceListing image={italy} name="Italy" date="5/19/2024"></RaceListing>
        <RaceListing image={monaco} name="Monaco" date="5/26/2024"></RaceListing>
        <RaceListing image={canada} name="Canada" date="6/9/2024"></RaceListing>
        <RaceListing image={spain} name="Spain" date="6/23/2024"></RaceListing>
      </div>
    </>
  )
}

export default App
