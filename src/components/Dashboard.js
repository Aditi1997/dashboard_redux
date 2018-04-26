import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
  Sidebar,
  Segment,
  Image,
  Card,
} from 'semantic-ui-react';
import SortableComponent from './SortableComponent';
import { fetchCards } from '../services/cardsApi';
import SideBar from './commons/SideBar';
import TopBar from './commons/TopBar';



class Dashboard extends Component {
  state = {
    visible: false,
    cards: [],
  }

  componentDidMount() {
    fetchCards()
      .then((response) => {
        response.json()
          .then((data) => {
            this.setState({ cards: data })
          });
      });
  }

  changeState = () => {
    this.setState({ visible: !this.state.visible });
  }


  sidebar = () => {
    return (
      <SideBar visible={this.state.visible} changeState={this.changeState} />
    );
  }

  topbar = () => {
    return (
      <TopBar changeState={this.changeState} />
    )
  }

  carousel = () => (
    <div className="campaigns-carousel">
      <Carousel>
        <div>
          <img alt="not found" src="https://eeab9099f80ae9d42d2d-c92ae8cf13840fd451d25c3e40c26443.ssl.cf1.rackcdn.com/ef54b8e9f20c749fd7c243278fba7bfb9a813bbd77f9b0159321d299d3888a32dc8b7b2f8f3d2d1cd766575b8227b409f847d3590007ac587f6c1c187822c2ee.png" />
        </div>
        <div>
          <img alt="not found" src="https://eeab9099f80ae9d42d2d-c92ae8cf13840fd451d25c3e40c26443.ssl.cf1.rackcdn.com/ef54b8e9f20c749fd7c243278fba7bfb9a813bbd77f9b0159321d299d3888a32dc8b7b2f8f3d2d1cd766575b8227b409f847d3590007ac587f6c1c187822c2ee.png" />
        </div>
      </Carousel>
    </div>

  )

  sidecards = () => {
    return (
      <div>
        {(this.state.cards).filter(card => card.section === "side-cards").map(card => (
          <Card key={card.meta}>
            <Card.Content>
              <Image
                alt="Img not found"
                className="cards-image"
                src={card.image}
              />
              <Card.Header> {card.header}
              </Card.Header>
              <Card.Meta> {card.meta}
              </Card.Meta>
              <Card.Description> <span>{card.description}</span>
              </Card.Description>
            </Card.Content>
          </Card>
      ))}
      </div>
    )
  }

  render() {
    console.log(this.props.loadSidebarStore);
    return (
      <div className="dashboard-page">
        <div className="sidebar">
          <Sidebar.Pushable as={Segment}>
            {this.sidebar()}
            <Sidebar.Pusher>
              <Segment basic>
                <div className="dashboard-content">
                  <div className="topbar">
                    {this.topbar()}
                  </div>
                  <div className="voting">
                    <Card fluid color="red" header="When did you take a good nap recently?"/>
                  </div>

                  <div className="dashboard-center">
                    {this.carousel()}

                    <div className="side-cards">
                      {this.sidecards()}
                    </div>

                  </div>

                  <div className="cards">
                    <SortableComponent sidebar={this.sidebar()} topbar={this.topbar()} />
                  </div>

                </div>

              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default Dashboard
