import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "./Editor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = (props) => {
  const { value, language, title, onChange } = props;

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor__container ${open ? "" : "collapsed"}`}>
      <div className="editor__title">
        <h4>{props.title}</h4>
        <FontAwesomeIcon
          icon={open ? faCompressAlt : faExpandAlt}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          className="editor__btn"
        />
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="editor__controlled"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          lint: true,
          mode: language,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
