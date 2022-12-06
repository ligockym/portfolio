import React, {ChangeEvent} from 'react';
import './Tabs.scss';

export type TabItem = {
    headline: string,
    text: string,
    slug: string
}

type MyProps = {
    tabs: TabItem[]
};

type MyState = {
    activeTabSlug: string
};

class Tabs extends React.Component<MyProps, MyState> {
    state: MyState = {
        activeTabSlug: this.props.tabs[0].slug,
    }

    handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        if (event.target.value) {
            this.setState({activeTabSlug: event.target.value});
        }
    }

    activeTab() {
        const tab = this.props.tabs.find((i) => i.slug == this.state.activeTabSlug);
        if (!tab) return (<div></div>);

        return (
            <article className="tabs__item">
                <h2 className="tabs__item-headline">{tab.headline}</h2>
                <div className="tabs__item-text" dangerouslySetInnerHTML={{__html: tab.text}}></div>
            </article>
        )
    }

    handleClick(slug: string) {
        this.setState({activeTabSlug: slug});
    }

    render() {
        return (
            <section className="tabs">
                <div className="container">
                    <header className="tabs__header">
                        <select className="tabs__select"
                                value={this.state.activeTabSlug}
                                onChange={(e) => this.handleChange(e)}>
                            {this.props.tabs.map((item) => (
                                <option value={item.slug} key={item.slug}>{item.headline}</option>
                            ))}
                        </select>

                        <nav className="tabs__nav">
                            {this.props.tabs.map((item) => (
                                <a className={`tab__nav-item ${item.slug === this.state.activeTabSlug ? 'tab__nav-item--active' : ''}`}
                                   href={`#${item.slug}`}
                                   key={item.slug}
                                   onClick={() => this.handleClick(item.slug)}>
                                    {item.headline}
                                </a>
                            ))}
                        </nav>
                    </header>

                    {this.activeTab()}
                </div>
            </section>
        );
    }
}

export default Tabs;