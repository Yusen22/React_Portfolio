import './style.css'
import skills from '../../skills'
import Container from '../Container'
import './style.css'

function Skills() {
    return (
        <section id="skills-section">
            <h2 className='text-center' id='skills-title'>Skills</h2>
            <Container id="skills-container">
                {
                    skills.map(skill => {
                        console.log(skill[0])
                        return (
                            <p className='skill'>{skill[0]}</p>
                        )
                    })
                }
            </Container>
        </section>
    )
}

export default Skills