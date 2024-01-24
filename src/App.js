import "./App.css";

function App() {
  const slides = document.querySelectorAll(".slide");

  let counter = 0;

  slides.forEach(
    // index = keys (index means keys) (slide means classname of each)
    (slide, index) => {
      slide.style.left = `${index * 100}%`;
    }
  );

  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  const goNext = () => {
    counter++;
    slideImage();
  };

  const goPrev = () => {
    counter--;
    slideImage();
  };

  return (
    <>
      <main>
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="photo1"
          className="slide"
        />
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="photo2"
          className="slide"
        />
        <img
          src="https://picsum.photos/200/300?grayscale"
          alt="photo3"
          className="slide"
        />
        <img
          src="https://picsum.photos/200/300/?blur"
          alt="photo4"
          className="slide"
        />
      </main>
      <div className="nav">
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>
      <div className="card">
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </>
  );
}

export default App;
