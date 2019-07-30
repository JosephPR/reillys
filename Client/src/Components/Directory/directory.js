import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/Directory/directory.selectors";
import MenuItem from "../MenuItem/menu-item"
import "../MenuItem/menu-item";

import "./directory.scss"

 const Directory = ({ sections }) => {
return(
  <div className="directory-menu">
    {
      sections.map(({ id, ...sectionProps }) => {
        return (
          <MenuItem key={id} {...sectionProps}/>
        )})
    }
  </div>
)};

const mapStateToProps= createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
