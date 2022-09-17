// Basic CSS styling for our application
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(244, 244, 244)',
  },
  heading: {
    color: 'DodgerBlue',
  },
  image: {
    marginLeft: '15px',
  },
}));