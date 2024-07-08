import { useParams } from 'react-router-dom';
import projects from "../assets/projects.json";


function Project() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  return (
    <div>
      <h1>This page needs to be worked on!</h1>
      <h1>Data can be read in from the JSON file, stored as the project variable. Can include links to images, etc. Can do it as a gallery or something maybe? Or more structured like a blog post</h1>
      <h1>{project.id}</h1>
      <h1>{project.title}</h1>
    </div>
);
}

export default Project;