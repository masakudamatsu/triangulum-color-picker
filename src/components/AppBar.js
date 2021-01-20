import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/blocks/Header';

const AppBar = () => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    let scrollPosition = 0;
    function handleScroll() {
      const newScrollPosition = window.scrollY; // scrollY returns the Y coordinate of the top edge of the current viewport. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY

      if (newScrollPosition === scrollPosition) {
        return;
      }

      const shouldShow = newScrollPosition < scrollPosition;

      setShow(shouldShow);

      scrollPosition = newScrollPosition;
    }

    // set scroll listener
    window.addEventListener('scroll', handleScroll, {passive: true});

    // clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header hide={!show} show={show}>
      <Header.InnerWrapper>
        <Header.WrapperLogo>
          <Header.Logo />
        </Header.WrapperLogo>
        <Header.WrapperH1>
          <Header.H1>Triangulum Color Picker</Header.H1>
        </Header.WrapperH1>
      </Header.InnerWrapper>
    </Header>
  );
};

AppBar.propTypes = {};

export default AppBar;
