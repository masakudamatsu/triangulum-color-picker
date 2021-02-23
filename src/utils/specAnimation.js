export const animation = {
  header: {
    hide: {
      duration: '200ms', // "Transitions that close, dismiss, or collapse an element use shorter durations. Exit transitions may be faster because they require less attention than the user’s next task." https://material.io/design/motion/speed.html#duration
      easing: 'cubic-bezier(0.0,0.0,0.2,1)', // "Imagine yourself throwing a tennis ball into an open field. The ball leaves your hand with the maximum speed. As it moves, it loses energy, it decelerates and eventually comes to a halt. This is called ease-out." (https://zellwk.com/blog/css-transitions/)
    },
    show: {
      duration: '250ms', // https://material.io/design/motion/speed.html#duration
      easing: 'cubic-bezier(0.0,0.0,0.2,1)', // "Incoming elements are animated using decelerated easing, in which transitions begin at peak velocity (the fastest point in an element's movement) and end at rest." https://material.io/design/motion/speed.html#easing
    },
  },
};
