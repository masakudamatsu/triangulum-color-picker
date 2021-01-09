// See https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c

import {useState, useEffect} from 'react';

export default function useCurrentWidth() {
  // save current window width in the state object
  const [width, setWidth] = useState(null);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // window object become available only after the component is rendered
    setWidth(window.innerWidth);
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
}
