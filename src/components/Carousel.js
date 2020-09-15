import React from 'react';

import Card from '../components/Card';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: '',
                    subTitle: 'Javascript Full Stack',
                    imgSrc: img1,
                    link: 'https://www.youtube.com/watch?v=WTOnKNjiPWU',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Mern Stack',
                    subTitle: 'React',
                    imgSrc: img2,
                    link: 'https://www.youtube.com/watch?v=gzdQDxzW2Tw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Html/css/Javascript',
                    subTitle: 'Full Javascript',
                    imgSrc: img3,
                    link: 'https://www.youtube.com/watch?v=lG45bWUxBSU&t=3869s',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;