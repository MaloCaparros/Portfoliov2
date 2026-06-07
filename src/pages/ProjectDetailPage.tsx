import { useParams, Navigate } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';
import Footer from '../components/Footer';

function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { projects, loading } = useProjectContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-nunito text-grey">Chargement...</p>
      </div>
    );
  }

  const project = projects.find((p) => p.id === Number(id));
  if (!project) return <Navigate to="/404" replace />;

  return (
    <section className="min-h-screen flex flex-col justify-center px-10 gap-10 pt-9">
      <h2 className="font-playFaire font-bold text-3xl md:text-4xl md:mt-9">{project.name}</h2>

      <div className="flex flex-col-reverse md:flex-row items-start gap-10 w-full">
        <div className="flex flex-col gap-6 md:w-1/2">
          <p className="font-nunito text-grey text-base md:text-lg">{project.description}</p>

          <div className="flex flex-col gap-3 md:w-1/2">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="font-roboto font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-center bg-yellow border-0"
            >
              Voir le projet
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center w-full">
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="rounded-full w-64 md:w-96 aspect-square object-cover md:-mt-20"
            />
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default ProjectDetailPage;
