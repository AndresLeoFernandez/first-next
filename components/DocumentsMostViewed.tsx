import { API_URL } from '@/config/constants';

async function fetchDocuments() {
  const res = await fetch(`${API_URL}/document/most-viewed`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function DocumentsMostViewed() {
  const documents = await fetchDocuments();
  return (
    <section>
    <h3>Documentos Mas visitados</h3>
    <div className='row'>
      { 
        documents.map((project:{projectId:string,title:string}) => (
          <div className='col-md-4' key={project.projectId}>
            <h3>{project.title}</h3>
          </div>
        ))
      }
    </div>
    </section>
  )
}

export default DocumentsMostViewed;
