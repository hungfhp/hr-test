import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import pages from '@/pages/'
console.log(pages)

// const pages = [
//   {
//     path: '/employee_list',
//     name: "Employee",
//     Content: EmployeeList,
//     Layout: Layout
//   },
//   {
//     path: '/review_list',
//     name: "Review",
//     Content: ReviewList,
//     Layout: Layout
//   }
// ]

const Page = ({path, name, Content, Layout}) => {
  return <Route key={name} path={path}>
  <Layout pages={pages}>
    <Content />
  </Layout>
</Route>
}

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {
            pages.map(page => {
              return Page(page)
            })
          }
        </Switch>
      </div>
    </Router>
  );


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <div>Hello My friend</div>
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
