import React from "react";
import { PiSoccerBallThin } from "react-icons/pi";
import { VscSymbolKeyword } from "react-icons/vsc";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

export default function ProjectBadge(props: any) {
  const title = props.title;
  const languages = props.languages;
  return (
    <div className="group relative h-full w-full border border-black rounded-lg flex">
      <div className="absolute inset-0 group-hover:invisible">
        <div className="h-3/4">
          <h1>
            <strong>{title}</strong>
          </h1>
          {title == "Soccer Analytics" && <PiSoccerBallThin size={150} />}
          {title == "Keyword Extraction" && <VscSymbolKeyword size={150} />}
          {title == "Refined ChatBot" && (
            <HiChatBubbleBottomCenterText size={150} />
          )}
        </div>
        <div className="h-1/4 flex flex-row flex-wrap m-0 flex-shrink items-center">
          {languages.map((language: string, index: number) => (
            <p key={index} className="p-1 bg-grey-200 font-mono">
              {language}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute invisible inset-0 group-hover:visible">
        <p className="font-sm font-mono text-center ">{props.description}</p>
        {props.link && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1 right-1"
            href={props.link}
          >
            <FaGithub size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
