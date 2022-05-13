const MediaCard = (props) => {
  const classes = `rounded-md shadow-md ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default MediaCard;
