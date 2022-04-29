import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import {groupBy, forEach} from "lodash"
import { ACTINGCREDITS } from '../shared/ActingCredits';

class Credits extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapseBanner: "", collapseCycle: "", collapseReleaseDate: "", collapseLayout:"",data:{} };
    this.state = {
      actingCredits: ACTINGCREDITS,
    }
  }
  componentDidMount(){
    // call prepare data after api call
    this.prepareData({actingCredits})
  }
  prepareData(data){
    let dataG1 = groupBy(data,(d=>{
      return d.banner_id
    }))
    let dataG2= {};
    forEach(dataG1,(value,key)=>{
      dataG2[key] = {};
      let g2 = groupBy(value, (d => {
        return d.cycle
      }))
      forEach(g2,(v2,k2)=>{
        let g3 = groupBy(v2, v3 => {
           return  v3.release_date
          })
        dataG2[key][k2] = g3 
      })
    })
    this.setState({data:dataG2})
  }

  toggle(e) {
    let event = e.target.dataset.event;
    let key = e.target.dataset.type;
    switch(key){
      case "collapseBanner":{
        this.setState({ collapseBanner: event, collapseCycle: "", collapseReleaseDate: "", collapseLayout:""})
          break;
      }
      case "collapseCycle": {
        this.setState({ collapseCycle: event, collapseReleaseDate: "", collapseLayout: "" })
        break;
      }
      default: break;
    }
  }
  renderLayouts(layouts) {
    let result = [];
    forEach(layouts, (layout, index) => {
      result.push(<Card style={{ marginBottom: '1rem' }} key={layout}>
        <CardHeader onClick={this.toggle} data-event={layout.layout} data-type="collapseLayout">{layout.layout_name}</CardHeader>
        <Collapse isOpen={this.state.collapseLayout === layout.layout}>
          <CardBody>
            render release form {layout.layout_name}
          </CardBody>
        </Collapse>
      </Card>)
    })
    return result;
  }
  renderRelease(releases) {
    let result = [];
    forEach(releases, (release, releaseDate) => {
      console.log(release);
      result.push(<Card style={{ marginBottom: '1rem' }} key={releaseDate}>
        <CardHeader onClick={this.toggle} data-event={releaseDate} data-type="collapseReleaseDate">{releaseDate}</CardHeader>
        <Collapse isOpen={this.state.collapseReleaseDate === releaseDate}>
          <CardBody>
            {this.renderLayouts(release)}
          </CardBody>
        </Collapse>
      </Card>)
    })
    return result;
  }
 
  render() {
    return (
      <div className="container">
        <h3 className="page-header">Reactstrap Accordion using card component</h3>        
          {this.renderBanner()}         
      </div>
    );
  }
}

export default Credits;