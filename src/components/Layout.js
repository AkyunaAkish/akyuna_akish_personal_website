import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  AppBar,
  Tabs,
  Tab,
  Drawer,
  MenuItem
} from 'material-ui'

class Layout extends Component {
  constructor(props) {
    super(props)

    switch (this.props.location.pathname) {
      case '/':
      this.props.setCurrentTab(0)
      break
      case '/contact':
      this.props.setCurrentTab(1)
      break
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  checkDimensions(dimensions) {
    if (dimensions < 550) {
      this.props.toggleTabs(false)
    } else {
      if (this.props.showSideNav) {
        this.toggleSideNav()
      }
      switch (this.props.location.pathname) {
        case '/':
        this.props.setCurrentTab(0)
        break
        case '/contact':
        this.props.setCurrentTab(1)
        break
      }
      this.props.toggleTabs(true)
    }
  }

  componentWillMount() {
    this.checkDimensions(window.innerWidth)
    window.addEventListener('resize', () => {
      this.checkDimensions(window.innerWidth)
    })
  }

  toggleSideNav() {
    this.props.toggleSideNav(!this.props.showSideNav)
  }

  switchComponent(link) {
    this.context.router.push(link)
    if (this.props.showSideNav) {
      this.toggleSideNav()
    }
  }

  handleTabChange(tabValue) {
    if (tabValue !== 12) {
      this.props.setCurrentTab(tabValue)
    } else {
      setTimeout(() => {
        this.props.toggleTabs(false)
        this.props.setCurrentTab(this.props.currentTab)
      }, 0)
      setTimeout(() => {
        this.props.toggleTabs(true)
      }, 1)
    }
  }

  render() {
    const underLineStyle = {
      backgroundColor: 'rgb(32,50,67)'
    }
    const menuItemStyle = {
      cursor: 'pointer',
      backgroundColor: 'white',
      textAlign: 'center'
    }

    return (
      <div>
        <AppBar
          className='navBar'
          title={this.props.showTabs ? <img src='images/akyunatransparent.png' className='navLogo'/> : null}
          showMenuIconButton={!this.props.showTabs}
          iconElementRight={!this.props.showTabs ? <img src='images/akyunatransparent.png' className='navLogo'/> : null}
          onLeftIconButtonTouchTap={this.toggleSideNav.bind(this)}
          children={this.props.showTabs ? [
            <Tabs
              key={1}
              inkBarStyle={underLineStyle}
              value={this.props.currentTab}
              onChange={this.handleTabChange.bind(this)}
              >
              <Tab
                label='PORTFOLIO'
                value={0}
                className='navTabs'
                onClick={() => this.switchComponent('/')}
                />
              <Tab
                label='CONTACT'
                value={1}
                className='navTabs'
                onClick={() => this.switchComponent('/contact')}
                />
              <Tab
                label='RESUME'
                className='navTabs'
                id='resumeTab'
                value={12}
                href='/Akyuna_Akish_Resume.pdf'
                target='_blank'
                />
            </Tabs>
          ] : []}
          />

        <Drawer
          open={this.props.showSideNav}
          docked={false}
          onRequestChange={() => this.toggleSideNav()}
          containerClassName='sideNav'
          >
          <MenuItem
            style={menuItemStyle}
            className='sideNavItem'
            onClick={this.toggleSideNav.bind(this)}
            id='closeNavItem'>
            CLOSE MENU
          </MenuItem>
          <MenuItem
            style={menuItemStyle}
            className='sideNavItem'
            onClick={() => this.switchComponent('/')}>
            PORTFOLIO
          </MenuItem>
          <MenuItem
            style={menuItemStyle}
            className='sideNavItem'
            onClick={() => this.switchComponent('/contact')}>
            CONTACT
          </MenuItem>
          <a href='/Akyuna_Akish_Resume.pdf' target='_blank' className="drawerAnchor">
            <MenuItem
              style={menuItemStyle}
              className='sideNavItem'
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


function mapStateToProps(state) {
  return {
    showTabs: state.material_ui.showTabs,
    showSideNav: state.material_ui.showSideNav,
    currentTab: state.material_ui.currentTab
  }
}

export default connect(mapStateToProps, actions)(Layout)
