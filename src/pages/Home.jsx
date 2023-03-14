import bgImg from './../assets/images/bg-img.jpg'

import './../assets/styles/home.css';
const Home = () => {
    return (
        <div className="hero">
            <img src={bgImg} alt="" />
            <div className="info">
                <h1>Accounts</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed enim, vel, beatae praesentium repellat at, quam molestiae similique soluta accusantium harum voluptatem odit ipsa quasi dolorum veritatis quis ad.</p>
            </div>
        </div>
    )
}

export default Home;