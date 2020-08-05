import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  withStyles,
  CardContent,
  // CardActions,
  CardMedia,
  Card,
  // CardActionArea,
  Typography,
} from "@material-ui/core";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 125,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
};

class Scream extends Component {
  render() {
    // console.log(this.props); props gom: classes, scream
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userHandle,
        userImage,
        screamId,
        likeCount,
        commentCount,
      },
    } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            image={userImage}
            title="Profile image"
            className={classes.image}
          />
          <CardContent className={classes.content}>
            <Typography
              variant="h5"
              component={Link}
              to={`/users/${userHandle}`}
              color="primary"
            >
              {userHandle}
            </Typography>
            <Typography variant="body2" color="secondary">
              {/* post cach day bao lau roi */}
              {dayjs(createdAt).fromNow()}
            </Typography>
            <Typography variant="body1">{body}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Scream);
