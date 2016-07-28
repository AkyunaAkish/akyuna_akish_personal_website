import React, {Component} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import Paper from 'material-ui/Paper'

class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projectCols: 3
        }
    }

    checkDimensions(dimensions) {
        console.log("WIDTH", dimensions);
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
        };

        const tilesData = [
            {
                img: '/images/writings_on_the_wall.png',
                title: 'ReactJS Redux NodeJS Blog',
                url: 'https://writings-on-the-wall.herokuapp.com/',
            },
            {
                img: '/images/react_redux_weather.png',
                title: 'ReactJS Redux Weather Search',
                url: 'https://writings-on-the-wall.herokuapp.com/',
            },
            {
                img: '/images/react_image_search.png',
                title: 'ReactJS Image Search',
                url: 'https://writings-on-the-wall.herokuapp.com/',
            },
            {
                img: '/images/react_youtube.png',
                title: 'ReactJS YouTube Search',
                url: 'https://writings-on-the-wall.herokuapp.com/',
            },
            {
                img: '/images/keenly_done.png',
                title: 'AngularJS Social Media Application',
                url: 'https://writings-on-the-wall.herokuapp.com/',
            },
            {
                img: '/images/rails_mythical_creatures.png',
                title: 'Ruby on Rails Mythical Creatures',
                url: 'https://writings-on-the-wall.herokuapp.com/',
            },
        ]

        return (
            <div className="text-center">
                <Paper className='paperHeader' style={paperStyle} zDepth={5}>
                    <h1><i className='devicons devicons-terminal'></i>Projects</h1>
                </Paper>

                <div style={styles.root}>
                    <GridList
                        style={styles.gridList}
                        cols={this.state.projectCols}
                    >
                        {tilesData.map((tile) => (

                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                subtitle={<span>Live Site <b>{tile.url}</b></span>}
                                className='projectGridTitle'
                            >
                                <img src={tile.img}/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </div>
        )
    }
}

export default Portfolio
