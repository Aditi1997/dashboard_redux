import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sidebar, Button, Menu, Icon } from 'semantic-ui-react';
import { loadDashboardActions } from '../../actions/dashboard/DashboardActions';


class SideBar extends Component {
  state = {
    visible: '',
  }
  componentDidMount()
  {
    this.props.loadData();
  }
  toggleVisibility = () => {
    this.setState({ visible: !this.props.visible });
  }

  render() {
    console.log(this.props.loadStore);
    const { visible } = this.state;
    return (
      <div>
        <Sidebar as={Menu} animation="push" width="thin" visible={this.props.visible} icon="labeled" vertical inverted>
          <Menu.Item>
            <Button basic icon="sidebar" onClick={this.props.changeState} />
          </Menu.Item>
          {this.props && this.props.sidebar && this.props.sidebar.map(menu => (
            <Menu.Item key={menu.text} id="hover" name={menu.icon}> <Icon name={menu.icon} />
              <Link to={menu.link}> {menu.text} </Link>
            </Menu.Item>
        ))}
        </Sidebar>
      </div>
    );
  }
}
function mapStateToProps({loadStore})
{
  return {
    sidebar:loadStore.sidebar,
  };
}
function mapDispatchToProps(dispatch)
{
  return {
    loadData:()=>{dispatch(loadDashboardActions.loadInitialData())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
