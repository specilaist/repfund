"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Grid } from "@mui/material";

//Simple styled theme for styling different components
// const Item0 = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: "center",
//   borderRadius: "0",
//   backgroundColor: "#B31942",
//   color: "#ffffff",
// }));

//Card expand function and styling
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//Card components and rendering
export default function InitiativeCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [forIt, setForIt] = React.useState(false);
  const [againstIt, setAgainstIt] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleForIt = () => {
  //   setForIt();
  // };

  // const handleAgainstIt = () => {
  //   setAgainstIt();
  // };

  // const handleFavorite = () => {
  //   setFavorite();
  // };

  return (
    <Grid
      item
      xs={12}
      md={3}
      sx={{ margin: "1rem", height: 'auto' }}
    >
      <Card sx={{ borderColor: "white", borderWidth: "10px", borderRadius: "0", flexGrow: '1',  }}>
        <CardHeader sx={{ backgroundColor: "#B31942", color: "white"}}title={props.name} />
        <CardMedia
          component="iframe"
          height="194"
          src={props.video}
          // image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {props.disc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Vote for It">
            <ThumbUpAltIcon />
          </IconButton>
          <IconButton aria-label="Vote against It">
            <ThumbDownIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Additional Infomation</Typography>
            <Typography paragraph> {props.point1}</Typography>
            <Typography paragraph> {props.point2}</Typography>
            <Typography paragraph>{props.point3}</Typography>
            <Typography paragraph>{props.source}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}


