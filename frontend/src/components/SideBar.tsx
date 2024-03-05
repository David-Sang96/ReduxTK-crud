import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = () => {
  const labels = [
    { name: "Menu", route: "/menu", icon: <RestaurantMenuIcon /> },
    { name: "Menu Category", route: "/menuCategory", icon: <CategoryIcon /> },
  ];
  return (
    <List sx={{ width: "270px", minHeight: "100vh", bgcolor: "lightblue" }}>
      {labels.map((item, index) => (
        <Link
          to={`${item.route}`}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} sx={{ color: "grey" }} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default SideBar;
