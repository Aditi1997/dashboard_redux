import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Card,
} from 'semantic-ui-react';


class Dashboard extends Component {

  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

   render(){

     const { visible } = this.state
   return(

   <div className="dashboard-page">

   <div className="sidebar">
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
        <Menu.Item>
          <Button  basic icon="sidebar" onClick={this.toggleVisibility}/>
        </Menu.Item>
        <Menu.Item id="hover" name="user"> <Icon name="user" />
           <Link to="/Userprofile"> Ardis Cook </Link></Menu.Item>
      <Menu.Item id="hover" name="home"> <Icon name="home" />
        <Link to="/dashboard"> Home </Link></Menu.Item>
      <Menu.Item  id="hover" name="block layout"> <Icon name="block layout" />
        My Resources </Menu.Item>
      <Menu.Item  id="hover" name="clock"> <Icon name="clock" />
        Recently Used </Menu.Item>
        <Menu.Item  id="hover" name="location arrow"> <Icon name="location arrow" />
          Nearby </Menu.Item>
      <Menu.Item  id="hover" name="trophy"> <Icon name="trophy" />
        Challenges </Menu.Item>
        <Menu.Item  id="hover" name="help"> <Icon name="help" />
          Help Center </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher>
    <Segment basic>


    <div className="dashboard-content">

      <div className="topbar">
      <Menu size='huge' borderless fixed="top">
      <Menu.Item>
        <Button  basic icon="sidebar" onClick={this.toggleVisibility}/>
      </Menu.Item>
         <Menu.Item>
           <Image src='https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png'/>
         </Menu.Item>
         <Menu.Menu position="right">
           <Menu.Item>
             <Image src='https://56e0b88549703524cdea-56269be9fa6a015648d898f06ebbb34a.ssl.cf1.rackcdn.com/add40ff726e05ca92fe7f72a8333c9d1b84372f1859a4938d5cf5df707833c55a102e11cf4159ad93d72e766b8e374cdbe4007747dd1934f87bafffd984f1d82.png' width="90px" height="auto"/>
           </Menu.Item>
           <Menu.Item>
             <Icon name="log out" />Logout
           </Menu.Item>
         </Menu.Menu>
      </Menu>
      </div>

      <div className="voting">
      <Card fluid color='red' header='When did you take a good nap recently?'/>
                <a>Yesterday.......</a>
                <a>Last week.......</a>
                <a>Dont remember exactly......</a>
                </div>

    <div className="dashboard-center">
       <div className="campaigns-carousel">
      <Carousel>
               <div>
                   <img src="https://eeab9099f80ae9d42d2d-c92ae8cf13840fd451d25c3e40c26443.ssl.cf1.rackcdn.com/ef54b8e9f20c749fd7c243278fba7bfb9a813bbd77f9b0159321d299d3888a32dc8b7b2f8f3d2d1cd766575b8227b409f847d3590007ac587f6c1c187822c2ee.png" />
               </div>
               <div>
                   <img src="https://eeab9099f80ae9d42d2d-c92ae8cf13840fd451d25c3e40c26443.ssl.cf1.rackcdn.com/ef54b8e9f20c749fd7c243278fba7bfb9a813bbd77f9b0159321d299d3888a32dc8b7b2f8f3d2d1cd766575b8227b409f847d3590007ac587f6c1c187822c2ee.png" />
               </div>
           </Carousel>
      </div>

      <div className="side-cards">

        <div>
        <Card>
           <Card.Content>
               <Image alt="Img not found" className="cards-image"
                 src='https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_icons/1042_Travelers/1042_doctorNearYou.svg' />
           <Card.Header>
           Where to go for Health?
           </Card.Header>
           <Card.Meta>
           Learn where to go for care so you can make the best decision based on your health needs
           </Card.Meta>
           <Card.Description>
           <span>Click Here!</span>
           </Card.Description>
           </Card.Content>
       </Card>
        </div>
      <div>
      <Card>
         <Card.Content>
             <Image alt="Img not found" className="cards-image"
               src='https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_icons/1042_Travelers/1042_stethescope.svg' />
               <Card.Header>
               Grand Rounds
               </Card.Header>
            <Card.Meta>
            Find a top tier physician or get an expert second opinion
         </Card.Meta>
         <Card.Description>
         <span>Visit Grand Rounds</span>
         </Card.Description>
         </Card.Content>
     </Card>
      </div>

      </div>

      </div>

      <div className="cards">
      <h3>My favorites</h3>
      <Card.Group>
          <Card>
             <Card.Content>
                 <Image alt="Img not found" className="cards-image"
                   src='https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_icons/1042_Travelers/1042_caduceus.svg' />
             <Card.Meta>
                 <span>Health Benefits</span>
             </Card.Meta>
             </Card.Content>
         </Card>
         <Card>
            <Card.Content>
                <Image  alt="Img not found" className="cards-image"
                  src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_icons/1042_Travelers/1042_wallet.svg"/>
            <Card.Meta>
                <span>Financial Benefits</span>
            </Card.Meta>
            </Card.Content>
        </Card>
        <Card>
          <Card.Content>
              <Image  alt="Img not found" className="cards-image"
                src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_icons/1042_Travelers/1042_firstaid.svg"/>
          <Card.Meta>
              <span>Medical Plan</span>
          </Card.Meta>
          </Card.Content>
     </Card>
    </Card.Group>
      </div>

    </div>

    </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
         </div>


     </div>

)
   }
}

export default Dashboard
