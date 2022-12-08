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
      <nav></nav>
    </div>
  );
}

// Major section nav: space, about
// sub section nav: spaces
