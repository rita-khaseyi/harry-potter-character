// @jsxRuntime classic
// @jsxFrag React.Fragment
// @ts-nocheck
"use client";
import { getCharacterDetails } from "@/app/utilities/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";


type params = {
  params: {
    characterId: string;
  };
};

export default function CharacterDetail({ params: { characterId } }: params) {
  const [character, setCharacter] = useState([]);


  useEffect(() => {
    async function fetchCharacterDetail() {
      const data = await getCharacterDetails(characterId);
      if (data) {
        setCharacter(data);
      }
    }
    fetchCharacterDetail();
  }, []);

  if (!character.length) {
    return <div>Loading...</div>;
  }

  const char = character[0]; 

  return (
    <div>
  
  <Navbar/>
    <div className="flex justify-center items-center mt-10">
        
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <Link
          href="/"
          className="text-white bg-slate-800 inline-block px-3 py-1 rounded-md mb-4"
        >
          Back
        </Link>
        <div className="mb-4">
          {char.image ? (
            <img
              src={char.image}
              alt={char.name}
              className="h-72 w-72 object-cover rounded-md mx-auto mb-4"
            />
          ) : (
            <div className="h-72 w-72 flex items-center justify-center bg-gray-200 text-black rounded-md mb-4">
           Image unavailable
            </div>
          )}
        </div>
        <div>
          <div className="text-4xl font-semibold mb-2">{char.name}</div>
          <hr className="border-dotted border-gray-400 mb-2" />
          <div className="text-gray-700 mb-2">House: {char.house}</div>
          {char.wand && (
            <div className="text-gray-700 mb-2">
              Wand: {char.wand.wood}, {char.wand.core}
            </div>
          )}
          <div className="text-gray-700 mb-2">Actor: {char.actor}</div>
          <div className="text-gray-700 mb-2">
            Ancestry: {char.ancestry}
          </div>
          {char.wizard && (
            <div className="text-gray-700 mb-2">Wizard: {char.wizard}</div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
