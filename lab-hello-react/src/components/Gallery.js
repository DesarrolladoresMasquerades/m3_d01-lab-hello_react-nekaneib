import iconOne from "../images/icon1.png"
import iconTwo from "../images/icon2.png"
import iconThree from "../images/icon3.png"
import iconFour from "../images/icon4.png"


function Gallery(){
    return(
        <ul className = "gallery">
            <div>
            <img src={iconOne} alt="example"/>
            <h3>Declarative</h3>
            <p>React make it painless to create interactive things</p>
            </div>

            <div>
            <img src={iconTwo} alt="example"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
            </div>

            <div>
            <img src={iconThree} alt="example" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components</p>
            </div>

            <div >
            <img src={iconFour} alt="example"/>
            <h3>JSX</h3>
            <p>Statically typed designed to run on modern browsers</p>
            </div>

        </ul>




)
}

export default Gallery

                {/* <ImageOne />
                <ImageTwo />
                <ImageThree />
                <ImageFour />
        */}
        