import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router';
import './Home.css';

interface ProjectData {
  id: number,
  name: string
}

const Home: React.FC = () => {
  const history = useHistory()

  // loaded from local storage, simplified for debugging purpose
  const projects: ProjectData[] = [
    {
      id: 1,
      name: "Vegetables"
    },
    {
      id: 2,
      name: "Fruits"
    },
    {
      id: 3,
      name: "Animals"
    },
    {
      id: 4,
      name: "Planets"
    },
    {
      id: 5,
      name: "Seasons"
    },
  ]

  function openProject(projectName: string) {
    console.debug("[home page]", "open a project:", projectName)

    // do something...

    const projectUrl = `/project/${projectName}`
    console.debug("[home page]", "project url:", projectUrl)
    history.push(projectUrl)
  }

  return (
    <IonPage>
      <IonContent fullscreen className={"homePage"}>
        
        <header>
          <h1>
            {`${projects.length} projet${projects.length > 1 ? 's' : ''}`} 
          </h1>  
        </header>
        
        <div className={"grid"}>
          {projects.map((project) =>
            <div className={"project"} key={project.id} onClick={() => openProject(project.name)}>
              {project.name}
            </div>
          )}
        </div>

        
      </IonContent>
    </IonPage>
  );
};

export default Home;
