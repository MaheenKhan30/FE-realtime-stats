import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

interface ListValueInterface {
  name: string;
  content: string | number;
}
interface CustomListPropsInterface {
  listValues: ListValueInterface[];
}
const CustomList: React.FC<CustomListPropsInterface> = (props) => {
  const { listValues } = props;
  return (
    <List>
      {listValues &&
        listValues.map((value: any, index: number) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CircleIcon sx={{ fontSize: 15, color: "#ffc107" }} />
            </ListItemIcon>
            <ListItemText>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ color: "#555657" }}>{value.name}:</Typography>
                <Typography sx={{ color: "#2d6aed" }}>
                  {value.content}
                </Typography>
              </Box>
            </ListItemText>
          </ListItem>
        ))}
    </List>
  );
};

export default CustomList;
