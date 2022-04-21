import { Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

const items = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Characters",
    link: "/character",
  },
  {
    name: "Sessions",
    link: "/game",
  },
];

export default function FloatingBar() {
  const [showList, setShowList] = useState(false);
  const [style, setStyle] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    if (!showList) {
      setStyle({});
    } else {
      setStyle({
        transform: "rotate(90deg)",
      });
    }
  }, [showList]);

  return (
    <Box
      sx={{
        width: 1,
        height: "30px",
        top: "10px",
        right: "10px",
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box display="flex" justifyContent="center" alignContent="center">
        {showList &&
          items.map(({ name, link }, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="center"
              alignContent="center"
              textTransform="capitalize"
              mr={1}
            >
              <a href={link}>{name}</a>
            </Box>
          ))}
      </Box>

      <section className="flex-center">
        <Menu
          fontSize="large"
          sx={{
            cursor: "pointer",
            transitionDuration: "300ms",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            ...style,
          }}
          onClick={() => setShowList(!showList)}
        />
      </section>
    </Box>
  );
}
