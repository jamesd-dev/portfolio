import './KeySkills.scss';

function KeySkills() {
    return (
        <div id="key-skills-container">
            <div id="key-skill-block-container">
                <div className="key-skill-block">
                    <i className="fas fa-bug key-skill-icon"/>
                    <h3 className="key-skill-title">Debugging</h3>
                    <article className="key-skill-description">
                        I have spent a vast amount of time trawling through labyrinths of dreadful code in large company projects looking for the root of a bug. I've gotten rather good at it.
                    </article>
                </div>
                <div className="key-skill-block">
                    <i className="fas fa-seedling key-skill-icon"/>
                    <h3 className="key-skill-title">Clean Code</h3>
                    <article className="key-skill-description">
                        If you learn one thing digging through years of bad code, it's the value of clean, readable code. I place an emphasis on writing readable code that is easy to swap out and update later.
                    </article>
                </div>
                <div className="key-skill-block">
                    <i className="fas fa-comments key-skill-icon"/>
                    <h3 className="key-skill-title">Communication</h3>
                    <article className="key-skill-description">
                        It's easy to think that as a developer you work in isolation. Luckily I had that beaten out of me by two QA testers early on in my career.
                    </article>
                </div>
            </div>
        </div>
    )
}

export default KeySkills;