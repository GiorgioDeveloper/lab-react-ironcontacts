import React, { Component } from "react";
import "./List.css";

function List(props) {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="flex-container">
            <th className="tab-style">Picture</th>
            <th className="tab-style"> Name</th>
            <th className="tab-style">Popularity</th>
            <th className="tab-style"> </th>
          </tr>
        </thead>
        <tbody>
          {props.people.map((person, index) => {
            return (
              <tr key={index} className="flex-container">
                <td className="tab-style">
                  <img src={person.pictureUrl} alt="profile-img" />
                </td>
                <td className="tab-style">{person.name}</td>
                <td className="tab-style">{person.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={() => props.deletePerson(index)}>
                    Delete
                  </button>
                  {index}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default List;
