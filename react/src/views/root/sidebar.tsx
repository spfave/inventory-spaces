import {NavLink} from 'react-router-dom';

type Space = {
  id: string;
  name: string;
  itemCount: number;
};

const tempSpaces: Space[] = [
  {id: '123', name: 'Kitchen', itemCount: 8},
  {id: '456', name: 'Hallway Closet', itemCount: 5},
  {id: '789', name: 'Bedroom Closet', itemCount: 7},
];

export default function SideBar(): JSX.Element {
  return (
    <div className="flex w-80 flex-col">
      <header className="flex h-16 items-center gap-3 px-3">
        <img
          src="./assets/icons/reshot-logistics-warehouse.svg"
          alt="logo icon"
          height={40}
          width={40}
        />
        <h1 className="text-3xl font-bold">Inventory.spaces</h1>
      </header>
      <hr />
      <Navigation />
    </div>
  );
}

// Major section nav: space, about
// sub section nav: spaces

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>Spaces</li>
        <SpacesNav />
        <NavLink to="/about">About</NavLink>
      </ul>
    </nav>
  );
}

function SpacesNav(): JSX.Element {
  return (
    <ul>
      {tempSpaces.length ? (
        tempSpaces.map((space) => (
          <li key={space.id}>
            <NavLink to={`/${space.name}`}>{space.name}</NavLink>
          </li>
        ))
      ) : (
        <li>No existing spaces</li>
      )}
    </ul>
  );
}
