import { useState } from "react";
import { Input } from "../../../../Shared/UI/Input/ui";
import Status from "../../../../Shared/UI/Status/status";
import Tag from "../../../../Shared/UI/Tag/ui";
import './style.scss'

interface Props {
    titleColumn: string;
    // description: string;
}

const TaskCard: React.FC<Props> = (props) => {

    const [title] = useState<string>("Make a nice background")
    const [description] = useState<string>("Hope this simple kanban helps in running the UX processes without leaving figma")
    const [status] = useState(props.titleColumn);
    return (
        <div className='card'>
            <h5 className="title">{title}</h5>
            <p>{description}</p>
            <Status statusTask = {status}/>
            <div className='tags'>
                <Tag nameOfTag="Kossom Elsisi"/>
                <Tag nameOfTag="Kossom Elsisi"/>
            </div>
        </div>
    )
}

export default TaskCard;