import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
}


export function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    }

}


type AccordionTitlePropsType = {
    title: string,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>-{props.title}-</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}