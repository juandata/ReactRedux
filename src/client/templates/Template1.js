import React from 'react';
import {Header } from '../elements/Header';
import {Nav } from '../elements/Nav';
import {Section } from '../elements/Section';
import {Article } from '../elements/Article';
import {Aside } from '../elements/Aside';
import {Footer } from '../elements/Footer';
//necesario para Redux
import store from '../redux/store';
import {connect} from 'react-redux';


class Template1 extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let valor = this.props.layout === "Template 1" ? "inherit" : 1;
    return (
    <React.Fragment>
      <Header />
      <Nav template={this.props.layout}/>
      <div id="content-wrapper">
       <div id="section-article-wrapper" style={{order : valor}}>
          <Section layout={this.props.layout}/>
          <Article layout={this.props.layout} />
        </div>
        <Aside />
      </div>
      <Footer />
    </React.Fragment>
    )
  }
}
function mapStateToProps(state) {
  return {
     layout : state.changeLayout.layout
  };
};
export default connect(mapStateToProps)(Template1)
