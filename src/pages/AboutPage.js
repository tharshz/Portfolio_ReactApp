import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
        <img className="col-lg-12 my_img" src="https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png" alt="note" />
    
        <p>
            I'm Tharshz. </p>
         <p>I am a beginner programmer.</p>
                <p>I know nothing about computer programming and I want to become the world's best competitive programmer.</p>
        <p>I want to be the best programmer in the world.i want to be technically a strong programmer,the best coder and an expert.</p>
            </Content>
            
        </div>
    );

}

export default AboutPage;