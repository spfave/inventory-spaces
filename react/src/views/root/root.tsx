import {Outlet} from 'react-router-dom';

export default function Root(): JSX.Element {
  return (
    <>
      <Main />
      <hr />
      <Footer />
    </>
  );
}

function Main(): JSX.Element {
  return (
    <main className="flex-grow">
      <div>column</div>
      <div>column</div>
      {/* <SideBar/> */}
      <Outlet />
    </main>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="flex items-center justify-center gap-5 py-2">
      <p className="text-center">Built by Sebastian</p>
      <span>&#9679;</span>
      <div className="flex justify-center gap-3">
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
            height={30}
            width={30}
          />
        </a>
      </div>
      <span>&#9679;</span>
      <p className="text-center">Built with React</p>
    </footer>
  );
}
