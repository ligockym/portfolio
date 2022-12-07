import React from 'react';
import './Skills.scss';
import Tabs, {TabItem} from "../Tabs/Tabs";

function Skills() {
    const items: TabItem[] = [
        {
            slug: 'php',
            headline: 'PHP',
            text: `<p>I work with PHP for at least 4 years. I used many frameworks but mostly <strong>Laravel</strong>, <strong>Codeigniter</strong> and a little bit of <strong>Symphony</strong>, <strong>CakePHP</strong>. To be honest the last years I prefer to use WordPress. </p>`
        },
        {
            slug: 'html',
            headline: 'HTML',
            text: `<p>I would really like to get feedback whether the HTML code I write is correct from the semantic view point. </p>`
        },
        {
            slug: 'css',
            headline: 'CSS',
            text: `<p>I remember the times, when you have to use prefixes for border radius and float instead of flex. A long time ago...</p><p>I use SCSS with BEM. I really like the combination of BEM and utility classes from Boostrap. I worked 90% on websites with design from scratch so the Boostrap was not needed (sometimes only the grid). </p>`
        },
        {
            slug: 'js',
            headline: 'JS',
            text: `<p>I used a lot of jQuery for small websites. Then I experimented with JS frameworks such as Angular, Vue and Svelte. I really like them but due to problems with SEO indexing I use them only when needed. </p>`
        },
        {
            slug: 'git',
            headline: 'Git',
            text: `<p>...Add -> Commit -> Push -> Problem -> Pull -> Merge -> Commit -> Push...</p><p>I know how to work with branches, pull requests and I have set up delivery from brach. But interactive rebase? Rather not...</p>`
        },
        {
            slug: 'python',
            headline: 'Python',
            text: `<p>Perfect scripting language, I know only the basics. Right now I use it for my bachelor theses that is focused on natural language processing using BERT transformers.</p>`
        },
        {
            slug: 'c',
            headline: 'C',
            text: `<p>Very scary language, almost all projects for school were written in it. It helped my to build the knowledge how everything works under the curtain.</p>`
        },
        {
            slug: 'wordpress',
            headline: 'Wordpress',
            text: `<p>WordPress is a good servant but a bad master. I have seen many websites that were full of plugins, very slow and very hard to edit.</p><p>I use Gutenberg blocks and meta boxes created by ACF plugin. I have some experience with WooCommerce e-shops.</p>`
        },
        {
            slug: 'soft',
            headline: 'Soft skills',
            text: `<p>I like when I get a negative feedback. It means that someone took their time to help me become a better person (or developer). Thank you in advance.</p>`
        },
        {slug: 'education', headline: 'Education', text: `<p>You said at least 10 tabs. This is the last one. :)</p>`},
    ]

    return (
        <section className="skills">
            <h2 className="section-headline">Skills</h2>
            <Tabs tabs={items}/>
        </section>
    );
}

export default Skills;
