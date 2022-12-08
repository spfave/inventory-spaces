import {useParams} from 'react-router-dom';

export default function Space(): JSX.Element {
  const {space} = useParams();

  return <div className="flex-grow">{space}</div>;
}
