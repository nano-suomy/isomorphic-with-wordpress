import App         from 'next/app';
import * as React  from 'react';

class CustomApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <>
            <Component {...pageProps} />
            <style jsx global>{`                
                #__next {
                    height: 100%;
                }
                html, body {
                    background-color: #333333;
                    font-family: system-ui;
                    color: khaki;
                }
            `}</style>
        </>;
    }
}

export default CustomApp;
