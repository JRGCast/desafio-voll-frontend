import { makeStyles } from '@material-ui/styles';

// {
//   xs: 0,
//   sm: 600,
//   md: 900,
//   lg: 1200,
//   xl: 1536,
// },
const useStyles = makeStyles((theme) =>
  console.log(theme)
  // mainWrapper: {
  //   background: theme.palette.primary
  // },
  // title: {
  //   color: theme.palette.text.primary,
  //   margin: '0 auto',
  //   paddingTop: '0.5em',
  //   textAlign: 'center'
  // },
  // subtitle: {
  //   color: theme.palette.text.secondary,
  //   margin: '1em auto',
  //   textAlign: 'justify',
  //   textIndent: '2em',
  //   width: '50%'
  // }
);

export default useStyles;