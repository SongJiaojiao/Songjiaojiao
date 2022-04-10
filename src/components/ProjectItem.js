import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
// import gradientbg from "../img/gradientbg.png"
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'

class ProjectItem extends Component{
    render(){
        const { title, description } = this.props
        return (
            <Container >
                <div style={stylingObject.cardContainer}>
                    <div style={stylingObject.cardHeader}>
                        <p>{title}</p>
                    </div>
                    <div style = {stylingObject.cardBody} >
                    </div>
                    <div style={stylingObject.cardFooter}>
                        <p>{description}</p>
                    </div>

                    
                </div>

                

            </Container>
        )
    }
}

var stylingObject = {    
    cardContainer: {
      backgroundColor:'white',
      height:'360px',
      maxWidth:'560px',
      borderRadius:'8px',
      border: '1px solid black',
      position: 'relative',
      top: '0px',
      transition: 'top ease 0.5s',
      '&:hover': {
        backgroundColor:'black'
      },
      marginBottom:'32px',
    },
   
    cardHeader:{
        padding:'12px',
        height:'60px',
        FontFace:'Runalto',
        borderBottom:'1px solid black',
        fontSize:'28px',
        fontFamily:'Runalto',
        // color:'white',
        // backgroundColor:'black',
        fontWeight:'600',
        
    },
    cardBody:{
        padding:'24px',
        backgroundImage: 'url(' + require('../img/gradientbg.png') + ') ',
        backgroundSize:'100%',
        width:'100%',
        height:'230px',
    },
    cardFooter:{
        padding:'12px',

    }
  }

export default ProjectItem