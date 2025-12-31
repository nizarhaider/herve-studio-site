import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: children.props.className + " text-3xl md:text-4xl lg:text-5xl lg:leading-tight font-extrabold text-foreground tracking-tight"
    });
};

export default SectionTitle;