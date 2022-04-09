import React from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class Footer extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 180.00,
      minWidth: 200.00,
      width:1400,
      highlightColor: 0xffffe9,
  midtoneColor: 0xffbce7,
  lowlightColor: 0xbc8fff,
  baseColor: 0xf6e6ff,
      blurFactor: 0.7,
      speed: 6,
      zoom:0.2
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
    <div ref={this.vantaRef} style= {stylingObject.FooterContainer}>
     
                        <p>Thanks for stopping by, feel free to drop me a line</p>
                    
    </div>
    )

  }
}

var stylingObject = {
    FooterContainer: {
      padding:'40px',
      fontSize:'24px',
      fontFamily:'Runalto',
      fontWeight:'400' 
    },
   
  }
  

export default Footer