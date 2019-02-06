import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {

        const Element = this.props.element || 'input';

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input">
                {error}
                <Element
                    {...this.props.input}
                    warn={warning}
                    id={this.props.input.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    ref={input => (this.input = input)}
                />
                
                    {this.props.children}
            </div>
        );
    }
}