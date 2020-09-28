import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;   
}

Form.Base = function FormBase({ children, ...restPorps }) {
  return <Base {...restPorps}>{children}</Base>;
};

Form.Error = function FormError({ children, ...restPorps }) {
  return <Error {...restPorps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restPorps }) {
  return <Title {...restPorps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restPorps }) {
  return <Text {...restPorps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restPorps }) {
  return <TextSmall {...restPorps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restPorps }) {
  return <Link {...restPorps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restPorps }) {
  return <Input {...restPorps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restPorps }) {
  return <Submit {...restPorps}>{children}</Submit>;
};