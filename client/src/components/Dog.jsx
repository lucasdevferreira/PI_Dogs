import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./css/dog.module.css";
export default function Dog(props) {
  // declaro temperament porque los dogs creados me devuelven un array
  let temperament = props.aDog.temperaments
    ? props.aDog.temperaments.map((e) => e.name).join(", ")
    : props.aDog.temperament;

  return (
    <div className={s.dog}>
      <img src={props.aDog.image.url || props.aDog.image} alt="Img_dog" />
      <Link to={`/home/details/${props.aDog.id}`}>
        <h2>{props.aDog.name}</h2>
      </Link>

      <br />
      <h3>Temperamento</h3>
      <p>{temperament}</p>
      <h3>Peso</h3>
      <span>{props.aDog.weight.metric || props.aDog.weight} Kg</span>
    </div>
  );
}
