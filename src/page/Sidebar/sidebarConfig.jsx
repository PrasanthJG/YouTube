import {
  MdHomeFilled
} from "react-icons/md";
const sidebarItems = {
  home: {
    id: 1,
    icon: <MdHomeFilled />,
    text: "Home",
    link: "/home",
  },
};

const sidebarConfig = Object.keys(sidebarItems).map((key) => {
  const item = sidebarItems[key];
  return (
    <div key={item.id} className="sidebar-item">
      {item.icon}
      <a href={item.link}>{item.text}</a>
      {item.subItems && (
        <div className="sub-items">
          {Object.keys(item.subItems).map((subKey) => {
            const subItem = item.subItems[subKey];
            return (
              <div key={subItem.id} className="sidebar-sub-item">
                {subItem.icon}
                <a href={subItem.link}>{subItem.text}</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default sidebarConfig;
