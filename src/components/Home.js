import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Tab, Nav, Row, Col, Container } from 'react-bootstrap'
import ProjectItem from './ProjectItem'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'





class Home extends Component {
    divideQuestions = (authedUser, questions) => {
        const questionIds = Object.keys(questions)
        const answered = questionIds.filter(function (id) {
            const question = questions[id]
            const allVotes = [...question.optionOne.votes, ...question.optionTwo.votes]
            return allVotes.includes(authedUser);
        })
        return answered

    }

    separateQuestions = (authedUser, questions) => {
        const questionValues = Object.values(questions);
        const answeredQuestions = questionValues.filter(question =>
            question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
        ).sort((a, b) => b.timestamp - a.timestamp);

        const unansweredQuestions = questionValues.filter(question =>
            answeredQuestions.includes(question) === false
        ).sort((a, b) => b.timestamp - a.timestamp);
        return { answeredQuestions, unansweredQuestions }
    }

    render() {
        const { authedUser, questions, projectSummary } = this.props
        const projects = Object.values(projectSummary)
        return (
            <Container style={stylingObject.containerView}>

                <Row style={stylingObject.intro}>
                    <Col xs={4} > </Col>
                    <Col xs={8}>
                        <p class='Runalto'>Hi, I am Jiaojiao</p>
                        <p class='Runalto' >I am a product designer at goldman sachs new york execution roostify trading </p>
                    </Col>

                </Row>

                <Row style={stylingObject.projectList}>
                    {projects.map((project) =>
                        <Col xs={12} md={6}><ProjectItem title={project.title} description={project.description} /></Col>
                    )}
                </Row>


                <Footer style={stylingObject.footer} />
            </Container>

        )
    }
}

function mapStateToProps({ authedUser, questions, projectSummary }) {
    const questionIds = Object.keys(questions)
    return {
        authedUser,
        questions,
        questionIds,
        projectSummary
    }
}

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();

        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};


var stylingObject = {
    containerView: {
        padding: '0px',
        width: '100vw',
        minWidth: '100vw'
    },

    intro: {
        paddingTop: "20vh",
        margin: '0 120px 60px 120px',
        paddingLeft: '0',
        paddingRight: '0'

    },
    projectList: {
        paddingLeft: '10vw',
        paddingRight: '10vw',
        marginBottom: '60px'
    },

    footer: {
        // marginLeft:'-300px'

    }
}



export default withRouter(connect(mapStateToProps)(Home))