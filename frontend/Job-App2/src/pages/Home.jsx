import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-content">
        <h1>Welcome to Jobby</h1>
        <p>
          Your one-stop destination for finding your dream job. Explore
          thousands of job listings, connect with top employers, and take the
          next step in your career journey.
        </p>
      </div>
      <div>
        <img src="/content-one.png" alt="Home Image" className="home-image" />
      </div>
      <div className="content2">
        <h1>Why Jobby?</h1>
        <h2>Smarter way to get hired</h2>
        <p>
          Stop wasting time on repetitive applications. Jobby simplifies your
          job search by combining smart recommendations, easy applications, and
          powerful tracking — all in one platform.
        </p>
      </div>
      <div>
        <img src="/content-two.png" alt="Home Image" className="home-image" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
