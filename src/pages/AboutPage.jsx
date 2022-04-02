import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>this is a react app to leave feedback</p>
            <p>version 16</p>
            <p>
            <Link to='/'>back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage