import { useParams } from 'react-router-dom';

function Project() {
  const { slug } = useParams();

  // Fetch project details using the slug
  // ...

  return (
    <div>
      <h1>{slug}</h1>
    </div>
);
}

export default Project;