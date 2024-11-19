import React, { useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { Container } from "reactstrap";

const ProfilePageHeader: React.FC = () => {
    // Use useRef with a specific type for a DOM element
    const pageHeader = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const updateScroll = () => {
        if (pageHeader.current) {
          // Use scrollY instead of the deprecated pageYOffset
          const windowScrollTop = window.scrollY / 3;
          pageHeader.current.style.transform = `translate3d(0, ${windowScrollTop}px, 0)`;
        }
      };
  
      if (window.innerWidth > 991) {
        window.addEventListener("scroll", updateScroll);
      }
  
      return () => {
        if (window.innerWidth > 991) {
          window.removeEventListener("scroll", updateScroll);
        }
      };
    }, []); // Empty dependency array ensures this runs once on mount

  //   function ProfilePageHeader() {
  //     let pageHeader = React.createRef();

  //     React.useEffect(() => {
  //       if (window.innerWidth > 991) {
  //         const updateScroll = () => {
  //           let windowScrollTop = window.pageYOffset / 3;
  //           pageHeader.current.style.transform =
  //             "translate3d(0," + windowScrollTop + "px,0)";
  //         };
  //         window.addEventListener("scroll", updateScroll);
  //         return function cleanup() {
  //           window.removeEventListener("scroll", updateScroll);
  //         };
  //       }
  //     });

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/bg5.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("../../assets/img/nelson.jpg")}></img>
          </div>
          <h3 className="title">Nelson Lamounier</h3>
          <p className="category">Full Stack Developer</p>
          <div className="content">
            <div className="social-description">
              <h2>2</h2>
              <p>Freelancer Projects</p>
            </div>
            <div className="social-description">
              <h2>3</h2>
              <p>College Projects</p>
            </div>
            <div className="social-description">
              <h2>2</h2>
              <p>Ongoing Projects</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;


//   return (
//     <>
//       <div
//         className="page-header clear-filter page-header-small"
//         filter-color="blue"
//       >
//         <div
//           className="page-header-image"
//           style={{
//             backgroundImage: "url(" + require("../../assets/img/bg5.jpg") + ")", 
//           }}
//           ref={pageHeader}
//         ></div>
//           <Container>
//             <div className="content-center brand">
//               <img
//                 alt="..."
//                 className="n-logo"
//                 src={require("../../assets/img/now-logo.png")}
//               ></img>
//             </div>
//             <div className="photo-container">
//               <img alt="..." src={require("../../assets/img/nelson.jpg")} />
//             </div>
//             <h3 className="title">Nelson Lamounier</h3>
//             <p className="category">Full Stack Developer</p>
//           <div className="content">
//             <div className="social-description">
//               <h2>26</h2>
//               <p>Comments</p>
//             </div>
//             <div className="social-description">
//               <h2>26</h2>
//               <p>Comments</p>
//             </div>
//             <div className="social-description">
//               <h2>48</h2>
//               <p>Bookmarks</p>
//             </div>
//           </div>
//           </Container>
   
//       </div>
//     </>
//   );
// };

// // function IndexHeader() {
// //     let pageHeader = React.createRef();

// //     React.useEffect(() => {
// //       if (window.innerWidth > 991) {
// //         const updateScroll = () => {
// //           let windowScrollTop = window.pageYOffset / 3;
// //           pageHeader.current.style.transform =
// //             "translate3d(0," + windowScrollTop + "px,0)";
// //         };
// //         window.addEventListener("scroll", updateScroll);
// //         return function cleanup() {
// //           window.removeEventListener("scroll", updateScroll);
// //         };
// //       }
// //     });

// export default ProfilePageHeader;
