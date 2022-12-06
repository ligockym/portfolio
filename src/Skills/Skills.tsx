import React from 'react';
import './Skills.scss';
import Tabs, {TabItem} from "../Tabs/Tabs";

function Skills() {
    const items: TabItem[] = [
        {slug: 'php', headline: 'PHP', text: `<p>Text pre PHP</p><p>Odstavec</p>`},
        {slug: 'html', headline: 'HTML', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'css', headline: 'CSS', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'js', headline: 'JS', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'git', headline: 'Git', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'python', headline: 'Python', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'c', headline: 'C', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'wordpress', headline: 'Wordpress', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'soft', headline: 'Soft skills', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
        {slug: 'education', headline: 'Education', text: `<p>Text pre HTML</p><p>Odstavec</p>`},
    ]

    return (
        <section className="skills">
            <h2 className="section-headline">Skills</h2>
            <Tabs tabs={items}/>
        </section>
    );
}

export default Skills;
