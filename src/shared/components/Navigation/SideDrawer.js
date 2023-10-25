import React, { useRef } from 'react';
import ReactDOM from "react-dom"
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const { show, onClick } = props;
  const modalRef = useRef(null);

  const content = (
    <CSSTransition
      ref={modalRef}
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return createPortal(content, document.body);
};

export default SideDrawer;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { CSSTransition } from 'react-transition-group';

// import './SideDrawer.css';

// const SideDrawer = props => {
//   const content = (
//     <CSSTransition
//       in={props.show}
//       timeout={200}
//       classNames="slide-in-left"
//       mountOnEnter
//       unmountOnExit
//     >
//       <aside className="side-drawer" onClick={props.onClick}>
//         {props.children}
//       </aside>
//     </CSSTransition>
//   );

//   // Conditionally render the portal if the target container exists
//   if (document.getElementById('drawer-hook')) {
//     return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
//   } else {
//     // Return null or a fallback UI if the target container is not found yet
//     return null;
//   }
// };

// export default SideDrawer;






// import React from 'react';
// import ReactDOM from 'react-dom';
// import { CSSTransition } from 'react-transition-group';

// import './SideDrawer.css';

// const SideDrawer = props => {
//   const content = (
//     <CSSTransition
//       in={props.show}
//       timeout={200}
//       classNames="slide-in-left"
//       mountOnEnter
//       unmountOnExit
//     >
//       <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
//     </CSSTransition>
//   );

//   return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
// };

// export default SideDrawer;