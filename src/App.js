import { useEffect, useState, useRef } from "react"
import "../src/css_scss/styles.css"

function App() {
  // const url =
  //   "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ee0c5271e8fe147abd020712bfd691c"
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState()

  const getURL = (city) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=colorado&appid=6ee0c5271e8fe147abd020712bfd691c"
    )
      .then((resp) => resp.json())
      // .then(console.log(data))
      .then((data) => setData(data))
  }
  const getCity = (event) => {
    setCity(event.target.value)
  }

  return (
    <div className="app">
      <div className="app_container">
        <div className="app_input-container">
          <input
            value={city}
            onChange={getCity}
            type="text"
            placeholder="Enter location..."
          />
          <br></br>
          <a
            onClick={getURL}
            className="app_input_btn"
            href="#"
          >
            Search
          </a>
        </div>

        <header className="app_header">
          <img src="./src/images/jason-leung-FeYlAOm-64Y-unsplash.jpg"></img>
          <p className="app_header_location"> {data ? data.name : null} </p>
          <h1 className="app_header_degrees">
            {data ? (1.8 * (data.main.temp - 273) + 32).toFixed(0) : null} °F
          </h1>
          <p className="app_header_description">
            {data ? data.weather[0].main : null}
          </p>
        </header>

        <footer className="app_footer">
          <div className="app_footer_feels">
            <p className="app_footer_heading">
              {data
                ? (1.8 * (data.main.feels_like - 273) + 32).toFixed(0)
                : null}
              °F
            </p>
            <p className="app_footer_subhead">Feels Like</p>
          </div>
          <div className="app_footer_humid">
            <p className="app_footer_heading">
              {data ? data.main.humidity : null}%
            </p>
            <p className="app_footer_subhead">Humidity</p>
          </div>
          <div className="app_footer_wind">
            <p className="app_footer_heading">
              {data ? data.wind.speed.toFixed(0) : null}MPH
            </p>
            <p className="app_footer_subhead">Winds</p>
          </div>
        </footer>
      </div>
    </div>
  )

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     // .then(console.log)
  //     .then((data) => setData(data))
  //     .then(setLoading(false))
  //     .catch(setError)
  // }, [])

  // if (loading) return <h1>Loading Weather</h1>
  // if (error) return <h1>ERROR. Please Try again</h1>
  // if (!data) console.log(error)

  // return (
  //   <div className="app">
  //     <div className="app_container">
  //       <div className="app_input-container">
  //         <input
  //           onChange={(event) => setCity(event.target.value)}
  //           type="text"
  //           placeholder="Enter location..."
  //         />
  //       </div>

  //       <header className="app_header">
  //         <p className="app_header_location"> {city} </p>
  //         <h1 className="app_header_degrees">
  //           {(1.8 * (data.main.temp - 273) + 32).toFixed(0)}°F
  //         </h1>
  //         <p className="app_header_description"> {data.weather[0].main} </p>
  //       </header>
  //       <footer className="app_footer">
  //         <div className="app_footer_feels">
  //           <p className="app_footer_heading">
  //             {(1.8 * (data.main.feels_like - 273) + 32).toFixed(0)}°F
  //           </p>
  //           <p className="app_footer_subhead">Feels Like</p>
  //         </div>
  //         <div className="app_footer_humid">
  //           <p className="app_footer_heading"> {data.main.humidity}% </p>
  //           <p className="app_footer_subhead">Humidity</p>
  //         </div>
  //         <div className="app_footer_wind">
  //           <p className="app_footer_heading">
  //             {data.wind.speed.toFixed(0)}MPH
  //           </p>
  //           <p className="app_footer_subhead">Winds</p>
  //         </div>
  //       </footer>
  //     </div>
  //   </div>
  // )
}

export default App
