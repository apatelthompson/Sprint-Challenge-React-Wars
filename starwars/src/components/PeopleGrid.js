import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";

export default function PeopleGrid({ limit }) {
  const [people, setPeople] = useState([]);
  console.log(people);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        const results = response.data.results;
        setPeople(results);
      })
      .catch(err =>
        console.log("The SWAPI is currently down; may the force be with you.")
      );
  }, []);

  return (
    <div className="people-grid">
      {people.map(info => (
        <PeopleCard
          key={info.url}
          name={info.name}
          height={info.height}
          weight={info.mass}
          hairColor={info.hair_color}
          eyeColor={info.eye_color}
          birthYear={info.birth_year}
        />
      ))}
    </div>
  );
}
