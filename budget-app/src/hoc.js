// import React from "react";
// figuring out some stuff


// const Info = (props) => {
//     return (
//         <div>
//         <h1>info</h1>
//         <p>The info is: {props.info}</p>
//         </div>
//     )
// }

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//         {props.isAdmin && <p>This is private info. Don't share.</p>}
//         <WrappedComponent {...props}/>
//         </div>
//     )
// }

// export const AdminInfo = withAdminWarning(Info);

// const requireAuthentication = (Component) => {
//     return (props) => (
//         <div>
//         {props.isAuthenticated ? (
//             <Component {...props} />
//         ) : (
//             <p>Please login to view details</p>
//         )}
//         </div>
//     )
// }

// export const AuthInfo = requireAuthentication(Info);

// export default Info;
