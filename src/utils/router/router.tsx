import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

export default function Router(props: { children: {} | null | undefined }) {
  if (window.ipcRenderer) {
    // check if Electron
    return <HashRouter>{props.children}</HashRouter>;
  } else {
    return <BrowserRouter>{props.children}</BrowserRouter>;
  }
}

declare global {
  interface Window {
    ipcRenderer: any;
  }
}
