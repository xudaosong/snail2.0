import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'dva/router'
import { Layout } from 'antd'
import SiderMenu from '../components/SiderMenu'
import logo from '../assets/logo.svg'
import Home from '../routes/Home'

const { Header, Content } = Layout

export default class BasicLayout extends Component {
  static propTypes = {
    location: PropTypes.object
  }
  render() {
    const { location } = this.props
    return (
      <Layout>
        <SiderMenu logo={logo} location={location} />
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route path='/' exact component={Home} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
