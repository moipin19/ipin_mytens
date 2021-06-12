import { React, useState, useEffect } from "react"
import axios from "axios"
import { Card, Icon } from "semantic-ui-react"

const Repos = () => {
    const [dataRepo, setDataRepo] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/Abdullah/repos')
            .then(res => {
                let data = res.data;
                setDataRepo(data.map(el => {
                    console.log(data);
                    return { id: el.id, name: el.name, language: el.language, url: el.clone_url, description: el.description }
                }))
            })
    }, []);

    return (
        <div>
            <ol>
                {dataRepo &&
                    dataRepo.map((item, index) => {
                        return (
                            <>
                                <li>
                                    <a href={item.url} target="_blank">
                                        <Card.Group style={{ width: "100%", height: "160px", margin: "10px 10px" }} className="tooltip">
                                            <span class="tooltiptext">Go to Github repository</span>
                                            <Card>
                                                <Card.Content>
                                                    <Card.Header><Icon name='book' />{item.name}</Card.Header>
                                                    <Card.Meta content={item.language ? item.language : '-'} />
                                                    <Card.Description content={item.description ? item.description : 'no description available'} />
                                                </Card.Content>
                                            </Card>
                                        </Card.Group>
                                    </a>
                                </li>
                            </>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Repos