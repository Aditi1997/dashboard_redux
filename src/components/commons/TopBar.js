import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Icon, Image } from 'semantic-ui-react';

const EVIVE_LOGO = 'https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png';
const TRAVELLERS_LOGO = 'https://56e0b88549703524cdea-56269be9fa6a015648d898f06ebbb34a.ssl.cf1.rackcdn.com/add40ff726e05ca92fe7f72a8333c9d1b84372f1859a4938d5cf5df707833c55a102e11cf4159ad93d72e766b8e374cdbe4007747dd1934f87bafffd984f1d82.png';

class TopBar extends Component {
  render() {
    return (
      <Menu size="huge" borderless fixed="top">
        <Menu.Item>
          <Button basic icon="sidebar" onClick={this.props.changeState} />
        </Menu.Item>
        <Menu.Item>
          <Image src={EVIVE_LOGO} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <p> You are logged in with </p>
          </Menu.Item>
          <Menu.Item>
            <Image
              src={TRAVELLERS_LOGO}
              width="90px"
              height="auto"
            />
          </Menu.Item>
          <Menu.Item>
            <Icon name="power" /> <Link to="/signin"> Logout </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
export default TopBar;
