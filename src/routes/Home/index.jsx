import style from "./style.module.css";
import MainTemplate from "../../templates/MainTemplate/index.jsx";
import Button from "../../components/Button";
import OurCollectionCard from "../../components/OurCollectionCard";
import our_collection_data from "../../data/ourCollectionData.jsx";

const Home = () => {

    return (
      <MainTemplate>
        <div className={style.home_container}>
          <div className={style.hero_container}>
            <div className={style.hero}>
              <h1 className={style.hero_title}>Great coffee made simple.</h1>
              <p className={style.hero_description}>
                Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                coffees from our best roasters delivered directly to your door, at your schedule.
              </p>
              <Button buttonTitle='Create your plan' />
            </div>
          </div>
          <div className={style.collection_container}>
            <div className={style.our_collection}>
              <h2>Our collection</h2>
            </div>
            <ul className={style.our_collection_list}>
              {
                our_collection_data.map (data => (
                  <OurCollectionCard key={data.title} coffe_image={data.coffe_image} title={data.title} description={data.description} />
                ))
              }
            </ul>
          </div>
        
      
        
      
        Why choose us?
      
        A large part of our role is choosing which particular coffees will be featured 
        in our range. This means working closely with the best coffee growers to give 
        you a more impactful experience on every level.
      
        Best quality
        Discover an endless variety of the world’s best artisan coffee from each of our roasters.
      
        Exclusive benefits
        Special offers and swag when you subscribe, including 30% off your first shipment.
      
        Free shipping 
        We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
      
        How it works
      
        01
        Pick your coffee
        Select from our evolving range of artisan coffees. Our beans are ethically 
        sourced and we pay fair prices for them. There are new coffees in all profiles 
        every month for you to try out.
      
        02
        Choose the frequency
        Customize your order frequency, quantity, even your roast style and grind type. 
        Pause, skip or cancel your subscription with no commitment through our online portal.
      
        03
        Receive and enjoy!
        We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
        world-class coffees curated to provide a distinct tasting experience.
      
        Create your plan
      
        Home
        About us
        Create your plan
        </div>
      </MainTemplate>
    )
  }
  
  export default Home