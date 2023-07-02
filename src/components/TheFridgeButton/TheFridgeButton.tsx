import React from 'react';


export interface TheFridgeButtonProps {
    buttonTitle?: string;
    buttonTitleStyle?: React.CSSProperties;
    buttonContainerStyle?: React.CSSProperties;
    buttonInnerContainerStyle?: React.CSSProperties;
    buttonIconContainerStyle?: React.CSSProperties;
    buttonHeaderTitle?: string;
    buttonHeaderTitleStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    icon?: React.JSX.Element;
    onItemClick: () => void;

}


export const TheFridgeButton: React.FC<TheFridgeButtonProps> = ({
    buttonTitle,
    buttonTitleStyle,
    buttonContainerStyle,
    buttonInnerContainerStyle,
    buttonIconContainerStyle,
    buttonHeaderTitle,
    buttonHeaderTitleStyle,
    containerStyle,
    icon,
    onItemClick,
}) => {
    return (
        <div style={Object.assign({}, containerStyle, {})}>
            <text style={Object.assign({}, buttonHeaderTitleStyle, {})}>
                {buttonHeaderTitle}
            </text>
            <div style={Object.assign({}, buttonContainerStyle, {})} onClick={() => onItemClick()}>
                <div
                    style={Object.assign({},
                        buttonInnerContainerStyle,
                        {
                            display: 'flex',
                            flexDirection: 'row'
                        })}>
                    <div style={{ marginRight: 17 }}>
                        <text style={Object.assign({}, buttonTitleStyle, {})}>
                            {buttonTitle}
                        </text>
                    </div>
                    <div
                        style={Object.assign({},
                            buttonIconContainerStyle,
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            })}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};



