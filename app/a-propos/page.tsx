"use client";
import {CustomComponent} from "../../components/CustomComponent"
import {JobmiComponent} from "../../components/JobmiComponent"
import {ValuesComponent} from "../../components/ValuesComponent"
import {NotreTeam} from "../../components/NotreTeam"
import {MarqueeComponent} from "../../components/MarqueeComponent"
export default function APropos() {
  return (
    <div className="mt[90px] font-sans">
      <div className="w-full bg-cover bg-center h-[500px] flex items-end flex-row-reverse" style={{backgroundImage: 'url(/media/cpm.png)'}}>
        
        <div className="text-right text-white text-5xl font-bold pr-2 pb-2">
          <p>A Propos De La</p>
          <p>Boite La Plus</p>
          <p>Fun !</p>
        </div>
      </div>
      <div className="w-full">
        <img src="/media/a-propos-prez-jobmi.svg" alt="Présentation de Jobmi" className="w-full h-auto" />
      </div>
      <JobmiComponent />
      <ValuesComponent />
      <NotreTeam />
      <div className="flex justify-center items-center gap-4 mt-[120px]">
        <p className="sm:text-4xl text-3xl font-bold font-oddlini  relative z-10">lls nous font</p>
        <div className="relative ">
            <img
              src="/media/Vector1088.png"
              alt="rectangle"
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-[-10px] h-[60px] w-[150px]"
            />
            <h2 className="sm:text-4xl text-3xl font-bold font-oddlini  relative z-10">
            confiance
            </h2>
          </div>
      </div>
      <MarqueeComponent />
    </div>
  );
}
