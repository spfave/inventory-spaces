import {Outlet} from 'react-router-dom';

import SideBar from './sidebar';

export default function Root() {
  return (
    <>
      <Main />
      <hr />
      <Footer />
    </>
  );
}

function Main() {
  return (
    <main className="flex flex-grow">
      <SideBar />
      <Outlet />
    </main>
  );
}

function Footer() {
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
