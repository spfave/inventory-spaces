import {useParams} from 'react-router-dom';

export default function Space(): JSX.Element {
  const {space} = useParams();

  return (
    <div className="flex-grow">
      <header className="flex h-16 place-items-end gap-3 px-3 pb-3">
        <h2 className="text-2xl font-bold">{space}</h2>
      </header>
    </div>
  );
}
