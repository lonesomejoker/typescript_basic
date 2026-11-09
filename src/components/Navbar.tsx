import { Link } from "react-router-dom";

interface NavItem {
  id: number;
  name: string;
  path: string;
};

const Navbar = () => {
  const list: NavItem[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Ts Basics",
      path: "/ts_basics",
    },
    {
      id: 2,
      name: "Ts React",
      path: "/ts_react",
    },
  ];
  return (
    <div className="bg-gray-100">
    <div className=" flex gap-5 justify-end items-center text-[1rem]  py-5 container uppercase font-[600] tracking-[1px]">
      {list.map((item) => {
        return (
          <Link to={item.path} key={item.id}>
            {item.name}
          </Link>
        );
      })}
    </div>
    </div>
  );
};

export default Navbar;
