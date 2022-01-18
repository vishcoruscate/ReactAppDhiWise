// lazy loading
// import Loadable from 'react-loadable';

import Routes from "./Routes";

// const User = Loadable({
//   loading: () => (
//     <div>
//       Loading...
//     </div>
//   ),
//   delay: 200,
//   timeout: 10000,
//   loader: () => import('./User')
// })

function App() {
  return <Routes />;
}

export default App;
