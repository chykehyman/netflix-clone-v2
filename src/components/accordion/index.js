import React, { useState, useContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles';

const ToggleContext = React.createContext();

const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

Accordion.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Frame = ({ children, ...restProps }) => (
  <Frame {...restProps}>{children}</Frame>
);

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children(toggleShow)}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
