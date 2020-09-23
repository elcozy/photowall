import React, { Component } from "react";
import Photowall from "./Photowall";
// eslint-disable-next-line
import AddPhoto from "./AddPhoto";
import Single from "./Single";
import { Route, Link } from "react-router-dom";

class Main extends Component {
  state = { loading: true };
  componentDidMount() {
    this.props.startLoadingPosts().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />

        <Route path="/AddPhoto" render={() => <AddPhoto {...this.props} />} />
        <Route
          path={"/single/:id"}
          render={(params) => (
            <>
              <Single
                loading={this.state.loading}
                {...this.props}
                {...params}
              />
            </>
          )}
        />
      </div>
    );
  }
}

export default Main;

// componentDidMount() {
//   const data = SimulateFetchFromDatabase();
//   this.setState({
//     posts: data,
//   });
//   console.log("componentDidMount");
// }

// function SimulateFetchFromDatabase() {
//   return [
//     {
//       id: "0",
//       description: "Reynolds braids",
//       imageLink:
//         "https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOiIzMjAi/fSwiaWQiOiJpODE4NjA4/NyIsImYiOiJwbmcifQ;;.png",
//     },
//     {
//       id: "1",
//       description: "Aliens???",
//       imageLink:
//         "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//         "08323785_735653395_n.jpg",
//     },
//     {
//       id: "2",
//       description: "On a vacation!",
//       imageLink:
//         "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
//     },
//   ];
// }

// function Main(props) {
//   return (
//     <div>
//       <Title title={"Photowall"} />
//       <Photowall posts={posts} />
//     </div>
//   );
// }

// posts: [
//   {
//     id: "0",
//     description: "Reynolds braids",
//     imageLink:
//       "https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOiIzMjAi/fSwiaWQiOiJpODE4NjA4/NyIsImYiOiJwbmcifQ;;.png",
//   },
//   {
//     id: "1",
//     description: "Aliens???",
//     imageLink:
//       "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//       "08323785_735653395_n.jpg",
//   },
//   {
//     id: "2",
//     description: "On a vacation!",
//     imageLink:
//       "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
//   },
// ],
