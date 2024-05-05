import Layout from "./components/layout";

const App = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <h1 className="container__title">🌲 LinkTree 🌲</h1>
          <a
            target="_blank"
            href="https://github.com/KramaDev"
            className="container__btn"
          >
            🐙 GitHub 🐙
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mario-kramarich/"
            className="container__btn"
          >
            💼 LinkedIn 💼
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mario_kramaric/"
            className="container__btn"
          >
            📸 Instagram 📸
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@mario_kramaric"
            className="container__btn"
          >
            📱 TikTok 📱
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/c/brazingahd"
            className="container__btn"
          >
            🎥 YouTube 🎥
          </a>
          <a href="/" className="container__btn">
            🌐 Website 🌐
          </a>
        </div>
        <p className="container__tag">
          Made with love by <span className="signature">Mario Kramarić</span> ©
          2024{" "}
          <span>
            <img
              className="img"
              src="https://media.licdn.com/dms/image/D4D03AQF18y1YsyIbxA/profile-displayphoto-shrink_800_800/0/1669145631958?e=1720656000&v=beta&t=5NafQkdu1rp6YNcUNZyaPCQUOtE6VVguyvPDb8dK5Q8"
              alt="My profile pic"
            />
          </span>
        </p>
      </Layout>
    </>
  );
};

export default App;
