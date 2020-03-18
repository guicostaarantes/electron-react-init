import React from "react";
import { Button } from "@material-ui/core";
import EKey from "../../utils/translations/EKey";
import { Translator } from "../../utils/translations";

interface SelectorProps {
  translator: Translator;
  options: Option[];
  buttonProps?: Object;
}

interface Option {
  label: EKey;
  onSelect: () => void;
}

export default function Selector(props: SelectorProps) {
  const { translator, options, buttonProps } = props;
  return (
    <>
      {options.map((o, i) => (
        <Button key={i} onClick={o.onSelect} {...buttonProps}>
          {translator.get(o.label)}
        </Button>
      ))}
    </>
  );
}
