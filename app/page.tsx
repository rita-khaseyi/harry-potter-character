'use client'
import React, { useState, useEffect } from "react";
import { getMovies } from "./utilities/utils";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import Link from "next/link";

interface Character {
  id: string;
  image: string;
  name: string;
  dateOfBirth: string;
}

export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await getMovies();
        setCharacters(charactersData);
        setFilteredCharacters(charactersData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchTerm, characters]);

  const displayedCharacters = filteredCharacters.slice(0, 24);

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />

      <main className="bg-cover h-1500" style={{ backgroundImage: "url('/assets/har.jpg')" }}>
        <h1 className="text-3xl font-semibold text-white text-center sm:mb-8 md:text-4xl lg:text-5xl"> Characters</h1>

        <div className="flex flex-wrap justify-center gap-4">
          {displayedCharacters.map((item) => (
            <div
              key={item.id}
              className="one-character bg-gray-200 rounded-xl p-6 m-4 w-80 h-140 transition duration-300 shadow-md hover:bg-gray-300 hover:shadow-lg cursor-pointer transform hover:scale-110"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Link key={item.id} href={`/components/${item.id}`}>
                <img
                  className="w-60 h-80 object-cover rounded-md mx-auto mb-4 transition-opacity duration-1000 hover:opacity-75"
                  src={item.image || "/assets/avata.png"} 
                  alt={item.name}
                  width="240"
                  height="320"
                />
                <figcaption>
                  <div className="character-name font-bold text-white">
                    Name: {item.name}
                  </div>
                  <div className="text-white">
                    Date of Birth: {item.dateOfBirth}
                  </div>
                </figcaption>
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
