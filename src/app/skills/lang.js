import Image from "next/image";
import ReactIcon from "../../../public/images/react.svg";
import pythonIcon from "../../../public/images/python.svg";
import vscodeIcon from "../../../public/images/vscode.svg";
import AngularIcon from "../../../public/images/angular.svg";
import Firebasecon from "../../../public/images/firebase.svg";
import FlutterIcon from "../../../public/images/flutter.svg";
import gitIcon from "../../../public/images/git.svg";
import java from "../../../public/images/java.svg";
import tailwind from "../../../public/images/tailwind.svg";
import cssIcon from "../../../public/images/css.svg";
import htmlIcon from "../../../public/images/html.svg";
import TSIcon from "../../../public/images/typescript-icon.svg";
import djangoIcon from "../../../public/images/django.svg";
import JSIcon from "../../../public/images/javascript-js.svg";
import FigmaIcon from "../../../public/images/figma.svg";
import BootstrapIcon from "../../../public/images/bootstrap.svg";
import githubIcon from "../../../public/images/github.svg";

import React from "react";

const Languages = () => {
  return (
    <>
      <section
        id="skills"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative align-middle justify-center ml-60"
      >
        <div className="socials flex  flex-gap-5 mb-8 mr-20 ml-16 align-middle justify-evenly">
          <Image src={ReactIcon} alt="hero image" width={120} height={120} />
          <Image src={pythonIcon} alt="hero image" width={100} height={100} />
          <Image src={vscodeIcon} alt="hero image" width={100} height={100} />
          <Image src={gitIcon} alt="hero image" width={100} height={100} />
          <Image src={AngularIcon} alt="hero image" width={100} height={100} />
          <Image src={java} alt="hero image" width={100} height={100} />
          <Image src={Firebasecon} alt="hero image" width={100} height={100} />
          <Image src={tailwind} alt="hero image" width={100} height={100} />
        </div>
        <br />
        <div className="socials flex flex- gap-3 mb-8 mr- align-middle">
          <Image src={cssIcon} alt="hero image" width={100} height={150} />
          <Image src={htmlIcon} alt="hero image" width={100} height={100} />
          <Image src={TSIcon} alt="hero image" width={100} height={150} />
          <Image src={djangoIcon} alt="hero image" width={100} height={100} />
          <Image src={FlutterIcon} alt="hero image" width={100} height={100} />
          <Image src={JSIcon} alt="hero image" width={100} height={100} />
          <Image src={FigmaIcon} alt="hero image" width={100} height={100} />
          <Image
            src={BootstrapIcon}
            alt="hero image"
            width={100}
            height={100}
          />
          <Image src={githubIcon} alt="hero image" width={100} height={100} />
        </div>
      </section>
    </>
  );
};

export default Languages;
