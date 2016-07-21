import React, {Component} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <h1>Portfolio</h1>
            </div>
        )
    }
}
//class Portfolio extends Component {
//    render() {
//
//        const styles = {
//            root: {
//                display: 'flex',
//                flexWrap: 'wrap',
//                justifyContent: 'space-around',
//            },
//            gridList: {
//                width: 800,
//                height: 800,
//                overflowY: 'auto',
//                marginBottom: 24,
//            }
//        }
//
//        const tilesData = [
//            {
//                img: '/images/writings_on_the_wall.png',
//                title: 'ReactJS Redux NodeJS Blog',
//                url: 'https://writings-on-the-wall.herokuapp.com/',
//            },
//            {
//                img: 'images/grid-list/burger-827309_640.jpg',
//                title: 'Tasty burger',
//                author: 'pashminu',
//            },
//            {
//                img: 'images/grid-list/camera-813814_640.jpg',
//                title: 'Camera',
//                author: 'Danson67',
//            },
//            {
//                img: 'images/grid-list/morning-819362_640.jpg',
//                title: 'Morning',
//                author: 'fancycrave1',
//            },
//            {
//                img: 'images/grid-list/hats-829509_640.jpg',
//                title: 'Hats',
//                author: 'Hans',
//            },
//            {
//                img: 'images/grid-list/honey-823614_640.jpg',
//                title: 'Honey',
//                author: 'fancycravel',
//            },
//            {
//                img: 'images/grid-list/vegetables-790022_640.jpg',
//                title: 'Vegetables',
//                author: 'jill111',
//            },
//            {
//                img: 'images/grid-list/water-plant-821293_640.jpg',
//                title: 'Water plant',
//                author: 'BkrmadtyaKarki',
//            },
//        ]
//
//        return (
//            <div style={styles.root}>
//                <GridList
//                    style={styles.gridList}
//                    cols={2}
//                >
//                    <Subheader>December</Subheader>
//                    {tilesData.map((tile) => (
//                        <GridTile
//                            key={tile.img}
//                            title={tile.title}
//                            subtitle={<span>Live Site <b>{tile.url}</b></span>}
//                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
//                        >
//                            <img src={tile.img}/>
//                        </GridTile>
//                    ))}
//                </GridList>
//            </div>
//        )
//    }
//}

export default Portfolio
