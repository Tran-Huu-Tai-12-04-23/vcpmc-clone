import { DatePicker as DatePickerAntd, DatePickerProps, Typography } from 'antd';
import styled from 'styled-components';
import { CalenderIcon } from '../../assets/icon';

const DatePickerCustom = styled(DatePickerAntd)<DatePickerCustomProps>`
    width: '100%';
    border-radius: '8px';
    background: transparent;
    color: white;
    border: none;
    background: #2b2b3f;
    .anticon-close-circle {
        display: none;
    }
    .ant-picker-input {
        width: ${(props) => (props.width ? +props.width + 'px' : '100%')};
        height: ${(props) => (props.height ? props.height + 'px' : '100%')};
        input {
            color: white;
        }
        span {
            color: white;
        }
    }
`;

type DatePickerCustomProps = DatePickerProps & {
    width?: number;
    height?: number;
    label?: string;
    isError?: boolean;
    isPassword?: boolean;
    readOnly?: boolean;
    isEdit?: boolean;
    name?: string;
};

function DatePicker(props: DatePickerCustomProps) {
    return (
        <div className={`relative w-full `}>
            {props.label && (
                <Typography.Title
                    level={5}
                    style={{
                        margin: 0,
                        fontSize: 'var(--text-size-primary)',
                        color: '#94949b',
                        marginBottom: '4px',
                        fontWeight: '600',
                    }}
                >
                    {props.label}
                </Typography.Title>
            )}
            <DatePickerCustom
                onChange={props.onChange}
                suffixIcon={<CalenderIcon color={'#ff7506'} />}
                placeholder=""
                {...props}
            />
            {(props.readOnly || props.isEdit) && <div className="absolute left-0 right-0 top-0 bottom-0 "></div>}
        </div>
    );
}

export default DatePicker;
