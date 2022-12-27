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
      <Navigation />
    </div>
  );
}

type StyleNavArgs = {isActive: boolean};
function styleNavLink({isActive}: StyleNavArgs): string | undefined {
  return isActive ? 'text-blue-50' : undefined;
}

function Navigation(): JSX.Element {
  return (
    <nav className="m-3">
      <ul className="flex flex-col gap-3 [&>li]:flex [&>li]:h-8 [&>li]:items-center [&>li]:gap-3 hover:[&>li]:text-blue-100">
        <li>
          <span className="flex w-[40px] justify-center">
            <img
              src="./assets/icons/reshot-logistics-box.svg"
              alt="spaces icon"
              height={32}
              width={32}
            />
          </span>
          <NavLink to="/" className={styleNavLink}>
            Spaces
          </NavLink>
        </li>
        <SpacesNav styleNavLink={styleNavLink} />
        <li>
          <span className="flex w-[40px] justify-center">
            <img
              src="./assets/icons/reshot-logistics-scan.svg"
              alt="about icon"
              height={32}
              width={32}
            />
          </span>
          <NavLink to="/about" className={styleNavLink}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

type SpacesNavProps = {
  styleNavLink?: (args: StyleNavArgs) => string | undefined;
};

function SpacesNav(props: SpacesNavProps): JSX.Element {
  const {styleNavLink} = props;

  return (
    <>
      {tempSpaces.length ? (
        tempSpaces.map((space) => (
          <li key={space.id} className="ml-[52px]">
            <NavLink to={`/space/${space.name}`} className={styleNavLink}>
              {space.name}
            </NavLink>
          </li>
        ))
      ) : (
        <li>No existing spaces</li>
      )}
    </>
  );
}
