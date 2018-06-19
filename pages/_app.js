import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import { binder } from '../lib/_utils'

const STORE = {
  isMobile: false
}

const CONTEXT = React.createContext(STORE)

export default class MyApp extends App {
  constructor (props) {
    super(props)
    this.state = {
      isMobile: false
    }
    binder(this, ['checkMobile'])
  }

  componentDidMount () {
    const init = () => {
      if (typeof window !== 'undefined') {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
      } else {
        setTimeout(init, 300)
      }
    }
    init()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.checkMobile)
  }

  checkMobile () {
    this.setState({ isMobile: typeof window.orientation !== 'undefined' || window.innerWidth < 600 })
  }

  render () {
    const { Component } = this.props
    return (
      <Container>
        <CONTEXT.Provider env={this.state}>
          <Layout>
            <Component {...this.props} />)
          </Layout>
        </CONTEXT.Provider>
        <style jsx global>{`
          html {
            --font-header: 'Naum Sans';
            --font-body: 'Montserrat';
          }
          body {
            margin: 0;
            width: 100vw;
            overflow-x: hidden;
          }
        `}</style>
      </Container>
    )
  }
}

// example of GraphQL with multiple queries composed:
// export default withData(
//   compose(
//     graphql(allThings1, { name: 'allThings1' }),
//     graphql(allThings2, { name: 'allThings2' })
//   )(HomePage)
// )
