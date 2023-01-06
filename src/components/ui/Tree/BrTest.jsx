import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
const routes = [
  { path: "/users/:userId", breadcrumb: "Example 1" },
  { path: "/data", breadcrumb: "Example 2" },
];
function BrTest() {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <nav>
            
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link
          key={match.url}
          to={match.url}
          className={
            match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"
          }
        >
                    {breadcrumb} /         
        </Link>
      ))}
          
    </nav>
  );
}

export default BrTest;
