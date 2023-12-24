import React from "react";
import styles from "./style.module.css";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/sort">
        <div>Sort</div>
      </Link>
      <Link to="/group">
        <div>Group</div>
      </Link>
      <Link to="/tree">
        <div>Tree</div>
      </Link>
      <Link to="/custom">
        <div>Custom</div>
      </Link>
      <Link to="/edit">
        <div>Edit</div>
      </Link>
      <Link to="/choice_row">
        <div>Choice row</div>
      </Link>
    </div>
  );
};
