import { useEffect, useState } from "react";

const SEARCH = 'https://api.github.com/search/repositories'

export function Projects() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${SEARCH}?q=CristyanHenrich`)
            .then((response) => response.json())
            .then((data) => setItems((data && data.items) || []));
        }, []);

    return(
        <div className="projects">
            <h2>Projetos Recentes</h2>

            {items.map((item) => (
                <div className="project">
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </a>
                </div>
            ))}

        </div>
    );
}