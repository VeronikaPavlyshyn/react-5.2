// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
// який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список
import Users from "./components/Users/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import Posts from "./components/Posts/Posts";
import Coments from "./components/Coments/Coments";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to={'/'}>to defaut page</Link>
          <br />
          <Link to={'/users-page'}>to users page</Link>
          <br/>
          <Link to={'/posts-page'}>to posts page</Link>
          <br/>
          <Link to={'/coments-page'}>to coments page</Link>
        </div>
        <Route path={'/users-page'} component={Users} />
        <Route path={'/posts-page'} component={Posts}/>
        <Route path={'/coments-page'} component={Coments}/>
      </div>
    </Router>
  );
}

export default App;
