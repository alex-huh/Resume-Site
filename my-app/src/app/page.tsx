'use client'

import { SetStateAction, useState } from 'react';
import ProjectBadge from "../components/ProjectBadge";

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="min-w-screen min-h-screen items-center " style={{
      backgroundImage: 'url(/images/wooden_desk.jpg)',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/*Folder*/}
      <div className=" relative pl-4 py-4 max-h-5/6 h-5/6 w-10/12 rounded-lg bg-yellow-200 space-x-2 flex">
        {/*Left Page*/}
        <div className="p-4 max-h-full h-full flex flex-col w-1/2 bg-white left-0">
          <div className="h-1/3 flex flex-row items-center">
            <div className="w-1/2 sm:text-medium lg:text-xl xl:text-xl">
                <p className="font-mono">
                  <strong>Name:</strong> Alex Huh <br />
                  <strong>Age:</strong> 22 y/o <br/>
                  <strong>Degree:</strong> B.A in Computer and Data Science from NYU
                </p>
            </div>
            {/* Profile Photo */}
            <div className="h-full justify-center w-1/2 object-contain flex p-2 ">
              <img className="h-full aspect-auto rounded-md " alt="Profile photo" src="/images/bw_selfie.jpg" />
            </div>
          </div>
          <div className="h-8/12">
              <p className="mt-2 shrink sm:text-sm md:text-lg lg:text-xl font-medium font-mono">
                <strong>About:</strong ><br />
                A recent graduate from NYU. Alex enjoys learning more about modern technology and keeping up to date. 
                Alex aims to become a software engineer. 
                <br/>
                Alex currently works at 54 Vintage Vinyl in NYC as the store manager. 
                He used to be a part of several clubs in school: the Business Analytics Club, Competitive Programming 
                Club, and the Rubix Cube Club. Outside of work, he collects records, runs, boulders, cooks, and
                enjoys spending time with his friends.
                <br/>
                <br/>
                <strong></strong>
                <a className="bg-blue-50 p-1 rounded-lg" href="Alex_Huh_ResumePDF.pdf" target="_blank" rel="noopener noreferrer"><strong>More Info: Resume</strong></a>
              </p>
            </div>
        </div>
        {/*Right Page*/}
        <div className="flex relative h-full w-1/2 pr-8 ">
          <div className="p-2 h-full flex w-full bg-white right-0">
            {currentPage === 1 && (
              <div className="justify-center h-full">
                <img
                  src="/images/edu_exp_bg.png"
                  alt="Education&Exp"
                  className="p-4 h-full w-full object-contain rounded-lg"
                />
              </div>
            )}

            {currentPage === 2 && (
              <div className="justify-center h-full">
                <img
                  src="/images/extra.png"
                  alt="Extracurriculars"
                  className="p-4 h-full w-full object-contain rounded-lg"
                />
              </div>
            )}

            {currentPage === 3 && (
              <div className="justify-center w-full h-full grid grid-cols-2 grid-rows-2 gap-2 py-2">
                <ProjectBadge title={"Soccer Analytics"} link={"https://github.com/alex-huh/Soccer-Analytics"}
                languages={["Java", "Scala", "Spark", "Hadoop"]} 
                description={"Analyzed the several years’ worth of match statistics for 3 separate soccer leagues to find key determining statistics"}>
                </ProjectBadge>
                <ProjectBadge title={"Keyword Extraction"} link={"https://github.com/alex-huh/Combined-Keyword-Extraction"}
                languages={["Python"]} description={"Tested various keyword extraction processes to determine the key issues and topics in tech support records"}>
                </ProjectBadge>
                <ProjectBadge title={"Refined ChatBot"} link={"https://github.com/Matt-J-Dong/Refined-Chat-Bot"} 
                languages={["Python"]} description={"Developed and tested a chat bot with the capability of replicating the personality of a fictional character "}>
                </ProjectBadge>
              </div>
            )}
          </div>
          
          <div className="absolute items-stretch w-auto h-8 top-3/4 origin-top-right rotate-90 right-0 transform -translate-y-1/2 flex flex-row  ">
            <button 
              onClick={() => handlePageChange(1)} 
              className={`px-1 py-1 bg-red-500 h-8 left-0 font-mono text-white rounded-t-lg z-10 ${currentPage === 1 ? 'bg-red-700 z-30' : ''}`}
            >
                Background
            </button>
            <button 
                onClick={() => handlePageChange(2)} 
                className={`px-1 py-1 bg-green-500 left-0 font-mono text-white rounded-t-lg z-10 ${currentPage === 2 ? 'bg-green-700 z-30' : ''}`}              
            >
                Extracurriculars
            </button>
            <button 
              onClick={() => handlePageChange(3)} 
              className={`px-1 py-1 bg-blue-500 left-0 font-mono text-white rounded-t-lg z-0 ${currentPage === 3 ? 'bg-blue-700 z-30' : ''}`}
            >
              Projects
            </button>
          </div>
          
        </div>
      </div>
      {/*Shadow*/}
      <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0.6) 100%)`,
                    zIndex: 1
                }}>
      </div>
      
    </div>
  );
}
