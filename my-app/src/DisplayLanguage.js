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
                        <div>
                            {this.Lang[language].text}
                        </div>
                    )
                }

                }
            </LanguageContext.Consumer>
        )
    }
}