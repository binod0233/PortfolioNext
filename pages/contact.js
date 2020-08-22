// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// import { Jumbotron, Row, Col, ProgressBar, Carousel } from "react-bootstrap";
// import { Container } from "@material-ui/core";
// import FullWidthGrid from "../components/materialUi/components/FullWidthGrid";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 2,
// //   },
// //   paper: {
// //     padding: theme.spacing(5),
// //     textAlign: "",
// //     color: theme.palette.text.secondary,
// //   },
// // }));
// export default function Home(props) {
//   const classes = useStyles();

//   return (
//     <div>
//       <FullWidthGrid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>
//             <h1>Hi I'm </h1>
//             <h2>Binod Sharma</h2>
//             <h1>I Build Thing for web</h1>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was
//               popularised.
//             </p>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>
//             <h1>Hi I'm </h1>
//             <h2>Binod Sharma</h2>
//             <h1>I Build Thing for web</h1>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was
//               popularised.
//             </p>
//           </Paper>
//         </Grid>
//       </FullWidthGrid>

//       {/* <Jumbotron fluid>
//         <Container>
//           <Row bg="danger">
//             <Col>
//               <Button variant="contained" color="primary">
//                 Primary
//               </Button>

//             </Col>
//           </Row>
//           <Row>
//             <Col>

//             </Col>
//             <Col></Col>
//           </Row>
//         </Container>
//       </Jumbotron> */}

//       <Jumbotron fluid bg="danger">
//         <Container>
//           <Row>
//             <Col>
//               <h1>this is about page</h1>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book. It has
//                 survived not only five centuries, but also the leap into
//                 electronic typesetting, remaining essentially unchanged. It was
//                 popularised.
//               </p>
//             </Col>
//             <Col></Col>
//           </Row>
//         </Container>
//       </Jumbotron>
//       <Jumbotron>
//         <h1>Progress of work</h1>
//         <Row>
//           <h3>Frontend</h3>

//           <Col>
//             <br />
//             <br />
//             <h6>Html</h6>
//             <ProgressBar variant="success" now={40} />
//             <br />
//             <ProgressBar variant="info" now={20} />
//             <br />
//             <ProgressBar variant="warning" now={60} />
//             <br />
//             <ProgressBar variant="danger" now={80} />
//             <br />
//           </Col>
//           <h3>Backend</h3>

//           <Col>
//             <br />
//             <br />
//             <ProgressBar variant="success" now={40} />
//             <br />
//             <ProgressBar variant="info" now={20} />
//             <br />
//             <ProgressBar variant="warning" now={60} />
//             <br />
//             <ProgressBar variant="danger" now={80} />
//             <br />
//           </Col>
//         </Row>
//       </Jumbotron>
//       <Jumbotron>
//         <Carousel style={{ textColor: "black" }}>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="/p1.png"
//               alt="First slide"
//               style={{ maxWidth: "50%" }}
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="/p2.png"
//               alt="Third slide"
//               style={{ maxWidth: "50%" }}
//             />

//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="/p3.png"
//               alt="Third slide"
//               style={{ maxWidth: "50%" }}
//             />

//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </Jumbotron>
//       <footer style={{ textAligned: "center" }}>Copyright@2020</footer>
//     </div>
//   );
// }
