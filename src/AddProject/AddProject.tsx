import React from 'react';
import './AddProject.scss';
import {PortfolioTags} from "../Portfolio/Portfolio";

type MyProps = {
    handleClose: CallableFunction
};

type MyState = {
    headline: string,
    date: string,
    tags: string[],
    text: string,
    message: string,
    success: boolean
};

class AddProject extends React.Component<MyProps> {
    state: MyState = {
        headline: '',
        date: '',
        tags: [],
        text: '',
        message: '',
        success: false
    }

    async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let message = "";
        let success = false;

        try {
            const res = await fetch("https://portfolio.marianligocky.sk/api.php", {
                method: "POST",
                body: JSON.stringify({
                    headline: this.state.headline,
                    date: this.state.date,
                    tags: this.state.tags.join(','), // send tags in form of string comma separated
                    text: this.state.text,
                }),
            });
            const resJson = await res.json();
            if (res.status === 200) {
                message = "Portfolio item was created successfully";
                success = true;
            } else {
                message = "Some error occurred";
            }


        } catch (err) {
            message = "Some error occurred";
        }

        this.setState({
            headline: '',
            date: '',
            tags: [],
            text: '',
            message: message,
            success: success
        });
    };

    onTagCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            // add value to tags
            this.setState((prevState: MyState, props) => ({
                tags: prevState.tags.concat(event.target.value)
            }));
        } else {
            // remove value from tags
            this.setState((prevState: MyState, props) => ({
                // remove by filtering
                tags: prevState.tags.filter((i) => i !== event.target.value)
            }));
        }
    }

    render() {
        return (
            <form className="add-project" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="add-project__content">
                    <header className="add-project__header">
                        <a href={void (0)} onClick={() => this.props.handleClose()}>Close</a>
                    </header>

                    <div className="add-project__control">
                        <label>Headline</label>
                        <input name="headline"
                               type="text"
                               value={this.state.headline}
                               onChange={(e) => this.setState({headline: e.target.value})}
                               required/>
                    </div>

                    <div className="add-project__control">
                        <label>Date</label>
                        <input name="date"
                               type="text"
                               value={this.state.date}
                               onChange={(e) => this.setState({date: e.target.value})}
                               required/>
                    </div>

                    <div className="add-project__control">
                        <label>Tags</label>

                        {PortfolioTags.map((item) => (
                            <div className="add-project__control-radio" key={item}>
                                <input type="checkbox"
                                       name="tags"
                                       value={item}
                                       id={item}
                                       checked={this.state.tags.includes(item)}
                                       required={this.state.tags.length == 0} /* At least one required */
                                       onChange={(event) => this.onTagCheckboxChange(event)}/>
                                <label htmlFor={`${item}`}>{item}</label>
                            </div>
                        ))}
                    </div>

                    <div className="add-project__control">
                        <label>Text</label>
                        <textarea name="text"
                                  required
                                  value={this.state.text}
                                  onChange={(e) => this.setState({text: e.target.value})}/>
                    </div>

                    <div className="add-project__control">
                        <button type="submit" className="button">Send</button>
                    </div>

                    {this.state.message &&
                        <p className={`add-project__message ${this.state.success ? 'add-project__message--success' : 'add-project__message--failure'}`}>{this.state.message}</p>
                    }
                </div>
            </form>
        );
    }
}

export default AddProject;
