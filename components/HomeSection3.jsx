"use client";
import React from "react";

const stats = [
  {
    value: "29%",
    label: "des étudiants abandonnent leur première année de licence",
    detail: "Souvent par manque d'orientation adaptée avant le bac.",
    source: "Ministère de l'Enseignement Supérieur, 2023",
  },
  {
    value: "1 sur 3",
    label: "jeunes se réoriente dans les 2 ans après son premier choix",
    detail: "Un signe que l'orientation scolaire traditionnelle ne suffit plus.",
    source: "Céreq, Enquête Génération 2021",
  },
  {
    value: "1 jour",
    label: "d'immersion suffit pour savoir si un métier est fait pour toi",
    detail: "Tester en vrai, c'est la méthode la plus fiable — et c'est ce que propose Jobmi.",
    source: "Retours d'expérience Jobmi",
  },
];

const HomeSection3 = () => {
  return (
    <div className="mx-2 my-16">
      <div className="bg-[#14213d] text-white rounded-xl py-14 px-6 sm:px-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3">
            Pourquoi l'orientation, c'est{" "}
            <span className="underline-tilted decoration-[#a29bfe]">maintenant</span> ?
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-lg">
            Chaque année, des milliers de jeunes perdent du temps et de l'argent par manque de clarté sur leur voie.
          </p>
          <div className="grid sm:grid-cols-3 gap-10">
            {stats.map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <p className="text-5xl sm:text-6xl font-bold text-white mb-3">{item.value}</p>
                <p className="text-base text-gray-200 mb-2">{item.label}</p>
                <p className="text-sm text-[#a29bfe] mb-3">{item.detail}</p>
                <p className="text-xs text-gray-500 italic">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
