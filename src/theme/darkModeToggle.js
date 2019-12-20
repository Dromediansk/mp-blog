import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

const DarkModeText = styled.span`
  color: #ddd;
  margin-left: 1rem;
  padding-right: 0.2rem;
  font-size: 0.8rem;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-left: 0.2rem;
  }
`

const ToggleControl = styled.span`
    position: relative;
    margin: auto 0;
`

const ToggleLabel = styled.label`
  position: absolute;
  top: 3px;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const ToggleInput = styled.input`
opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${ToggleLabel} {
    background: #344f6c;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <>
      <DarkModeText onClick={darkMode.toggle}>Dark theme</DarkModeText>
      <ToggleControl>
        <ToggleInput
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
          id="dmcheck"
        />
        <ToggleLabel htmlFor="dmcheck" />
      </ToggleControl>
    </>)
};

export default DarkModeToggle;