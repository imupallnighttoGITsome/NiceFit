import Dashboard from "../Dashboard/Dashboard";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Dashboard />
      <main>
        <div className="posts">{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
