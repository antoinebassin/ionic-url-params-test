import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react';
import { RouteComponentProps, useHistory } from "react-router-dom";
import './Project.css';


interface ProjectParams {
  projectName: string
}
interface ProjectProps extends RouteComponentProps<ProjectParams> {}

const Project: React.FC<ProjectProps> = ({ match }) => {
  const history = useHistory()

  const [projectName, setProjectName] = useState<string|undefined>(undefined)

  useIonViewWillEnter(() => {
    console.debug("[project page]", "match params:", match)
    const _projectName = match.params.projectName;
    console.debug("[project page]", "project name:", _projectName)
    setProjectName(_projectName)
  })

  useEffect(() => {
    if (projectName === undefined) return;
    console.debug("[project page]", "useEffect, projectName:", projectName)

    // do something...

  }, [projectName])

  function goBackToHome() {
    console.debug("[project page]", "go back to home page")

    // do something...

    history.push("/")
  }

  return (
    <IonPage className={"projectPage"}>
      <IonContent fullscreen>
        {projectName !== undefined && (
          <>
            <header>
              <button className={"returnButton"} onClick={goBackToHome}>
                {"<"}
              </button>
              <h1>
                {projectName}
              </h1>  
            </header>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Project;
