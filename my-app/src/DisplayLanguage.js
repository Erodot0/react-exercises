import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component{
    Lang = {
        en: {
            text: "Hello, world!"
        },
        it: {
            text: "Ciao, Mondo!"
        }
    }
    render(){
        return(
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <h2>
                            {this.Lang[language].text}
                        </h2>
                    )
                }

                }
            </LanguageContext.Consumer>
        )
    }
}