import React from 'react';

export type TheFridgeTextInputProps = {
  title?: string;
  containerStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  titleContainerStyle?: React.CSSProperties;
  inputContainerStyle?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  textPlaceholder?: string;
  textInputContainerStyle?: React.CSSProperties;
  value: string;
  onChangeText: (text: string) => void;
};

export const TheFridgeTextInput: React.FC<TheFridgeTextInputProps> = ({
  title,
  titleStyle,
  containerStyle,
  titleContainerStyle,
  inputContainerStyle,
  type,
  textPlaceholder,
  textInputContainerStyle,
  value,
  onChangeText
}) => {
  return (
    <div
      style={Object.assign({}, containerStyle, {})}
    >
      <div
        style={Object.assign({}, containerStyle, {})}
      >
        <div
          style={Object.assign({
            borderWidth: 1,
            borderColor: '#9B9B9B',
            borderRadius: 5,
            minHeight: 48,
            justifyContent: 'center',

          },
            inputContainerStyle,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            })}
        >
          {title && (
            <div
              style={Object.assign({}, titleContainerStyle, { marginBottom: 4 })}
            >
              <p style={titleStyle}>{title}</p>
            </div>
          )}
          <div >
            <text>
              {/* custom text input */}
              <input
                type={type}
                style={textInputContainerStyle}
                placeholder={textPlaceholder}
                name='textInput'
                value={value}
                onChange={(e) => onChangeText(e.target.value)}
              />
            </text>
          </div>
        </div>
      </div>
    </div>
  )
}

