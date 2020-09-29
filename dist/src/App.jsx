import React, { useState, useEffect } from "react";
import Editor from "./comps/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
        `
      );
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <div className="App">
      <section className="section-top">
        <Editor title="HTML" language="xml" value={html} onChange={setHtml} />
        <Editor title="CSS" language="css" value={css} onChange={setCss} />
        <Editor title="JS" language="javascript" value={js} onChange={setJs} />
      </section>
      <section>
        <iframe
          srcDoc={srcDoc}
          title="output"
          frameborder="0"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </section>
    </div>
  );
}

export default App;
