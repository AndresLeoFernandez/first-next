import { API_URL } from '@/config/constants';
import Link from 'next/link';

async function fetchProjects() {
  const res = await fetch(`${API_URL}/project/view/all`);
  const data = await res.json();
  return data;
}

async function ProjectsMostViewed() {
  const projects = await fetchProjects();
  return (
    <section>
      <h3>Proyectos</h3>
      <div className='row'>
        {
          projects.map((project: { projectId: string, title: string }) => (
            <div className='col-md-4' key={project.projectId}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Creado: </h6>
                  <h6 className="card-subtitle mb-2 text-muted">Author: </h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  
                </div>
              </div>
              <h3></h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProjectsMostViewed;
