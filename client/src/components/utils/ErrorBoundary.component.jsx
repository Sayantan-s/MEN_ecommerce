import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        };
    }

    static getDerivedStateFromError(err) {
        console.log('getDerivedStateFromError' + err);
        return {
            ...this.state,
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        return <div>Hi</div>;
    }
}
