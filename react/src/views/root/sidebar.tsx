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
      <header className="flex h-16 place-items-end gap-3 px-3 pb-3">
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

type StyleNavArgs = {isActive: boolean};

function Navigation(): JSX.Element {
  function styleNavLink({isActive}: StyleNavArgs): string | undefined {
    return isActive ? 'text-blue-50' : undefined;
  }

  return (
    <nav>
      <ul>
        <NavLink to="/" className={styleNavLink}>
          Spaces
        </NavLink>
        <SpacesNav styleNavLink={styleNavLink} />
        <NavLink to="/about" className={styleNavLink}>
          About
        </NavLink>
      </ul>
    </nav>
  );
}

type SpaceNavProps = {
  styleNavLink?: ({isActive}: StyleNavArgs) => string | undefined;
};

function SpacesNav(props: SpaceNavProps): JSX.Element {
  const {styleNavLink} = props;

  return (
    <ul>
      {tempSpaces.length ? (
        tempSpaces.map((space) => (
          <li key={space.id}>
            <NavLink to={`/space/${space.name}`} className={styleNavLink}>
              {space.name}
            </NavLink>
          </li>
        ))
      ) : (
        <li>No existing spaces</li>
      )}
    </ul>
  );
}
