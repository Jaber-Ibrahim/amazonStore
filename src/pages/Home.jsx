import { HomeSlider, Products } from "../Components/import"

const Home = () => {
  return (
    <>
      <HomeSlider/>
      <div className="-mt-4 md:-mt-14">
        <Products/>
      </div>
    </>
  )
}

export default Home
