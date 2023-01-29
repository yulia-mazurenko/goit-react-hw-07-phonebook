import { Backdrop, Text } from './Error.styled';

export const Error = () => {
  return (
    <Backdrop>
      <Text>
        Something went wrong :(
        <br />
        Try again
      </Text>
    </Backdrop>
  );
};
