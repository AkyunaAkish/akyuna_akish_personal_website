import React, { Component } from 'react'
import { Link } from 'react-router'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import { RaisedButton, FontIcon } from 'material-ui'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import Chip from 'material-ui/Chip'



class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projectCols: 3
    }
  }

  checkDimensions(dimensions) {
    if (dimensions <= 1100 && dimensions >= 750) {
      this.setState({
        projectCols: 2
      })
    } else if(dimensions > 1100){
      this.setState({
        projectCols: 3
      })
    } else if(dimensions < 750) {
      this.setState({
        projectCols: 1
      })
    }
  }

  componentWillMount() {
    this.checkDimensions($(window).width())
    window.addEventListener('resize', () => {
      this.checkDimensions($(window).width())
    })
  }

  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 1200,
        overflowY: 'auto',
        marginBottom: 24,
      }
    }


    const paperStyle = {
      height: 50,
      width: '75%',
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    }

    const projectData = [
      {
        img: '/images/writings_on_the_wall.png',
        title: 'ReactJS Redux NodeJS Blog',
        url: 'https://writings-on-the-wall.herokuapp.com/',
        github: 'https://github.com/AkyunaAkish/react-redux-blog-application',
      },
      {
        img: '/images/react_redux_weather.png',
        title: 'ReactJS Redux Weather Search',
        url: 'http://react-redux-weather.s3-website-us-west-2.amazonaws.com/',
        github: 'https://github.com/AkyunaAkish/react-redux-weather',
      },
      {
        img: '/images/react_image_search.png',
        title: 'ReactJS Image Search',
        url: 'https://react-redux-image-search.firebaseapp.com/',
        github: 'https://github.com/AkyunaAkish/react-redux-image-search',
      },
      {
        img: '/images/react_youtube.png',
        title: 'ReactJS YouTube Search',
        url: 'https://react-youtube-search.firebaseapp.com/',
        github: 'https://github.com/AkyunaAkish/reactJS_youtube_search',
      },
      {
        img: '/images/keenly_done.png',
        title: 'AngularJS Social Media Application',
        url: 'https://keenlydone.firebaseapp.com/',
        github: 'https://github.com/AkyunaAkish/keenly_done',
      },
      {
        img: '/images/barber_and_style.png',
        title: 'AngularJS Barber Shop website',
        url: 'http://legacybarberandstyle.herokuapp.com/',
        github: 'https://github.com/AkyunaAkish/barberAndStyle',
      },
      {
        img: '/images/rails_mythical_creatures.png',
        title: 'Ruby on Rails Mythical Creatures',
        url: 'http://mythical-creatures.herokuapp.com/',
        github: 'https://github.com/AkyunaAkish/creaturesRailsApp',
      },
    ]

    const chipStyle = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      }
    }

    const buttonStyle = {
      margin: 12
    }
    const labelStyle = {
      color: 'lime'
    }



    return (
      <div className="text-center">
        <div className='mainPhotoDiv'>
          <img src='/images/Akyuna_Akish.jpg'/>
          <Paper className='paperHeader' zDepth={5}>
            <h1>Full Stack Web Developer - Boulder, CO</h1>
            <RaisedButton
              href='https://github.com/akyunaakish'
              className='socialMediaButton'
              target='_blank'
              style={buttonStyle}
              icon={<FontIcon className="fa fa-github socialButtonIcon" />}
              />
            <RaisedButton
              href='https://linkedin.com/in/akyunaakish'
              className='socialMediaButton'
              target='_blank'
              style={buttonStyle}
              icon={<FontIcon className="fa fa-linkedin socialButtonIcon" />}
              />
            <RaisedButton
              href='akyunaakish@gmail.com'
              label='akyunaakish@gmail.com'
              className='socialMediaButton'
              id='emailButton'
              target='_blank'
              labelStyle={labelStyle}
              style={buttonStyle}
              icon={<FontIcon className="fa fa-envelope socialButtonIcon" />}
              />
            <RaisedButton
              href='#'
              label='760-585-6334'
              className='socialMediaButton'
              id='phoneButton'
              style={buttonStyle}
              icon={<FontIcon className="fa fa-phone socialButtonIcon" />}
              />
          </Paper>
        </div>


        <Paper className='paperHeader' style={paperStyle} zDepth={5}>
          <h1><i className='devicons devicons-atom buttonIcon'></i>Skills</h1>
        </Paper>

        <div style={chipStyle.wrapper} className="skillContainer">
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-html5'> HTML</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-css3'> CSS</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-sass'> SASS</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-bootstrap'> Bootstrap</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-javascript_badge'> JavaScript</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-jquery'> jQuery</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> ReactJS</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> Redux</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-angular'> AngularJS</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> Webpack</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-gulp'> GulpJS</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-nodejs_small'> NodeJS</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> ExpressJS</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> Socket.io</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-postgresql'> PostgreSQL</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-mongodb'> MongoDB</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> API Development</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-firebase'> Firebase</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-git'> Git/Github</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-npm'> NPM</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-bower'> Bower</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-terminal'> Terminal</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> TDD</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> Mocha/Chai/Jasmine</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-atom'> Deployment</p>
          </Chip>
          <Chip
            style={chipStyle.chip}
            >
            <p className='devicons devicons-heroku'> Heroku</p>
          </Chip>
        </div>


        <Paper className='paperHeader' style={paperStyle} zDepth={5}>
          <h1><i className='devicons devicons-terminal buttonIcon'></i>Projects</h1>
        </Paper>

        <div style={styles.root}>
          <GridList
            style={styles.gridList}
            cols={this.state.projectCols}
            >
            {projectData.map((tile) => (
              <GridTile
                key={tile.img}
                title={<a href={tile.url} target='_blank' className='gridTitle'>{tile.title}</a>}
                subtitle={
                  <RaisedButton
                    label="GitHub Repo"
                    href={tile.github}
                    className='projectButton'
                    target='_blank'
                    icon={<FontIcon className="fa fa-github" />}
                    />}
                    className='projectGridTitle'
                    >
                    <a href={tile.url} target='_blank'>
                      <img src={tile.img}/>
                    </a>
                  </GridTile>
                ))}
              </GridList>
            </div>
          </div>
        )
      }
    }

    export default Portfolio
