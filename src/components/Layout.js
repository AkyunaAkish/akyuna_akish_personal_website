import React, { Component, PropTypes } from 'react'
import { Link, browserHistory, Router }  from 'react-router'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import { Tabs, Tab } from 'material-ui/Tabs'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      showTabs: true,
      showMenuButton: false,
      initialTab: 0
    }
    switch (this.props.location.pathname) {
      case '/':
      this.state.initialTab = 0
      break;
      case '/contact':
      this.state.initialTab = 1
      break;
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleTouchTap() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  checkDimensions(dimensions) {
    if (dimensions <= 550) {
      this.setState({
        showTabs: false,
        showMenuButton: true
      })
    } else {
      this.setState({
        showTabs: true,
        showMenuButton: false,
        drawerOpen: false
      })
    }
  }

  componentWillMount() {
    this.checkDimensions($(window).width())
    window.addEventListener('resize', () => {
      this.checkDimensions($(window).width())
    })
  }

  switchComponent(link) {
    this.context.router.push(link)
  }

  maintainTabs() {
    setTimeout(() => {
      switch (this.props.location.pathname) {
        case '/':
        this.setState({
          showTabs: false,
          initialTab: 0
        })
        break;
        case '/contact':
        this.setState({
          showTabs: false,
          initialTab: 1
        })
        break;
      }
    }, 0)
    setTimeout(() => {
      this.setState({
        showTabs: true
      })
    }, 1)
  }

  render() {
    const buttonStyle = {
      color: 'rgb(255,255,255)'
    }
    const menuItemStyle = {
      cursor: 'pointer',
      backgroundColor: 'white',
      textAlign: 'center'
    }
    const paperStyle = {
      background: 'rgb(125,213,248)',
      textAlign: 'center'
    }
    const underLineStyle = {
      backgroundColor: 'white'
    }
    return (
      <div>
        <AppBar
          className='navBar'
          title={<img src='images/akyunatransparent.png' className='navLogo'/>}
          onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
          showMenuIconButton={this.state.showMenuButton}
          children={this.state.showTabs ? [
            <Tabs
              key={1}
              initialSelectedIndex={this.state.initialTab}
              inkBarStyle={underLineStyle}>
              <Tab
                label='PORTFOLIO'
                className='navTabs'
                onClick={() => this.switchComponent('/')}
                />
              <Tab
                label='CONTACT'
                className='navTabs'
                onClick={() => this.switchComponent('/contact')}
                />
              <Tab
                label='RESUME'
                className='navTabs'
                id='resumeTab'
                href='/Akyuna_Akish_Resume.pdf'
                target='_blank'
                onClick={() => this.maintainTabs()}
                />
            </Tabs>
          ] : []}
          />

        <Drawer
          open={this.state.drawerOpen}
          openSecondary={true}
          containerClassName='sideNav'
          >
          <MenuItem
            onClick={this.handleTouchTap.bind(this)}
            style={menuItemStyle}
            className='menuItem'>
            CLOSE
          </MenuItem>
          <MenuItem
            style={menuItemStyle}
            className='menuItem'
            onClick={() => this.switchComponent('/')}>
            PORTFOLIO
          </MenuItem>
          <MenuItem
            style={menuItemStyle}
            className='menuItem'
            onClick={() => this.switchComponent('/contact')}>
            CONTACT
          </MenuItem>
          <a href='/Akyuna_Akish_Resume.pdf' target='_blank' className="drawerAnchor">
            <MenuItem
              style={menuItemStyle}
              className='menuItem'
              >
              RESUME
            </MenuItem>
          </a>
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
