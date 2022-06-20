import { DialogContentContainer, Flex, Icon } from "monday-ui-react-core";
import Close from "monday-ui-react-core/dist/icons/Close";
import React, { useState, useCallback, useEffect, useRef } from "react";
import "./PokeSelector.scss";
import PokeSelectorContent from "./PokeSelectorContent";
import {useClickOutside} from "../hooks/useClickOutside";

const PokeSelector = ({ onClose }) => {
  const dialogRef = useRef(null)
  useClickOutside(dialogRef, onClose);
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const onCancel = useCallback(() => {
    onClose();
  }, [onClose]);

  const onSelection = (pokeSelection) => {
    onClose(pokeSelection);
  };

  return (
    <Flex
      align={Flex.align.CENTER}
      justify={Flex.justify.CENTER}
      className="poke-selector"
    >
      <DialogContentContainer
        type={DialogContentContainer.types.MODAL}
        size={DialogContentContainer.sizes.LARGE}
        className={"poke-selector_modal-content-container"}
        ref={dialogRef}
      >
        <Icon
          icon={Close}
          onClick={onCancel}
          className="poke-selector_modal-close"
        />
        <span className="clock-time">{date.toLocaleTimeString()}</span>
        <PokeSelectorContent onSelection={onSelection} />
      </DialogContentContainer>
    </Flex>
  );
};

export default PokeSelector;
