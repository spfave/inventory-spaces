export default function Root(): JSX.Element {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

function Main(): JSX.Element {
  return <main>main</main>;
}

function Footer(): JSX.Element {
  return (
    <footer className="flex items-center justify-center gap-6">
      <p>Built by Sebastian</p>
      <span>&#9679;</span>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/spfave" target="_blank" rel="noreferrer">
          <img
            src="./assets/icons/github.svg"
            alt="github svg"
            height={30}
            width={30}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sebastian-fave/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/icons/linkedin.svg"
            alt="linkedin svg"
            className="fill-white"
            height={30}
            width={30}
          />
        </a>
      </div>
      <span>&#9679;</span>
      <p>Built with React</p>
    </footer>
  );
}
