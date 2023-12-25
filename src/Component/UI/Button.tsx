import styled, { css } from 'styled-components';
import { Button as BtnAnt, ButtonProps } from 'antd';

const getSizeStyles = (size: CustomButtonProps['sizeType']) => {
    switch (size) {
        case 'small':
            return css`
                min-width: 75px;
                font-size: 12px;
                border-radius: 4px;
            `;
        case 'medium':
            return css`
                min-width: 112px;
                height: 33px;
                font-size: 14px;
            `;
        case 'hug':
            return css`
                min-width: 168px;
                height: 48px;
                font-size: 16px;
            `;
        case 'ex-hug':
            return css`
                min-width: 208px;
                height: 56px;
                font-size: 18px;
            `;
        default:
            return css`
                min-width: 75px;
                height: 28px;
                font-size: 12px;
                border-radius: 4px;
            `;
    }
};

const getStyleTypeBtn = (type: CustomButtonProps['typebtn']) => {
    switch (type) {
        case 'primary':
            return css`
                --text-color: white;
                --text-color-hover: white;
                --primary-color: #ff7506;
                --primary-hover-color: #ff7506;
            `;
        case 'outline':
            return css`
                background-color: transparent;
                color: #ff7506;
                border: 1px solid #ff7506 !important;
                --border-color: #ff7506;
                --border-hover-color: #ff7506;
                &: hover {
                    background-color: transparent !important;
                }
            `;
        case 'disable':
            return css`
                border-width: 0px;
                --primary-color: #878890;
                --text-color: white;
                --text-color-hover: white;
                --border-color: #ff7506;
                --border-hover-color: #ff7506;
                --primary-hover-color: #878890;
                &: hover {
                    background-color: #878890 !important;
                }
            `;
        case 'default': {
            return css`
                border-width: 0px;
                --border-color: #ff7506;
                --border-hover-color: #ff7506;
                &: hover {
                    background-color: #878890 !important;
                }
            `;
        }
        default:
            return css`
                --border-color: #ff7506;
                --border-hover-color: #ff7506;
            `;
    }
};

type CustomButtonSize = 'medium' | 'small' | 'ex-hug' | 'hug';
type CustomButtonType = 'primary' | 'default' | 'outline' | 'disable';
interface CustomButtonProps extends ButtonProps {
    sizeType?: CustomButtonSize;
    typebtn?: CustomButtonType;
}

const CustomButton = styled(BtnAnt)<CustomButtonProps>`
    ${(props) => getSizeStyles(props.sizeType || 'small')};
    ${(props) => getStyleTypeBtn(props.typebtn || 'default')};
`;

function Button(props: CustomButtonProps) {
    return (
        <CustomButton
            icon={props.icon}
            type="primary"
            onClick={props.onClick}
            typebtn={props.typebtn}
            sizeType={props.sizeType}
        >
            {props.children}
        </CustomButton>
    );
}

export default Button;
