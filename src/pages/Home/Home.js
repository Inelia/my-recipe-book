import React from "react"
import "./home.css"
import Card from "../../components/Card/Card";
// import Header from "../../components/Header/Header"
// import Footer from "../../components/Footer/Footer"
import data from "../../data"

function Home() {
  // card initialise la function .map()
  const card = data.recipes.map((iteration) => {
    return <Card key={iteration.title}{ ...iteration} />
  });
  return (
  <main>
    {card}
  </main>
  )
}

export default Home;
