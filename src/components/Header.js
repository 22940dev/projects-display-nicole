import React from "react";
import { makeStyles, createStyles, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: "#676767",
      fontFamily: "Raleway",
      margin: 10,
      cursor: "pointer"
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: 10
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.container}>
      <Link
        variant="body2"
        className={classes.link}
        href={"https://www.linkedin.com/in/doc22940/"}
      >
        LinkedIn
      </Link>
      <Link
        variant="body2"
        className={classes.link}
        href={"https://github.com/22940dev"}
      >
        GitHub
      </Link>
    </Typography>
  );
};

export default Header;
