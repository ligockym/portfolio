import React from 'react';
import './AddProject.scss';
import {PortfolioTag} from "../Portfolio/Portfolio";

type MyProps = {
    handleClose: CallableFunction
};

type MyState = {
    headline: string,
    date: string,
    tag: string,
    text: string,
    message: ''
};

class AddProject extends React.Component<MyProps> {
    state: MyState = {
        headline: '',
        date: '',
        tag: '',
        text: '',
        message: '',
    }

    async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let message = "";

        try {
            const res = await fetch("/api.php", {
                method: "POST",
                body: JSON.stringify({
                    headline: this.state.headline,
                    date: this.state.date,
                    tag: this.state.tag,
                    text: this.state.text,
                }),
            });
            const resJson = await res.json();
            if (res.status === 200) {
                message = "User created successfully";
            } else {
                message = "Some error occurred";
            }


        } catch (err) {
            message = "Some error occurred";
        }

        this.setState({
            headline: '',
            date: '',
            tag: '',
            message: message
        });
    };


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
                        <label>Tag</label>
                        <select name="text"
                                value={this.state.tag}
                                onChange={(e) => this.setState({tag: e.target.value})}
                                required>
                            {Object.keys(PortfolioTag).map((item) => (
                                <option value={item} key={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="add-project__control">
                        <label>Text</label>
                        <textarea name="text"
                                  required
                                  value={this.state.text}
                                  onChange={(e) => this.setState({text: e.target.value})}
                        />
                    </div>

                    <div className="add-project__control">
                        <button type="submit" className="button">Send</button>
                    </div>

                    {this.state.message &&
                        <p className="add-project__message">{this.state.message}</p>
                    }
                </div>
            </form>
        );
    }

}

export default AddProject;
